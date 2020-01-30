import React from 'react';
import CarouselItem from '../components/carousel-item';

import prFort from '../../assets/web-6655.jpg';
import goaSelfie from '../../assets/web-2997.jpg';

function PortraitPage() {
  return <CarouselItem image={[{ src: prFort, caption: 'First slide label' },
  { src: goaSelfie, caption: 'Third slide label' }]} />
}


export default PortraitPage;