import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

export default function Header() {

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/");
  }


  return (
    <>
      <div className="header">
      <Link to="/">
          <img
            className="header__title"
            width="172"
            height="26"
            src="/src/assets/wealthsimple.svg"
            alt="Wealthsimple - home page"
          />
        </Link>
        <div className="header__wrapper">
          <button className="header__button" type="button">
            Log In
          </button>
          <button className="header__link" type="button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
