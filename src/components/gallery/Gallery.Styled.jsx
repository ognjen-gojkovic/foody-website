import styled from "styled-components";

export const GalleryStyled = styled.section`
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
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;

    .box {
      width: 100%;
      height: 400px;
      overflow: hidden;
      position: relative;
      border-radius: 5px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        background: #e9e9e99f;
        transform: translateY(-100%);
        transition: all 0.3s ease-in-out;

        h3 {
          text-transform: capitalize;
          font-size: 4rem;
          margin-bottom: 2rem;
        }

        p {
          font-size: 2rem;
          margin: 0 4rem 3rem;
        }

        a {
          display: block;
          padding: 1rem 4rem;
          font-size: 2rem;
          color: var(--red);
          border: 2px solid var(--red);
          border-radius: 5px;
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: var(--red);
            color: #fff;
          }
        }
      }

      //box hover
      &:hover {
        .content {
          transform: translateY(0);
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
