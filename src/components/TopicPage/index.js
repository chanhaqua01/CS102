import React, { useState } from "react";
import { Container, Card, Row, Col, Button, Pagination } from "react-bootstrap";

import { Redirect } from "react-router-dom";

import "./style.css";

function TopicPage() {
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
    <Container class="topic-page-container">
      <Row>
        <Col>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>KPOP</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="column">
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Giải trí</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="column">
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Thú cưng</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Bóng đá</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="column">
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Âm nhạc</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="column">
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Lịch sử</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Khoa học tự nhiên</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Pagination className="pagination" size="lg">
        {items}
      </Pagination> */}
    </Container>
  );
}

export default TopicPage;
