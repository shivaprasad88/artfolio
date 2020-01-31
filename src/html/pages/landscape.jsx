import React from 'react';
import { Container, Row } from "react-bootstrap";
import Thumbnail from '../components/thumbnail';
import LandscapePhotolist from '../components/lists/landscape-photolist'


function LandscapePage() {
  return <Container fluid="md" className="image-grid">
    <Row>
      {
        LandscapePhotolist.map((function (value, key) {
          return <Thumbnail image={value} id={key} key={key} tag="landscape" />
        }))

      }

    </Row>
  </Container>
}


export default LandscapePage;