import Key from "./Key";
import { Container } from "./style";

const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Keyboard() {
  return (
    <Container>
      {keys.map((key) => (
        <Key letter={key} />
      ))}
    </Container>
  );
}
