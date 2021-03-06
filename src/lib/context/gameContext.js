import { createContext, useState } from "react";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [availableLetters, setAvailableLetters] = useState([]);
  const [correctWords, setCorrectWords] = useState([]);
  const [wordsToFind, setWordsToFind] = useState([]);
  const [points, setPoints] = useState(0)

  const guessLetter = (letter) => {
    return setGuessedLetters((prevState) => [...prevState, letter]);
  };

  const updateWordsToFind = (word) => {
    let updatedWordsClone = [...wordsToFind];
    const updatedWords = updatedWordsClone.map((x) => {
      let skip = false;
      x.map(y => {
        if (y == word) {
          skip = true;
        }
      })
      if (x[0] == word.length && !skip) {
        x[0] = word;
  
        x.sort((a, b) => {
          if (typeof b == "string") {
            return -1;
          }
        });
      }
  
      return x;
    });

    return setWordsToFind(updatedWords)
  };

  const updatePoints = (word) => {
    setPoints(prevState => prevState + word.length)
  }

  const takeAwayLetter = (letterId) => {
    return setAvailableLetters((prevState) =>
      prevState.filter(({ id }) => id !== letterId)
    );
  };

  const scrambleLetters = () => {
    setAvailableLetters((prevState) => {
      const newLetters = [...prevState];
      return newLetters.sort(() => (Math.random() > 0.5 ? 1 : -1));
    });
  };

  const clearLetters = () => {
    setAvailableLetters((prevState) => [...prevState, ...guessedLetters]);
    setGuessedLetters([]);
  };

  const addCorrectWord = (word) => {
    return setCorrectWords((prevState) => [...prevState, word]);
  };

  const deleteLetter = (letterId, letter) => {
    setGuessedLetters((prevState) =>
      prevState.filter(({ id }) => id !== letterId)
    );

    setAvailableLetters((prevState) => [
      ...prevState,
      { id: letterId, letter },
    ]);
  };

  return (
    <GameContext.Provider
      value={{
        clearLetters,
        deleteLetter,
        guessLetter,
        guessedLetters,
        setGuessedLetters,
        setAvailableLetters,
        availableLetters,
        takeAwayLetter,
        scrambleLetters,
        correctWords,
        wordsToFind,
        setWordsToFind,
        updateWordsToFind,
        points,
        setPoints,
        updatePoints
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
