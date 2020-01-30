import React from 'react';
import { Container, Row } from "react-bootstrap";
import Thumbnail from '../components/thumbnail';
import TravelPhotolist from '../components/lists/travel-photolist'


function TravelPage() {
  return <Container fluid="md" className="image-grid">
    <Row>
      {
        TravelPhotolist.map((function (value, key) {
          return <Thumbnail image={value} id={key} key={key} />
        }))

      }

    </Row>
  </Container>
}


export default TravelPage;