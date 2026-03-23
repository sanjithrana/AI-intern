
import Groq from "groq-sdk";
import { getSummaryPrompt } from "./prompt.js";
import dotenv from "dotenv";
dotenv.config();
const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const summarizeText = async (text) => {
  try {
    const completion = await client.chat.completions.create({
      messages: [{ role: "user", content: getSummaryPrompt(text) }],
      model: "llama-3.1-8b-instant",
      response_format: { type: "json_object" },
      temperature: 0,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) throw new Error("Empty response from LLM");

    const parsed = JSON.parse(content);
    
    if (!parsed.summary || !parsed.keyPoints || !parsed.sentiment) {
      throw new Error("Invalid JSON structure from LLM");
    }

    return parsed;
  } catch (error) {
    console.error("LLM Error:", error.message);
    throw error;
  }
};