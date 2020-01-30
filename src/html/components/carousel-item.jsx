import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import ExifData from '../components/exif-data';


function CarouselItem(props) {
    const [index, setIndex] = useState(props.active | 0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
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
                        <ExifData image={image} />
                    </Carousel.Caption>
                </Carousel.Item>


            })}


        </ Carousel>
    )
};

export default CarouselItem;

