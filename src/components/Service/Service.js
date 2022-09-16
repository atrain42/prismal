//Components
import SingleService from "../../components/Service/SingleService";

//styles
import classes from "./Service.module.css";

//images
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
    info: "Take your content creating to the next level with portfolio or blog applications.",
    icon: product,
  },
];

const Service = () => {
  return (
    <section className={classes.service}>
      {data.map((el, index) => (
        <SingleService {...el} key={index} />
      ))}
    </section>
  );
};

export default Service;
