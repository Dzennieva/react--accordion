import { useState } from "react";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h5 onClick={() => setShowInfo((prev) => !prev)}>{title}</h5>
        <button
          className="show__btn"
          onClick={() => setShowInfo((prev) => !prev)}
        >
          {showInfo ? "-" : "+"}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
