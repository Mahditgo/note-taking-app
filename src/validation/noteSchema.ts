import {z} from "zod";

export const createNoteSchema = z.object({
  title: z.string().min(2, 'title is required'),
  content: z.string().min(5, 'content is required'),
});

export const updateNoteSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.string().min(3).optional(),
});

export type createNoteSchema = z.infer<typeof createNoteSchema>;
export type updateNoteSchema = z.infer<typeof updateNoteSchema>;