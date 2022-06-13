import React from "react";
import { OrderStyled } from "./Order.Styled";
import Waiter from "../../images/waiter.webp";

const Order = () => {
  return (
    <OrderStyled id="order">
      <h1 className="heading">
        Order <span>Now</span>
      </h1>

      <div className="row">
        <div className="image">
          <img src={Waiter} alt="waiter" />
        </div>

        <form actin="">
          <div className="controller">
            <input type="text" placeholder="Name..." />
            <input type="email" placeholder="Email..." />
          </div>
          <div className="controller">
            <input type="number" placeholder="number..." />
            <input type="text" placeholder="Food name..." />
          </div>

          <textarea
            placeholder="addres"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <input type="submit" value="Order" className="btn" />
        </form>
      </div>
    </OrderStyled>
  );
};

export default Order;
