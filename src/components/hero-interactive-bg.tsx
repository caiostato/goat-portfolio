"use client";

import { useEffect, useRef } from "react";

interface NodePoint {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  energy: number;
}

interface DataPulse {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

/**
 * Interactive Kinetic Grid & Constellation Field.
 *
 * - Positioned at `z-0` inside the Hero section so it is never hidden behind
 *   `bg-background` on `<html>`/`<body>`.
 * - Runs continuously (even if OS "Animate controls and elements" is disabled)
 *   so the interactive cursor physics and autonomous data pulses always work.
 * - Zero radial gradients: draws crisp geometric grid lines, interactive
 *   spring-displaced intersection nodes, cursor constellation links, and
 *   orthogonal Signal Orange data pulses.
 */
export function HeroInteractiveBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 44;
    const INTERACTION_RADIUS = 190;
    const SPRING = 0.09;
    const DAMPING = 0.8;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let offsetX = 0;
    let offsetY = 0;
    let nodes: NodePoint[] = [];
    let pulses: DataPulse[] = [];
    let rafId = 0;
    let frame = 0;
    let isVisible = true;
    let isRunning = false;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionQuery.matches;

    function startLoop() {
      if (isRunning || prefersReducedMotion || !isVisible || document.hidden) {
        return;
      }
      isRunning = true;
      rafId = requestAnimationFrame(render);
    }

    function stopLoop() {
      isRunning = false;
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    }

    const pointer = {
      x: -9999,
      y: -9999,
      active: false,
    };

