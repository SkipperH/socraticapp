
export interface PromptOptimization {
  original: string;
  optimized: string;
  wasOptimized: boolean;
}

export function optimizePrompt(prompt: string): PromptOptimization {
  const trimmedPrompt = prompt.trim();
  
  // If the prompt is already short and focused, don't change it
  if (trimmedPrompt.length < 50 || isAlreadyOptimal(trimmedPrompt)) {
    return {
      original: prompt,
      optimized: prompt,
      wasOptimized: false
    };
  }
  
  // Apply optimization rules
  let optimized = trimmedPrompt;
  
  // Remove unnecessary introductory phrases
  const introPatterns = [
    /^(kan je|kunt u|zou je|zou u|wil je|wilt u|mag ik vragen)/i,
    /^(ik vroeg me af|ik ben benieuwd|ik wil graag weten)/i,
    /^(vertel me|leg uit|help me begrijpen)/i
  ];
  
  introPatterns.forEach(pattern => {
    optimized = optimized.replace(pattern, '').trim();
  });
  
  // Convert questions to more direct form
  optimized = optimized.replace(/^hoe denk je over/i, 'Wat is je visie op');
  optimized = optimized.replace(/^wat vind je van/i, 'Wat is je standpunt over');
  optimized = optimized.replace(/^kun je uitleggen/i, 'Leg uit');
  
  // Remove redundant phrases
  optimized = optimized.replace(/\s+(eigenlijk|precies|exact|nou ja|dus ja)\s+/gi, ' ');
  optimized = optimized.replace(/\s+en zo\s*$/i, '');
  
  // Ensure it starts with capital letter and ends with question mark if it's a question
  if (optimized.length > 0) {
    optimized = optimized.charAt(0).toUpperCase() + optimized.slice(1);
    if (isQuestion(optimized) && !optimized.endsWith('?')) {
      optimized += '?';
    }
  }
  
  // Only return optimization if it's significantly different and shorter
  const isSignificantlyDifferent = optimized !== trimmedPrompt && optimized.length < trimmedPrompt.length * 0.8;
  
  return {
    original: prompt,
    optimized: isSignificantlyDifferent ? optimized : prompt,
    wasOptimized: isSignificantlyDifferent
  };
}

function isAlreadyOptimal(prompt: string): boolean {
  // Check if prompt is already well-structured
  const sentences = prompt.split(/[.!?]+/).filter(s => s.trim().length > 0);
  return sentences.length <= 2 && prompt.length < 100;
}

function isQuestion(text: string): boolean {
  const questionWords = ['wat', 'wie', 'waar', 'wanneer', 'waarom', 'hoe', 'welke', 'is', 'zijn', 'kan', 'moet', 'zou'];
  const firstWord = text.toLowerCase().split(' ')[0];
  return questionWords.includes(firstWord) || text.includes('?');
}
