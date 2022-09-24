import Game from "./components/Game";
import Keyboard from "./components/Keyboard";
import { Container, GlobalStyle } from "./style";

function App() {
  return (
    <>
      <Container>
        <Game />
        <Keyboard />
      </Container>
    </>
  );
}

export default App;
