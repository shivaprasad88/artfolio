import React from 'react';
import CarouselItem from '../components/carousel-item';

import prCemetary from '../../assets/web-6564.jpg';
import goaDog from '../../assets/web-4150.jpg';

function LandscapePage() {
    return <CarouselItem image={[{ src: goaDog, caption: "A Dog's World" },
    { src: prCemetary, caption: 'Start and End' }]} />
  }


export default LandscapePage;