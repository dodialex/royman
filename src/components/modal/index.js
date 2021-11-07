import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { AyatAlkitab, Mapnya } from '..';
import { GambarB, GambarC, GambarTitle } from '../../assets';

function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <img src={GambarTitle} alt='titleModal' />
                </Modal.Title>
            </Modal.Header>
            <br />
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={GambarB} />
            </Card>
            <AyatAlkitab />
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={GambarC} />
            </Card>
            <div style={cardMap}>
                <Mapnya />
            </div>

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
const cardMap = {
    height: '500px',
    alignItems: 'center',
}
