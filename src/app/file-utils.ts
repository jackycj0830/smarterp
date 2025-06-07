
// This file runs on the server only.
import fs from 'fs/promises';
import path from 'path';
import { README_FILENAME, SPEC_FILENAME, TODOLIST_FILENAME } from './file-constants';

export const README_PATH = path.join(process.cwd(), README_FILENAME);
export const SPEC_PATH = path.join(process.cwd(), SPEC_FILENAME);
export const TODOLIST_PATH = path.join(process.cwd(), TODOLIST_FILENAME);

export async function getFileContent(filePath: string, defaultContent: string): Promise<string> {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      try {
        await fs.writeFile(filePath, defaultContent, 'utf-8');
        return defaultContent;
      } catch (writeError) {
        console.error(`Error writing initial file ${filePath}:`, writeError);
        // Fallback to default content in memory if write fails, though this is unlikely for ENOENT.
        return defaultContent;
      }
    }
    console.error(`Error reading file ${filePath}:`, error);
    // For other errors, you might want to throw or return default content
    // For simplicity, returning default content so the app can still load.
    return defaultContent; 
  }
}

export async function saveFileContent(filePath: string, content: string): Promise<void> {
  try {
    await fs.writeFile(filePath, content, 'utf-8');
  } catch (error) {
    console.error(`Error writing file ${filePath}:`, error);
    throw new Error(`Failed to save ${path.basename(filePath)}`);
  }
}
