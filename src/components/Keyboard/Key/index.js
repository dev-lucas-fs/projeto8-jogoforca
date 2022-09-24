import React from "react";
import { Button, Container } from "./style";

export default function Key({ letter, handleKey }) {
  return (
    <Container>
      <Button onClick={handleKey}>{letter}</Button>
    </Container>
  );
}
