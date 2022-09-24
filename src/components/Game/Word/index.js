import { Container, Letter } from "./style";

function Word({ letters }) {
  return (
    <Container>
      {letters.map((letter, i) => (
        <Letter key={i}>{letter || ""}</Letter>
      ))}
    </Container>
  );
}

export default Word;
