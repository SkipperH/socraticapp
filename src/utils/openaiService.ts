
import OpenAI from 'openai';

// Allow users to store their API key in localStorage
const getApiKey = (): string | null => {
  return localStorage.getItem('openai_api_key');
};

const createOpenAIClient = (apiKey: string) => {
  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true // Note: In production, API calls should be made server-side
  });
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

export async function getPhilosopherResponse(
  philosopherName: string, 
  userMessage: string, 
  conversationHistory: string[]
): Promise<string> {
  try {
    const apiKey = getApiKey();
    
    // Check if API key is available
    if (!apiKey) {
      return "Voer alstublieft een OpenAI API-sleutel in om met de filosoof te praten.";
    }
    
    const philosopher = philosopherPrompts[philosopherName];
    
    if (!philosopher) {
      return "Er is een fout opgetreden bij het laden van deze filosoof.";
    }
    
    const openai = createOpenAIClient(apiKey);
    
    // Build conversation history in the format OpenAI expects
    const messages = [
      { role: "system" as const, content: philosopher.systemPrompt },
      ...conversationHistory.map((message, index) => {
        return index % 2 === 0 
          ? { role: "assistant" as const, content: message }
          : { role: "user" as const, content: message };
      }),
      { role: "user" as const, content: userMessage }
    ];
    
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });
    
    return response.choices[0]?.message?.content || "Mijn excuses, ik kon geen antwoord formuleren.";
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
  localStorage.setItem('openai_api_key', key);
}
