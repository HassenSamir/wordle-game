import React, { useEffect, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import Guesses from "../Guesses/Guesses";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  const addGuess = (value) => {
    setGuesses([...guesses, { id: crypto.randomUUID(), value }]);
  };

  const restartGame = () => {
    setGameOver(false);
    setGuesses([]);
    setAnswer(sample(WORDS));
  };

  useEffect(() => {
    console.log({ answer });
  }, [answer]);

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
          restartGame={restartGame}
        />
      )}
    </>
  );
}

export default Game;
