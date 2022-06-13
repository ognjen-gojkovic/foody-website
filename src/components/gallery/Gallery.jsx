import React from "react";
import { GalleryStyled } from "./Gallery.Styled";
import Soup1 from "../../images/soup.jpeg";
import Soup2 from "../../images/soup_1.jpeg";
import Barbecue from "../../images/barbecue.jpeg";
import Cake1 from "../../images/cakes_1.jpeg";
import Cake2 from "../../images/cakes_2.jpeg";
import Food from "../../images/spagetti.jpeg";
import Sweets1 from "../../images/sweets_1.webp";
import Sweets2 from "../../images/sweets_2.webp";
import Breakfast from "../../images/breakfast.jpg";

const Gallery = () => {
  return (
    <GalleryStyled id="gallery">
      <h1 className="heading">
        our food <span>gallery</span>
      </h1>
      <div className="container">
        <div className="box">
          <img src={Breakfast} alt="breakfast" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
        <div className="box">
          <img src={Soup1} alt="soup_1" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
        <div className="box">
          <img src={Soup2} alt="soup_2" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
        <div className="box">
          <img src={Barbecue} alt="barbacue" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
        <div className="box">
          <img src={Cake1} alt="cake_1" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
        <div className="box">
          <img src={Cake2} alt="cake_2" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
        <div className="box">
          <img src={Food} alt="food" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
        <div className="box">
          <img src={Sweets1} alt="sweets_1" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
        <div className="box">
          <img src={Sweets2} alt="sweets_2" />
          <div className="content">
            <h3>tasty food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam distinctio impedit eum labore nam molestias similique sed
              tempora odit.
            </p>
            <a href="#order">Order Now</a>
          </div>
        </div>
      </div>
    </GalleryStyled>
  );
};

export default Gallery;
