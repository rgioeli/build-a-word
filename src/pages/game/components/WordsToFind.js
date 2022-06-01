import styled from "styled-components";
import GameContext from "../../../lib/context/gameContext";
import { useContext } from "react";
import WordsToFindBlocks from "./WordsToFindBlocks";

const WordsToFind = () => {
  const context = useContext(GameContext);
  return (
    <WordsToFindWrapper>
      {context.wordsToFind &&
        context.wordsToFind.map(
          (quantity) =>
            quantity?.length > 0 &&
            quantity.map((num) => <WordsToFindBlocks quantity={num} />)
        )}
    </WordsToFindWrapper>
  );
};

export default WordsToFind;

const WordsToFindWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
`;
