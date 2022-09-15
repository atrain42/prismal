import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

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
          offset={50}
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
        transition={{ delay: 0.3 }}
      >
        <Link
          to="questions"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Questions
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
          offset={0}
          duration={500}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          Contact
        </Link>
      </motion.li>
    </ul>
  );
};

export default NavLinks;
