import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a fontend Developer from, jashore Bangladesh with 3 years of experiennces.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-info">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe
                </div>
            </div>
        </div>
      <hr />
      <div className='footer-bottom-left'>@ 2024 sky Tech ltd. All rights reserved</div>
      <div className='footer-bottom-right'>
        <p>Term of Service</p>
        <p>Peivecy policy</p>
        <p>connect with me</p>
      </div>
    </div>
  )
}

export default Footer
