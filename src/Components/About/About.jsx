import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an enperienced Fontend Developer with over 2 years of
              knowledge
            </p>
            <p>
              My passion for Fontend Development is not only for income money
              but also for work in my interested field
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
          <div className="about-achivements">
            <div className="about-achivement">
              <h1>10+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
              <hr />
            <div className="about-achivement">
              <h1>10+</h1>
              <p>PROJECT COMPLETED</p>
            </div>
              <hr />
            <div className="about-achivement">
              <h1>50+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
    </div>
  );
};

export default About;
