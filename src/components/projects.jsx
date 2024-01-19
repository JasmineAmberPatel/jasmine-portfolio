import React from 'react';
import '../styles/main.css';
import '../styles/projects.css';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <h2 className="Subtitle project-title">Projects</h2>
            <div className="Projects_container">
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/photo-finder.png')} alt="flickr finder app"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Photo Finder App</h2>
                        <p className="Paragraph">An iOS app built with Swift and SwiftUI. It leverages the MVVM (Model-View-ViewModel) architectural pattern and integrates with the Flickr API to search and display photos by keyword and by user.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/flickr" target="_blank" rel="noopener noreferrer">View Code</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/community-events-1.png')} alt="community events app"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Community Events App</h2>
                        <p className="Paragraph">An iOS app built with Swift and SwiftUI. The app has an interactive map which shows all the community events happening in a given location. Once a community event is clicked on, on the map, it will display more detailed information about the event such as the location, date, time, cost and a brief description and picture. The app consumes a .NET minimal API which is linked to a MongoDB database.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/CommunityEvents" target="_blank" rel="noopener noreferrer">App Code</a>
                            <a className="btn" href="https://github.com/JasmineAmberPatel/CommunityEventsApi" target="_blank" rel="noopener noreferrer">API Code</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/spotify-mosaic.png')} alt="spotify mosaic"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Music Mosaic</h2>
                        <p className="Paragraph">A React application which uses the Spotify API to get the album art of a users 50 most recently listened to songs on Spotify and turn it into a mosaic. The backend is an auth server which validates a users spotify account.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/spotify-mosaic-backend" target="_blank" rel="noopener noreferrer">View Backend</a>
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Music-Mosaic" target="_blank" rel="noopener noreferrer">View Frontend</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/snacky.png')} alt="snacky snake game"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Snacky Snake</h2>
                        <p className="Paragraph">A classic snake game created using vanilla JavaScript and styled with CSS. All graphics were also created by me using adobe illustrator.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Snake" target="_blank" rel="noopener noreferrer">View Code</a>
                            <a className="btn" href="https://snackysnake.now.sh/" target="_blank" rel="noopener noreferrer">Play Game</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/golden-shoe-01.png')} alt="golden shoe"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Golden Shoe</h2>
                        <p className="Paragraph">A prototype of an ecommerce website created with React and styled with Bootstrap and Sass.
                            The prototype allows you to filter shoes by price, size and popularity. It also allows you to add and remove shoes from the basket.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Golden-Shoe" target="_blank" rel="noopener noreferrer">View Code</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/GQ-01.png')} alt="green queens"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Green Queens</h2>
                        <p className="Paragraph">A website which highlights the impact of the fast fashion industry on the environment.
                            This was a group project for which I took on the role of team leader.
                            I took responsibility for the carbon calculator which was created using a React form, which passes the submitted information into a JavaScript function.
                            I also did all of the styling for the website using CSS and assisted with the API integration.</p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/green-queens/" target="_blank" rel="noopener noreferrer">View Code</a>
                            <a className="btn" href="https://green-queens.now.sh/" target="_blank" rel="noopener noreferrer">View Website</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/queens-01.png')} alt="quotes from queens"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Quotes From Queens</h2>
                        <p className="Paragraph">A React application, which consumes an Express API containing quotes from inspirational female artists and celebrities, stored in an MongoDB database.</p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Quotes-From-Queens" target="_blank" rel="noopener noreferrer">View Backend</a>
                            <a className="btn" href="https://github.com/JasmineAmberPatel/Quotes-From-Queens-Frontend" target="_blank" rel="noopener noreferrer">View Frontend</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/music-01.png')} alt="music library api"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Music Library API</h2>
                        <p className="Paragraph">This CRUD REST API stores information about artists, albums and songs and interacts with a MongoDB database using Express.
                            I used Mongoose to write the MongoDB validation in the form of schemas and models. I also used Test Driven Development and wrote tests using Mocha and Chai.
                        </p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/music-library-api" target="_blank" rel="noopener noreferrer">View Code</a>
                        </div>
                    </div>
                </div>
                <div className="Projects_box">
                    <img className="Projects_image" src={require('../images/weather-01.png')} alt="weather app"></img>
                    <div className="Project-info">
                        <h2 className="Subtitle">Weather Forecast</h2>
                        <p className="Paragraph">A 5-day weather forecasting app built with React consuming an open weather API. You can search to see the weather at any UK destination. Styled using CSS.</p>
                        <div className="buttons">
                            <a className="btn" href="https://github.com/JasmineAmberPatel/weather-app" target="_blank" rel="noopener noreferrer">View Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Projects;