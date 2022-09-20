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
    <div className="phaseOverhang" ref={numref}>
      <div className="phaseTitle">
        <h1>{number}</h1>
        <div className="phaseLinebreak"></div>
        <h1
          style={{
            transform: numInView ? "none" : "translateX(40px)",
            opacity: numInView ? 1 : 0,
            transition: "all 0.5s ease-in",
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
              transition: "all 0.75s ease-in 0.5s",
            }}
          >
            {subtitle}
          </h1>
          <p
            style={{
              transform: isInView ? "none" : "translateX(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s ease-in 1s",
            }}
          >
            {info}
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s ease-in 1.5s",
            }}
          >
            Get started &#8594;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePhase;
