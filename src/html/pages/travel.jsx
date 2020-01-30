import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Thumbnail from '../components/thumbnail';
import TravelPhotolist from '../components/lists/travel-photolist'


function TravelPage() {
  return <Container fluid="md" className="image-grid">
    <Row>
      <Col xs={12} md={2}><h3>Travel</h3></Col>
      <Col xs={12} md={10}>
        <Container fluid="md">
          <Row>
            {
              TravelPhotolist.map((function (value, key) {
                return <Thumbnail image={value} id={key} key={key} />
              }))

            }

          </Row>
        </Container>
      </Col></Row>
  </Container>



}


export default TravelPage;