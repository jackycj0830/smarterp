'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting updates across
 * README.md, spec.md, and todolist.md files to ensure they are synchronized.
 *
 * - suggestUpdates - A function that takes the content of the three files as input and returns update suggestions.
 * - SuggestUpdatesInput - The input type for the suggestUpdates function.
 * - SuggestUpdatesOutput - The output type for the suggestUpdates function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestUpdatesInputSchema = z.object({
  readmeContent: z.string().describe('The content of the README.md file.'),
  specContent: z.string().describe('The content of the spec.md file.'),
  todolistContent: z.string().describe('The content of the todolist.md file.'),
});
export type SuggestUpdatesInput = z.infer<typeof SuggestUpdatesInputSchema>;

const SuggestUpdatesOutputSchema = z.object({
  suggestions: z
    .string()
    .describe(
      'A list of suggested updates to ensure the README.md, spec.md, and todolist.md files are synchronized.'
    ),
});
export type SuggestUpdatesOutput = z.infer<typeof SuggestUpdatesOutputSchema>;

export async function suggestUpdates(input: SuggestUpdatesInput): Promise<SuggestUpdatesOutput> {
  return suggestUpdatesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestUpdatesPrompt',
  input: {schema: SuggestUpdatesInputSchema},
  output: {schema: SuggestUpdatesOutputSchema},
  prompt: `You are an AI assistant that analyzes the content of three files (README.md, spec.md, and todolist.md) and suggests updates to ensure they are synchronized and consistent.

  Analyze the content of the following files:

  README.md:
  {{readmeContent}}

  spec.md:
  {{specContent}}

  todolist.md:
  {{todolistContent}}

  Provide a list of suggested updates to ensure the files are synchronized and up-to-date. Be specific and provide reasoning for each suggestion.
  `,
});

const suggestUpdatesFlow = ai.defineFlow(
  {
    name: 'suggestUpdatesFlow',
    inputSchema: SuggestUpdatesInputSchema,
    outputSchema: SuggestUpdatesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
