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
  background-color: #4320df;
  border: 5px solid #391cbb;
  display:flex;
  margin-right: 0.25rem;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;
  border-radius: 1rem;
  cursor: pointer;

  @media screen and (max-width: 450px) {
    height: 50px;
  width: 50px;
  border-radius: unset;
  font-size:1.1rem;
  }
`;
