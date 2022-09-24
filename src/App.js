import { useEffect, useState } from "react";
import Game from "./components/Game";
import Guess from "./components/Guess";
import Keyboard from "./components/Keyboard";
import { Container, GlobalStyle } from "./style";
import words from "./words";

function randomWord() {
  words.sort(() => Math.random() - 0.5);
  return words[1];
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function App() {
  const [word, setWord] = useState(randomWord().split(""));
  const [lettersRevealed, setLettersRevealed] = useState(word.map(() => ""));
  const [hideWord, setHideWord] = useState(true);
  const [disabledKey, setDisabledKey] = useState(alphabet.map(() => true));
  const [error, setError] = useState(0);
  const [win, setWin] = useState("black");
  const [plays, setPlays] = useState(0);

  function chooseWord() {
    setWord(randomWord().split(""));
    setLettersRevealed(word.map(() => ""));
    setDisabledKey(alphabet.map(() => false));
    setError(0);
  }

  useEffect(() => {
    if (lettersRevealed.filter((value) => !value).length === 0) {
      setDisabledKey(alphabet.map(() => true));
      setWin("green");
    }
    if (error === 6) {
      setDisabledKey(alphabet.map(() => true));
      setWin("red");
      setLettersRevealed(word);
    }
  }, [plays]);

  function guessLetter(letter) {
    setPlays(plays + 1);
    const letterPosition = word.reduce((prev, curr, i) => {
      if (letter.toUpperCase() === curr.toUpperCase()) prev.push(i);
      return prev;
    }, []);

    disabledKey[alphabet.indexOf(letter.toLowerCase())] = true;
    setDisabledKey([...disabledKey]);
    if (letterPosition.length === 0) setError(error + 1);
    letterPosition.forEach((i) => {
      lettersRevealed[i] = word[i];
      setLettersRevealed([...lettersRevealed]);
    });
  }

  return (
    <>
      <Container>
        <Game
          handleChooseWordButton={chooseWord}
          lettersRevealed={lettersRevealed}
          hideWord={hideWord}
          error={error}
          win={win}
        />
        <Keyboard disabledKey={disabledKey} handleKey={guessLetter} />
        <Guess />
      </Container>
    </>
  );
}

export default App;
