import { z } from "zod";

// Validation for creating a book
export const createBookSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  year: z.number().int().optional(),
});

// Validation for updating a book
export const updateBookSchema = z.object({
  title: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
  year: z.number().int().optional(),
});

// Output DTO from DB → API
export const bookResponseSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  author: z.string(),
  year: z.number().int().nullable().optional(),
});

// TypeScript types
export type CreateBookDto = z.infer<typeof createBookSchema>;
export type UpdateBookDto = z.infer<typeof updateBookSchema>;
export type BookResponseDto = z.infer<typeof bookResponseSchema>;
