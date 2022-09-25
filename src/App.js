import { useEffect, useState } from "react";
import Game from "./components/Game";
import Guess from "./components/Guess";
import Keyboard from "./components/Keyboard";
import { Container, GlobalStyle } from "./style";
import words from "./words";

function randomWord() {
  words.sort(() => Math.random() - 0.5);
  return words[1].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function App() {
  const [word, setWord] = useState([]);
  const [lettersRevealed, setLettersRevealed] = useState(word.map(() => ""));
  const [hideWord, setHideWord] = useState(true);
  const [disabledKey, setDisabledKey] = useState(alphabet.map(() => true));
  const [disabledGuessButton, setDisabledGuessButton] = useState(true);
  const [error, setError] = useState(0);
  const [win, setWin] = useState("black");

  function chooseWord() {
    const newWord = randomWord().split("");
    setWord(newWord);
    setLettersRevealed(newWord.map(() => ""));
    setDisabledKey(alphabet.map(() => false));
    setError(0);
    setWin("black");
    setDisabledGuessButton(false);
    setHideWord(false);
  }

  useEffect(() => {
    if (lettersRevealed.filter((value) => !value).length === 0) {
      setDisabledKey(alphabet.map(() => true));
      setWin("green");
      setDisabledGuessButton(true);
    }
    if (error === 6) {
      setDisabledKey(alphabet.map(() => true));
      setWin("red");
      setLettersRevealed(word);
      setDisabledGuessButton(true);
    }
  }, [lettersRevealed]);

  function guessLetter(letter) {
    const letterPosition = word.reduce((prev, curr, i) => {
      if (letter.toUpperCase() === curr.toUpperCase()) prev.push(i);
      return prev;
    }, []);

    disabledKey[alphabet.indexOf(letter.toLowerCase())] = true;
    setDisabledKey([...disabledKey]);

    if (letterPosition.length === 0) setError(error + 1);
    letterPosition.forEach((i) => {
      lettersRevealed[i] = word[i];
    });
    setLettersRevealed([...lettersRevealed]);
  }

  function guessWord(userWord) {
    if (userWord.toLowerCase() === word.join("").toLowerCase()) {
      setWin("green");
    } else {
      setError(6);
      setWin("red");
    }
    setDisabledKey(alphabet.map(() => true));
    setLettersRevealed(word);
    setDisabledGuessButton(true);
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
        <Guess
          hideWord={hideWord}
          disabled={disabledGuessButton}
          guessWord={guessWord}
        />
      </Container>
    </>
  );
}

export default App;
