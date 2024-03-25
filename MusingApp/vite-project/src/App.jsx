import React, { useState } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  return (
    <>
      {isLoggedIn ? <LandingPage /> : <LoginPage />}
    </>
  );
}
export default App;