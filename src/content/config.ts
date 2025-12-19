import { defineCollection, z } from 'astro:content';

// Blog posts collection
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Speaking events collection
const speaking = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().optional(),
    videoUrl: z.string().optional(),
    slidesUrl: z.string().optional(),
    upcoming: z.boolean().default(false),
  }),
});

// Media appearances collection (articles quoted in, podcast guest spots)
const media = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    publication: z.string(),
    date: z.coerce.date(),
    url: z.string(),
    type: z.enum(['article', 'podcast', 'video', 'interview']),
    description: z.string().optional(),
    logo: z.string().optional(),
  }),
});

// Brooklyn Fi timeline collection
const brooklynfi = defineCollection({
  type: 'data',
  schema: z.object({
    year: z.string(),
    title: z.string(),
    role: z.string().optional(),
    description: z.string(),
    highlights: z.array(z.string()).optional(),
  }),
});

// Gemifi updates collection
const gemifi = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    version: z.string().optional(),
    date: z.coerce.date(),
    description: z.string(),
    type: z.enum(['release', 'update', 'milestone', 'story']).default('update'),
  }),
});

// Photo gallery collection
const gallery = defineCollection({
  type: 'data',
  schema: z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
    category: z.enum(['dog', 'mexico', 'sailing', 'travel', 'other']),
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  speaking,
  media,
  brooklynfi,
  gemifi,
  gallery,
};

