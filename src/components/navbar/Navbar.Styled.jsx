import styled from "styled-components";

export const NavbarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 500;
  width: 100%;
  background: #fff;
  padding: 2rem 10%;
  box-shadow: 0 0.5rem 5px rgba(0, 0, 0, 0.1);

  .logo {
    a {
      font-size: 2.5rem;
      font-weight: bolder;
      color: #666;
      i {
        padding-right: 0.5rem;
        color: var(--red);
      }
    }
  }

  #menu__bars {
    font-size: 3rem;
    cursor: pointer;
    color: #666;
    border: 1px solid #666;
    border-radius: 0.3rem;
    padding: 0.5rem 1.5rem;
    display: none;

    &.active {
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
  }

  .nav {
    .links {
      a {
        margin-left: 2rem;
        font-size: 2rem;
        color: #666;

        &:hover {
          color: var(--red);
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding: 2rem;
  }

  @media screen and (max-width: 768px) {
    #menu__bars {
      display: initial;
    }

    .nav {
      opacity: ${(props) => (props.toggle ? "1" : "0")};
      position: absolute;
      top: 100%;
      left: ${(props) => (props.toggle ? "0" : "-120%")};
      background: #f7f7f7;
      //background: transparent;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      transition: all 0.5s ease-in-out;

      .links {
        a {
          margin: 1.5rem;
          padding: 1.5rem;
          display: block;
          border: 0.2rem solid rgba(0, 0, 0, 0.1);
          border-left: 0.5rem solid var(--red);
          background: #fff;
          transition: background, color, 0.3s ease-in-out;

          &:hover {
            background-color: var(--red);
            color: #fff;
            transition: background, color, 0.3s ease-in-out;
          }
        }
      }
    }
  }
`;
