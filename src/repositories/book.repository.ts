import db from "../db/knex";
import { CreateBookDto, UpdateBookDto } from "../dtos/book.dto";

export const getAll = () => {
  return db("books").select("*");
};

export const getById = (id: number) => {
  return db("books").where({ id }).first();
};

export const create = (data: CreateBookDto) => {
  return db("books").insert(data);
};

export const update = (id: number, data: UpdateBookDto) => {
  return db("books").where({ id }).update(data);
};

export const remove = (id: number) => {
  return db("books").where({ id }).del();
};
