import React, { Component } from 'react';
import Header from '../Pages/Header';
import NavBar from '../Pages/NavBar';
import Content from '../Pages/Content';
import Footer from '../Pages/Footer';

export default class LandingPage extends Component {
  render() {
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
}
