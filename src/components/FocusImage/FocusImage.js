import { useRef } from "react";
import { useInView } from "framer-motion";

//styles
import "./FocusImage.css";

const FocusImage = ({ src }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <img
      src={src}
      alt="graphic"
      className="focus-image"
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(1.1)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s ease-in",
      }}
    />
  );
};

export default FocusImage;