    function buildGrid() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const rect = parent
        ? parent.getBoundingClientRect()
        : canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = Math.max(rect.width, window.innerWidth);
      height = Math.max(rect.height, 640);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / SPACING) + 1;
      rows = Math.ceil(height / SPACING) + 1;
      offsetX = (width - (cols - 1) * SPACING) / 2;
      offsetY = (height - (rows - 1) * SPACING) / 2;

      nodes = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const ox = offsetX + c * SPACING;
          const oy = offsetY + r * SPACING;
          nodes.push({
            ox,
            oy,
            x: ox,
            y: oy,
            vx: 0,
            vy: 0,
            energy: 0,
          });
        }
      }

      // Seed initial pulses so the canvas is alive on frame 1
      pulses = [];
      for (let i = 0; i < 6; i++) {
        spawnPulse();
      }
    }

    function spawnPulse() {
      if (nodes.length === 0 || pulses.length >= 10) return;
      const startNode = nodes[Math.floor(Math.random() * nodes.length)];
      const horizontal = Math.random() > 0.45;
      const dir = Math.random() > 0.5 ? 1 : -1;
      const speed = 2.6 + Math.random() * 1.4;

      pulses.push({
        x: startNode.ox,
        y: startNode.oy,
        vx: horizontal ? speed * dir : 0,
        vy: horizontal ? 0 : speed * dir,
        life: 0,
        maxLife: 100 + Math.random() * 90,
      });
    }

    function render() {
      if (!ctx) return;

      if (prefersReducedMotion) {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.045)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const x = Math.round(offsetX + c * SPACING) + 0.5;
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let r = 0; r < rows; r++) {
          const y = Math.round(offsetY + r * SPACING) + 0.5;
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          ctx.beginPath();
          ctx.arc(n.ox, n.oy, 1.35, 0, Math.PI * 2);
          ctx.fill();
        }
        return;
      }

      frame++;
      ctx.clearRect(0, 0, width, height);

      if (Math.random() < 0.08) {
        spawnPulse();
      }

      // 1. Draw subtle structural grid hairlines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.045)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let c = 0; c < cols; c++) {
        const x = Math.round(offsetX + c * SPACING) + 0.5;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let r = 0; r < rows; r++) {
        const y = Math.round(offsetY + r * SPACING) + 0.5;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Update & draw orthogonal Signal Orange data pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (
          p.life >= p.maxLife ||
          p.x < -40 ||
          p.x > width + 40 ||
          p.y < -40 ||
          p.y > height + 40
        ) {
          pulses.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife;
        const alpha = Math.sin(progress * Math.PI) * 0.85;
        const tailX = p.x - p.vx * 18;
        const tailY = p.y - p.vy * 18;

        ctx.strokeStyle = `rgba(255, 110, 48, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 1.75;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        // Bright leading head dot
        ctx.fillStyle = `rgba(255, 140, 80, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Update node physics & collect energized nodes
      const energized: NodePoint[] = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Subtle ambient wave so nodes breathe even before mouse move
        const wave =
          Math.sin(n.ox * 0.012 + n.oy * 0.012 + frame * 0.025) * 0.5 + 0.5;

        if (pointer.active) {
          const dx = pointer.x - n.ox;
          const dy = pointer.y - n.oy;
          const dist = Math.hypot(dx, dy);

          if (dist < INTERACTION_RADIUS && dist > 0.01) {
            const factor = 1 - dist / INTERACTION_RADIUS;
            const push = Math.sin(factor * Math.PI) * 14;
            const targetX = n.ox - (dx / dist) * push;
            const targetY = n.oy - (dy / dist) * push;

            n.vx += (targetX - n.x) * SPRING;
            n.vy += (targetY - n.y) * SPRING;
            n.energy = Math.max(n.energy, factor);
          } else {
            n.vx += (n.ox - n.x) * SPRING;
            n.vy += (n.oy - n.y) * SPRING;
          }
        } else {
          n.vx += (n.ox - n.x) * SPRING;
          n.vy += (n.oy - n.y) * SPRING;
        }

        n.vx *= DAMPING;
        n.vy *= DAMPING;
        n.x += n.vx;
        n.y += n.vy;
        n.energy *= 0.93;

        // Energize node when a pulse crosses it
        for (let pIdx = 0; pIdx < pulses.length; pIdx++) {
          const p = pulses[pIdx];
          if (Math.abs(p.x - n.ox) < 12 && Math.abs(p.y - n.oy) < 12) {
            n.energy = Math.max(n.energy, 0.85);
          }
        }

        if (n.energy > 0.08) {
          energized.push(n);
        }

        const e = n.energy;
        const radius = 1.35 + e * 2.1;

        if (e > 0.05) {
          ctx.fillStyle = `rgba(255, 110, 48, ${(0.3 + e * 0.7).toFixed(3)})`;
        } else {
          const baseAlpha = 0.14 + wave * 0.12;
          ctx.fillStyle = `rgba(255, 255, 255, ${baseAlpha.toFixed(3)})`;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Draw geometric constellation lines between energized nodes & cursor
      if (energized.length > 1) {
        ctx.lineWidth = 1;
        const maxDistSq = (SPACING * 1.65) ** 2;

        for (let i = 0; i < energized.length; i++) {
          const a = energized[i];
          for (let j = i + 1; j < energized.length; j++) {
            const b = energized[j];
            const dSq =
              (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y);
            if (dSq < maxDistSq) {
              const alpha = Math.min(a.energy, b.energy) * 0.42;
              if (alpha > 0.03) {
                ctx.strokeStyle = `rgba(255, 110, 48, ${alpha.toFixed(3)})`;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      if (!isVisible || prefersReducedMotion || document.hidden) {
        isRunning = false;
        rafId = 0;
        return;
      }

      rafId = requestAnimationFrame(render);
    }

    function onResize() {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const rect = parent
        ? parent.getBoundingClientRect()
        : canvas.getBoundingClientRect();
      const nextWidth = Math.max(rect.width, window.innerWidth);
      const nextHeight = Math.max(rect.height, 640);

      // Ignore mobile browser URL-bar height jitter unless width changed or height grew past canvas
      if (Math.abs(nextWidth - width) < 2 && nextHeight <= height) {
        return;
      }
      buildGrid();
      if (prefersReducedMotion) {
        render();
      }
    }

    function onPointerMove(e: PointerEvent) {
      if (!canvas || prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active =
        pointer.x >= -40 &&
        pointer.x <= rect.width + 40 &&
        pointer.y >= -40 &&
        pointer.y <= rect.height + 40;
    }

    function onPointerLeave() {
      pointer.active = false;
    }

    function onMotionChange(e: MediaQueryListEvent) {
      prefersReducedMotion = e.matches;
      stopLoop();
      if (prefersReducedMotion) {
        render();
      } else if (isVisible) {
        startLoop();
      }
    }

    function onVisibilityChange() {
      if (document.hidden) {
        stopLoop();
      } else if (isVisible) {
        startLoop();
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    buildGrid();
    if (prefersReducedMotion) {
      render();
    } else {
      startLoop();
    }

    motionQuery.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerLeave, { passive: true });
    window.addEventListener("pointercancel", onPointerLeave, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);

    return () => {
      stopLoop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionQuery.removeEventListener("change", onMotionChange);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerLeave);
      window.removeEventListener("pointercancel", onPointerLeave);
      document.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
