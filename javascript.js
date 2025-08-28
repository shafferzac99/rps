function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    let choiceWord;
    switch(choice){
        case 1:
            choiceWord = "rock";
            break;
        case 2:
            choiceWord = "paper";
            break;
        case 3:
            choiceWord = "scissors";
            break;
        default:
        break;
    }
    return choiceWord;
}

function getHumanChoice(){
    return prompt("Select one of the following of Rock, Paper, and Scissors");
}

function playRound(humanChoice, computerChoice) {
    const roundResult = document.querySelector(".round-result");

    humanChoice = humanChoice.toLowerCase();

    
    if(humanChoice == computerChoice)
        roundResult.textContent = `${humanChoice} ties ${computerChoice}`;
    else if(humanChoice == "rock") {
        if(computerChoice == "paper"){
            roundResult.textContent = "Paper beats Rock. Computer wins this round"
            computerScore++;
        }
        else {
            roundResult.textContent = "Rock beats Scissors. You win this round"
            humanScore++;
        }
    }
    else if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            roundResult.textContent = "Paper beats Rock. You win this round"
            humanScore ++;
            }
        else {
            roundResult.textContent = "Scissors beats Paper. Computer wins this round"
            computerScore++;
            }

    }
    else if(humanChoice == "scissors") {
        if(computerChoice == "rock") {
            roundResult.textContent = "Rock beats Scissors. Computer wins this round"
            computerScore ++;
        }
        else {
            roundResult.textContent = "Scissors beats Paper. You win this round"
            humanScore++;
        }

    }

}


var humanScore = 0, computerScore = 0;

const container = document.querySelector(".container");

const options = document.createElement("div");


const rock = document.createElement("button");
rock.value = "rock"
rock.textContent = "🗿"
const paper = document.createElement("button");
paper.value = "paper"
paper.textContent = "📄"
const scissors = document.createElement("button");
scissors.value = "scissors";
scissors.textContent = "✂️"

options.appendChild(rock);
options.appendChild(paper);
options.appendChild(scissors);

container.appendChild(options);
const winner = document.querySelector(".winner")
const humanScoreSpan = document.querySelector(".your-score");
const computerScoreSpan = document.querySelector(".computer-score");

options.addEventListener("click", function(e) {

    if(humanScore == 0 && computerScore==0) {
        winner.textContent = "";
    }

    const humanChoice = e.target.value; 
    const computerChoice = getComputerChoice();
    
    playRound(humanChoice, computerChoice)
    
    
    if(humanScore >= 5){
        winner.textContent = "You Win!";
        humanScore = 0;
        computerScore = 0;
    }
    if(computerScore >= 5) {
        winner.textContent = "Computer wins. Better luck next time";
        humanScore = 0;
        computerScore = 0;
    }


    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
})