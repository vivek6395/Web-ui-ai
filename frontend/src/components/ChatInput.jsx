import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKey = (e) => e.key === 'Enter' && handleSubmit();

  return (
    <div className="input-group">
      <input
        className="form-control"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKey}
        placeholder="Type your message..."
      />
      <button className="btn btn-dark" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;
