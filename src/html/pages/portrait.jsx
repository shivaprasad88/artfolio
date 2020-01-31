import React from 'react';
import { Container, Row } from "react-bootstrap";
import Thumbnail from '../components/thumbnail';
import PortraitPhotolist from '../components/lists/portrait-photolist'


function PortraitPage() {
  return <Container fluid="md" className="image-grid">
    <Row>
      {
        PortraitPhotolist.map((function (value, key) {
          return <Thumbnail image={value} id={key} key={key} tag="portrait" />
        }))

      }

    </Row>
  </Container>
}


export default PortraitPage;