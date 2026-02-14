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
    slidesFile: z.string().optional(),
    sessionUrl: z.string().optional(),
    upcoming: z.boolean().default(false),
    featured: z.boolean().default(false),
    type: z.string().optional(),
    lengthMinutes: z.number().optional(),
    coPresenters: z.array(z.string()).optional(),
    topics: z.array(z.string()).optional(),
    learningObjectives: z.array(z.string()).optional(),
    commentary: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    feedback: z.array(z.string()).optional(),
    featuredFeedback: z.string().optional(),
    evaluationScores: z.object({
      knowledge: z.number().optional(),
      presentation: z.number().optional(),
      relevance: z.number().optional(),
      materials: z.number().optional(),
      overall: z.number().optional(),
    }).optional(),
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

// Upcoming events collection (conferences, booths, speaking engagements)
const upcoming = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    type: z.enum(['speech', 'booth', 'panel', 'workshop', 'attending']),
    description: z.string().optional(),
    company: z.enum(['personal', 'gemifi', 'brooklynfi']).default('personal'),
    url: z.string().optional(),
    boothNumber: z.string().optional(),
  }),
});

export const collections = {
  blog,
  speaking,
  media,
  brooklynfi,
  gemifi,
  gallery,
  upcoming,
};

