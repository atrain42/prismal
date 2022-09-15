import { useRef } from "react";
import { useInView } from "framer-motion";
import SingleQuestion from "./SingleQuestion";
import classes from "./Question.module.css";

const questions = [
  {
    id: 1,
    title: "How much do you charge for websites?",
    info: "I have very flexible pricing that is dependent upon the difficulty of the project. I want everyone to have a website, so I am very flexible with my pricing and am willing to negotiate with you.",
  },
  {
    id: 2,
    title: "How long does it take to build my site?",
    info: "I ask you to give me around 1 - 2 weeks to complete your website. For bigger projects that may require interaction with a database, I ask that you give me at least a month.",
  },
  {
    id: 3,
    title: "How do I pick the name of my website?",
    info: "I recommend searching for domain names at namecheap.com. Here you can see which domains are available and how much they cost (typically a domain costs around $20/year).",
  },
  {
    id: 4,
    title: "How do I pay for my website?",
    info: "I accept payments via PayPal, Venmo, Cashapp, and Applepay. I require a deposit of $150 before I begin creating your website.",
  },
];

const Questions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main ref={ref} id="questions">
      <h1 className="white-title">Q & A</h1>
      <div
        className={classes.container}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease-in",
        }}
      >
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </main>
  );
};
export default Questions;
