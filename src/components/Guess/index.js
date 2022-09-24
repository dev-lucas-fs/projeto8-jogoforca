import React, { useState } from "react";
import { Container, Button, Input, Label } from "./style";

function Guess({ guessWord, disabled }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    guessWord(value);
    setValue("");
  }

  return (
    <Container>
      <Label>Já sei a palavra!</Label>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button disabled={disabled} onClick={(e) => handleSubmit(e)}>
        Chutar
      </Button>
    </Container>
  );
}

export default Guess;
