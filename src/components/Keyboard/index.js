import Key from "./Key";
import { Container, Keys } from "./style";

const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ handleKey, disabledKey }) {
  const keysEl = keys.map((key, i) => (
    <Key
      disabledKey={disabledKey[i]}
      key={i}
      letter={key}
      handleKey={() => handleKey(key)}
    />
  ));

  return (
    <Container>
      <Keys>{keysEl.map((el, i) => (i < 13 ? el : ""))}</Keys>
      <Keys>{keysEl.map((el, i) => (i >= 13 ? el : ""))}</Keys>
    </Container>
  );
}
