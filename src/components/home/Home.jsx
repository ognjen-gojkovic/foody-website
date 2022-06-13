import React from "react";
import { HomeStyled } from "./Home.Styled";

const Home = () => {
  return (
    <HomeStyled id="home">
      <div className="content">
        <h2>Food made with love</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          obcaecati ducimus magnam debitis? Neque nam quidem, corporis eaque
          quos asperiores consequatur earum quaerat quo, dicta provident?
          Aspernatur doloribus natus consectetur iure unde veritatis a eligendi
          cum facilis officiis, cupiditate quam minus in amet nam sit. Laborum
          pariatur neque sint enim.
        </p>
        <a href="#order" className="btn">
          order now
        </a>
      </div>

      <div className="img">
        <img
          src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hamburger"
        />
      </div>
    </HomeStyled>
  );
};

export default Home;
