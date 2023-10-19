import React from "react";

function GuessInput({ handleGuess, disabled }) {
  const MAX_GUESS_LENGTH = 5;
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) {
      window.alert("The guess should have 5 letters !");
      return;
    }

    handleGuess(guess);
    setGuess("");
  };

  const handleOnChange = (e) => {
    if (e.target.value.length > MAX_GUESS_LENGTH) {
      return;
    }
    setGuess(e.target.value.toUpperCase());
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        autoFocus
        onChange={handleOnChange}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
