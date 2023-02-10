import React from 'react';
import '../styles/main.css';
import '../styles/projects.css';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <h2 className="Subtitle project-title">Projects</h2>
            <div className="Projects_container">
            <div className="Projects_box spotify">
                 {/* <img className="Projects_image" src={require('../images/spotify-mosaic.png')} alt="spotify mosaic"></img> */}
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Elephants API</h2>
                        <p className="Paragraph"> An ASP.NET CRUD REST API with unit tests added using TDD and integration testing.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/c-sharp-little-web-api" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                </div>
            <div className="Projects_box spotify">
                    <img className="Projects_image" src={require('../images/spotify-mosaic.png')} alt="spotify mosaic"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Music Mosaic</h2>
                        <p className="Paragraph">A React application which uses the Spotify API to get the album art of a users 50 most recently listened to songs on Spotify and turn it into a mosaic. Frontend deployed using Zeit. The backend is a auth server which validates a users spotify account.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/spotify-mosaic-backend" target="_blank" rel="noopener noreferrer">View Backend</a>
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Music-Mosaic" target="_blank" rel="noopener noreferrer">View Frontend</a>
                        </div>
                    </div>
                </div>
            <div className="Projects_box snacky">
                    <img className="Projects_image" src={require('../images/snacky.png')} alt="snacky snake game"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Snacky Snake</h2>
                        <p className="Paragraph">A classic snake game created using vanilla JavaScript and styled with CSS. All graphics were also created by me using adobe illustrator. Deployed using Zeit.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Snake" target="_blank" rel="noopener noreferrer">View Source</a>
                            <a className="btn" href="https://snackysnake.now.sh/" target="_blank" rel="noopener noreferrer">Play Game</a>
                        </div>
                    </div>
                </div>
            <div className="Projects_box golden">
                    <img className="Projects_image" src={require('../images/golden-shoe-01.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Golden Shoe</h2>
                        <p className="Paragraph">Golden Shoe is a prototype of an ecommerce website created with React and styled with Bootstrap and Sass.
                        The prototype allows you to filter shoes by price, size and popularity. It also allows you to add and remove shoes from the basket.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Golden-Shoe" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image gq" src={require('../images/GQ-01.png')} alt="green queens"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Green Queens</h2>
                        <p className="Paragraph">Green Queens is a website which highlights the impact of the fast fashion industry on the environment.
                        This was a group project for which I took on the role of team leader.
                        I took responsibility for the carbon calculator which was created using a React form, which passes the submitted information into a JavaScript function.
                        I also did all of the styling for the website using CSS and assisted with the API integration.</p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/green-queens/" target="_blank" rel="noopener noreferrer">View Source</a>
                            <a className="btn" href="https://green-queens.now.sh/" target="_blank" rel="noopener noreferrer">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image queens" src={require('../images/queens-01.png')} alt="quotes from queens"></img>
                    <div className="Project-info queens-info">
                        <h2 className="Subtitle">Quotes From Queens</h2>
                        <p className="Paragraph">I built an Express API containing quotes from inspirational female artists and celebrities using MongoDB as the database.
                        I then created a frontend using React and styled it using CSS to display the API information.</p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Quotes-From-Queens" target="_blank" rel="noopener noreferrer">View Backend</a>
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Quotes-From-Queens-Frontend" target="_blank" rel="noopener noreferrer">View Frontend</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box music">
                    <img className="Projects_image" src={require('../images/music-01.png')} alt="golden shoe"></img>
                    <div className="Project-info gq-info">
                        <h2 className="Subtitle">Music Library API</h2>
                        <p className="Paragraph">This CRUD REST API stores information about artists, albums and songs and interacts with a MongoDB database using Express.
                        I used Mongoose to write the MongoDB validation in the form of schemas and models, I also used Test Driven Development and wrote tests using Mocha and Chai.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/music-library-api" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box  weather">
                    <img className="Projects_image" src={require('../images/weather-01.png')} alt="weather app"></img>
                    <div className="Project-info weather-info">
                        <h2 className="Subtitle">Weather Forecast</h2>
                        <p className="Paragraph">A 5 day weather forecasting app built with React with the data coming from a Web API. You can search to see the weather at any UK destination. The styling was done using CSS.</p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/weather-app" target="_blank" rel="noopener noreferrer">View Source</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Projects;