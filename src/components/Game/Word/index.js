import { Container, Letter } from "./style";

function Word({ letters, win }) {
  return (
    <Container data-identifier="word">
      {letters.map((letter, i) => (
        <Letter win={win} key={i}>
          {letter || ""}
        </Letter>
      ))}
    </Container>
  );
}

export default Word;
