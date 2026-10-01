import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().default('Michel Deosaran'),
    image: z.string().optional(),
    courseCode: z.string().optional(),
    courseName: z.string().optional(),
  }),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    detailedDescription: z.string(),
    technologies: z.array(z.string()),
    githubUrl: z.string().optional(),
    deployedUrl: z.string().optional(),
    images: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    date: z.string(),
  }),
});

const coursesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    code: z.string(),
    institution: z.string(),
    semester: z.string(),
    description: z.string(),
    grade: z.string().optional(),
    writeups: z.array(z.object({
      title: z.string(),
      url: z.string(),
      description: z.string(),
    })).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
  'projects': projectsCollection,
  'courses': coursesCollection,
};
