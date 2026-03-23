// ✅ client/src/App.jsx - Minimal working version
import React, { useState } from "react";
import ResultCard from "./components/ResultCard";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to fetch");
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", fontFamily: "sans-serif", padding: "20px" }}>
      <h1>AI Text Summarizer</h1>
      
      <form onSubmit={handleSubmit}>
        <textarea
          rows="6"
          style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
          placeholder="Paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button 
          type="submit" 
          disabled={loading} 
          style={{ 
            marginTop: "10px", 
            padding: "10px 20px",
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Analyzing..." : "Summarize"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "15px" }}>⚠️ {error}</p>}
      {result && <ResultCard data={result} />}
    </div>
  );
}

export default App;