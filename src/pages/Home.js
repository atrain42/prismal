import React from "react";
import { Header, Workflow, Footer, About, Focus, Promo } from "../layout";

const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Focus />
      <Workflow />
      <Promo />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
