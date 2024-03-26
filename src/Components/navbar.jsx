import React, { useState } from "react";
import Logoo from "./images/Logoo.svg";
import { Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./navbarstyles.css";

function Navbar() {
  const [active, setActive] = useState("nav_menu");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    //  TogglerIcon

    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <nav className="nav">
      <img
        style={{ width: "200px", height: "35px", margin: "10px" }}
        src={Logoo}
        alt="Golomt Logo"
      />
      <ul className={active}>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Мэдээлэл
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Байгууллага
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Санал хүсэлт
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Холбоо барих
          </a>
        </li>
      </ul>
      <Button
        onClick={() => alert("clicked")}
        type="primary"
        style={{
          color: "white",
          backgroundColor: "#39f",
          borderRadius: "2px",
          width: "100px",
          transition: "background 0.3s ease",
          ":hover": {
            background: "red", // Change background color on hover
          },
        }}
      >
        Log in
      </Button>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
