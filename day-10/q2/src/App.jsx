import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
            "{quote.content}"
          </p>
          <p>- {quote.author}</p>
        </>
      )}
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;

