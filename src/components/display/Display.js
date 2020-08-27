import React from "react";

function Display(props) {
  let status = <div></div>;
  if (props.submitted === true) {
    status = <div id="status" className={props.status}></div>;
  }
  if (props.catagorySelected === false) {
    return (
      <div>
        <h3>Current Score: {props.score}</h3>
        {status}
        <h2>Select Catagory:</h2>
        <div className="Catagories">
          <div className="Category" id="0" onClick={props.selectCatagory}>
            {props.questionsArray.data[0].category.title.toUpperCase()}
          </div>
          <div className="Category" id="1" onClick={props.selectCatagory}>
            {props.questionsArray.data[1].category.title.toUpperCase()}
          </div>
          <div className="Category" id="2" onClick={props.selectCatagory}>
            {props.questionsArray.data[2].category.title.toUpperCase()}
          </div>
        </div>
      </div>
    );
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
          <button>What is </button>
          <input
            type="text"
            name="answer"
            placeholder="Answer Here"
            value={props.answer}
            onChange={props.handleChange}
          />
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
