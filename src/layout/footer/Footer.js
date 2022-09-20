import { useRef } from "react";
import { useInView } from "framer-motion";

//styles
import classes from "./Footer.module.css";

//images
import quill from "../../img/quill.png";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const headref = useRef(null);
  const headInView = useInView(ref, { once: true });

  return (
    <section className={classes.footer} id="contact">
      <div className={classes.sectionHeading} ref={headref}>
        <div
          className={classes.footerLinebreak}
          style={{
            transform: headInView ? "none" : "translateX(-30px)",
            opacity: headInView ? 1 : 0,
            transition: "all 0.75s ease-in 0.75s",
          }}
        ></div>
        <img
          src={quill}
          alt="quill"
          style={{
            transform: headInView ? "none" : "translateY(-30px)",
            opacity: headInView ? 1 : 0,
            transition: "all 0.75s ease-in ",
          }}
        />
        <div
          className={classes.footerLinebreak}
          style={{
            transform: headInView ? "none" : "translateX(30px)",
            opacity: headInView ? 1 : 0,
            transition: "all 0.75s ease-in 0.75s",
          }}
        ></div>
      </div>
      <div className={classes.footerText} ref={ref}>
        <h2
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in",
          }}
        >
          What's next?
        </h2>
        <h3
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.1s ease-in",
          }}
        >
          Get in touch
        </h3>
        <p
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in",
          }}
        >
          Please feel free to contact me about any opportunities. Together, we
          can take your business to the next level.
        </p>
        <a
          href="mailto:pixelprism42@gmail.com"
          className={classes.contactBtn}
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 1.5s",
          }}
        >
          Contact
        </a>
      </div>
      <h3 className={classes.email}>Illustration(s) from absurd.design.</h3>
    </section>
  );
};

export default Footer;
