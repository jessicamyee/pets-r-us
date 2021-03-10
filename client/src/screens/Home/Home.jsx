import Layout from "../../components/Shared/Layout/Layout";
import PetCards from "../../components/PetCards/PetCards"

function Home(props) {
  return (
    <Layout user={props.user} >
      <div>
        <PetCards />
      </div>
      <div className="mission">
        Text about mission here.
      </div>
    </Layout>
  );
}

export default Home;
