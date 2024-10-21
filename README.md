# Word Game

## Joy of React, Project I

In this project, we recreated a popular online word game, Wordle:

This React application is a word-guessing game involving multiple components and handles the game state using React's useState hook. 

## State in the Game Component 

The Game component is the main component of the application, and it manages two primary pieces of state: 

- gameStatus: The current status of the game ("running", "won" or "lost")

- guesses: This array stores the guesses made by the player, initially empty

  ```javascript
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);
  ```
## State Updates through handleSubmitGuess

The game component contains a function called handleSubmitGuess which is responsible for updating the state when a new guess is made.

The function:

- Adds the latest guess to the guesses array using setGuesses
- Checks if the latest guess matches the correct answer (answer), if so, it updates 
  the gameStatus to "Won"
- If the maximum number of allowed guesses is reached without a correct answer, it updates the gameStatus to "lost"

  ```javascript
  function handleSubmitGuess(tentativeGuess) {
  const nextGuesses = [...guesses, tentativeGuess];
  setGuesses(nextGuesses);

  if (tentativeGuess.toUpperCase() === answer) {
    setGameStatus("won");
  } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
    setGameStatus("lost");
  }
  }
  ```
 ## Passing State to Child Components 

The Game component passes its state and functions as props to its child components: 

- GuessInput: Recieves the handleSubmitGuess function and the gameStatus as props. This allows the GuessInput component to submit guesses and disable input when the game is over.

  ```javascript
  <GuessInput
  handleSubmitGuess={handleSubmitGuess}
  gameStatus={gameStatus}
  />
  ```
- PreviousGuesses: Recieves the current guesses and the answer as props, which are used to display the list of previous guesses.

  ```javascript
  <PreviousGuesses guesses={guesses} answer={answer} />
    ```
- Conditional Rendering: The WonBanner and LostBanner components are conditionally rendered based on the value of gameStatus. If the game is won or lost, these components display a winnning or losing message.

  ```javascript
  {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
  {gameStatus === "lost" && <LostBanner answer={answer} />}
  ```
## State in the GuessInput Component 

The GuessInput component has its own internal state using useState which tracks the current value of the input field

```javascript
const [tentativeGuess, setTentativeGuess] = React.useState("");
```
This state is updated as the player types into the input field. When the form is submitted, the handleSubmit function is called, which:

- Prevents the default form submission behaviour
- Calls handleSubmitGuess (passed from Game) with the current guess
- Resets the tentativeGuess state to an empty string so that its ready for the next guess

```javascript
function handleSubmit(event) {
  event.preventDefault();
  handleSubmitGuess(tentativeGuess);
  setTentativeGuess("");
}
```
The input field is also disabled when the game is over

## State in the PreviousGuesses Component 

The PreviousGuesses component receives the guesses array and answer as props from Game. It renders a list of guesses made so far by mapping over the allowed range of guesses. 

```javascript
{range(NUM_OF_GUESSES_ALLOWED).map((num) => (
  <Guess key={num} value={guesses[num]} answer={answer} />
))}
```
This makes sure the correct number of guesses (upto 5) are rendered, with each guess being passed as a prop to the Guess component


 ## Video Recording of Project 

https://github.com/user-attachments/assets/84f43405-ac4c-4e55-8b25-e811dc3e3669



