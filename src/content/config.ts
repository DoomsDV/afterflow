import {z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        createdOn: z.date(),
        image: z.string().url(),
    })
});

export const collection = {
    'blog': blogCollection,
}