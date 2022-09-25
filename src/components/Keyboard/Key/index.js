import React from "react";
import { Button, Container } from "./style";

export default function Key({ letter, handleKey, disabledKey }) {
  return (
    <Container data-identifier="letter">
      <Button disabled={disabledKey} onClick={handleKey}>
        {letter}
      </Button>
    </Container>
  );
}
