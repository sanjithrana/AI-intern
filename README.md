# 🤖 AI Text Summarizer

A minimal full-stack application that converts unstructured text into structured insights using a Large Language Model (LLM).

Built as part of an **AI Developer Intern assignment**, focusing on clarity, prompt design, and clean architecture.

---

## 🛠 Tech Stack

| Layer     | Technology           | Why                                    |
| --------- | -------------------- | -------------------------------------- |
| Frontend  | React + Vite         | Fast dev server, minimal configuration |
| Backend   | Node.js + Express    | Lightweight and easy to explain        |
| LLM       | Groq API (Llama 3.1) | Fast inference, cost-effective         |
| Utilities | dotenv, cors         | Environment management and API access  |

---

## 🚀 Quick Start

### 🔹 Prerequisites

* Node.js (v18 or above)
* Groq API Key → https://console.groq.com

---

### 🔹 1. Install Dependencies

```bash
cd server
npm install

cd ../client
npm install
```

---

### 🔹 2. Configure Environment

Create a `.env` file inside `/server`:

```env
GROQ_API_KEY=your_api_key_here
```

---

### 🔹 3. Run the App

#### Start Backend

```bash
cd server
npm start
```

#### Start Frontend

```bash
cd client
npm run dev
```

---

### 🔹 4. Open in Browser

```
http://localhost:5173
```

---

## 🧠 Prompt Design

### 🎯 Strategy

A **role-constrained + schema-enforced prompt** is used to ensure consistent structured output.

```text
You are an expert AI assistant.

Return ONLY valid JSON:
{
  "summary": "one sentence",
  "keyPoints": ["...", "...", "..."],
  "sentiment": "positive | neutral | negative"
}
```

---

### ✅ Why This Works

| Technique        | Benefit                 |
| ---------------- | ----------------------- |
| Role definition  | Guides model behavior   |
| JSON schema      | Prevents parsing errors |
| Fixed structure  | Ensures consistency     |
| No markdown rule | Avoids invalid JSON     |
| Low temperature  | Reduces randomness      |

---

## 📦 Example Output

### Input

```
AI is transforming industries by automating tasks and improving efficiency.
```

### Output

```json
{
  "summary": "AI is transforming industries by automating tasks and improving efficiency.",
  "keyPoints": [
    "Automates repetitive tasks",
    "Improves efficiency",
    "Enhances productivity"
  ],
  "sentiment": "positive"
}
```

---

## ⚖️ Trade-offs & Decisions

| Decision            | Reason                 | Impact               |
| ------------------- | ---------------------- | -------------------- |
| Single API endpoint | Simplicity             | Easy to extend later |
| No authentication   | Out of scope           | Suitable for demo    |
| Basic validation    | Fast implementation    | Covers common cases  |
| Fixed schema        | Assignment requirement | Predictable output   |
| Minimal UI          | Focus on functionality | Clean and usable     |

---

## 🔮 Future Improvements

* 📄 File upload (TXT/PDF support)
* 🔁 Regenerate responses
* 📊 Confidence scores
* ⚡ Streaming responses
* 🧪 Unit testing (Jest)
* 🐳 Docker setup

---

## 🛡 Error Handling

| Scenario      | Behavior                       |
| ------------- | ------------------------------ |
| Empty input   | Shows validation error         |
| API failure   | Displays user-friendly message |
| Invalid JSON  | Handled in backend             |
| Network error | Shows connection error         |

---

## 📁 Project Structure

```
ai-summarizer/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── ResultCard.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── index.html
│
├── server/
│   ├── src/
│   │   ├── index.js
│   │   ├── llm.js
│   │   ├── prompt.js
│   │   ├── validate.js
│   ├── .env
│
└── README.md
```

---

## 🎯 Why This Project Stands Out

* ✅ End-to-end working (UI → API → LLM → Output)
* ✅ Strong prompt engineering focus
* ✅ Clean and modular architecture
* ✅ Secure API handling
* ✅ Easy to extend and scale

---

## 👨‍💻 Author

**Sanjith Rana**
AI Developer Intern Candidate

---

## 📌 Note

This project was built as part of an assignment.
Focus was on **clear thinking, reliability, and structure** rather than complexity.
