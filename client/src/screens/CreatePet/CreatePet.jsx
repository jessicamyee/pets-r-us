// import React, { useState } from 'react'
import React from 'react';
import "./CreatePet.css";
import Layout from "../../components/Shared/Layout/Layout";
import Parent from "./Parent";
import BackgroundVideo from "./BackgroundVideo";
// import { Redirect } from "react-router-dom";
// import { createPet } from "../../services/pets";


const CreatePet = (props) => {

//   const [isCreated, setCreated] = useState(false)

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const created = await createPet(this.state)
//     setCreated({ created })
// }
//   if (isCreated) {
//     return <Redirect to={`/pets`} />
// }
  return (
    <Layout user={props.user}>
      <Parent />
      <BackgroundVideo />
      
    </Layout>
  );
};

export default CreatePet;
