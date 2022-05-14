import React from "react";
import "./About.scss"

export default function AboutPage() {
    return ( 
        <section className="about__section">
       
            <div className="about__container">
                <div className="about__title__container">
                    <p>About</p>
                </div>
                <div className="about__card about__card__one">
                    <div className="about__card__title__container">
                        <p>Idea:</p>
                    </div>
                    <ul className="about__card__list__container">
                        <li className="about__card__list-item">Build a tower defense game</li>
                        <li className="about__card__list-item">Since early childhood i was fascinated by games</li>
                        <li className="about__card__list-item">Now I have gained the knowledge & chance to explore my fascination</li>
                    </ul>
                </div>
                <div className="about__card about__card__two">
                    <div className="about__card__title__container">
                        <p>Aim:</p>
                    </div>
                    <ul className="about__card__list__container">
                        <li className="about__card__list-item">My weakness during my learning process was "aNiMaTiOn"</li>
                        <li className="about__card__list-item">Developing a game would help me explore various aspects of animation in detail.</li>
                        <li className="about__card__list-item">Along with that I wanted to learn react in depth</li>
                    </ul>
                </div>
                <div className="about__card about__card__three">
                    <div className="about__card__title__container">
                        <p>Key features:</p>
                    </div>
                    <ul className="about__card__list__container">
                        <li className="about__card__list-item">Home page - CSS animation and Audio funtionality </li>
                        <li className="about__card__list-item">Game board - Player Form, Game, Canvas, Sprite sheet animation</li>
                        <li className="about__card__list-item">Leaderboard - Search functionality & Route to user Profile </li>
                        <li className="about__card__list-item">About Page - Journey to completion of this project </li>
                    </ul>
                </div>
                <div className="about__card about__card__four">
                    <div className="about__card__title__container">
                        <p>Client-side Implementations:</p>
                    </div>
                    <ul className="about__card__list__container">
                        <li className="about__card__list-item">States, and Hooks</li>
                        <li className="about__card__list-item">Axios & Dynamic rendering</li>
                        <li className="about__card__list-item">Audio Aunctionality</li>
                        <li className="about__card__list-item">Canvas, Sprite sheet animation</li>
                        <li className="about__card__list-item">Search functionality</li>
                        <li className="about__card__list-item">Form and various Event Handlers</li>
                    </ul>
                </div>
                <div className="about__card about__card__five">
                    <div className="about__card__title__container">
                        <p>Server-side Implementations:</p>
                    </div>
                    <ul className="about__card__list__container">
                        <li className="about__card__list-item">Middleware</li>
                        <li className="about__card__list-item">Route</li>
                        <li className="about__card__list-item">CRUD</li>
                        <li className="about__card__list-item">Data</li>
                    </ul>
                </div>
                <div className="about__card about__card__six">
                    <div className="about__card__title__container">
                        <p>Tech Stack:</p>
                    </div>
                    <ul className="about__card__list__container">
                        <li className="about__card__list-item">HTML, CSS, Javascript</li>
                        <li className="about__card__list-item">React.js, Node.js, Express.js</li>
                        <li className="about__card__list-item">Github, Gitbash/Terminal</li>
                        <li className="about__card__list-item">Postman</li>
                        <li className="about__card__list-item">Npm libraries - country-code-lookup, classnames.etc</li>
                    </ul>
                </div>
            </div>    
        </section>
    )
}