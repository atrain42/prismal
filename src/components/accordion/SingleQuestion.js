import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import classes from "./Question.module.css";

const Question = ({ title, info }) => {
  const [text, setText] = useState("");

  const showTextHandler = () => {
    setText(() => {
      return <p>{info}</p>;
    });
  };

  const hideTextHandler = () => {
    setText("");
  };

  const buttonType = () => {
    if (text === "") {
      return (
        <button className={classes.btn} onClick={showTextHandler}>
          <AiOutlinePlus />
        </button>
      );
    } else {
      return (
        <button className={classes.btn} onClick={hideTextHandler}>
          <AiOutlineMinus />
        </button>
      );
    }
  };

  return (
    <article className={classes.question}>
      <header>
        <h4 onClick={showTextHandler}>{title}</h4>
        {buttonType()}
      </header>
      <p>{text}</p>
    </article>
  );
};

export default Question;
