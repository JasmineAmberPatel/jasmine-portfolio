import React from 'react';
import '../styles/main.css';
import '../styles/about.css';
import '../styles/social.css';

function About() {
    return (
        <div id="about" className="Home">
            <div className="About">
                <h1 className="Title">Jasmine Patel Software Engineer.</h1>
                <br />
                <h2>Welcome to my personal website! Here you can find a range of different projects I’ve built over the years in several different languages.
                    Feel free to have a look around and get inspired. </h2>
                <br />
                <p className="Intro">I came to software development from a marketing background after completing the Manchester Codes Software Engineering Bootcamp and have been working as a Software Engineer professionally since June 2020. 
                During this time I have also completed my Level 4 Software Engineering Apprenticeship and had the privilege of working on several different projects professionally ranging from JavaScript and React to Infrastructure, .NET and iOS Development. 
                I am currently working as an iOS Engineer at Footasylum.</p>
                <br />
                <img className="Jasmine" src={require('../images/jasmine-picture.png')} alt="Jasmine"></img>
            </div>
        </div>
    )
};


export default About;