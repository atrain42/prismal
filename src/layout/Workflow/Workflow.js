import "./Workflow.css";
import Phases from "../../components/phases/Phases";
import AnimatedTextWord from "../../components/AnimatedTextWord/AnimatedTextWord";

const Workflow = () => {
  return (
    <section className="workflow" id="process">
      <div id="workflow-title">
        <AnimatedTextWord text="Design Process" />
      </div>
      <Phases />
    </section>
  );
};

export default Workflow;
