import { useRouter } from "next/router";
import styled from "styled-components";
import GameBoard from "../../src/pages/game/components/GameBoard";
import { useContext, useEffect } from "react";
import GameContext from "../../src/lib/context/gameContext";

const Game = ({ wordData, wordsToFind, user }) => {
  //context
  const context = useContext(GameContext);
  //router
  const router = useRouter();

  useEffect(() => {
    context.setAvailableLetters(wordData);
    context.setWordsToFind(wordsToFind);
  }, []);

  return (
    <GameWrapper>
      <GameBoard user={user} />
    </GameWrapper>
  );
};

export default Game;

const GameWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;

export async function getServerSideProps(ctx) {
  if (!ctx.req.cookies.gamertag || !ctx.query.gamertag) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  const data = {
    id: 1,
    master: ["adapts"],
    five: ["pasta", "adapt"],
    four: ["spat", "taps", "tats", "pads", "past", "pats", "data"],
    three: [
      "spa",
      "tap",
      "tad",
      "sat",
      "sap",
      "sad",
      "pad",
      "pat",
      "asp",
      "ads",
    ],
  };

  const wordsToFind = [];

  for (const key in data) {
    if (key !== "id") {
      wordsToFind.push(data[key].map((word) => word.length));
    }
  }

  const wordData = [
    {
      id: 1,
      letter: "t",
    },
    {
      id: 2,
      letter: "p",
    },
    {
      id: 3,
      letter: "a",
    },
    {
      id: 4,
      letter: "d",
    },
    {
      id: 5,
      letter: "a",
    },
    {
      id: 6,
      letter: "s",
    },
  ];

  return {
    props: {
      gamertag: ctx.req.cookies.gamertag || ctx.query.gamertag,
      wordData,
      wordsToFind,
      user: ctx.query.gamertag
    },
  };
}
