var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if (computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
console.log("Computer: " + computerChoice);
document.getElementById("computer").innerHTML = computerChoice;
var result = "no result";
function compare(choice1, choice2){
    if (choice1 === choice2){
        result = "IT'S A TIE!";
    } else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            result = "YOU WIN!!!";
        } else {
            result = "COMPUTER WINS!!!";
        }
    } else if (choice1 === "paper"){
        if (choice2 === "rock"){
            result = "YOU WIN!!!";
        } else {
            result = "COMPUTER WINS!!!";
        }
    } else if (choice1 === "scissors"){
        if (choice2 === "rock"){
            result = "COMPUTER WINS!!!";
        } else {
            result = "YOU WIN!!!";
        }
    }
}

function paper(){
compare("paper", computerChoice);
console.log(result);
	document.getElementById("result").innerHTML = result;
}
function scissors(){
compare("scissors", computerChoice);
console.log(result);
	document.getElementById("result").innerHTML = result;
}
function rock(){
compare("rock", computerChoice);
console.log(result);
	document.getElementById("result").innerHTML = result;
}