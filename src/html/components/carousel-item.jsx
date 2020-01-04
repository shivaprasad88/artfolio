import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';


function CarouselItem(props) {
    return (
        <Carousel>
            {props.image.map(function (image, key) {
                return <Carousel.Item key={key} className="image-layout">
                    <Container >
                        <Row className="justify-content-md-center">
                            <Col />
                            <Col xs='auto'>
                                <img
                                    className="d-block w-100"
                                    src={image.src}
                                    alt="First slide"
                                />

                            </Col>
                            <Col />
                        </Row></Container>
                        <Carousel.Caption>
                        <h4>{image.caption}</h4>
                        <p>{key + 1}/{props.image.length}</p>
                    </Carousel.Caption>
                </Carousel.Item>


            })}


        </Carousel>
    )
};

export default CarouselItem;

