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
  margin-bottom: 1rem;
`;
const GuessedLettersWrapper = styled.div`
height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin:auto;
  background-color:#4320df;
  padding:1rem;
  border-radius:1rem;
  width:100%;
  max-width:550px;
  border:3px solid #4320df;
`;

export default WordEvent;
