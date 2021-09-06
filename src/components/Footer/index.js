import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="footer-col">
            Copyright © 2021 STEAM for Vietnam Foundation. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
