import { Link } from "react-scroll";
import { useRef } from "react";
import { useInView } from "framer-motion";

//styles
import classes from "./Header.module.css";

//images
import Image from "../../img/water-bulb.webp";

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.header} ref={ref}>
      <div className={classes.headerText}>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in",
          }}
        >
          Pixel Prism
        </h1>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 0.5s",
          }}
        >
          Web Development
        </h1>
        <p
          style={{
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 1s",
          }}
        >
          Together we can bridge the gap between art and technology. Let's grow
          your business or personal brand with a website that leaves a lasting
          impression.
        </p>

        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className={classes.contactBtn}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 1.5s",
          }}
        >
          Get in touch
        </Link>
      </div>
      <div className={classes.svgContainer}>
        <img src={Image} alt="" className={classes.headerSvg} />
      </div>
    </section>
  );
};

export default Header;
