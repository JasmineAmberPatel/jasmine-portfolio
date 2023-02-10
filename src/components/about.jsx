import React from 'react';
import '../styles/main.css';
import '../styles/about.css';

function About() {
    return (
        <div id="about" className="Home">
            <div className="About">
                <h1 className="Title">Hello I'm Jasmine.</h1>
                <br />
                <h2>A brief introduction:</h2>
                <br />
                <p className="Paragraph">I came to software development from a marketing background after completing the Manchester Codes Software Engineering Bootcamp and have been working as a Software Engineer professionally since June 2020. During this time I have also completed my Level 4 Software Engineering Apprenticeship with NorthCoders and had the privilege of working on several different projects professionally ranging from JavaScript and React, Infrastructure and iOS Development.</p>
                <br />
                <h2>Some facts about me:</h2>
                <br />
                <ul className="List">
                   <li>I’m currently working as an iOS Software Engineer at Footasylum.</li>
                   <li>I have a degree in Advertising and Marketing.</li>
                   <li>Sunflowers are my favourite flowers.</li>
                   <li>In my free time I enjoy swimming, being outside in nature and pottery, you can see some of my ceramic creations on Instagram @jamber_ceramics.</li>
                </ul>
            </div>
            <div className="jasmine">
                <img className="bitmoji" src={require('../images/Jasmine.png')} alt="bitmoji"></img>
            </div>
        </div>
    )
};


export default About;