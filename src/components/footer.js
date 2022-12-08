import React from "react";

//import social media icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

//create footer component
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__social-media">
                <a href="https://www.facebook.com/"><FaFacebookF /></a>
                <a href="https://twitter.com/"><FaTwitter /></a>
                <a href="https://www.instagram.com/"><FaInstagram /></a>
            </div>
            <div className="footer__text">
                <p>© 2022 - All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
