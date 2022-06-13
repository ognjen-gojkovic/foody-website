import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { PopularStyled } from "./Popular.Styled";
// images
import Hamburger from "../../images/hamburger.jpg";
import Cake from "../../images/cake.jpeg";
import IceCream from "../../images/ice-cream.jpg";
import ColdDrinks from "../../images/cold drinks.jpg";
import Sweets from "../../images/sweets.jpg";
import Cupcake from "../../images/cupcakes.jpeg";

const Popular = () => {
  return (
    <PopularStyled id="popular">
      <h1 className="heading">
        most <span>popular</span> food
      </h1>

      <div className="container">
        <div className="box">
          <span className="price">5$ - 20$</span>
          <img src={Hamburger} alt="hamburger" />
          <h3>tasty burger</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <a href="#order" className="btn">
            Order Now
          </a>
        </div>
        <div className="box">
          <span className="price">5$ - 20$</span>
          <img src={Cake} alt="cake" />
          <h3>tasty cakes</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <a href="#order" className="btn">
            Order Now
          </a>
        </div>
        <div className="box">
          <span className="price">5$ - 20$</span>
          <img src={Sweets} alt="sweets" />
          <h3>tasty sweets</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <a href="#order" className="btn">
            Order Now
          </a>
        </div>
        <div className="box">
          <span className="price">5$ - 20$</span>
          <img src={Cupcake} alt="cupcake" />
          <h3>tasty cupcakes</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <a href="#order" className="btn">
            Order Now
          </a>
        </div>
        <div className="box">
          <span className="price">5$ - 20$</span>
          <img src={ColdDrinks} alt="drinks" />
          <h3>cold drinks</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <a href="#order" className="btn">
            Order Now
          </a>
        </div>
        <div className="box">
          <span className="price">5$ - 20$</span>
          <img src={IceCream} alt="ice-cream" />
          <h3>ice cream</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <a href="#order" className="btn">
            Order Now
          </a>
        </div>
      </div>
    </PopularStyled>
  );
};

export default Popular;
