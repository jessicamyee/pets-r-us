import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import React from "react"
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><img src="https://underworldkennels.com/wp-content/uploads/2020/01/Belgian_Malinois_puppy-e1578952894928.png" alt="animal"/></Slide>    
          <Slide index={1}><img src="http://www.ragdoll-breeder.com/graphics/gallery_files/boots.jpg" alt="animal"/></Slide>
          <Slide index={2}><img src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/48885469/1/?bust=1614728729&width=720" alt="animal"/></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup></DotGroup>
      </CarouselProvider>
    );
  }
}