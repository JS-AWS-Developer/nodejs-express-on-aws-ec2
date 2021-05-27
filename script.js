/**
 * Guess The Number Game
 * Done1: Get user value from input and save it to variable numberGuess
 * Done2: Generate a random number 1 to 100 and save it to variable correctNumber
 * Done3: Console whether the guess is too high, too low, or is correct inside playGame function
 * Done4: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * Done5: Complete the showYouWon, showNumberAbove, showNumberBelow
 * Done: Use the showYouWon... functions within displayResult to display the correct dialog
 * Done: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];
// Variable for store the correct random number 
let correctNumber;


window.onload = function() { 
  initGame();
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame)
  }
  
function domEvents(){
  for(let i = 0; i < document.body.children.length; i++){
    alert(document.body.children[i].innerText);
  }
}
/**
 * Functionality for playing the whole game
 */
  // *Done1-3 CODE GOES BELOW HERE *
  function playGame(){
    let numberGuess = document.getElementById('number-guess').value;
   
    saveGuessHistory(numberGuess);
    displayHistory();
    displayResult(numberGuess);
  }


/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// * Done4- CODE GOES BELOW HERE *

function displayResult(numberGuess){
  if(numberGuess > correctNumber){
    showNumberAbove();
    console.log("too high");
  } else if (numberGuess < correctNumber){
    console.log("too low");
    showNumberBelow();
  } else if (numberGuess == correctNumber){
    showYouWon();
  }
}

  /**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  //Reset the correctNumber
  //Reset the result display
  //Reset the guesse array
  //Reset the guess history display
  correctNumber = getRandomNumber();
  guesses = []
  displayHistory()
  resetResultContent()
}


/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**Done2
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  // *CODE GOES BELOW HERE *
  
  //Math.floor removes decimels from numbers -ref console
   /**
   * Math.random returns a number between 0 and 1,
   * and that's why we multiply it by 100
   */
  return Math.floor((Math.random() * 100) + 1);
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
  guesses.push(guess);

}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}You guessed 
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */

// Display history in HTML 
function displayHistory() {
  let index = guesses.length-1;
  let list = "<ul class='list-group'>"
  while(index >= 0){
    list += 
      "<li class='list-group-item'>" + 
      "You guessed " + guesses[index] +
      "</li>";
    index-=1
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}



// Display the result in HTML
function displayResult(numberGuess){
  if(numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber){
    showNumberBelow();
  } else if (numberGuess == correctNumber){
    showYouWon();
  }

}


/**
 * Retrieve the dialog based on if the guess is wrong or correct 
This function has two parameters dialogType and text
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  // *CODE GOES BELOW HERE Done5*
let dialog = getDialog('won' , text);
document.getElementById("result").innerHTML = dialog;
  
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**Done5
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
let dialog = getDialog('warning' ,text )
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**Done5
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog('warning' ,text )
   document.getElementById("result").innerHTML = dialog;
 }




// MODULE6

let firstName = "Qamar";
let lastName = "Chaudhry";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

