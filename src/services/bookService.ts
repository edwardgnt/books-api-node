import * as bookRepo from "../repositories/book.repository";
import { BookResponseDto, CreateBookDto, UpdateBookDto } from "../dtos/book.dto";

export const getAll = async (): Promise<BookResponseDto[]> => {
  const rows = await bookRepo.getAll();
  return rows;
};

export const getById = async (id: number): Promise<BookResponseDto | null> => {
  const row = await bookRepo.getById(id);
  return row || null;
};

export const create = async (data: CreateBookDto) => {
  const result = await bookRepo.create(data);
  return { id: result[0], ...data };
};

export const update = async (id: number, data: UpdateBookDto) => {
  const existing = await bookRepo.getById(id);
  if (!existing) return null;

  await bookRepo.update(id, data);
  return { ...existing, ...data };
};

export const remove = async (id: number) => {
  const existing = await bookRepo.getById(id);
  if (!existing) return false;

  await bookRepo.remove(id);
  return true;
};
