let userScore = 0;
let compScore = 0;
let drawScore = 0;
let Game = 0;
let msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");
let dScore = document.querySelector("#draw-score");
let totGame = document.querySelector("#total");
let resetBtn = document.querySelector("#reset-btn");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner= (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats computer's ${compChoice}`;
        userScore++;
        uScore.innerText = `${userScore}`;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `Computer Win! Computer's ${compChoice} beats your ${userChoice}`;
        compScore++;
        cScore.innerText = `${compScore}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

const drawGame = () => {
    msg.innerText = "The Game is A Draw. Play Again.";
    drawScore++;
    dScore.innerText = `${drawScore}`;
    msg.style.backgroundColor = "#081b31";
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        Game++;
        totGame.innerText = `${Game}`;
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    drawScore = 0;
    Game = 0;
    uScore.innerText = `${userScore}`;
    cScore.innerText = `${compScore}`;
    dScore.innerText = `${drawScore}`;
    totGame.innerText = `${Game}`;
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor = "#081b31";    
});