
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { setApiKey, availableModels, setPreferredModel } from '../utils/openaiService';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose }) => {
  const [apiKey, setApiKeyValue] = useState('');
  const [selectedModel, setSelectedModel] = useState(localStorage.getItem('openai_model') || 'gpt-3.5-turbo');

  // Load saved model preference when component mounts
  useEffect(() => {
    const savedModel = localStorage.getItem('openai_model');
    if (savedModel) {
      setSelectedModel(savedModel);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      setApiKey(apiKey.trim());
    }
    
    // Save model preference
    setPreferredModel(selectedModel);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-[#1A1F2C] text-white">
        <DialogHeader>
          <DialogTitle className="text-xl">OpenAI API-instellingen</DialogTitle>
          <DialogDescription className="text-gray-300">
            Om met de filosofen te praten heb je een OpenAI API-sleutel nodig. Deze wordt lokaal opgeslagen in je browser.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api-key">API-sleutel</Label>
            <Input
              id="api-key"
              type="password"
              placeholder="sk-..."
              value={apiKey}
              onChange={(e) => setApiKeyValue(e.target.value)}
              className="bg-[#121731] text-white border-gray-600"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Select value={selectedModel} onValueChange={setSelectedModel}>
              <SelectTrigger id="model" className="bg-[#121731] text-white border-gray-600">
                <SelectValue placeholder="Selecteer model" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1F2C] text-white border-gray-600">
                {availableModels.map(model => (
                  <SelectItem key={model.id} value={model.id}>
                    {model.name} - {model.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-400 mt-1">
              GPT-3.5 Turbo is goedkoper maar minder krachtig dan GPT-4o.
            </p>
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-[#121731] hover:bg-[#1B1F3B]"
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
