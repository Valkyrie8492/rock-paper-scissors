// breaking down rock paper scissors

// create a function that generates a computer choice

console.log("~~~~~~~ Let's Play Rock Paper Scissors! ~~~~~~~")

function getComputerChoice() {
    let randVal = Math.floor(Math.random() * 3) // not sure if this calls the function properly yet; floor is weird
    if (randVal === 0) {
        return "rock";
    } else if (randVal === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// create a function that asks for the human choice

function getHumanChoice() {
    while (true) {
        let userChoice = prompt("What will you throw? (Rock, Paper, or Scissors: ").toLowerCase(); // finally an answer on how the lowercase function works w/ prompts
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            return userChoice;
        } else {
            alert("Sorry, please choose between rock, paper, or scissors." )
        }
    }
}

// assign the input of each choice from the functions to a variable
// maybe not if the function can just be called inside the game for a result

// removed the human and computer choices as global variables so they would call the function for each round

// compare the two choices to determine a round winner + redo the round if there's a tie
// create a tracker for computer and human scores across the game
// determine a game winner based on most rounds won across 5 rounds

function playGame() { 
    function playRound(humanChoice, computerChoice) { // main round structure        
        if (humanChoice === computerChoice) {
            return 0 // it's a tie
        } else if (humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "rock") {
            return 1
        } else {
            return 2
        }
    }

    let humanScore = 0
    let computerScore = 0
    let rounds = 0

    while (rounds < 5) {
        console.log(`~~~~~ Round ${rounds + 1} ~~~~~`)
        
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        let roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === 1) {   // check scoring after each round
            humanScore++;
            console.log("You won this round!"); 
        } else if (roundResult === 2) {
            computerScore++;
            console.log("Computer won this round!");
        } else {
            console.log("It's a tie!")
        }

        console.log(`You threw ${humanChoice} and the computer threw ${computerChoice}.`)  // show each of the throws
        console.log(`Your score: ${humanScore} Computer score: ${computerScore}`) // show the current scores
        rounds++ // increment rounds
    }
    
    console.log("~~~~~ GAME OVER! ~~~~~") // end game, run the results

    if (humanScore > computerScore) {
        return `You've won! Final score is player: ${humanScore} computer: ${computerScore}`
    } else if (computerScore > humanScore) {
        return `You've lost! Final score is player: ${humanScore} computer: ${computerScore}`
    } else {
        return "It's a tie!"
    }
}

let outcome = playGame()
console.log(outcome)