import styled from "styled-components";
import { useState, useEffect } from "react";

const WordsToFindBlocks = ({ quantity }) => {
  const [array, setArray] = useState(null);

  useEffect(() => {
    const arr = new Array(quantity).fill(quantity);
    setArray(arr);
  }, []);
  return (
    <WordsToFindBlocksWrapper>
      {array && array.map((a) => <Block />)}
    </WordsToFindBlocksWrapper>
  );
};

export default WordsToFindBlocks;

const WordsToFindBlocksWrapper = styled.div`
  display: flex;
  margin-top: 0.25rem;
`;
const Block = styled.div`
  background-color: blue;
  height: 20px;
  width: 20px;
  margin-left: 0.25rem;
`;
