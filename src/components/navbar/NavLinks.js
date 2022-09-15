import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

//images
import prism from "../../img/prism.png";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -30 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          About
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
      >
        <Link
          to="focus"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Focus
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="process"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Process
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Contact
        </Link>
      </motion.li>
      {props.isMobile && (
        <div className="mobile-nav__bin">
          <img src={prism} alt="prism" className="mobile-nav__image" />
          <h1 className="mobile-nav__copyright">&#169; Pixel Prism</h1>
        </div>
      )}
    </ul>
  );
};

export default NavLinks;
