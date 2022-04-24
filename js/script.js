/* Problem 1 Function Computer Play
    Random between rock, paper, and scissor
    Store the choice
*/
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
/* Problem 3 Rock Paper Scissor
    Function with two parameters that takes in player and computer selection
    Should solve which one wins 
    Return the result of which one wins
*/
/* Problem 4 Counter
    Make it a best of 5 competition
    Make sure the result of each match is tracked
    Stop the program after one reach 5
*/
