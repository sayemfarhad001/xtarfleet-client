import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";


export default function Footer() {
    return (
    <>
        <Link className="footer__icon" to="https://www.facebook.com/">
            <img className="footer__icon" 
                // src="./assets/Facebook-Icon.svg" 
                alt="facebook"></img>

{/* .footer__icon {
    min-width: 50px;
    max-width: 120px;
    height: auto;
    text-decoration: none;
}
.footer__section {
    vertical-align: top;
    position: relative;
    min-width: 330px;
    max-width: 350px;
    padding-top: 1.25rem;
    padding-right: 1.25rem;
    padding-bottom: 1.25rem;
    padding-left: 1.25rem;
    margin: 1.25rem;
    display: inline-block;
    text-align: left;
}
.footer__container {
    text-align: center;
    background-color: #fff0ed;
} */}

        </Link>

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
    </>
    )
}