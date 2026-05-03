import { Request, Response } from "express";
import * as bookService from "../services/bookService";

export const getAll = async (_req: Request, res: Response) => {
  const books = await bookService.getAll();
  return res.json(books);
};

