//Components
import { Service, AnimatedTextWord } from "../../components";

//styles
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h1 id="about-title">
        <AnimatedTextWord text="Service Spectrum" />
      </h1>
      <Service />
    </section>
  );
};

export default About;
