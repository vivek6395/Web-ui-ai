import React, { useState, useEffect } from 'react';  // ✅ Fixes useState
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import axios from 'axios'; // ✅ Fixes axios undefined

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(localStorage.getItem('sessionId'));

  const handleSend = async (input) => {
    const userMsg = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);

    try {
      const res = await axios.post('http://127.0.0.1:8000/chat', {
        message: input,
        session_id: sessionId,
      });

      if (!sessionId && res.data.session_id) {
        localStorage.setItem('sessionId', res.data.session_id);
        setSessionId(res.data.session_id);
      }

      const botMsg = { sender: 'bot', text: res.data.response };
      setMessages(prev => [...prev, botMsg]);
    } catch {
      setMessages(prev => [...prev, { sender: 'bot', text: '⚠️ Server error' }]);
    }
  };

  return (
    <div className="card shadow-sm h-100 d-flex flex-column">
      <div className="card-body overflow-auto" style={{ flex: 1 }}>
        {messages.map((msg, i) => (
          <ChatMessage key={i} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="card-footer bg-white">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatBox;
