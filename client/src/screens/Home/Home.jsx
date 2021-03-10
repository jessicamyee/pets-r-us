import Layout from "../../components/Shared/Layout/Layout"
import React from 'react';

function Home(props) {
  return (
    <div>
      <Layout user={props.user} />
    </div>
  );
}

export default Home;