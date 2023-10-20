import React from "react";

function Banner({ win, guesses, answer, restartGame }) {
  const happyBanner = (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guesses.length} {guesses.length === 1 ? " guess" : " guesses"}
        </strong>
        .
      </p>
      <button onClick={restartGame}>Restart game</button>
    </div>
  );

  const sadBanner = (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button onClick={restartGame}>Restart game</button>
    </div>
  );

  return win ? happyBanner : sadBanner;
}

export default Banner;
