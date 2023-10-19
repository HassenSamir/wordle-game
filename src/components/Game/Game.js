import React, { useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [endGame, setEndGame] = React.useState(false);
  const addGuess = (value) => {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), value }];
    setGuesses(nextGuesses);
  };

  useEffect(() => {
    const userWon = guesses.map(({ value }) => value).includes(answer);
    const sixGuesses = guesses.length >= 6;
    if (userWon || sixGuesses) {
      setEndGame(true);
    }
  }, [guesses]);

  return (
    <>
      <Guesses answer={answer} guesses={guesses} />
      <GuessInput handleGuess={addGuess} disabled={endGame} />
      {endGame && (
        <Banner
          win={guesses.map(({ value }) => value).includes(answer)}
          guesses={guesses}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
