
import { GoogleGenAI } from "@google/genai";
import { MENU_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the Virtual Sommelier and Hospitality Assistant for Lenoir Restaurant in Austin, TX. 
Lenoir is a farm-to-table restaurant focused on warm-weather cuisine, seasonal ingredients, and global wines.
Your tone is sophisticated, welcoming, knowledgeable, and slightly poetic, mirroring the restaurant's vibe.

Current Menu Context:
${MENU_DATA.map(item => `- ${item.name}: ${item.description || ''} (${item.category})`).join('\n')}

Guidelines:
1. Recommend wine pairings based on the menu above.
2. Suggest dishes for different dietary preferences if possible.
3. Be concise but descriptive.
4. If asked about reservations, mention they can be made via Resy or the "Reserve" button on our site.
5. If you don't know something about specific wine vintages not listed, speak generally about the types of wines Lenoir typically carries (grower-producers, natural wines, balanced acid).
`;

export const getSommelierResponse = async (history: { role: 'user' | 'model', text: string }[], userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I'm having a bit of trouble connecting to the cellar right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The wine cellar is currently locked. Please try asking me again in a moment.";
  }
};
