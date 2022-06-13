import styled from "styled-components";

export const ScrollToTopStyled = styled.a`
  opacity: ${(props) => (props.scroll ? "1" : "0")};
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  z-index: 100;

  i {
    font-size: 2rem;
    color: #fff;
  }
`;
