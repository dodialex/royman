import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {
  Logonya,
  LogoGrab,
  LogoShoppe,
  LogoGofood,
  LogoWA,
} from "../../assets";

function Lambok() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="text-center">
            <Image src={Logonya} />
          </Col>
        </Row>
        <br />
        <Row>
          <Button
            style={btnGrab}
            href="https://grab.onelink.me/2695613898?pid=inappsharing&c=6-C2XFTF2HTYDEJ2&is_retargeting=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26sourceID%3DA4pcqCZkS4%26merchantIDs%3D6-C2XFTF2HTYDEJ2&af_force_deeplink=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fdownload"
          >
            <Image src={LogoGrab} style={imgGrab} />
            grabfood
          </Button>
        </Row>

        <br />
        <Row>
          <Button
            style={btnShoppe}
            href="https://shopee.co.id/now-food/shop/20022469?share=undefined&stm_medium=referral&stm_source=https%3A%2F%2Flinktr.ee%2F-rw"
          >
            <Image src={LogoShoppe} style={imgShoppe} />
            shoppe food
          </Button>
        </Row>

        <br />
        <Row>
          <Button
            style={btnGofood}
            href="https://react-bootstrap.github.io/components/buttons/"
          >
            <Image src={LogoGofood} style={imgShoppe} />
            gofood
          </Button>
        </Row>

        <br />
        <Row>
          <Button
            style={btnWA}
            href="https://wa.me/6282114912069?text=Hallo%20Ayam%20Bakar%20Top%20Bintara"
          >
            <Image src={LogoWA} style={imgShoppe} />
            whatsapp
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Lambok;
const imgGrab = {
  marginRight: "20px",
  height: "60px",
  width: "50px",
  backgroundColor: "BAE1FF",
};

const btnGrab = {
  color: "#36332C",
  fontWeight: "bold",
  backgroundColor: "#BAE1FF",
  fontSize: "30px",
  borderRadius: "30px",
  boxShadow: "1px 3px 1px #BAFFC9",
  borderColor: "#BAE1FF",
};

const imgShoppe = {
  marginRight: "20px",
  height: "50px",
  width: "50px",
};

const btnShoppe = {
  color: "#36332C",
  fontWeight: "bold",
  backgroundColor: "#BAFFC9",
  fontSize: "30px",
  borderRadius: "30px",
  boxShadow: "1px 3px 1px #FFB3BA",
  borderColor: "#BAFFC9",
};

const btnGofood = {
  color: "#36332C",
  fontWeight: "bold",
  backgroundColor: "#FFB3BA",
  fontSize: "30px",
  borderRadius: "30px",
  boxShadow: "1px 3px 1px #36332C",
  borderColor: "#FFB3BA",
};

const btnWA = {
  color: "#36332C",
  fontWeight: "bold",
  backgroundColor: "#F5F5F5",
  fontSize: "30px",
  borderRadius: "30px",
  boxShadow: "1px 3px 1px #BAE1FF",
  borderColor: "#F5F5F5",
};
