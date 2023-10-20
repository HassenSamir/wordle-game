import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, guesses, answer }) {
  const noGuesses = guesses.length === 0 || !guess;

  if (noGuesses) {
    return (
      <p className='guess'>
        {range(5).map((index) => {
          return <span key={index} className='cell'></span>;
        })}
      </p>
    );
  }

  const guessLettersResult = checkGuess(guess, answer);

  return (
    <p className='guess'>
      {guessLettersResult.map(({ letter, status }, cellIndex) => {
        return (
          <span key={cellIndex} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
