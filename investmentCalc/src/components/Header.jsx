import React from "react";
import headerImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={headerImg} alt="Logo" srcset="" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
