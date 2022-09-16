import { useRef } from "react";
import { useInView } from "framer-motion";

//styles
import "./SingleService.css";

const SingleService = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="singleService">
      <div className="serviceTitle">
        <img src={props.icon} alt={props.title} className="icon" />
        <div className="textText" ref={ref}>
          <h1
            style={{
              transform: isInView ? "none" : "scale(0.95)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s ease-in 0s",
            }}
          >
            {props.title}
          </h1>
          <p
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.75s ease-in",
            }}
          >
            {props.info}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
