import { useRef } from "react";
import { useInView } from "framer-motion";

//styles
import "./TextInfo.css";

const TextInfo = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="text-info" ref={ref}>
      <h2
        style={{
          transform: isInView ? "none" : "translateX(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.75s ease-in",
        }}
      >
        {props.subtitle}
      </h2>
      <h1
        style={{
          transform: isInView ? "none" : "translateX(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.75s ease-in 0.33s",
        }}
      >
        {props.title}
      </h1>
      <p
        style={{
          transform: isInView ? "none" : "translateX(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.75s ease-in 0.66s",
        }}
      >
        {props.content}
      </p>
    </div>
  );
};

export default TextInfo;
