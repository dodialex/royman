import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <p>Wedding</p>
                    <p>Royman Sinaga & </p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        <Col xs={12} md={8}>
                            .col-xs-12 .col-md-8
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                        <Col xs={6} md={4}>
                            .col-xs-6 .col-md-4
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

const Modall = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div style={div}>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Buka Undangan
            </Button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

export default Modall;
const div = {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
}
