import Layout from "../../components/Shared/Layout/Layout";

function Home(props) {
  return (
    <div>
      <Layout user={props.user} />
    </div>
  );
}

export default Home;
