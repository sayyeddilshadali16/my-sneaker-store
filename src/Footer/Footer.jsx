import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
        <div className="footer_left">
            <div className="footer_menu">
                <h1 className="footer_title">About Us</h1>
                <ul className="menu_list">
                    <li className="menu_items">Company</li>
                    <li className="menu_items">Contact</li>
                    <li className="menu_items">Stores</li>
                </ul>
            </div>
            <div className="footer_menu">
                <h1 className="footer_title">Useful links</h1>
                <ul className="menu_list">
                    <li className="menu_items">Support</li>
                    <li className="menu_items">Feedback</li>
                    <li className="menu_items">FAQ</li>
                    <li className="menu_items">Refund</li>
                </ul>
            </div>
            <div className="footer_menu">
                <h1 className="footer_title">Products</h1>
                <ul className="menu_list">
                    <li className="menu_items">Air Max</li>
                    <li className="menu_items">Air Jordan</li>
                    <li className="menu_items">Carter</li>
                    <li className="menu_items">Hippie</li>
                    <li className="menu_items">Blazer</li>
                </ul>
            </div>
        </div>
        <div className="footer_right">
            <div className="right-menu">
                <h1 className="rightmenu_title">Subscribe to our newsletter</h1>
                <div className="right_mail">
                    <input type="text" placeholder="your@gmail.com" className="mail_input" />
                    <button className="mail_button">Join!</button>
                </div>
            </div>
            <div className="right-menu2">
                <h1 className="rightmenu_title">Follow Us</h1>
                <div className="social">
                    <i className="ri ri-instagram-line"></i>
                    <i className="ri ri-facebook-line"></i>
                    <i className="ri ri-twitter-x-line"></i>
                    <i className="ri ri-whatsapp-line"></i>
                </div>
            </div>
            <div className="right_copy">
                <span className="copy">&copy; Sayyed Dilshad Ali. All rights reserved.</span>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer