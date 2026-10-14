import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { log } from "console";

const apiKey = process.env.GEMINI_API_KEY;
if(!apiKey) throw new Error ("Gemini API key not set")

const ai = new GoogleGenAI({apiKey})

const res = await ai.models.generateContent({
  model: "gemini-3.8-flash", // Note: gemini-2.5-flash is the standard production model name
  contents: "Write a comprehensive, highly detailed history of the internet from the ARPANET era to modern web3 frameworks. Ensure you provide multiple paragraphs covering milestones, protocols, and cultural impacts.",
});

// Print the main answer
console.log(res.text);

// 1. Print the entire usage object safely
console.log(res.usageMetadata); 

// 2. Print individual token metrics using camelCase
console.log(`Prompt Tokens: ${res.usageMetadata?.promptTokenCount}`);
console.log(`Response Tokens: ${res.usageMetadata?.candidatesTokenCount}`);
console.log(`Total Tokens: ${res.usageMetadata?.totalTokenCount}`);
