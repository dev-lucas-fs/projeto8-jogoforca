import Game from "./components/Game";
import Guess from "./components/Guess";
import Keyboard from "./components/Keyboard";
import { Container, GlobalStyle } from "./style";

function App() {
  return (
    <>
      <Container>
        <Game />
        <Keyboard />
        <Guess />
      </Container>
    </>
  );
}

export default App;
