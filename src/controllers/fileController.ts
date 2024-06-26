import { Request, Response } from "express";
import { processFile, getFileResult } from "../services/fileService";
import path from "path";

export const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = path.resolve(req.file.path);
    const result = await processFile(filePath);

    res.status(201).json({ id: result.id, wordCount: result.wordCount });
  } catch (error) {
    res.status(500).json({ error: "File processing failed" });
  }
};

export const getFileResultById = (req: Request, res: Response) => {
  const id = req.params.id;
  const result = getFileResult(id);

  if (!result) {
    return res.status(404).json({ error: "File result not found" });
  }

  res.status(200).json(result);
};
