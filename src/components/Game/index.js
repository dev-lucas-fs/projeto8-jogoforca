import ChooseWordButton from "./ChooseWordButton";
import Gallows from "./Gallows";
import { Container } from "./style";
import Word from "./Word";

function Game({ lettersRevealed, handleChooseWordButton }) {
  return (
    <Container>
      <ChooseWordButton handleClick={handleChooseWordButton} />
      <Gallows imageIndex={0} />
      <Word letters={lettersRevealed} />
    </Container>
  );
}

export default Game;
