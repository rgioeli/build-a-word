import styled from "styled-components";
import { useContext } from "react";
import GameContext from "../../../lib/context/gameContext";

const GuessedLetter = ({ id, letter }) => {
  const context = useContext(GameContext);
  const handleDeleteLetter = () => {
    context.deleteLetter(id, letter);
  };

  return (
    <GuessedLetterWrapper onClick={handleDeleteLetter}>
      {letter.toUpperCase()}
    </GuessedLetterWrapper>
  );
};

const GuessedLetterWrapper = styled.div`
  height: 75px;
  width: 75px;
  margin-right: 1rem;
  color: #4320df;
  font-weight: bold;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  background-color: #fff;
  border: 5px solid #391cbb;
  border-radius: 1rem;
  cursor: pointer;
`;

export default GuessedLetter;
