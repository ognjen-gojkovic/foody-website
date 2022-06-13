import React from "react";
import { StepsStyled } from "./Steps.Styled";
import Food from "../../images/food.svg";
import Delivery from "../../images/delivery.svg";
import Payment from "../../images/payment.svg";
import Enjoy from "../../images/enjoy.svg";

const Steps = () => {
  return (
    <StepsStyled>
      <div className="box">
        <img src={Food} alt="food" />
        <h3>Choose your favorite food</h3>
      </div>
      <div className="box">
        <img src={Delivery} alt="delivery" />
        <h3>Free and fast delivery</h3>
      </div>
      <div className="box">
        <img src={Payment} alt="payment" />
        <h3>Easy payment methods</h3>
      </div>
      <div className="box">
        <img src={Enjoy} alt="enjoy" />
        <h3>and finally, enjoy your food</h3>
      </div>
    </StepsStyled>
  );
};

export default Steps;
