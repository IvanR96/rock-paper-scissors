const choices = ['rock', 'paper', 'scissors'];



let getComputerChoice = () =>{
    const randomIndex = Math.floor(Math.random() * choices.length);

     return choices[randomIndex];

};

/* if the player and computer choose rock, paper, or scissors tie game.
    if player chooses rock and computer chooses scissor - player wins
    if player chooses scissor and computer chooses paper - player wins
    if player chooses paper and computer chooses rock - player wins
    if player chooses rock and computer chooses paper - computer wins
    if player chooses scissor and computer chooses rock - computer wins
    if player chooses paper and computer chooses scissors - computer wins

*/ 
let playRound = (computerSelection) =>{
    let playerSelection = prompt('Choose rock, paper, or scissors');
    
    if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerScore++;
        alert('Player Wins this game! Keep it up!');
        alert(`${playerScore} - ${computerScore}`);
    }
    if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        alert('Player Wins this game! Keep it up!');
        alert(`${playerScore} - ${computerScore}`);
    }
    if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        alert('Player Wins this game! Keep it up!');
        alert(`${playerScore} - ${computerScore}`);
    }
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        alert('Computer Wins this game! Better luck next time!');
        alert(`${playerScore} - ${computerScore}`);
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerScore++;
        alert('Computer Wins this game! Better luck next time!');
        alert(`${playerScore} - ${computerScore}`);
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        alert('Computer Wins this game! Better luck next time!');
        alert(`${playerScore} - ${computerScore}`);
    }
    if (playerSelection == "rock" && computerSelection == 'rock'){
        alert('This game is a tie!');
        alert(`${playerScore} - ${computerScore}`);
    }
    if (playerSelection == "scissors" && computerSelection == 'scissors'){
        alert('This game is a tie!');
        alert(`${playerScore} - ${computerScore}`);
    }
    if (playerSelection == "paper" && computerSelection == 'paper'){
        alert('This game is a tie!');
        alert(`${playerScore} - ${computerScore}`);
    }

};

//let playerSelection = prompt('Choose rock, paper, or scissors');
const computerSelection = getComputerChoice();

/*let determineWinner = (playerScore, computerScore) => {
    if (playerScore == 5){
        console.log("player wins!!");
    }
    if(computerScore == 5){
        console.log('computer wins!!');
    }

};
*/

let game = () =>{
    for (i = 0; i <= 10; i++){
        playRound(computerSelection);
        
        if (playerScore < 5 || computerScore < 5){
            alert('Keep playing!!');
        }
        if (playerScore == 5){
            alert("player wins!!");
        }
        if(computerScore == 5){
            alert('computer wins!!');
        }
        if(playerScore == 5 && computerScore == 5){
            alert('This game is a draw!!');
        }
        
    
    }

    
};

let playerScore = 0;
let computerScore = 0;