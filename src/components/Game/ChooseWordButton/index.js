import { Button } from "./style";

function ChooseWordButton({ handleClick }) {
  return (
    <Button data-identifier="choose-word" onClick={handleClick}>
      Escolher Palavra
    </Button>
  );
}

export default ChooseWordButton;
