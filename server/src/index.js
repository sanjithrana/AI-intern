import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { summarizeText } from "./llm.js";
import { validateInput } from "./validate.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/summarize", async (req, res) => {
  const { text } = req.body;

  const validation = validateInput(text);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.message });
  }

  try {
    const result = await summarizeText(text);
    return res.json(result);
  } catch (error) {
    console.error("Server Error:", error.message);
    return res.status(500).json({ 
      error: "Failed to summarize text. Please check your API key or try again." 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});