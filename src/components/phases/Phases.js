//components
import SinglePhase from "./SinglePhase";

//styles
import classes from "./Phases.module.css";

//images
import img1 from "../../img/research-bro2.webp";
import img2 from "../../img/website-bro.webp";
import img3 from "../../img/create-bro.webp";

const alerts = [
  {
    id: 1,
    title: "Research",
    subtitle: "Understanding the issue",
    info: "Understand the client's needs and explore solutions to their problems or desires. Create a plan to address the specific customer's needs and requirements.",
    img: img1,
    number: "01",
  },
  {
    id: 2,
    title: "Design",
    subtitle: "Creating a solution",
    info: "Often thought of as the appearance of a web application, but it goes much deeper than that. Aside from looks, it covers technical research that is required to build your site and give it an edge in the marketplace.",
    img: img2,
    number: "02",
  },
  {
    id: 3,
    title: "Develop",
    subtitle: "Solving the problem",
    info: "Information uncovered from the design and research phases is then merged into the development of your site; this includes materials, best practices, and technological methods.",
    img: img3,
    number: "03",
  },
];

const Phases = () => {
  return (
    <section className={classes.phase}>
      {alerts.map((phase) => {
        return <SinglePhase key={phase.id} {...phase} />;
      })}
    </section>
  );
};

export default Phases;
