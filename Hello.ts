import "dotenv/config";
import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

const apiKey = process.env.GEMINI_API_KEY;
if(!apiKey) throw new Error ("Gemini API key not set")

const ai = new GoogleGenAI({apiKey})

const res = await ai.models.generateContent({
  model: "gemini-3.8-flash", // check AI Studio for the current name
  contents: "Explain what a token in AI",
});

// const Answer = z.string();
console.log(res.text);
console.log(res.usageMetadata)