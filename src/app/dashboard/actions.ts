
'use server';

import { saveFileContent, README_PATH, SPEC_PATH, TODOLIST_PATH } from './file-utils';
import { README_FILENAME, SPEC_FILENAME, TODOLIST_FILENAME } from './file-constants';
import { suggestUpdates } from '@/ai/flows/suggest-updates.ts';
import type { SuggestUpdatesInput, SuggestUpdatesOutput } from '@/ai/flows/suggest-updates.ts';

interface SaveFileResult {
  success: boolean;
  message: string;
}

export async function saveFileAction(fileName: string, content: string): Promise<SaveFileResult> {
  let filePath: string;
  switch (fileName) {
    case README_FILENAME:
      filePath = README_PATH;
      break;
    case SPEC_FILENAME:
      filePath = SPEC_PATH;
      break;
    case TODOLIST_FILENAME:
      filePath = TODOLIST_PATH;
      break;
    default:
      return { success: false, message: `Invalid file name: ${fileName}` };
  }

  try {
    await saveFileContent(filePath, content);
    return { success: true, message: `${fileName} saved successfully.` };
  } catch (error: any) {
    return { success: false, message: error.message || `Failed to save ${fileName}.` };
  }
}

interface AISuggestionsResult {
  success: boolean;
  suggestions?: string;
  message?: string;
}

export async function getAiSuggestionsAction(input: SuggestUpdatesInput): Promise<AISuggestionsResult> {
  try {
    const result: SuggestUpdatesOutput = await suggestUpdates(input);
    return { success: true, suggestions: result.suggestions };
  } catch (error: any) {
    console.error('Error getting AI suggestions:', error);
    return { success: false, message: error.message || 'Failed to get AI suggestions.' };
  }
}
