import styled from "styled-components";
import Scoreboard from "./Scoreboard";
import WordEvent from "./WordEvent";
import { useState } from "react";
import ChooseLetters from "./ChooseLetters";
import GameButtons from "./GameButtons";
import WordsToFind from "./WordsToFind";

const GameBoard = ({user}) => {
  return (
    <GameBoardWrapper>
      <Scoreboard user={user} />
      <WordsToFind />
      <LettersWrapper>
        <WordEvent />
        <ChooseLetters />
      </LettersWrapper>
      <GameButtons />
    </GameBoardWrapper>
  );
};

export default GameBoard;

const GameBoardWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const LettersWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
`;
