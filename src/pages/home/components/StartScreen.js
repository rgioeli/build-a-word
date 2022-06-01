import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";

const StartScreen = () => {
  //state
  const [gamertag, setGamertag] = useState("");
  const [error, setError] = useState("");
  //router
  const router = useRouter();

  const handleChange = (e) => {
    const val = e.target.value;
    const regexp = /[^\w]/g;
    const test = regexp.test(val);
    if (test) {
      setError(
        "Gamertags may only include alphanumeric characters and be at least 3 characters long (no spaces or special characters)."
      );
    } else {
      setError("");
    }
    setGamertag(val);
  };

  const handleRouter = () => {
    document.cookie = `gamertag=${gamertag}`;
    router.replace(`/game?gamertag=${gamertag}`);
  };

  return (
    <StartScreenWrapper>
      <h1>Build-a-word</h1>
      <div>
        <label htmlFor="name">Choose a gamertag: </label>
        <input type="text" value={gamertag} onChange={handleChange} id="name" />
      </div>
      {error && <Error>{error}</Error>}
      <SubmitButton
        onClick={handleRouter}
        disabled={error || gamertag.length < 3}
      >
        Start
      </SubmitButton>
    </StartScreenWrapper>
  );
};

export default StartScreen;

const StartScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35vh;
  h1 {
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    label {
      margin-right: 1rem;
    }
    input {
      font-size: 1.1rem;
      padding: 0.5rem;
    }
  }

  button {
    padding: 1rem 2rem;
    border: none;
    box-shadow: 1px 1px 2.5px 1px #555;
  }
`;

const Error = styled.div`
  color: #a31d1d;
  font-size: 0.9rem;
  text-align: center;
`;

const SubmitButton = styled.button`
  background-color: ${(props) => props.disabled && "#555"};
`;
