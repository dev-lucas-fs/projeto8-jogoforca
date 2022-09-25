import ChooseWordButton from "./ChooseWordButton";
import Gallows from "./Gallows";
import { Container, Left, Right } from "./style";
import Word from "./Word";

function Game({
  lettersRevealed,
  handleChooseWordButton,
  error,
  win,
  hideWord,
}) {
  return (
    <Container>
      <Left>
        <Gallows imageIndex={error} />
      </Left>

      <Right>
        <ChooseWordButton handleClick={handleChooseWordButton} />
        {!hideWord ? <Word win={win} letters={lettersRevealed} /> : ""}
      </Right>
    </Container>
  );
}

export default Game;
