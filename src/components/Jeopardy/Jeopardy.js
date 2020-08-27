import React, { Component } from "react";
import "./Jeopardy.css";
//import our service
import JeopardyService from "../../services/jeopardyService";
import Display from "../display/Display";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answer: "",
      submitted: false,
      status: "",
      questionsArray: [],
      catagorySelected: false,
      previousAnswer: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion(3).then((result) => {
      this.setState({
        data: result.data[0],
        questionsArray: result,
      });
    });
  }

  selectCatagory = (event) => {
    let index = Number(event.target.id);
    this.setState({
      data: this.state.questionsArray.data[index],
      catagorySelected: true,
    });
  };

  handleChange = (event) => {
    let answer = this.state.answer;
    answer = event.target.value;
    this.setState({ answer });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.answer === this.state.data.answer) {
      console.log("working");
      this.setState((state) => ({
        answer: "",
        score: state.score + this.state.data.value,
        submitted: true,
        status: "Correct",
        catagorySelected: false,
      }));
      return this.getNewQuestion();
    }
    this.setState((state) => ({
      answer: "",
      score: state.score - this.state.data.value,
      submitted: true,
      status: "Incorrect",
      previousAnswer: this.state.data.answer,
      catagorySelected: false,
    }));
    this.getNewQuestion();
  };

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
    // this.setState({ catagorySelected: true });
  }
  //display the results on the screen
  render() {
    if (this.state.data.category === undefined) {
      return (
        <div className="loading">
          <h3>Loading...</h3>
        </div>
      );
    }

    return (
      <Display
        catagorySelected={this.state.catagorySelected}
        selectCatagory={this.selectCatagory}
        questionsArray={this.state.questionsArray}
        status={this.state.status}
        submitted={this.state.submitted}
        score={this.state.score}
        title={this.state.data.category.title}
        question={this.state.data.question}
        value={this.state.data.value}
        answer={this.state.answer}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        catagoryPicked={this.state.catagorySelected}
        previousAnswer={this.state.previousAnswer}
      />
    );
  }
}
export default Jeopardy;
