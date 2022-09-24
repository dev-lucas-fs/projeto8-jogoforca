import ChooseWordButton from "./ChooseWordButton";
import Gallows from "./Gallows";
import { Container } from "./style";
import Word from "./Word";

function Game() {
  return (
    <Container>
      <ChooseWordButton />
      <Gallows imageIndex={0} />
      <Word letters={"abacate".split("")} />
    </Container>
  );
}

export default Game;
