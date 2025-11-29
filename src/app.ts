import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exampleRoutes from "./routes/exampleRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/example", exampleRoutes);

export default app;
