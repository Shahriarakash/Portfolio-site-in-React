import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Alex Bennett,</span> fontend developer based in USA.
      </h1>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me
        </div>
        <div className="hero-resume">My Resume
        </div>
      </div>
    </div>
  );
}

export default Hero
