import React from "react";

const MAX_LETTERS = 5;

function GuessInput({ handleGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("The guess should have 5 letters !");
      return;
    }
    handleGuess(guess);
    setGuess("");
  };

  const handleOnChange = (event) => {
    if (event.target.value.length > MAX_LETTERS) {
      return;
    }
    setGuess(event.target.value.toUpperCase());
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
