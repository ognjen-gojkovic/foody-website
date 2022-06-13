import styled from "styled-components";

export const ReviewStyled = styled.section`
  margin: 15rem 5rem 0 5rem;

  .heading {
    text-align: center;
    font-size: 4rem;
    padding: 1rem;
    color: #666;
    text-transform: capitalize;
    margin-bottom: 9rem;

    span {
      color: var(--red);
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
    margin-bottom: 9rem;

    .box {
      width: 350px;
      height: 350px;
      position: relative;
      background-color: #333;
      border: 10px solid white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
      padding: 0 3rem;
      margin-bottom: 7rem;
      //transition: all 3s ease-in-out;
      animation: move 3s ease-in-out infinite;

      img {
        position: absolute;
        top: -25%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 10px solid white;
        object-fit: cover;
      }

      h3 {
        font-size: 3rem;
        color: #fff;
      }

      .stars {
        font-size: 2.5rem;
        color: var(--red);
      }

      p {
        font-size: 1.5rem;
        color: #fff;
      }
    }
  }

  @keyframes move {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
