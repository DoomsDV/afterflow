import {z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        createdOn: z.date(),
    })
});

export const collection = {
    'blog': blogCollection,
}