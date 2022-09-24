import React from "react";
import { Container, Button, Input, Label } from "./style";

function Guess() {
  return (
    <Container>
      <Label>Já sei a palavra!</Label>
      <Input />
      <Button>Chutar</Button>
    </Container>
  );
}

export default Guess;
