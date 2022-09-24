import Key from "./Key";
import { Container } from "./style";

const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard({ handleKey, disabledKey }) {
  return (
    <Container>
      {keys.map((key, i) => (
        <Key
          disabledKey={disabledKey[i]}
          key={i}
          letter={key}
          handleKey={() => handleKey(key)}
        />
      ))}
    </Container>
  );
}
