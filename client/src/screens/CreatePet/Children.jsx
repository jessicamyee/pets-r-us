


function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="email">Pet Name</label>
      <input
        className="form-control"
        id="name"
        name="name"
        type="text"
        placeholder="Enter pet name"
        value={props.name}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="breed">Breed</label>
      <input
        className="form-control"
        id="breed"
        name="breed"
        type="text"
        placeholder="Enter breed"
        value={props.breed}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <div className="form-group">
      <label htmlFor="age">Age</label>
      <input
        className="form-control"
        id="age"
        name="age"
        type="text"
        placeholder="Enter age"
        value={props.age}
        onChange={props.handleChange}
        />      
    </div>
        );
}
<button className="btn btn-success btn-block">Submit Pet</button>
  );
}






// function Step4(props) {
//   if (props.currentStep !== 4) {
//     return null
//   } 
//   return(
//     <div className="form-group">
//       <label htmlFor="price">Price</label>
//       <input
//         className="form-control"
//         id="price"
//         name="price"
//         type="text"
//         placeholder="Enter price"
//         value={props.price}
//         onChange={props.handleChange}
//         />      
//     </div>
//   );
// }
// function Step5(props) {
//   if (props.currentStep !== 5) {
//     return null
//   } 
//   return(
//     <div className="form-group">
//       <label htmlFor="link">Link</label>
//       <input
//         className="form-control"
//         id="link"
//         name="link"
//         type="link"
//         placeholder="Enter link"
//         value={props.link}
//         onChange={props.handleChange}
//         />      
//     </div>
//   );
// }
//       function Step6(props) {
//   if (props.currentStep !== 6) {
//     return null
//   } 
//   return(
//     <div className="form-group">
//       <label htmlFor="description">Description</label>
//       <input
//         className="form-control"
//         id="description"
//         name="description"
//         type="text"
//         placeholder="Enter description"
//         value={props.description}
//         onChange={props.handleChange}
//         />      
//     </div>
//   );
// }

//      function Step7(props) {
//   if (props.currentStep !== 7) {
//     return null
//   } 
//   return(
//     <div className="form-group">
//       <label htmlFor="imgURL">imgURL</label>
//       <input
//         className="form-control"
//         id="imgURL"
//         name="imgURL"
//         type="text"
//         placeholder="Enter imgURL"
//         value={props.imgURL}
//         onChange={props.handleChange}
//         />      
//     </div>
//   );
// }
//       function Step8(props) {
//   if (props.currentStep !== 8) {
//     return null
//   } 
//   return(
//     <div className="form-group">
//       <label htmlFor="type">type</label>
//       <input
//         className="form-control"
//         id="type"
//         name="type"
//         type="text"
//         placeholder="Enter type"
//         value={props.type}
//         onChange={props.handleChange}
//         />      
//     </div>
//   );
// }