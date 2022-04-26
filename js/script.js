/* Problem 1 Function Computer Play
    Random between rock, paper, and scissor
    Store the choice
*/
robot = 0;
human = 0;
score = [0,0]
let computerSelection = function() {
    choice = Math.floor(Math.random() * 3);
    if(choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "scissor";
    } else {
        return "paper";
    }
}
/* Problem 2 Player Selection
    Allow the player to type in one of the three
    Make sure it is case insensitive
*/
let playerSelection = function(selection) {
    let computerPLay = computerSelection();
    playRound(selection,computerPLay);
}
/* Problem 3 Rock Paper Scissor
    Function with two parameters that takes in player and computer selection
    Should solve which one wins 
    Return the result of which one wins
*/
const scoreupdate = document.querySelector('p');
let playRound =function(playerSelection, computerSelection) {
    if (human === 5 || robot === 5) {
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "rock") {
                    scoreupdate.textContent = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                } else if (computerSelection === "scissor") {
                    human += 1;
                    score= [human, robot];
                    scoreupdate.textContent = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                } else {
                    robot += 1;
                    score= [human, robot];
                    scoreupdate.textContent = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                }
                if (human == 5) {
                    scoreupdate.innerText = `You win ${score}`;
                }
                if (robot == 5) {
                    scoreupdate.innerText = `You lose ${score}`;
                }
                break
            case "paper":
                if (computerSelection === "paper") {
                    scoreupdate.innerText = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                } else if (computerSelection === "rock") {
                    human += 1;
                    score= [human, robot];
                    scoreupdate.innerText = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                } else {
                    robot += 1;
                    score= [human, robot];
                    scoreupdate.innerText = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                }
                if (human == 5) {
                    scoreupdate.innerText = `You win ${score}`;
                }
                if (robot == 5) {
                    scoreupdate.innerText = `You lose ${score}`;
                }
                break
            case "scissor":
                if (computerSelection === "scissor") {
                    scoreupdate.innerText = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                } else if (computerSelection === "paper") {
                    human += 1;
                    score= [human, robot];
                    scoreupdate.innerText = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                } else {
                    robot += 1;
                    score= [human, robot];
                    scoreupdate.innerText = `Result : tie ${score} You picked ${playerSelection}. Robot picked ${computerSelection}`;
                }
                if (human == 5) {
                    scoreupdate.innerText = `You win ${score}`;
                }
                if (robot == 5) {
                    scoreupdate.innerText = `You lose ${score}`;
                }

                break
            }
    }
}
/* Problem 4 Counter
    Make it a best of 5 competition
    Make sure the result of each match is tracked
    Stop the program after one reach 5
*/
let allbut = document.querySelectorAll('button');
allbut.forEach(button => button.addEventListener('click', function(e){
    playerSelection(e.target.className);
} ))
function reset(){
    human = 0;
    robot = 0;
    scoreupdate.innerText = 'Score: 0 , 0';
}