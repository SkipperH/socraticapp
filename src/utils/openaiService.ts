
import OpenAI from 'openai';

// You should replace this with your actual API key
// In a production environment, this should be stored securely
// For demo purposes, we're using a placeholder
const API_KEY = "YOUR_OPENAI_API_KEY";

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true // Note: In production, API calls should be made server-side
});

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
  "Plato": {
    name: "Plato",
    systemPrompt: "You are Plato, the ancient Greek philosopher and student of Socrates. You communicate primarily through dialogue and questions, encouraging the user to examine their own beliefs. You speak about your Theory of Forms, the ideal state, and the nature of reality versus appearances. Respond in Dutch, occasionally using philosophical Greek terms. Your tone is inquisitive and wise."
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
    const philosopher = philosopherPrompts[philosopherName];
    
    if (!philosopher) {
      return "Er is een fout opgetreden bij het laden van deze filosoof.";
    }
    
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
    return "Er is een fout opgetreden bij het communiceren met deze filosoof.";
  }
}
