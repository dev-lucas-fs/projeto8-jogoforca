import { useState } from "react";
import Game from "./components/Game";
import Guess from "./components/Guess";
import Keyboard from "./components/Keyboard";
import { Container, GlobalStyle } from "./style";
import words from "./words";

function randomWord() {
  words.sort(() => Math.random() - 0.5);
  return words[1];
}

function App() {
  const [word, setWord] = useState(randomWord().split(""));
  const [lettersRevealed, setlettersRevealed] = useState(word.map(() => ""));
  const [hideWord, setHideWord] = useState(true);

  function chooseWord() {
    setWord(randomWord().split(""));
    setlettersRevealed(word.map(() => ""));
  }

  return (
    <>
      <Container>
        <Game
          handleChooseWordButton={chooseWord}
          lettersRevealed={lettersRevealed}
          hideWord={hideWord}
        />
        <Keyboard />
        <Guess />
      </Container>
    </>
  );
}

export default App;
