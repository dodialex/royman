import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import gambar from '../../assets/gambar/amplop.png';

const Amplop = () => {
    return (
        <Container>
            <Row>
                <Col style={col1}>
                    <Image style={gam} src={gambar} />
                </Col>
            </Row>
        </Container>
    )
}

export default Amplop;
const gam = {
    height: '200px',
    width: '300px'
}
const col1 = {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: '20%',
}
