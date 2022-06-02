import styled from "styled-components";
import { useState, useEffect, useContext, useRef} from "react";

const WordsToFindBlocks = ({ quantity }) => {
  //state
  const [array, setArray] = useState(null);
  //ref
  const blockRef = useRef();

  useEffect(() => {
    let arr;
    if (typeof quantity !== "string") {
      arr = new Array(quantity).fill(quantity);
    } else {
      arr = quantity.split("")
    }
    setArray(arr);
  }, [quantity]);

  return (
    <WordsToFindBlocksWrapper>
      {array && array.map((x, index) => {
        return <Block highlight={typeof array[0] == "string"} ref={blockRef}>{typeof x == "string" && x.toUpperCase()}</Block>
      })}
    </WordsToFindBlocksWrapper>
  );
};

export default WordsToFindBlocks;

const WordsToFindBlocksWrapper = styled.div`
  display:flex;
  justify-content: center;
`;
const Block = styled.div`
  background-color: ${props => props.highlight ? "#4320df" : "white"};
  box-shadow: 1px 1px 2px 1px #333;
  height: 20px;
  width: 20px;
  margin-left: 0.25rem;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size:.8rem;
  color:#fff;

  @media screen and (max-width: 450px) {
    height: 15px;
  width: 15px;
  }
`;
