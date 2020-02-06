import React from 'react';
import Lightbox from '../components/lightbox';
import PortraitPhotolist from '../components/lists/portrait-photolist'


function PortraitPage() {
  return <Lightbox photolist={PortraitPhotolist}></Lightbox>
}


export default PortraitPage;