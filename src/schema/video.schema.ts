import { z } from 'zod';

// Base schema with common fields
const videoBaseSchema = {
  code: z.string().min(2, { message: "Code must be at least 2 characters long" }),
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional().nullable(),
  embedLink: z.string().url('Invalid video URL'),
  duration: z.string().optional().nullable(),
  date: z.date().optional().nullable(),
  isFree: z.boolean(), // Removed default to match the expected type
  thumbnail: z.string().url('Invalid thumbnail URL').optional().nullable(),
  classId: z.number().int().min(0),
  videoType: z.enum(["TUTION", "NOTE"]), // Removed default to match the expected type
  noteId: z.string().uuid().optional().nullable(),
};

export const VIDEOTYPE = z.enum(["TUTION", "NOTE"])

// Schema for creating a new video
export const CreateVideoSchema = z.object({
  ...videoBaseSchema
});

// Schema for updating an existing video
export const UpdateVideoSchema = z.object({
  ...videoBaseSchema
}).partial();

// Response schema (includes auto-generated fields)
export const VideoResponseSchema = z.object({
  ...videoBaseSchema,
  id: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date()
});

// TypeScript types derived from schemas
export type ICreateVideo = z.infer<typeof CreateVideoSchema>;
export type IUpdateVideo = z.infer<typeof UpdateVideoSchema>;
export type IVideoResponse = z.infer<typeof VideoResponseSchema>;