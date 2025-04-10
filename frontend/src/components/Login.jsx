import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/login', form);
      localStorage.setItem('username', res.data.username);
      onLogin();
    } catch {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" placeholder="Username" required
               onChange={e => setForm({ ...form, username: e.target.value })} />
        <input className="form-control mb-2" type="password" placeholder="Password" required
               onChange={e => setForm({ ...form, password: e.target.value })} />
        {error && <div className="text-danger">{error}</div>}
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
