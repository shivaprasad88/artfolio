import React, { useState } from 'react';
import { Col, Image, Modal, Container, Row } from 'react-bootstrap';

function Lightbox(props) {
    const [show, setShow] = useState(false);
    const [source, setSource] = useState("");
    const [caption, setCaption] = useState("");
    const [index, setIndex] = useState(0);
    const listSize = props.photolist.length
    const handleClose = () => setShow(false);

    function prev() {
        if (index === 0) {
            setIndex(listSize - 1);
            setSource(props.photolist[listSize - 1].src)
            setCaption(props.photolist[listSize - 1].caption)
        }
        else {
            setIndex(index - 1);
            setSource(props.photolist[index - 1].src)
            setCaption(props.photolist[index - 1].caption)
        };

    }

    function next() {

        if (index + 1 === listSize) {
            setIndex(0);
            setSource(props.photolist[0].src)
            setCaption(props.photolist[0].caption)
        }
        else {
            setIndex(index + 1);
            setSource(props.photolist[index + 1].src)
            setCaption(props.photolist[index + 1].caption)
        };
    }
    return (<Container fluid="md" className="image-grid">
        <Row>
            {
                props.photolist.map((function (value, key) {
                    return <Col className="thumbnail" key={key} xs={6} md={4} lg={3}>
                        {/* <LinkContainer to={"/carousel/" + props.tag + "/" + props.id}><Link to={"/carousel/" + props.tag + "/" + props.id}><Image className="thumbimage" src={props.image.src} /></Link></LinkContainer> */}
                        <Image onClick={() => { setShow(true); setSource(value.src); setIndex(key); setCaption(value.caption) }} className="thumbimage" src={value.src} />

                    </Col >

                }))

            }

        </Row>
        <Modal show={show} onHide={handleClose} ><Modal.Header closeButton />

            <Modal.Body>
                <Container >
                    <Row className="justify-content-md-center">
                        <Col xs='auto'>
                            <span className="image-caption">{caption}</span><span className="image-number">{index + 1} / {props.photolist.length}</span>
                            <Image className="d-block mw-100" src={source} />

                        </Col>
                    </Row></Container>


                {/* <!-- Next/previous controls --> */}
                <a className="prev" onClick={prev}>&#10094;</a>
                <a className="next" onClick={next}>&#10095;</a>


            </Modal.Body>
            <Modal.Footer>


                {
                    props.photolist.map((function (value, key) {
                        return <div className="footer-thumbnail" key={key} style={{ width: (100 / props.photolist.length) + "%" }}>
                            {/* <LinkContainer to={"/carousel/" + props.tag + "/" + props.id}><Link to={"/carousel/" + props.tag + "/" + props.id}><Image className="thumbimage" src={props.image.src} /></Link></LinkContainer> */}
                            <Image onClick={() => { setSource(value.src); setIndex(key); setCaption(value.caption) }} className={"thumbimage demo " + (index === key ? "active" : "")} src={value.src} />

                        </div >

                    }))
                }
            </Modal.Footer></Modal>
    </Container >
    )

};




export default Lightbox;

