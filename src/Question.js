import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [bool, setBool] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setBool(!bool)}>
          {bool ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{bool && <p>{info}</p>}</p>
    </article>
  );
};

export default Question;
