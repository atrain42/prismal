import React from "react";

//layout
import { Header, Workflow, Footer, About, Focus, Promo } from "../layout";

const Home = (props) => {
  return (
    <>
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
