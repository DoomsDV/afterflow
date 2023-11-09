import {z, defineCollection, reference } from "astro:content";

const tags = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        slug: z.string(),
    })
})

const blogCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        createdOn: z.date(),
        image: z.string().url(),
        summary: z.string(),
        tags: reference('tags'),
    })
});

export const collection = {
    'blog': blogCollection,
    'tags': tags
}