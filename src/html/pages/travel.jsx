import React from 'react';
import CarouselItem from '../components/carousel-item';

import prFort from '../../assets/web-6655.jpg';
import prCemetary from '../../assets/web-6564.jpg';
import goaDog from '../../assets/web-4150.jpg';
import goaSelfie from '../../assets/web-2997.jpg';

function TravelPage() {
    return <CarouselItem image={[{ src: prFort, caption: 'First slide label' },
    { src: goaDog, caption: 'Second slide label' },
    { src: goaSelfie, caption: 'Third slide label' },
    { src: prCemetary, caption: 'Fourth slide label' }]} />
  }


export default TravelPage;