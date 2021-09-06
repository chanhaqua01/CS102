import React, { useState } from "react";
import { Container, Button, InputGroup, FormControl } from "react-bootstrap";

import "./style.css";

function NewTopicPage() {
  /*TO-DO: handle button click event*/

  return (
    <Container class="new-topic-page-container">
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Default
        </InputGroup.Text>
        <FormControl
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <Button></Button>
    </Container>
  );
}

export default NewTopicPage;
