import React from "react";
// import anime from "animejs/lib/anime.es.js"
// import ReactDOM from "react-dom";
// import { useSpring, animated } from "react-spring";
// import earth from "../assets/backgrounds/earth.jpg"
import "./Xanimation.scss";

function Xanimation() {
  return (
    <section className="section">
        <div className="section__container">
            <div className="section__container__main">
                <p className="animate__text">This is the year 5000 A.D.</p>
                <p className="animate__text">Mankind has expanded all over the universe</p>
                <br></br>
                <p className="animate__text">But a threat still exists to the mother earth</p>
                <p className="animate__text">So we are gathering defenders like you<br></br> from all over the universe to eliminate the enemies!</p>
            </div>
            <aside className="section__container__aside">

            </aside>
        </div>
    </section>
  );
}

export default Xanimation;


