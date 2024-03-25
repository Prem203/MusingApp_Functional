import React, { Component } from 'react';
import "../Styles/Profile.css";
import Header2 from './Header2';
import "../Styles/Content.css";
import Footer from './Footer';
import Prof from "../assets/IMG_0557.jpeg";

export default function Profile() {
    console.log("Landing page render!!")
    return (
      <div>
        <Header2 />
        <h4>Profile</h4>
        <div className='profile'>
            <div className='prof'>
                <div className='side'>
                    <h5>Username: </h5>
                    <h6 >PremVora</h6>
                </div>
                <div className='side'>
                    <h5>Age: </h5>
                    <h6 >23 years</h6>
                </div>
                <div className='side'>
                    <h5>Date of Birth: </h5>
                    <h6 >03/20/2000</h6>
                </div>
                <div className='side'>
                    <h5>Gender: </h5>
                    <h6 >Male</h6>
                </div>
                <div className='side'>
                    <h5>Account Type: </h5>
                    <h6 >Student</h6>
                </div>
                <div className='side'>
                    <h5>Total Posts: </h5>
                    <h6 >fetch here</h6>
                </div>
                
            </div>
            

            <div className='prof2'>
                <h5>About Me:</h5>
                <p>Hey there! I'm an avid reader and self-proclaimed bookworm who's always nose-deep in a new adventure between the pages.
                   From the classics to contemporary fiction, my shelves are filled with stories waiting to be explored. I believe in the magic of words and the transformative power of storytelling.
                   When I'm not lost in a book, you can find me sipping on a cup of tea and cozying up with my latest literary find.
                </p>
            </div>

            <div >
                <img className='profimg' src={Prof} alt="Logo" width="220" height="220" />
            </div>
        </div>
        <Footer />
      </div>
    );
  }