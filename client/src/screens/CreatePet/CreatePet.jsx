import React from "react";
import "./CreatePet.css";
import Layout from "../../components/Shared/Layout/Layout";
import Parent from "./Parent";

const CreatePet = (props) => {
  return (
    <Layout user={props.user}>
      <Parent />
    </Layout>
  );
};

export default CreatePet;
