import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import audio from "../../assets/audio/Biometric-CircuitBreaker.mp3";

// import React, { useState } from "react";

export default function Footer() {
    // if(window.onload){
    //     wow.autoPlay = true;
    // }
    // let audio = 
    let [audioicon, setAudioicon] = useState('pause');

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
    <>
        <Link className="footer__icon" to="https://www.facebook.com/">
            {/* <img src={require(`../../assets/icons/linkedin.png`)} alt="" className="user__profile__icon"></img> */}
        </Link>


        {/* <p
            className="employee__schedule-text"
            style={
            office[5]
                ? { color: "white", backgroundColor: "#183B54" }
                : { color: "#183B54", backgroundColor: "white" }
            }
        >
            SA
        </p> */}


{/* 
        <footer class="footer__container">
            <!-- Address-->
            <div class="footer__section">
                <h3>Address</h3>
                <p class="p-text">
                    503 Broadway Penthouse
                    <br>
                    New York
                </p>
            </div>
            <!-- End of Address -->

            <!-- Hours -->
            <div class="footer__section">
                <h3>Hours</h3>
                <p class="p-text">
                    <span class="days">Monday - Friday:</span> 9am - 7pm
                    <br>
                    <span class="days">Saturday - Sunday:</span> 10am - 5pm
                </p>
            </div>
            <!-- End of Hours -->

            <!-- Social -->
            <div class="footer__section">
                <h3>Social</h3>

                <a class="footer__icon" href="https://www.facebook.com/">
                    <img class="footer__icon" src="./assets/Facebook-Icon.svg" alt="facebook">
                </a>
                <a class="footer__icon" href="https://www.yelp.com">
                    <img class="footer__icon" src="./assets/Yelp-Icon.svg" alt="yelp">
                </a>
                <a class="footer__icon" href="https://www.instagram.com">
                    <img class="footer__icon" src="./assets/Instagram-Icon.svg" alt="instagram">
                </a>
            </div>
            <!-- End of Social -->
        </footer> */}



        <p className='footer-text'>&copy; Xtarfleet Enterprise. All Rights Reserved.</p>
        <div 
            className={
                audioicon === "play" 
                ? "audioplayer audioplayer__icon-container player-paused" 
                : "audioplayer audioplayer__icon-container "
            } 
            onClick={pausePlay} 	
        // style={ 
        //                         audioicon==="pause" 
		// 						? { color:"white", backgroundColor: "#183B54" }
		// 						: { color:"#183B54", backgroundColor: "white" }
		// 					} 
        >    
            <img src={require(`../../assets/icons/${audioicon}.png`)} alt="" className="audioplayer__icon"></img>
            <audio id="aaud">
                <source src={audio} type="audio/mp3"></source>
                Your browser does not support the audio element.
            </audio>
        </div>
    </>
    )
}