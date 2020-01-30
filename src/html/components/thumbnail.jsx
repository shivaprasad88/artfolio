import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function Thumbnail(props) {
    return (
        <Col className="thumbnail" xs={8} sm={6} md={4} lg={3}>
            <LinkContainer to={"/fullscreen/" + props.id}><Link ><Image className="thumbimage" src={props.image.src} rounded /></Link></LinkContainer>
        </Col>
    )
};

export default Thumbnail;

