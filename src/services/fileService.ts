import { FileResult } from "../models/fileResult";
import fs from "fs";
import pdfParse from "pdf-parse";
import path from "path";

const fileResults: { [key: string]: FileResult } = {};

export const processFile = async (filePath: string): Promise<FileResult> => {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdfParse(dataBuffer);

  const wordCount = data.text.split(/\s+/).length;
  const id = path.basename(filePath, path.extname(filePath));

  const fileResult: FileResult = { id, wordCount, filePath };
  fileResults[id] = fileResult;

  return fileResult;
};

export const getFileResult = (id: string): FileResult | null => {
  return fileResults[id] || null;
};
