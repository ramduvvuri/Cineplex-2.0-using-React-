import { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please fill in both fields');
      return;
    }

    setError('');
    if (onSignIn) onSignIn(form);
  };

  return (
    <div className="signin-container">
      <div className = "signbox">
        <h2 id = "sign_heading">Sign In</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className = "email"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className = "password"
          />
          {error && <p className="error-text">{error}</p>}
          <button type="submit" className = "submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;