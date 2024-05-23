import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from '../../assets/nav_underline.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const myStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 70px",
  };

  const [menu, setMenu] = useState("");

  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div id="navbar" className="navbar" style={myStyle}>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          {" "}
          <AnchorLink className="anchorlink" href="#home">
            {" "}
            <p onMouseOver={() => setMenu("home")}> Home </p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchorlink" offset={50} href="#about">
            {" "}
            <p onMouseOver={() => setMenu("about")}> About Me </p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchorlink" offset={50} href="#services">
            {" "}
            <p onMouseOver={() => setMenu("services")}> Services </p>{" "}
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchorlink" offset={50} href="#work">
            {" "}
            <p onMouseOver={() => setMenu("portfolio")}> Portfolio </p>
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
        <li>
          {" "}
          <AnchorLink className="anchorlink" offset={50} href="#contact">
            {" "}
            <p onMouseOver={() => setMenu("contact")}> Contact </p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;
