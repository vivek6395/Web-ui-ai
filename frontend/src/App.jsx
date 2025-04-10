import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('username'));
  const [showSignup, setShowSignup] = useState(false);

  if (!isLoggedIn) {
    return showSignup ? (
      <Signup onSignup={() => setShowSignup(false)} />
    ) : (
      <>
        <Login onLogin={() => setIsLoggedIn(true)} />
        <div className="text-center mt-3">
          <button className="btn btn-link" onClick={() => setShowSignup(true)}>Don't have an account? Sign up</button>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">GPT Chat</span>
          <button className="btn btn-outline-danger" onClick={() => {
            localStorage.removeItem('username');
            setIsLoggedIn(false);
          }}>Logout</button>
        </div>
      </nav>
      <div className="container mt-4">
        <ChatBox />
      </div>
    </>
  );
};

export default App;
