import React, { useState } from "react";

import "./Footer.scss";

import audio from "../../assets/audio/Biometric-CircuitBreaker.mp3";

export default function Footer() {

    let [audioicon, setAudioicon] = useState('play');

    function pausePlay() {
        var track_1 = document.getElementById('aaud');
        if (track_1.paused === false) {
            track_1.pause();
            setAudioicon('play');
        } else {
            track_1.play();   
            setAudioicon('pause');
        }
    }

    return (
    <div className="footer__section">
        {/* ICONS */}
        <div className="footer__icons__container"> 
            <div className="footer__link__container">
                <a href="https://www.linkedin.com/in/sayemfarhad/" className="footer__icon">
                    <img src={require(`../../assets/logo/linkedin_black.png`)} alt="" className="footer__icon__image"></img>
                </a>
            </div>
            <div className="footer__link__container">
                <a href="https://github.com/sayemfarhad001" className="footer__icon" >
                    <img src={require(`../../assets/logo/github.png`)} alt="" className="footer__icon__image"></img>
                </a>                
            </div>
            <div className="footer__link__container">
                <a href={`mailto:sayemfarhad001@gmail.com`} className="footer__icon" >
                    <img src={require(`../../assets/logo/gmail_black.png`)} alt="" className="footer__icon__image"></img>
                </a>
            </div>
        </div>
        <div className="footer__copyright__container">
            <p className='footer-text'>&copy; Xtarfleet Enterprise. All Rights Reserved.</p>
        </div>

        <div 
            className={
                audioicon === "play" 
                ? "audioplayer audioplayer__icon-container player-paused" 
                : "audioplayer audioplayer__icon-container "
            } 
            onClick={pausePlay}
        >    
            <img src={require(`../../assets/icons/${audioicon}.png`)} alt="" className="audioplayer__icon"></img>
            <audio id="aaud">
                <source src={audio} type="audio/mp3"></source>
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
    )
}