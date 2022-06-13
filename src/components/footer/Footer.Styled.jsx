import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .share {
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 1rem;

    .btn {
      display: flex;
      width: 180px;
      height: 50px;
      border: 2px solid var(--red);
      color: var(--red);
      text-decoration: none;
      border-radius: 5px;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease-in-out;
      font-size: 2rem;
      margin-top: 2rem;

      &:hover {
        background-color: var(--red);
        color: #fff;
      }
    }
  }

  .credits {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    margin: 2rem 0 5rem 0;

    span {
      color: var(--red);
      letter-spacing: 1.5px;
    }
  }
`;
