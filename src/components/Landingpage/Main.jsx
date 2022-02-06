import React from "react";
import "./Main.css";
import logo1 from "../../assets/3.png";
const Main = () => {
  return (
    <div class="home" id="home">
      <div class="home__container bd-container bd-grid">
        <div class="home__data">
          <h1 class="home__title">SOHAIB HASSAN</h1>
          <h2 class="home__subtitle">
            Try the best of <br /> the week.
          </h2>
          <a href="#" class="button">
            View
          </a>
        </div>
        <img src={logo1} alt="" class="home__img" />
      </div>
    </div>
  );
};

export default Main;
