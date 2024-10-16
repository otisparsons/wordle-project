import React from 'react';

function GuessInput() {

  const [guessInput, setGuessInput] = React.useState("");

  function handleSubmit(event){
    event.preventDefault();

    if (guessInput.length !== 5 ){
      window.alert('Please enter 5 characters :)')
      return;
    }

    console.log(guessInput);
    setGuessInput('');
  }
  
  return ( 
  <form onSubmit={handleSubmit}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input
     onChange={event => (setGuessInput(event.target.value.toUpperCase()))} 
     id="guess-input" 
     type="text" 
     value={guessInput}  
     required
     minLength={5}
     maxLength={5}
     />
  </form>
  );
}

export default GuessInput;
