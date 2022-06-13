import React from "react";
import { FaHamburger } from "react-icons/fa";
import { IoIceCreamOutline, IoPizzaOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { GiWrappedSweet } from "react-icons/gi";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { SpecialityStyled } from "./Speciality.Styled";
// images
import Hamburger from "../../images/hamburger.jpg";
import Pizza from "../../images/pizza.jpeg";
import IceCream from "../../images/ice-cream.jpg";
import ColdDrinks from "../../images/cold drinks.jpg";
import Sweets from "../../images/sweets.jpg";
import Breakfast from "../../images/breakfast.jpg";

const Speciality = () => {
  return (
    <SpecialityStyled id="speciality">
      <h1 className="heading">
        our <span>speciality</span>
      </h1>
      <div className="container">
        <div className="box">
          <i>
            <FaHamburger />
          </i>
          <img src={Hamburger} className="img" alt="burger" />
          <div className="content">
            <h3>tasty burger</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quas neque dolor eaque obcaecati nulla ullam ipsam exercitationem
              accusantium dicta illum explicabo, et libero at voluptatum, odio
              consequuntur nam perferendis?
            </p>
          </div>
        </div>
        <div className="box">
          <i>
            <IoPizzaOutline />
          </i>
          <img src={Pizza} alt="pizza" />
          <div className="content">
            <h3>tasty pizza</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quas neque dolor eaque obcaecati nulla ullam ipsam exercitationem
              accusantium dicta illum explicabo, et libero at voluptatum, odio
              consequuntur nam perferendis?
            </p>
          </div>
        </div>
        <div className="box">
          <i>
            <IoIceCreamOutline />
          </i>
          <img src={IceCream} alt="ice-cream" />
          <div className="content">
            <h3>cold ice cream</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quas neque dolor eaque obcaecati nulla ullam ipsam exercitationem
              accusantium dicta illum explicabo, et libero at voluptatum, odio
              consequuntur nam perferendis?
            </p>
          </div>
        </div>
        <div className="box">
          <i>
            <BiDrink />
          </i>
          <img src={ColdDrinks} alt="drinks" />
          <div className="content">
            <h3>cold drinks</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quas neque dolor eaque obcaecati nulla ullam ipsam exercitationem
              accusantium dicta illum explicabo, et libero at voluptatum, odio
              consequuntur nam perferendis?
            </p>
          </div>
        </div>
        <div className="box">
          <i>
            <GiWrappedSweet />
          </i>
          <img src={Sweets} alt="sweets" />
          <div className="content">
            <h3>tasyt sweets</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quas neque dolor eaque obcaecati nulla ullam ipsam exercitationem
              accusantium dicta illum explicabo, et libero at voluptatum, odio
              consequuntur nam perferendis?
            </p>
          </div>
        </div>
        <div className="box">
          <i>
            <MdOutlineFreeBreakfast />
          </i>
          <img src={Breakfast} alt="breakfast" />
          <div className="content">
            <h3>healthy breakfast</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              quas neque dolor eaque obcaecati nulla ullam ipsam exercitationem
              accusantium dicta illum explicabo, et libero at voluptatum, odio
              consequuntur nam perferendis?
            </p>
          </div>
        </div>
      </div>
    </SpecialityStyled>
  );
};

export default Speciality;
