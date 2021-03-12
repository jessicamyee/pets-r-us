import Layout from "../../components/Shared/Layout/Layout";
import CarouselProvider from "../../components/Carousel/Carousel"
import "./Home.css"

function Home(props) {
  return (
    <Layout user={props.user} >
      <div className="home-body">
      <div>
        <CarouselProvider
        className="home-carousel"/>
      </div>
      <div className="mission">
          Text about mission here.
      </div>
      </div>
    </Layout>
  );
}

export default Home;


