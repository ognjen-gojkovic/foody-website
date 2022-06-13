import styled from "styled-components";

export const SpecialityStyled = styled.section`
  margin: 0 5rem 5rem 5rem;

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
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      border: 1px solid #000;
      gap: 1rem;
      border-radius: 5px;
      box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
      cursor: pointer;

      i {
        font-size: 8rem;
        color: var(--red);
        margin-top: 1rem;
        margin-bottom: 3rem;
      }

      img {
        position: absolute;
        top: -100%;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: all 0.3s ease-in-out;
      }
      .content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 3rem;
        h3 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-align: center;
        }

        p {
          font-size: 2rem;
        }
      }

      &:hover {
        img {
          top: 0;
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
