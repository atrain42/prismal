import { useRef } from "react";
import { useInView } from "framer-motion";
import classes from "./Service.module.css";
import app from "../../img/app.png";
import cloud from "../../img/cloud.png";
import product from "../../img/product.png";

const data = [
  {
    title: "Frontend Development",
    info: "Together, we can bridge the gap between art and technology.",
    icon: cloud,
  },
  {
    title: "Web Apps & Corporate Sites",
    info: "I will promote your products or services with unique user experiences and impactful designs.",
    icon: app,
  },
  {
    title: "Personal Branding",
    info: "Take your content creating to the next level with interactive portfolio or blog applications.",
    icon: product,
  },
];

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={classes.service} ref={ref}>
      {data.map((el, index) => (
        <div
          className={classes.singleService}
          key={index}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in",
          }}
        >
          <div className={classes.serviceTitle}>
            <img src={el.icon} alt={el.title} className={classes.icon}></img>
            <div className={classes.textText}>
              <h1>{el.title}</h1>
              <p>{el.info}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Service;
