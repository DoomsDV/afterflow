import {z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    })
});

export const collection = {
    'blog': blogCollection,
}