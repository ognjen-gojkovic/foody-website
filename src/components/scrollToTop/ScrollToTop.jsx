import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { ScrollToTopStyled } from "./ScrollToTop.Styled";

const ScrollToTop = () => {
  const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <ScrollToTopStyled href="#" scroll={scroll}>
      <i>
        <FaChevronUp />
      </i>
    </ScrollToTopStyled>
  );
};

export default ScrollToTop;
