import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-white border-end px-3 py-4" style={{ width: '250px' }}>
      <h5>Navigation</h5>
      <ul className="list-unstyled">
        <li><a href="#" className="text-decoration-none">🗨️ Chat</a></li>
        <li><a href="#" className="text-decoration-none">📊 Stats</a></li>
        <li><a href="#" className="text-decoration-none">⚙️ Settings</a></li>
      </ul>
      <hr />
      <div>
        <p><strong>About:</strong></p>
        <p className="small text-muted">
          This is a custom GPT-like chatbot interface with a FastAPI backend. Type your queries and get instant responses!
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
