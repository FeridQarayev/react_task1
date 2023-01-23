import React from "react";
import styled from "./navbar.module.scss";

function Navbar() {
  return (
    <div className={styled.navbar}>
      <div className={styled.navbar__content}>
        <div className={styled.navbar__content__left}>
          <p>Notary</p>
        </div>
        <div className={styled.navbar__content__right}>
          <a href="#1">Home</a>
          <a href="#2">Practice Areas</a>
          <a href="#3">Testimonials</a>
          <a href="#4">About</a>
          <a href="#5">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
