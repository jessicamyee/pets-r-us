// import React, { useState } from 'react'
import React from "react";
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
      <Parent user={props.user} />
      <BackgroundVideo />
      <div className="brand-statement">
        Ipsum est ad anim ad commodo. Et dolore do reprehenderit dolore. Labore
        laborum do non sit labore deserunt ipsum labore excepteur id velit. Ex
        sit ea irure dolore laborum eiusmod adipisicing duis excepteur et. Sit
        excepteur veniam commodo ipsum duis exercitation quis. Est tempor
        exercitation ex est anim magna ut veniam consequat. Aute ex elit culpa
        aute cupidatat anim do est laborum laborum laboris aliquip laborum.
      </div>
      <img
        className="form-images"
        src="https://images.unsplash.com/photo-1560967560-2a19f2ca05b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80"
      />
      <img
        className="form-images"
        src="https://images.unsplash.com/photo-1601758124360-86f5a0432c42?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGV0JTIwb3duZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <img
        className="form-images"
        src="https://images.unsplash.com/photo-1592951117908-4acda89ee817?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHBldCUyMG93bmVyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <img
        className="form-images"
        src="https://images.unsplash.com/photo-1540411003967-af56b79be677?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBldCUyMG93bmVyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
      <img
        className="form-images"
        src="https://images.unsplash.com/photo-1601758124331-9410bf99002f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHBldCUyMG93bmVyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
    </Layout>
  );
};

export default CreatePet;
