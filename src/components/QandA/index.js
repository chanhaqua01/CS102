import React, { useState } from "react";
import { Container, Accordion, Button, Pagination } from "react-bootstrap";

import "./style.css";

function QAndAPage() {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  /*TO-DO: handle button click event*/

  return (
    <Container class="qanda-page-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Pagination className="pagination" size="lg">
        {items}
      </Pagination>
    </Container>
  );
}

export default QAndAPage;
