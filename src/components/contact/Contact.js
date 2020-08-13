import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChane = (event) => {
    let formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
  };

  resetForm = (Event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="Contact">
          <p>
            Thank you, {this.state.formData.firstName}, for joining The
            Resistance{" "}
          </p>
          <button onClick={this.resetForm}>Reset</button>
        </div>
      );
    }
    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit} action="">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.formData.firstName}
              onChange={this.handleChane}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.formData.lastName}
              onChange={this.handleChane}
            />
          </div>
          <button>Submit Form</button>
        </form>

        <div>
          {this.state.formData.firstName}
          <br />
          {this.state.formData.lastName}
        </div>
      </div>
    );
  }
}

export default Contact;
