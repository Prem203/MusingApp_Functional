import React from 'react';
import Header from '../Pages/Header';
import NavBar from '../Pages/NavBarMain';
import Content from '../Pages/Content';
import Footer from '../Pages/Footer';

export default function LandingPage() {
    console.log("Landing page render!!")
    return (
      <div>
        <Header />
        <NavBar />
        <Content />
        <Footer />
      </div>
      
    );
  }
