import styled from "styled-components";
import Letter from "./Letter";
import { useContext } from "react";
import GameContext from "../../../lib/context/gameContext";

const ChooseLetters = () => {
  const context = useContext(GameContext);
  return (
    <ChooseLettersWrapper>
      {context.availableLetters &&
        context.availableLetters.map(({ id, letter }) => {
          return <Letter id={id} letter={letter} />;
        })}
    </ChooseLettersWrapper>
  );
};

export default ChooseLetters;

const ChooseLettersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid green;
  height: 85px;
  width: 100%;
`;
