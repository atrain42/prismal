//Components
import Service from "../../components/Service/Service";
import AnimatedTextWord from "../../components/AnimatedTextWord/AnimatedTextWord";

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
