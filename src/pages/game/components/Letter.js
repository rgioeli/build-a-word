import styled from "styled-components";
import { useContext } from "react";
import GameContext from "../../../lib/context/gameContext";

const Letter = ({ id, letter }) => {
  const context = useContext(GameContext);

  const handleWordUpdate = () => {
    context.guessLetter({ id, letter });
    context.takeAwayLetter(id);
  };

  return (
    <LetterWrapper onClick={handleWordUpdate}>
      {letter.toUpperCase()}
    </LetterWrapper>
  );
};

export default Letter;

const LetterWrapper = styled.div`
  height: 75px;
  width: 75px;
  margin-right: 1rem;
  background-color: #4320df;
  border: 5px solid #391cbb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;
`;
