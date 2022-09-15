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
            transform: numInView ? "none" : "translateX(10px)",
            opacity: numInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          {number}
        </h1>
        <div
          className="phaseLinebreak"
          style={{
            transform: numInView ? "none" : "translateX(10px)",
            opacity: numInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s",
          }}
        ></div>
        <h1
          style={{
            transform: numInView ? "none" : "translateX(10px)",
            opacity: numInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          {title}
        </h1>
      </div>
      <div className="phaseContainer" ref={ref}>
        <img src={img} alt={title} />
        <div className="phaseInfo">
          <h1
            style={{
              transform: isInView ? "none" : "translateX(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            {subtitle}
          </h1>
          <p
            style={{
              transform: isInView ? "none" : "translateX(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
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
