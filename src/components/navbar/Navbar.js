import { useRef } from "react";
import { useInView } from "framer-motion";

//components
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

//styles
import classes from "./Navbar.module.css";

//images
import logo from "../../img/logo.png";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className={classes.nav}
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.75s ease-in",
      }}
    >
      <div className={classes.navOverhang}>
        <div className={classes.homeButton}>
          <img src={logo} alt="logo" id="logo"></img>
        </div>
        <Navigation />
        <MobileNavigation />
      </div>
    </div>
  );
};

export default Navbar;
