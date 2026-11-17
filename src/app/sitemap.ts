import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://caiostato.dev";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "pt-BR": baseUrl,
          "en-US": `${baseUrl}/en-us`,
          "x-default": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/en-us`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "pt-BR": baseUrl,
          "en-US": `${baseUrl}/en-us`,
          "x-default": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          "pt-BR": `${baseUrl}/privacy`,
          "en-US": `${baseUrl}/en-us/privacy`,
          "x-default": `${baseUrl}/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/en-us/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          "pt-BR": `${baseUrl}/privacy`,
          "en-US": `${baseUrl}/en-us/privacy`,
          "x-default": `${baseUrl}/privacy`,
        },
      },
    },
  ];
}
