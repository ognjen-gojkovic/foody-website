import styled from "styled-components";

export const PopularStyled = styled.section`
  margin: 10rem 5rem 5rem 5rem;

  .heading {
    text-align: center;
    font-size: 4rem;
    padding: 1rem;
    color: #666;
    text-transform: capitalize;
    margin-bottom: 5rem;

    span {
      color: var(--red);
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    gap: 2rem;

    .box {
      position: relative;

      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
      border: 1px solid #000;
      border-radius: 5px;
      box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
      cursor: pointer;

      span {
        position: absolute;
        top: 3rem;
        left: 3rem;
        background-color: var(--red);
        color: #fff;
        font-size: 2rem;
        padding: 1rem 2rem;
        border-radius: 5px;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }

      h3 {
        text-transform: capitalize;
        margin-top: 1rem;
        font-size: 2rem;
      }

      .stars {
        color: gold;
        font-size: 1.5rem;
      }

      .btn {
        text-decoration: none;
        color: var(--red);
        border: 2px solid var(--red);
        padding: 1.5rem 4rem;
        border-radius: 5px;
        font-size: 2rem;
        transition: all 0.3s ease-in-out;
        position: relative;
        transform-origin: right;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateX(-100%);
          background-color: var(--red);
          transition: all 0.3s ease-in-out;
        }

        &:hover::after {
          transition: all 0.3s ease-in-out;
          transform: translateX(0);
        }

        &::before {
          content: "Order Now";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          color: #fff;
          transition: all 0.2s ease-in-out;
          z-index: 10;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        &:hover::before {
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 550px) {
    margin-top: 20rem;
    .container {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      .box {
        width: 100%;
      }
    }
  }
`;
