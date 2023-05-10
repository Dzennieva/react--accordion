import { useState } from "react";
import data from "./data";
import Question from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  // console.log(data)
  return (
    <main>
      <div className="container">
        <h4>Questions and answers about login</h4>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
