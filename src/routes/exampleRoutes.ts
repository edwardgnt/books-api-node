import { Router } from "express";
import * as controller from "../controllers/exampleController";

const router = Router();

router.get("/", controller.getMessage);

export default router;
