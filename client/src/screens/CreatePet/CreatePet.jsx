import React from "react";
import "./CreatePet.css";
import Layout from "../../components/Shared/Layout/Layout";
import Parent from "./Parent";


const CreatePet = (props) => {

  return (
    <Layout user={props.user}>
      <Parent user={props.user} />
      <img
        className="form-images"
        src="https://images.unsplash.com/photo-1560967560-2a19f2ca05b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80"
        alt="Running Buddy on the beach"
      />
 
    </Layout>
  );
};

export default CreatePet;
