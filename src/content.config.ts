import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    coverImg: image(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).min(1).max(4),
  })
});

export const collections = { blog };
