import { useRef } from "react";
import { useInView } from "framer-motion";

//styles
import "./Promo.css";

//images
import goggles from "../../img/goggles.webp";

const Promo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="promo">
      <img src={goggles} alt="goggles" />
      <div className="promo-text" ref={ref}>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 0.25s",
          }}
        >
          Draw eyes to your business
        </h1>
        <p
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.75s ease-in 0.75s",
          }}
        >
          As a designer and developer, I understand what it takes to create the
          perfect user interface to enhance your website. Together, we can
          uncover problems in your business and solve them through web
          applications. In short, I solve complex problems with simple
          solutions.
        </p>
      </div>
    </section>
  );
};

export default Promo;
