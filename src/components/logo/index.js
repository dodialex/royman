import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import gambar from "../../assets/gambar/amplop.png";

const Logo = () => {
  return (
    <Container>
      <Row>
        <Col style={col1}>
          <Image style={gam} src={gambar} />
        </Col>
      </Row>
    </Container>
  );
};

export default Logo;
