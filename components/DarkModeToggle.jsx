"use client"

import React, { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@helpers/ThemeContext";

import iconSun from "../public/assets/icons/icon-sun.svg";
import iconMoon from "../public/assets/icons/icon-moon.svg";

const DarkModeToggle = () => {
  const { toggle,mode } = useContext(ThemeContext);
  return (
    <div className="container" onClick={toggle}>
      <div className="icon icon-light" style={mode === "light" ? { opacity: 1 } : { opacity: 0 }}><Image src={iconMoon} width={24} height={24} alt="Icon Moon" /></div>
      <div className="icon icon-dark" style={mode === "light" ? { opacity: 0 } : { opacity: 1 }}><Image src={iconSun} width={24} height={24} alt="Icon Moon" /></div>
      {/* <div
        className="ball"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}🌙🔆
      /> */}
    </div>
  );
};

export default DarkModeToggle;