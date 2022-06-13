import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ReviewStyled } from "./Review.Styled";
import Person1 from "../../images/person_1.jpeg";
import Person2 from "../../images/person_2.jpeg";
import Person3 from "../../images/person_3.jpeg";

const Review = () => {
  return (
    <ReviewStyled id="review">
      <h1 className="heading">
        our customers <span>reviews</span>
      </h1>

      <div className="container">
        <div className="box">
          <img src={Person1} alt="person_1" />
          <h3>John Doe</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod est
            vitae dignissimos eveniet odit saepe, mollitia quam provident
            laborum optio?
          </p>
        </div>
        <div className="box">
          <img src={Person2} alt="person_2" />
          <h3>Jane Doe</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod est
            vitae dignissimos eveniet odit saepe, mollitia quam provident
            laborum optio?
          </p>
        </div>
        <div className="box">
          <img src={Person3} alt="person_3" />
          <h3>John Doe</h3>
          <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod est
            vitae dignissimos eveniet odit saepe, mollitia quam provident
            laborum optio?
          </p>
        </div>
      </div>
    </ReviewStyled>
  );
};

export default Review;
