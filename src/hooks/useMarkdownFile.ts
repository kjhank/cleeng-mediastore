import {
  useCallback, useEffect, useState,
} from 'react';

export const useMarkdownFile = (file: string) => {
  const [markdownText, setMarkdownText] = useState('');

  const parseFile = useCallback(async () => {
    try {
      const fileResponse = await fetch(file);

      if (fileResponse.ok) {
        const fileText = await fileResponse.text();

        setMarkdownText(fileText);
      }

      return await Promise.reject(new Error('Couldn\'t read file'));
    } catch (error) {
      console.error(error);
    }

    return true;
  }, [file]);

  useEffect(() => {
    parseFile();
  }, [file, parseFile]);

  return markdownText;
};
