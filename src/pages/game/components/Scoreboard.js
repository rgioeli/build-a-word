import styled from "styled-components";
import { useContext } from "react";
import GameContext from "../../../lib/context/gameContext";

const Scoreboard = ({ user }) => {
  const context = useContext(GameContext)

  return (
    <ScoreboardWrapper>
      <h1>Build-A-Word</h1>
      <div>
        {user && <p>Hi, {user}!</p>}
        <h2>Points: {context.points}</h2>
      </div>
    </ScoreboardWrapper>
  );
};

const ScoreboardWrapper = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width:450px) {
    h1 {
      font-size: 2rem;
    }
  }

  div {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    p {
      font-size: 1.1rem;
      font-weight:bold;
    }
  }
`;

export default Scoreboard;
