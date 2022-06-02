import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import GameContext from "../../../lib/context/gameContext";
import { Audio } from "react-loader-spinner";

const GameButtons = () => {
  //context
  const context = useContext(GameContext);
  //state
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleClearWord = () => {
    return context.clearLetters();
  };
  const handleScrambleLetters = () => {
    return context.scrambleLetters();
  };

  const handleSubmitWord = async () => {
    setLoading(true);
    try {
      const word =
        context.guessedLetters.length > 0 &&
        context.guessedLetters.map(({ letter }) => letter).join("");
      const response = await fetch("/api/word", {
        method: "POST",
        body: JSON.stringify({ guess: word }),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await response.json();
      if (data.error) setError(data.error);
      if (data.success) {
        context.updateWordsToFind(data.success);
        context.updatePoints(data.success)
      }
      setLoading(false);
      context.clearLetters();
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <GameButtonsWrapper>
      <SubmitButtonWrapper>
        <SubmitButton disabled={loading} onClick={handleSubmitWord}>
          Submit Word
        </SubmitButton>
        {loading && <Audio width={30} height={30} color={"#4320df"} />}
      </SubmitButtonWrapper>
      <ChoiceButtons>
        <button onClick={handleScrambleLetters}>Scramble Letters</button>
        <button onClick={handleClearWord} style={{ marginLeft: "0.5rem" }}>
          Clear Word
        </button>
      </ChoiceButtons>
    </GameButtonsWrapper>
  );
};

export default GameButtons;

const GameButtonsWrapper = styled.div`
  width: 350px;
`;

const SubmitButtonWrapper = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#25117e" : "#4320df")};
  width: 100%;
  padding: 1rem;
  color: #fff;
  border-radius: 1rem;
  border: 3px solid #4320df;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChoiceButtons = styled.div`
  display: flex;
  button {
    padding: 0.5rem;
    background-color: #fff;
    color: #4320df;
    border-radius: 1rem;
    border: 3px solid #4320df;
  }
`;
