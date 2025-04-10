import React from 'react';

const ChatMessage = ({ sender, text }) => {
  const isUser = sender === 'user';
  return (
    <div className={`d-flex mb-2 ${isUser ? 'justify-content-end' : 'justify-content-start'}`}>
      <div className={`p-2 px-3 rounded-pill ${isUser ? 'bg-primary text-white' : 'bg-light border'}`}>
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
