//styles
import "./Focus.css";

//components
import TextInfo from "../../components/TextInfo/TextInfo";
import FocusImage from "../../components/FocusImage/FocusImage";

//images
import bulb from "../../img/bulb-growth.png";
import chimney from "../../img/hand-chimney.png";

const paragraphs = [
  "A stellar user interface leaves a lasting impression on your business and users. I will construct the perfect user interface by making your site interactive and adding subtle animations; all while keeping it simple.",
  "Superior web performance leads to a superior user experience. I will increase performance by speeding up content load time and making your site accessible on all devices.",
];

const Focus = () => {
  return (
    <section className="focus-outer" id="focus">
      <div className="focus">
        <TextInfo
          subtitle="Interface"
          title="Building the User Interface"
          content={paragraphs[0]}
        />
        <div className="focus-element" style={{ gridArea: "b" }}>
          <FocusImage src={bulb} />
        </div>
        <div className="focus-element" style={{ gridArea: "c" }}>
          <FocusImage src={chimney} />
        </div>
        <TextInfo
          subtitle="Efficiency"
          title="Maximizing Site Performance"
          content={paragraphs[1]}
        />
      </div>
    </section>
  );
};

export default Focus;
