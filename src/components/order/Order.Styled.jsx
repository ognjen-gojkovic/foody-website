import styled from "styled-components";

export const OrderStyled = styled.section`
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

  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 1rem;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.2);
    gap: 1rem;

    .image {
      width: 600px;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    }

    form {
      height: 100%;
      display: flex;
      flex-direction: column;

      .controller {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        gap: 2rem;
        input {
          width: 300px;
          height: 60px;
          border: 1px solid var(--red);
          border-radius: 5px;
          padding-left: 10px;
        }
      }

      textarea {
        width: 100%;
        padding-left: 10px;
        padding-top: 10px;
        border: 1px solid var(--red);
        border-radius: 5px;
      }

      .btn {
        margin-top: 2rem;
        width: 180px;
        height: 60px;
        text-align: center;
        border: 2px solid var(--red);
        color: var(--red);
        font-size: 2rem;
        border-radius: 5px;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: var(--red);
          color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 1350px) {
    .row {
      .image {
        width: 100%;
      }

      form {
        width: 100%;
        .controller {
          input {
            width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .row {
      .image {
        width: 100%;
      }

      form {
        width: 100%;
        .controller {
          flex-wrap: wrap;
          input {
            width: 100%;
          }
        }

        .btn {
          width: 100%;
        }
      }
    }
  }
`;
