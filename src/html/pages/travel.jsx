import React from 'react';
import TravelPhotolist from '../components/lists/travel-photolist';
import Lightbox from '../components/lightbox';

function TravelPage() {
  return <Lightbox photolist={TravelPhotolist}></Lightbox>
}


export default TravelPage;