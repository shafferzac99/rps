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
    humanChoice = humanChoice.toLowerCase();
    console.log(computerChoice)
    console.log(humanChoice)
    
    
    if(humanChoice == computerChoice)
        console.log(humanChoice + " ties " + computerChoice)
    else if(humanChoice == "rock") {
        if(computerChoice == "paper"){
            console.log("Paper beats Rock. Computer wins this round")
            computerScore++;
        }
        else {
            console.log("Rock beats Scissors. You win this round")
            humanScore++;
        }
    }
    else if(humanChoice == "paper") {
        if(computerChoice == "rock") {
            console.log("Paper beats Rock. You win this round")
            humanScore ++;
        }
        else {
            console.log("Scissors beats Paper. Computer wins this round")
            computerScore++;
        }

    }
    else if(humanChoice == "scissors") {
        if(computerChoice == "rock") {
            console.log("Rock beats Scissors. Computer wins this round")
            computerScore ++;
        }
        else {
            console.log("Scissors beats Paper. You win this round")
            humanScore++;
        }

    }

}

function playGame() {

    while(humanScore < 3 && computerScore < 3){
        var computerChoice = getComputerChoice();
        var humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice)
        console.log(`You: ${humanScore}
        Computer: ${computerScore}`)
    }

    if(humanChoice > computerScore)
        console.log("You Win!")
    else
        console.log("Computer wins. Better luck next time")

}

var humanScore = 0, computerScore = 0;



