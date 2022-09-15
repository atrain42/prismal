import { useRef } from "react";
import { useInView } from "framer-motion";
import { Link } from "react-scroll";

//styles
import "./SinglePhase.css";

const SinglePhase = ({ title, info, img, number, subtitle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numref = useRef(null);
  const numInView = useInView(ref, { once: true });

  return (
    <div className="phaseOverhang">
      <div className="phaseTitle" ref={numref}>
        <h1
          style={{
            transform: numInView ? "none" : "translateX(30px)",
            opacity: numInView ? 1 : 0,
            transition: "all 0.9s ease-in",
          }}
        >
          {number}
        </h1>
        <div
          className="phaseLinebreak"
          style={{
            transform: numInView ? "none" : "translateX(30px)",
            opacity: numInView ? 1 : 0,
            transition: "all 0.9s ease-in 0.25s",
          }}
        ></div>
        <h1
          style={{
            transform: numInView ? "none" : "translateX(30px)",
            opacity: numInView ? 1 : 0,
            transition: "all 0.9s ease-in 1.25s",
          }}
        >
          {title}
        </h1>
      </div>
      <div className="phaseContainer">
        <img src={img} alt={title} />
        <div className="phaseInfo" ref={ref}>
          <h1
            style={{
              transform: isInView ? "none" : "translateX(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s ease-in",
            }}
          >
            {subtitle}
          </h1>
          <p
            style={{
              transform: isInView ? "none" : "translateX(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s ease-in 0.25s",
            }}
          >
            {info}
          </p>
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            Get started &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePhase;
