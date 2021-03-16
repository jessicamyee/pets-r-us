import React from "react";
import "./CreatePet.css";
import Layout from "../../components/Shared/Layout/Layout";
import Parent from "./Parent";


const CreatePet = (props) => {

  return (
    <Layout user={props.user}>
      <Parent user={props.user} />
    </Layout>
  );
};

export default CreatePet;
