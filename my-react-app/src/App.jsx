import { useState } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/interpret";

function App() {
  const [poem, setPoem] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzePoem = async () => {
    if (!poem.trim()) {
      setError("Please enter a poem before analyzing.");
      return;
    }

    setError(null);
    setResult(null);
    setLoading(true);

    try {
      await fetch(API_URL, { method: "OPTIONS", headers: { "Content-Type": "application/json" } });

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ poem }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Fetch Error:", error);
      setError("Failed to fetch interpretation. Check the backend.");
    }

    setLoading(false);
  };

  const resetForm = () => {
    setPoem("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="container">
      <h1>📜 Poem Analyzer</h1>
      <p className="subtitle">Enter your poem below to discover its theme and interpretation.</p>

      <textarea
        className="poem-input"
        rows="5"
        placeholder="Write your poem here..."
        value={poem}
        onChange={(e) => setPoem(e.target.value)}
      />
      <p className="word-count">{poem.split(/\s+/).filter(word => word !== "").length} words</p>

      <div className="button-group">
        <button className="analyze-btn" onClick={analyzePoem} disabled={loading}>
          {loading ? <span className="loader"></span> : "Analyze Poem"}
        </button>
        <button className="reset-btn" onClick={resetForm}>Reset</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {result && (
        <div className="result-box">
          <h3>🔹 Theme: <span className="theme-text">{result.theme}</span></h3>
          <p><strong>📖 Interpretation:</strong> {result.interpretation}</p>
        </div>
      )}
    </div>
  );
}

export default App;
