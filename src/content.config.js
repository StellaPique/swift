import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const storiesCollection = defineCollection({
    loader: glob({ base: "./src/content/stories", pattern: "**/*.{md,mdx}" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubdate: z.string().optional(),
        seriestags: z.string().optional(),
        image: z.string().optional(),
    }),
});

export const collections = {
    stories: storiesCollection,
};