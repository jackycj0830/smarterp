
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FileEditorCard } from '@/components/FileEditorCard';
import { saveFileAction, getAiSuggestionsAction } from './actions';
import { useToast } from '@/hooks/use-toast';
import { FileText, ClipboardList, ListTodo, Sparkles, Loader2 } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { ScrollArea } from '@/components/ui/scroll-area';
import { README_FILENAME, SPEC_FILENAME, TODOLIST_FILENAME } from './file-constants';

interface DashboardClientContentProps {
  initialReadme: string;
  initialSpec: string;
  initialTodolist: string;
}

export default function DashboardClientContent({
  initialReadme,
  initialSpec,
  initialTodolist,
}: DashboardClientContentProps) {
  const [readmeContent, setReadmeContent] = useState(initialReadme);
  const [specContent, setSpecContent] = useState(initialSpec);
  const [todolistContent, setTodolistContent] = useState(initialTodolist);

  const [isSavingReadme, setIsSavingReadme] = useState(false);
  const [isSavingSpec, setIsSavingSpec] = useState(false);
  const [isSavingTodolist, setIsSavingTodolist] = useState(false);
  const [isGettingSuggestions, setIsGettingSuggestions] = useState(false);

  const [aiSuggestions, setAiSuggestions] = useState<string | null>(null);
  const [isSuggestionDialogOpen, setIsSuggestionDialogOpen] = useState(false);

  const { toast } = useToast();

  useEffect(() => setReadmeContent(initialReadme), [initialReadme]);
  useEffect(() => setSpecContent(initialSpec), [initialSpec]);
  useEffect(() => setTodolistContent(initialTodolist), [initialTodolist]);

  const handleSave = async (fileName: string, content: string, setIsSaving: React.Dispatch<React.SetStateAction<boolean>>) => {
    setIsSaving(true);
    const result = await saveFileAction(fileName, content);
    if (result.success) {
      toast({ title: 'Success', description: result.message, variant: 'default' });
    } else {
      toast({ title: 'Error', description: result.message, variant: 'destructive' });
    }
    setIsSaving(false);
  };

  const handleGetAiSuggestions = async () => {
    setIsGettingSuggestions(true);
    setAiSuggestions(null);
    const result = await getAiSuggestionsAction({
      readmeContent,
      specContent,
      todolistContent,
    });
    if (result.success && result.suggestions) {
      setAiSuggestions(result.suggestions);
      setIsSuggestionDialogOpen(true);
    } else {
      toast({ title: 'Error', description: result.message || 'Could not fetch AI suggestions.', variant: 'destructive' });
    }
    setIsGettingSuggestions(false);
  };

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-6 lg:p-8">
      <header className="mb-6 md:mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-headline text-primary">
          RefactorFlow Dashboard
        </h1>
        <Button onClick={handleGetAiSuggestions} disabled={isGettingSuggestions} className="font-headline bg-accent hover:bg-accent/90 text-accent-foreground">
          {isGettingSuggestions ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          {isGettingSuggestions ? 'Analyzing...' : 'Get AI Suggestions'}
        </Button>
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <FileEditorCard
          fileName={README_FILENAME}
          fileIcon={<FileText className="h-6 w-6 text-primary" />}
          content={readmeContent}
          onContentChange={setReadmeContent}
          onSave={() => handleSave(README_FILENAME, readmeContent, setIsSavingReadme)}
          isSaving={isSavingReadme}
        />
        <FileEditorCard
          fileName={SPEC_FILENAME}
          fileIcon={<ClipboardList className="h-6 w-6 text-primary" />}
          content={specContent}
          onContentChange={setSpecContent}
          onSave={() => handleSave(SPEC_FILENAME, specContent, setIsSavingSpec)}
          isSaving={isSavingSpec}
        />
        <FileEditorCard
          fileName={TODOLIST_FILENAME}
          fileIcon={<ListTodo className="h-6 w-6 text-primary" />}
          content={todolistContent}
          onContentChange={setTodolistContent}
          onSave={() => handleSave(TODOLIST_FILENAME, todolistContent, setIsSavingTodolist)}
          isSaving={isSavingTodolist}
        />
      </main>

      <AlertDialog open={isSuggestionDialogOpen} onOpenChange={setIsSuggestionDialogOpen}>
        <AlertDialogContent className="max-w-2xl w-full">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              AI Update Suggestions
            </AlertDialogTitle>
            <AlertDialogDescription>
              Here are some AI-powered suggestions to help synchronize your documents:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <ScrollArea className="max-h-[60vh] p-1 rounded-md border">
            <pre className="text-sm p-4 whitespace-pre-wrap font-code bg-muted/50 rounded-md">
              {aiSuggestions || "No suggestions available."}
            </pre>
          </ScrollArea>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsSuggestionDialogOpen(false)} className="font-headline">Got it!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>Powered by Next.js, ShadCN UI, and Genkit AI. Font: Space Grotesk, Inter, Source Code Pro.</p>
      </footer>
    </div>
  );
}
