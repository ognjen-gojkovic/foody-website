import React from "react";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Order from "./components/order/Order";
import Popular from "./components/popular/Popular";
import Review from "./components/review/Review";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Speciality from "./components/speciality/Speciality";
import Steps from "./components/steps/Steps";
import { GlobalStyle } from "./utils/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Home />
      <Speciality />
      <Popular />
      <Steps />
      <Gallery />
      <Review />
      <Order />
      <Footer />
    </div>
  );
};

export default App;
