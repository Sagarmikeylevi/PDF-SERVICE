import express from "express";
import bodyParser from "body-parser";
import fileRoutes from "./routes/fileRoutes";
import { errorHandler } from "./utils/errorHandler";
import { logger } from "./utils/logger";

const app = express();

app.use(express.json());
app.use(logger);
app.use("/api/files", fileRoutes);
app.use(errorHandler);

export default app;
