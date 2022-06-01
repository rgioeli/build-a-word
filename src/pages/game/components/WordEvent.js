import styled from "styled-components";
import GuessedLetter from "./GuessedLetter";
import { useContext } from "react";
import GameContext from "../../../lib/context/gameContext";

const WordEvent = ({ wordData }) => {
  const context = useContext(GameContext);
  return (
    <>
      <WordEventWrapper>
        <GuessedLettersWrapper>
          {context.guessedLetters.length !== 0
            ? context.guessedLetters.map(({ id, letter }) => {
                return <GuessedLetter id={id} letter={letter} />;
              })
            : null}
        </GuessedLettersWrapper>
      </WordEventWrapper>
    </>
  );
};

const WordEventWrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  p {
    font-size: 1.1rem;
    font-weight: bold;
  }
`;
const GuessedLettersWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
`;

export default WordEvent;
