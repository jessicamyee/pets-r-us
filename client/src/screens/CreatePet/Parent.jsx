// import React, { useState } from "react";

// class MasterForm extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       currentStep: 1,
//       name:  '',
//       breed: '',
//       age: '',
//       price: '',
//       link: '',
//       description: '',
//       imgURL: '',
//       type: '',
//     }
//   }

//   handleChange = event => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })    
//   }
   
//   handleSubmit = event => {
//     event.preventDefault()
//     const { name, breed, age, price, link, description, imgURL, type } = this.state
//     alert(`Your ANIMAL detail: \n 
//            Name: ${name} \n 
//            Breed: ${breed} \n
//            Age: ${age} \n
//            Price: ${price} \n
//            Link: ${link} \n
//            Description: ${description} \n
//            imgURL: ${imgURL} \n
//            Type: ${type} \n`
//            )
//   }
  
//   _next = () => {
//     let currentStep = this.state.currentStep
//     // here there are more than two options so use an if statement rather than a ternary
//     currentStep = currentStep >= 2 ? 8: currentStep + 1
//     this.setState({
//       currentStep: currentStep
//     })
//   }
    
//   _prev = () => {
//     let currentStep = this.state.currentStep
//     currentStep = currentStep <= 1 ? 1: currentStep - 1
//     this.setState({
//       currentStep: currentStep
//     })
//   }

// /*
// * the functions for our button
// */
// previousButton() {
//   let currentStep = this.state.currentStep;
//   if(currentStep !==1){
//     return (
//       <button 
//         className="btn btn-secondary" 
//         type="button" onClick={this._prev}>
//       Previous
//       </button>
//     )
//   }
//   return null;
// }

// nextButton(){
//   let currentStep = this.state.currentStep;
//   if(currentStep <8){
//     return (
//       <button 
//         className="btn btn-primary float-right" 
//         type="button" onClick={this._next}>
//       Next
//       </button>        
//     )
//   }
//   return null;
// }
  
//   render() {    
//     return (
//       <React.Fragment>
//       <h1>Add your pup to our community!</h1>
//       <p>Step {this.state.currentStep} </p> 

//       <form onSubmit={this.handleSubmit}>
//       {/* 
//         render the form steps and pass required props in
//       */}
//         <Step1 
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           name={this.state.name}
//         />
//         <Step2 
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           breed={this.state.breed}
//         />
//         <Step3
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           price={this.state.price}
//         />
//         <Step4
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           age={this.state.age}
//         />
//         <Step5
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           password={this.state.link}
//         />
//         <Step6
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           description={this.state.description}
//         />
//         <Step7
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           imgURL={this.state.imgURL}
//         />
//         <Step8
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           type={this.state.type}
//         />
          
//         {this.previousButton()}
//         {this.nextButton()}

//       </form>
//       </React.Fragment>
//     );
//   }
// }

// export default Parent