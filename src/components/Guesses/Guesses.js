import React from "react";
import { range, twoDimensionArray, twoDimensionObjectArray } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const MAX_LETTERS = 5;

function Guesses({
  maxLetters = MAX_LETTERS,
  numOfGuessesAllowed = 6,
  guesses,
  answer,
}) {
  // ?
  const [grid, setGrid] = React.useState(
    twoDimensionObjectArray(numOfGuessesAllowed, maxLetters)
  );

  const displayWord = (values, rowIndex) => {
    if (guesses.length === 0 || !guesses[rowIndex]) {
      return values.map(({ id, letter }) => {
        return (
          <span key={id} className='cell'>
            {letter}
          </span>
        );
      });
    }

    const guessWord = guesses[rowIndex].value;
    const result = checkGuess(guessWord, answer).map((result) => {
      return {
        id: crypto.randomUUID(),
        value: result,
      };
    });
    return result.map(({ id, value: { letter, status } }, cellIndex) => {
      return (
        <span key={id} className={`cell ${status}`}>
          {guesses[rowIndex][cellIndex] || letter}
        </span>
      );
    });
  };

  return (
    <div className='guess-results'>
      {grid.map(({ id, values }, rowIndex) => (
        <p key={id} className='guess'>
          {displayWord(values, rowIndex)}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
