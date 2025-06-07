
'use client';

import type * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Save } from 'lucide-react';

interface FileEditorCardProps {
  fileName: string;
  fileIcon: React.ReactNode;
  content: string;
  onContentChange: (newContent: string) => void;
  onSave: () => Promise<void>;
  isSaving: boolean;
}

export function FileEditorCard({
  fileName,
  fileIcon,
  content,
  onContentChange,
  onSave,
  isSaving,
}: FileEditorCardProps) {
  const [currentContent, setCurrentContent] = useState(content);

  useEffect(() => {
    setCurrentContent(content);
  }, [content]);

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentContent(event.target.value);
    onContentChange(event.target.value);
  };

  return (
    <Card className="flex flex-col flex-1 shadow-lg rounded-xl overflow-hidden min-w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between p-4 bg-card border-b">
        <div className="flex items-center gap-2">
          {fileIcon}
          <CardTitle className="text-lg font-headline">{fileName}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-1 flex flex-col">
        <Textarea
          value={currentContent}
          onChange={handleTextChange}
          placeholder={`Content for ${fileName}...`}
          className="w-full h-full flex-1 resize-none font-code text-sm p-4 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[400px] lg:min-h-[calc(100vh-250px)]"
          aria-label={`Content for ${fileName}`}
        />
      </CardContent>
      <CardFooter className="p-4 border-t bg-card">
        <Button onClick={onSave} disabled={isSaving} className="w-full font-headline bg-primary hover:bg-primary/90 text-primary-foreground">
          <Save className="mr-2 h-4 w-4" />
          {isSaving ? `Saving ${fileName}...` : `Save ${fileName}`}
        </Button>
      </CardFooter>
    </Card>
  );
}
