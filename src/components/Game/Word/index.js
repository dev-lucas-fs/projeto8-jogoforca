import { Container, Letter } from "./style";

function Word({ letters, win }) {
  return (
    <Container>
      {letters.map((letter, i) => (
        <Letter win={win} key={i}>
          {letter || ""}
        </Letter>
      ))}
    </Container>
  );
}

export default Word;
