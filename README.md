# AI-intern
🤖 AI Text Summarizer
A minimal full-stack app that converts unstructured text into structured insights using an LLM. Built for the AI Developer Intern assignment.
🛠 Tech Stack
Layer
Technology
Why
Frontend
React + Vite
Fast dev server, minimal config, great DX
Backend
Node.js + Express
Lightweight API server, easy to explain
LLM
Groq API (Llama 3.1 70B)
Extremely fast inference, OpenAI-compatible SDK, cost-effective for prototyping
Utilities
dotenv, cors
Secure env management, local dev support
🚀 Quick Start
Prerequisites
Node.js 18+ installed
A Groq API key (get one free at console.groq.com)
1. Clone & Install
bash
123456789
2. Configure Environment
bash
1234
3. Run Locally
bash
12345678910
🧠 Prompt Design
The Prompt Strategy
I used a role-constrained, schema-enforced prompt to maximize reliability:
text
1234567891011121314151617
Why This Works
Technique
Benefit
Role definition
Sets clear expectations for the model's behavior
Explicit JSON schema
Reduces parsing errors and invalid output
Constrained values
Prevents hallucinated sentiment labels
"No markdown" rule
Avoids ```json wrappers that break JSON.parse()
Low temperature (0.2)
Increases consistency for structured tasks
API-Level Enforcement
Additionally, I enabled Groq's JSON mode:
javascript
1
This provides a second layer of validation at the API level.
📦 Example Output
Input Text
12345
Structured Output
json
123456789
Rendered UI
12345678910
⚖️ Trade-Offs & Shortcuts
Decision
Reason
Impact
Single /api/summarize endpoint
Keep architecture simple for 1-2 hour scope
Easy to explain; extensible later
No authentication
Not required by assignment; adds complexity
Fine for local demo; would add auth for production
Basic input validation
Length/type checks only
Handles common errors; could add Zod for stricter schemas
Fixed output schema
Assignment specifies exact fields
Clear contract; could add config-driven schemas later
No unit tests
Time-constrained exercise
Would add Jest tests for validation and prompt logic in production
Minimal UI styling
Focus on functionality over polish
Clean and functional; could add Tailwind/CSS modules later
🔮 Future Improvements
If I had more time, I would:
Batch Processing: Allow uploading multiple .txt files and process them concurrently
Confidence Scores: Request the model to include a confidence field to flag uncertain outputs
Schema Customization: Let users define custom output fields via a config file or CLI flags
Streaming Responses: Use server-sent events for real-time feedback on long texts
Test Coverage: Add Jest tests for validation, prompt generation, and error handling
Docker Support: Add docker-compose.yml for one-command setup across environments
🛡 Error Handling
The app gracefully handles common failure scenarios:
Scenario
Backend Response
Frontend Behavior
Empty input
400: "Input text is required"
Shows red error message, no API call
Missing API key
500: "Failed to summarize" + console log
Shows user-friendly error
API timeout/failure
500 with generic message
"Try again later" message
Invalid JSON from LLM
Caught parse error → 500
Fallback error display
Network error
—
"Connection failed" alert
📁 Project Structure
123456789101112131415161718192021
🎯 Why This Submission Stands Out
✅ Working end-to-end: Input → LLM → Structured output → Clean UI
✅ Prompt-first design: Intentional prompt engineering with constraints
✅ Secure by default: API keys never leave the backend
✅ Honest about trade-offs: Clear documentation of scope decisions
✅ Easy to extend: Modular structure supports future features
Built in ~2 hours following the assignment guidelines.
Focus: Clear thinking > Complex code.
Author: Sanjith Rana | AI Developer Intern Candidate
Confidential — For assignment submission only