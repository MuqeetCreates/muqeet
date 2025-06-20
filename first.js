let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissor=document.getElementById("scissor");
let comp_score=document.getElementById("compscore");
let user_score=document.getElementById("userscore");
let result=document.getElementById("result")
let compScore=0;
let userScore=0;
rock.addEventListener("click",() => {
    let choices = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random() * choices.length);
let computerChoice = choices[randomIndex];

if(computerChoice=="rock"){
    result.innerText="It's A Draw Computer Choose Rock"
}
else if(computerChoice=="paper"){
    result.innerText="You Lose,Computer Choose Paper "
    compScore++
    comp_score.innerText=compScore;
}
else{
    result.innerText="You Won,Computer Choose Scissor"
    userScore++;
    user_score.innerText=userScore;
}
});

//paper when clicked code:
paper.addEventListener("click",() => {
    let choices = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random() * choices.length);
let computerChoice = choices[randomIndex];

if(computerChoice=="rock"){
    result.innerText="You Won,Computer Choose Rock";
    userScore++;
    user_score.innerText=userScore;
}
else if(computerChoice=="paper"){
    result.innerText="It's A draw Computer Choose Paper "
  
}
else{
    result.innerText="You Lose,Computer Choose Scissor"
    compScore++;
    comp_score.innerText=compScore;
}
});

// code when scissor clicked
scissor.addEventListener("click",() => {
    let choices = ["rock", "paper", "scissors"];
let randomIndex = Math.floor(Math.random() * choices.length);
let computerChoice = choices[randomIndex];

if(computerChoice=="rock"){
    result.innerText="You Lose,Computer Choose Rock";
    compScore++;
    comp_score.innerText=compScore;
}
else if(computerChoice=="paper"){
    result.innerText="You Won, Computer Choose Paper ";
    userScore++;
    user_score.innerText=userScore;
  
}
else{
    result.innerText="It's A Draw,Computer Choose Scissor"
    
}
});
