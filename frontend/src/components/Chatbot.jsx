import React, { useState } from 'react';

function Chatbot() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const faqResponses = {
    "how to register": "You can register using the form above.",
    "volunteer": "Volunteers help patients with support and logistics.",
    "contact": "You can reach us via email or the contact form."
  };

  const handleAsk = () => {
    const answer = faqResponses[query.toLowerCase()] || "Sorry, I don't have an answer for that yet.";
    setResponse(answer);
  };

  return (
    <div className="chatbot">
      <h2>💬 AI FAQ Chatbot</h2>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask a question..." />
      <button onClick={handleAsk}>Ask</button>
      <p className="chat-response">{response}</p>
    </div>
  );
}

export default Chatbot;
