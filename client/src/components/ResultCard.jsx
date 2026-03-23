// ✅ client/src/components/ResultCard.jsx
import React from "react";

export default function ResultCard({ data }) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "20px", 
      marginTop: "20px", 
      borderRadius: "8px",
      backgroundColor: "#f9f9f9"
    }}>
      <h3 style={{ marginTop: 0 }}>📝 Summary</h3>
      <p>{data.summary}</p>
      
      <h3>🔑 Key Points</h3>
      <ul style={{ paddingLeft: "20px" }}>
        {data.keyPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <h3>😊 Sentiment</h3>
      <span style={{ 
        padding: "4px 12px", 
        borderRadius: "4px", 
        backgroundColor: data.sentiment === 'positive' ? '#d4edda' : 
                         data.sentiment === 'negative' ? '#f8d7da' : '#e2e3e5',
        color: data.sentiment === 'positive' ? '#155724' : 
               data.sentiment === 'negative' ? '#721c24' : '#383d41',
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "0.9rem"
      }}>
        {data.sentiment}
      </span>
    </div>
  );
}