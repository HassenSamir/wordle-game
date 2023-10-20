import React, { useEffect } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  const addGuess = (value) => {
    setGuesses([...guesses, { id: crypto.randomUUID(), value }]);
  };

  useEffect(() => {
    const userWon = guesses.map(({ value }) => value).includes(answer);
    const sixGuesses = guesses.length >= NUM_OF_GUESSES_ALLOWED;
    if (userWon || sixGuesses) {
      setGameOver(true);
    }
  }, [guesses]);

  return (
    <>
      <Guesses answer={answer} guesses={guesses} />
      <GuessInput handleGuess={addGuess} disabled={gameOver} />
      {gameOver && (
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
