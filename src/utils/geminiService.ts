
import { GoogleGenerativeAI } from '@google/generative-ai';

// Allow users to store their API key in localStorage
const getApiKey = (): string | null => {
  return localStorage.getItem('gemini_api_key');
};

// Allow users to store their preferred model in localStorage
const getPreferredModel = (): string => {
  return localStorage.getItem('gemini_model') || 'gemini-2.0-flash-exp';
};

// Save preferred model to localStorage
export const setPreferredModel = (model: string): void => {
  localStorage.setItem('gemini_model', model);
};

const createGeminiClient = (apiKey: string) => {
  return new GoogleGenerativeAI(apiKey);
};

export interface PhilosopherPrompt {
  name: string;
  systemPrompt: string;
}

// Define prompts for each philosopher to guide their responses
const philosopherPrompts: Record<string, PhilosopherPrompt> = {
  "Descartes": {
    name: "René Descartes",
    systemPrompt: "You are René Descartes, the 17th-century French philosopher and mathematician. You are known for your work 'Cogito, ergo sum' (I think, therefore I am) and for your contributions to rationalism. Respond in a thoughtful, analytical way that reflects your methodical doubt and your quest for certainty. You occasionally use Dutch phrases since the user is Dutch-speaking, but mainly respond in Dutch. Always maintain the philosophical depth and rigor you're known for."
  },
  "Marcus Aurelius": {
    name: "Marcus Aurelius",
    systemPrompt: "You are Marcus Aurelius, the Roman Emperor and Stoic philosopher. You emphasize virtue, duty, and living in accordance with nature. You are the author of 'Meditations' and known for your practical wisdom on ethics and moral principles. Respond in Dutch, occasionally using Latin phrases. Your tone is dignified, contemplative, and focused on inner tranquility and acceptance of what cannot be changed. You emphasize personal responsibility and finding peace through rational thought."
  },
  "Nietzsche": {
    name: "Friedrich Nietzsche",
    systemPrompt: "You are Friedrich Nietzsche, the 19th-century German philosopher. You are bold, provocative, and critical of conventional morality and religion. You speak about the will to power, the Übermensch, and the death of God. Your responses are passionate, sometimes cryptic, and challenge the user to question established values. Respond in Dutch, occasionally using German philosophical terms. Your writing style is aphoristic and intense."
  }
};

// Available models that can be selected by the user
export const availableModels = [
  { id: 'gemini-2.0-flash-exp', name: 'Gemini 2.0 Flash', description: 'Fast and efficient model' },
  { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', description: 'More powerful, higher quality' },
  { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash', description: 'Balanced performance' }
];

export async function getPhilosopherResponse(
  philosopherName: string, 
  userMessage: string, 
  conversationHistory: string[]
): Promise<string> {
  try {
    const apiKey = getApiKey();
    
    // Check if API key is available
    if (!apiKey) {
      return "Voer alstublieft een Google AI API-sleutel in om met de filosoof te praten.";
    }
    
    const philosopher = philosopherPrompts[philosopherName];
    
    if (!philosopher) {
      return "Er is een fout opgetreden bij het laden van deze filosoof.";
    }
    
    const genAI = createGeminiClient(apiKey);
    const model = genAI.getGenerativeModel({ model: getPreferredModel() });
    
    // Build conversation history for Gemini
    let conversationText = `${philosopher.systemPrompt}\n\nConversatie geschiedenis:\n`;
    
    // Add conversation history
    conversationHistory.forEach((message, index) => {
      if (index % 2 === 0) {
        conversationText += `Filosoof: ${message}\n`;
      } else {
        conversationText += `Gebruiker: ${message}\n`;
      }
    });
    
    // Add current user message
    conversationText += `Gebruiker: ${userMessage}\n\nFilosoof:`;
    
    const result = await model.generateContent(conversationText);
    const response = await result.response;
    const text = response.text();
    
    return text || "Mijn excuses, ik kon geen antwoord formuleren.";
  } catch (error) {
    console.error("Error getting philosopher response:", error);
    return `Er is een fout opgetreden bij het communiceren met deze filosoof. Details: ${error instanceof Error ? error.message : String(error)}`;
  }
}

// Function to check if API key is set
export function isApiKeySet(): boolean {
  return !!getApiKey();
}

// Function to set API key
export function setApiKey(key: string): void {
  localStorage.setItem('gemini_api_key', key);
}
