import { Router } from "express";
import upload from "../middleware/upload";
import { uploadFile, getFileResultById } from "../controllers/fileController";

const router = Router();

router.post("/upload", upload.single("file"), uploadFile);
router.get("/:id", getFileResultById);

export default router;
