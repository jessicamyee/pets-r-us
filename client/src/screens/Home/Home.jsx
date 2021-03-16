import Layout from "../../components/Shared/Layout/Layout";
import CarouselProvider from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";
import "./Home.css";
import BackgroundVideo from "../CreatePet/BackgroundVideo";

function Home(props) {
  return (
    <Layout user={props.user} backgroundColor={"#cfdbd5"}>
      <div className="home-container">
        <div>
          <BackgroundVideo />
        </div>
        <div className="home-body">
          <div className="carousel-layout">
            <div className="home-title">Featured Furry Friends</div>
            <div>
              <CarouselProvider className="home-carousel" />
            </div>
          </div>
          <div className="mission-section">
            <div className="mission-header">Our Mission:</div>
            <div className="mission-statement">We are paw<span>&#8209;</span>ssionate about saving these adorable furry<span>&#8209;</span>friends, please consider giving them a fur<span>&#8209;</span>ever home and a second chance at life!
            </div>
            <div>
            <Link to="/pets" className="mission-link">
                Adopt a pet!
            </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
