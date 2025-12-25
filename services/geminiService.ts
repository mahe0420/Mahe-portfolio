
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS, EDUCATIONS, CERTIFICATIONS } from "../constants";

// Fix: Use the AIStudio interface to match existing global type definitions and avoid modifier mismatch errors.
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    aistudio: AIStudio;
  }
}

const CONTEXT = `
You are the dedicated AI Portfolio Assistant for Mahendra Reddy Avula. 
Mahendra is a Final-year B.Tech (AI) student with expertise in MERN and Cloud.

BIOGRAPHY:
- Name: ${PERSONAL_INFO.name}
- Summary: ${PERSONAL_INFO.summary}
- Location: ${PERSONAL_INFO.location}

PROJECTS:
1. PrintPeak: MERN-stack clothes printing business with design uploads, Stripe payments, and admin dashboard.
2. Autism Prediction: Python/TensorFlow system predicting ASD using MLP/CNN models from questionnaires and images.
3. Local Store Referral: ASP.NET Core MVC platform for local store referral tracking and commissions.

TECH STACK:
- Languages: SQL, Python, HTML5, Javascript, C#, Java.
- Frameworks: React.js, Node.js, Express.js, MongoDB, Tailwind, Flask, Django.
- Tools: AWS, Git, GitHub, VS Code, Postman, TensorFlow.

EDUCATION:
- B.Tech AI (QIS College): 7.9 CGPA (2022-2026)
- Intermediate (Sri Chaitanya): 8.9 CGPA (2020-2022)
- School (SSC): 10/10 CGPA (2019-2020)

CERTIFICATIONS: AWS Cloud (AICTE), AI Career Essentials (IBM), Web Full Stack (AICTE), Gen AI Tools (Google).

GUIDELINES:
- Be extremely professional and intelligent.
- If asked about projects, explain the specific tech and features mentioned.
- Provide contact details if requested.
`;

export const chatWithResume = async (message: string) => {
  try {
    // Robust API key handling
    if (typeof window !== 'undefined' && window.aistudio) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await window.aistudio.openSelectKey();
        }
    }

    // Fix: Create a new GoogleGenAI instance right before making an API call to ensure it uses the latest key.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: CONTEXT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error: any) {
    console.error("Gemini Error:", error);
    
    // Fix: If the error indicates a missing API key, prompt the user to select one again.
    if (error.message?.includes("Requested entity was not found") && window.aistudio) {
        await window.aistudio.openSelectKey();
        return "Please select your API key in the popup and try again!";
    }
    
    return "I'm having a bit of trouble answering right now. Please try again or reach out to Mahendra directly!";
  }
};
