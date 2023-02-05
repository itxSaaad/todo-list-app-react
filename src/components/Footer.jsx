import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright <a href="https://zaap.bio/itxSaaad">Muhammad Saad</a>{" "}
            &copy; Todo List 2023
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
