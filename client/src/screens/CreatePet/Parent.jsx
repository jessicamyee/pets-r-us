import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./Parent.css";
import { createPet } from "../../services/pets";

export default class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      name: "",
      breed: "",
      age: "",
      price: "",
      link: "",
      description: "",
      imgURL: "",
      type: "",
      gender: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await createPet(this.state, this.props.user._id);
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="prev-secondary" type="button" onClick={this._prev}>
          Previous
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button className="next-button" type="button" onClick={this._next}>
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>
        <div className="form-header">Add your animal to our community!</div>
        <div className="step-count">Step {this.state.currentStep} of 3!</div>

        <form className="submission-form" onSubmit={this.handleSubmit}>
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            name={this.state.name}
            breed={this.state.breed}
            price={this.state.price}
            gender={this.state.gender}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            age={this.state.age}
            password={this.state.link}
            description={this.state.description}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            imgURL={this.state.imgURL}
            type={this.state.type}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}
