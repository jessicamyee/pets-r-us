import React from "react";
import "./CreatePet.css";
import Layout from "../../components/Shared/Layout/Layout";
import Parent from "./Parent";


const CreatePet = (props) => {

  return (
    <Layout user={props.user} backgroundColor={"#84a59d"}>
      <div className="parent-container">
        <Parent user={props.user} />
        </div>
    </Layout>
  );
};

export default CreatePet;
