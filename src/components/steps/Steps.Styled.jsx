import styled from "styled-components";

export const StepsStyled = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .box {
    width: 250px;
    margin: 5% 5% 5% 0;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    h3 {
      font-size: 1.5rem;
      position: absolute;
      bottom: 0;
    }

    img {
      width: 80%;
    }
  }
`;
