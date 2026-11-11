import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const hero = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/hero",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    titleAriaLabel: z.string(),
    subtitle: z.string(),
    location: z.string().trim().default("???"),
    ctaLabel: z.string(),
    // optional if you ever want multiple hero variants and sort them
    order: z.number().optional(),
  }),
});

const program = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/program",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    order: z.number(),
    id: z.string(),
    label: z.string(),
    dateLabel: z.string().optional(),
    date: z.string().optional(),
    summary: z.string().optional(),
    schedule: z
      .array(
        z.object({
          time: z.string(),
          title: z.string(),
          location: z.string().optional(),
          description: z.string().optional(),
        })
      )
      .optional(),
    extras: z
      .array(
        z.object({
          kind: z.enum(["info", "thanks", "transport"]).optional(),
          title: z.string().optional(),
          body: z.string(),
        })
      )
      .optional(),
  }),
});

const memories = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/memories",
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    tag: z.string().optional(),
    year: z.string(),
    people: z.string().optional(),
    img: z.string(),
    tint: z.string(),
    blurb: z.string(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = {
  hero,
  program,
  memories,
};
