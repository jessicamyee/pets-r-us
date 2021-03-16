import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./Parent.css";
import { createPet } from "../../services/pets";
import { withRouter } from 'react-router-dom';

class MasterForm extends React.Component {
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
    const { history } = this.props;
    if(history) history.push('/pets')
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

  _submit = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep === 3;
    this.setState({
      currentStep: currentStep,
    });
  };

  submitButton() {
    if (this.state.currentStep === 3)
    {
      return(
    <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
    )}
  }

  

  render() {

    return (
      <React.Fragment>
        <div className="form-header">Add your animal to our community!</div>
        <div className="step-count">Step {this.state.currentStep} of 3</div>
        <div className="submission-form">
          <form
            className="submission-form-template"
          >
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              name={this.state.name}
              breed={this.state.breed}
              age={this.state.age}
              gender={this.state.gender}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              price={this.state.price}
              link={this.state.link}
              description={this.state.description}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              imgURL={this.state.imgURL}
              type={this.state.type}
            />
            <div className="form-buttons">
              {this.previousButton()}
              {this.nextButton()}
              {this.submitButton()}
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(MasterForm);