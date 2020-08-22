import React from "react";

function Display(props) {
  let status = <div></div>;
  if (props.submitted === true) {
    status = <div className={props.status}></div>;
  }

  return (
    <div className="Jeopardy">
      <h3>Current Score: {props.score}</h3>
      <h2>Category: {props.title}</h2>
      <h2>Question: {props.question}</h2>
      <h4>Worth:{props.value} Points</h4>
      {status}
      <div className="answerSpace">
        <form onSubmit={props.handleSubmit} action="">
          <input
            type="text"
            name="answer"
            value={props.answer}
            onChange={props.handleChange}
          />
          <button>Is That Your Final Answer?</button>
        </form>
      </div>
      <h6>warning leaving this page will reset your score.</h6>
      <h6>
        Questions are case sensitive and not controlled by the app maker,
        <br />
        please direct all complaints to the following link:
        <br />
        <a
          className="complaints"
          href="https://www.youtube.com/watch?v=oHg5SJYRHA0"
        >
          Sorry You Didn't Enjoy
        </a>
      </h6>
    </div>
  );
}

export default Display;
