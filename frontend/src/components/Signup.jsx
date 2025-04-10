import React, { useState } from 'react';
import axios from 'axios';

const Signup = ({ onSignup }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/signup', form);
      setMessage('Signup successful. Now login.');
      onSignup();
    } catch (err) {
      setMessage('Signup failed. Try a different username.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" placeholder="Username" required
               onChange={e => setForm({ ...form, username: e.target.value })} />
        <input className="form-control mb-2" type="password" placeholder="Password" required
               onChange={e => setForm({ ...form, password: e.target.value })} />
        <div>{message}</div>
        <button className="btn btn-success">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
