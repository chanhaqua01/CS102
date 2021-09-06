import React, { useState } from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

import "./style.css";

function DetailPage() {
  /*TO-DO: handle button click event*/
  return (
    <Container class="detail-page-container">
      <ListGroup>
        <ListGroup.Item>trau</ListGroup.Item>
        <ListGroup.Item>tre</ListGroup.Item>
        <ListGroup.Item>ti</ListGroup.Item>
        <ListGroup.Item>suu</ListGroup.Item>
        <ListGroup.Item>dan</ListGroup.Item>
        <ListGroup.Item>meo</ListGroup.Item>
        <ListGroup.Item>thin</ListGroup.Item>
        <ListGroup.Item>ty</ListGroup.Item>
        <ListGroup.Item>ngo</ListGroup.Item>
        <ListGroup.Item>mui</ListGroup.Item>
      </ListGroup>
      <Button variant="primary">Tham gia</Button>
    </Container>
  );
}

export default DetailPage;
