document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];

    let playerScore = 0; // Declare playerScore and computerScore only once
    let computerScore = 0;

    let getComputerChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    let playRound = (playerSelection, computerSelection) => {
        playerSelection = playerSelection.toLowerCase();

        //game logic

        if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore++;
            return 'Player wins this round!';
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore++;
            return 'Player wins this round!';
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore++;
            return 'Player wins this round!';
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore++;
            return 'Computer wins this round!';
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore++;
            return 'Computer wins this round!';
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore++;
            return 'Computer wins this round!';
        } else {
            return 'It\'s a tie this round!';
        }
    };

    const computerSelection = getComputerChoice();


    let game = () => {
        const buttonContainer = document.createElement('div');
      
        const rock = document.createElement('button');
        rock.textContent = 'Rock';
      
        const paper = document.createElement('button');
        paper.textContent = 'Paper';
      
        const scissors = document.createElement('button');
        scissors.textContent = 'Scissors';
      
        buttonContainer.appendChild(rock);
        buttonContainer.appendChild(paper);
        buttonContainer.appendChild(scissors);
      
      
        rock.addEventListener('click', () => {
          const result = playRound('rock', getComputerChoice());
          resultDisplay.textContent = result;
          updateScore(result);
        });
      
        paper.addEventListener('click', () => {
          const result = playRound('paper', getComputerChoice());
          resultDisplay.textContent = result;
          updateScore(result);
        });
      
        scissors.addEventListener('click', () => {
          const result = playRound('scissors', getComputerChoice());
          resultDisplay.textContent = result;
          updateScore(result);
        });
      
        document.body.appendChild(buttonContainer);
      };
      
      const resultDisplay = document.createElement('div');
      document.body.appendChild(resultDisplay);
      
      let updateScore = (result) => {
        // Create or retrieve the resultDisplay element
        let resultDisplay = document.querySelector('#resultDisplay');
    
        // If the resultDisplay element doesn't exist, create it
        if (!resultDisplay) {
            resultDisplay = document.createElement('div');
            resultDisplay.id = 'resultDisplay';
            document.body.appendChild(resultDisplay);
        }
    
        // Update the content with the scores on one line
        resultDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
    
        if (playerScore >= 5 || computerScore >= 5) {
            alert(playerScore > computerScore ? 'Player wins the game!' : 'Computer wins the game!');
            resetGame();
        }
    };

    

    let resetGame = () => {
        playerScore = 0;
        computerScore = 0;
    };

    game();
});