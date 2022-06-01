import styled from "styled-components";

const Scoreboard = ({ user = "Rgioeli" }) => {
  const points = 1400;
  return (
    <ScoreboardWrapper>
      <h1>Build-A-Word</h1>
      <div>
        {user && <p>Gamertag: {user}</p>}
        <h2>Points: {points}</h2>
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

  div {
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    p {
      font-size: 1.1rem;
    }
  }
`;

export default Scoreboard;
