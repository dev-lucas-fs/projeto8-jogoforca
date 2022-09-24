import ChooseWordButton from "./ChooseWordButton";
import Gallows from "./Gallows";
import { Container } from "./style";
import Word from "./Word";

function Game({ lettersRevealed, handleChooseWordButton, error, win }) {
  return (
    <Container>
      <ChooseWordButton handleClick={handleChooseWordButton} />
      <Gallows imageIndex={error} />
      <Word win={win} letters={lettersRevealed} />
    </Container>
  );
}

export default Game;
