
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setApiKey } from '../utils/openaiService';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKeyValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setApiKey(apiKey.trim());
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#1A1F2C] text-white">
        <DialogHeader>
          <DialogTitle className="text-xl">Voer je OpenAI API-sleutel in</DialogTitle>
          <DialogDescription className="text-gray-300">
            Om met de filosofen te praten heb je een OpenAI API-sleutel nodig. Deze wordt lokaal opgeslagen in je browser.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKeyValue(e.target.value)}
              className="bg-[#121731] text-white border-gray-600"
            />
          </div>
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-[#121731] hover:bg-[#1B1F3B]"
              disabled={!apiKey.trim()}
            >
              Opslaan
            </Button>
          </div>
          <div className="text-sm text-gray-400 mt-2">
            <p>Je kunt een API-sleutel krijgen via <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">OpenAI's website</a>.</p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyModal;
