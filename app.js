let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let computerPic = ['rock', 'paper', 'scissors'];
let compsPick = computerPic[Math.floor(Math.random() * computerPic.length)];

rock.addEventListener("click", function() {
        if (compsPick === 'rock'){
            document.getElementById("game-result").textContent = "You threw Rock the computer threw Rock, the game is a tie!";
        } else if (compsPick === 'paper'){
            document.getElementById("game-result").textContent = "You threw Rock the computer threw Paper, the computer wins!";
        } else {
            document.getElementById("game-result").textContent = "You threw Rock the computer threw Scissors, you win!";
        };
});

paper.addEventListener("click", function() {
    if (compsPick === 'paper'){
        document.getElementById("game-result").textContent = "You threw Paper the computer threw Paper, the game is a tie!";
    } else if (compsPick === 'scissors'){
        document.getElementById("game-result").textContent = "You threw Paper the computer threw Scissors, the computer wins!";
    } else {
        document.getElementById("game-result").textContent = "You threw Paper the computer threw Rock, you win!";
    };
});

scissors.addEventListener("click", function() {
    if (compsPick === 'scissors'){
        document.getElementById("game-result").textContent = "You threw Scissors the computer threw Scissors, the game is a tie!";
    } else if (compsPick === 'rock'){
        document.getElementById("game-result").textContent = "You threw Scissors the computer threw Rock, the computer wins!";
    } else {
        document.getElementById("game-result").textContent = "You threw Scissors the computer threw Paper, you win!";
    };
});

