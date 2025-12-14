import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SITE_CONFIG, SKILLS } from '../data';

// Initialize the Gemini client
// Note: In a real production app, you might want to proxy this through a backend to protect the key,
// but for a personal portfolio or demo, client-side with restrictions is often used.
// The system prompt instructs the user to use process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${SITE_CONFIG.name}'s professional portfolio website.
Your goal is to answer questions about ${SITE_CONFIG.name}'s experience, projects, and skills based STRICTLY on the provided context.

Context:
Name: ${SITE_CONFIG.name}
Role: ${SITE_CONFIG.title}
Bio: ${SITE_CONFIG.description}
Projects: ${JSON.stringify(PROJECTS.map(p => ({
  title: p.title,
  description: p.description,
  tech: p.tags,
  details: p.details,
  role: p.role
})))}
Skills: ${JSON.stringify(SKILLS)}

Guidelines:
1. Be professional, concise, and enthusiastic.
2. If asked about a specific project, provide details from the "details" section (Challenge, Solution, Result).
3. If asked about contact info, refer to the contact section or mention ${SITE_CONFIG.social.email}.
4. If asked about something not in the context, politely state that you don't have that information but can discuss the engineering projects listed.
5. Keep answers under 100 words unless asked for a detailed explanation.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I apologize, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the neural network right now. Please try again later.";
  }
};