import React from "react";
import { FooterStyled } from "./Footer.Styled";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="share">
        <a href="#" className="btn">
          facebook
        </a>
        <a href="#" className="btn">
          twitter
        </a>
        <a href="#" className="btn">
          instagram
        </a>
        <a href="#" className="btn">
          pinterest
        </a>
        <a href="#" className="btn">
          linkedin
        </a>
      </div>

      <h1 className="credits">
        <span>Foody</span> | &copy; {new Date().getFullYear()} All Rights
        Reserved.
      </h1>
    </FooterStyled>
  );
};

export default Footer;
