import React from 'react';
import Lightbox from '../components/lightbox';
import LandscapePhotolist from '../components/lists/landscape-photolist'


function LandscapePage() {
  return <Lightbox photolist={LandscapePhotolist}></Lightbox>
}


export default LandscapePage;