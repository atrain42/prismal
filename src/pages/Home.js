import React from "react";

//layout
import Header from "../layout/Header/Header";
import About from "../layout/About/About";
import Focus from "../layout/Focus/Focus";
import Workflow from "../layout/Workflow/Workflow";
import Promo from "../layout/Promo/Promo";
import Footer from "../layout/footer/Footer";

//Components
import Navbar from "../components/navbar/Navbar";

const Home = (props) => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Focus />
      <Workflow />
      <Promo />
      <Footer />
    </>
  );
};

export default Home;
