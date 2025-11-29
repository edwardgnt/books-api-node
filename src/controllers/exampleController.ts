import { Request, Response } from "express";
import * as service from "../services/exampleServices";

export const getMessage = async (_req: Request, res: Response) => {
  const data = await service.getMessage();
  res.json(data);
};
