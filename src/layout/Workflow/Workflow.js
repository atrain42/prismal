//components
import Phases from "../../components/phases/Phases";

//styles
import "./Workflow.css";

const Workflow = () => {
  return (
    <section className="workflow" id="process">
      <div id="workflow-title">Design Process</div>
      <Phases />
    </section>
  );
};

export default Workflow;
