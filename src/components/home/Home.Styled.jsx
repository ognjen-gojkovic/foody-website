import styled from "styled-components";

export const HomeStyled = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;

  .content {
    flex: 1;
    margin: 20px;
    padding: 0 0 0 10%;

    h2 {
      font-size: 5rem;
      margin-bottom: 20px;
      text-align: center;
    }

    p {
      font-size: 2rem;
    }

    a {
      margin: 30px 0 0 30px;
      display: block;
      width: 180px;
      height: 60px;
      outline: none;
      border: 2px solid var(--red);
      border-radius: 10px;
      font-size: 2rem;
      color: var(--red);
      text-decoration: none;
      text-align: center;
      padding-top: calc(30px - 16px);
      transition: color, background-color, 0.3s ease-in-out;

      &:hover {
        color: #fff;
        background-color: var(--red);
      }
    }
  }

  .img {
    flex: 1;
    margin: 20px;
    display: flex;
    justify-content: center;

    img {
      height: 500px;
      width: 400px;
      border-radius: 70% 30% 21% 79% / 34% 53% 47% 66%;
      animation: burger 4s infinite ease-in-out;
    }
  }

  @keyframes burger {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(7%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 991px) {
    margin-top: 0;

    .content {
      h2 {
        font-size: 4rem;
      }

      p {
        font-size: 16px;
      }
    }

    .img {
      transform: scale(0.7);
    }
  }

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    flex-direction: column;
    display: flex;

    .content {
      order: 2;
      margin: 0;
    }

    .img {
      order: 1;
    }
  }
`;
