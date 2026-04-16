import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    github: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
  }),
});

export const collections = {
  projects: projectsCollection,
};
