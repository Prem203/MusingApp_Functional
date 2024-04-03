import React, { useState } from 'react';
import '../Styles/LoginPage.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Prem@gmail.com' && password === 'Prem@1350') {
      window.location.href = '/landingpage'; 
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-md-6 login-form-container">
          <h2 className="login-title">Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-control input-field"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control input-field"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="btn btn-primary submit-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
