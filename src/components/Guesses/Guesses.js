import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function Guesses({
  numOfGuessesAllowed = NUM_OF_GUESSES_ALLOWED,
  guesses,
  answer,
}) {
  return (
    <div className='guess-results'>
      {range(numOfGuessesAllowed).map((rowIndex) => (
        <Guess
          key={rowIndex}
          guess={guesses[rowIndex]?.value}
          guesses={guesses}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default Guesses;
