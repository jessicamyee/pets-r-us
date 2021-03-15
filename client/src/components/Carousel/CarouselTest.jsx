
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import React from "react";
import 'pure-react-carousel/dist/react-carousel.es.css';
import './Carousel.css'
import axios from 'axios'


export default class CarouselTest extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      pet: <img
      className="carousel-image"
      src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/50708836/1/?bust=1615398914&width=1080"
        alt="animal" />
      // hard coding first pet above
    }
    this.getRandom = this.getRandom.bind(this)
  }
  getRandom() {
    axios.get("randomize here?!?!!?")
      .then(response => {
      this.setState({pet: response.data})
      }) .catch (error => {
      console.log(error)
    })
  }

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={6}
      >
        <Slider>
          <Slide index={0}>{this.state.pet}</Slide>
          <Slide index={1}></Slide>
          <Slide index={2}></Slide>
          <Slide index={3}></Slide>
          <Slide index={4}></Slide>
          <Slide index={5}></Slide>
        </Slider>
        <ButtonBack>&#171;</ButtonBack>
        <ButtonNext onClick={this.getRandom}>&#187;</ButtonNext>
        <DotGroup></DotGroup>
      </CarouselProvider>
    );
  }
}