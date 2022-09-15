//components
import { Phases, AnimatedTextWord } from "../../components";

//styles
import "./Workflow.css";

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
