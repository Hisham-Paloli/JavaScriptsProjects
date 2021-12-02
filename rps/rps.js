let userScore = 0;
let computerScore = 0;
const userscor_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");





function won(userChoice){
userScore++;
userscor_span.innerHTML = userScore;
const smallUserword = "won".fontcolor("green");
result_p.innerHTML="you " + smallUserword + " 🤝";
document.getElementById(userChoice).classList.add('green-glow');
setTimeout(function(){
    document.getElementById(userChoice).classList.remove('green-glow')
}, 500);
if(userScore == 5){
    userScore = 0
    computerScore = 0
    userscor_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    result_p.innerHTML="YOU ARE THE FINAL WINNER"
}
}


function lose(userChoice){
 computerScore++;
 computerscore_span.innerHTML = computerScore;
 const smallUserword = "lost".fontcolor("red");
 result_p.innerHTML = "you " + smallUserword + " 💩 💩 💩 ";
 document.getElementById(userChoice).classList.add('red-glow');
 setTimeout(function(){
    document.getElementById(userChoice).classList.remove('red-glow')
}, 500);
if(computerScore == 5){
    userScore = 0
    computerScore = 0
    userscor_span.innerHTML = userScore;
    computerscore_span.innerHTML = computerScore;
    result_p.innerHTML="COMPUTER IS THE FINAL WINNER"
}
}


function draw(userChoice){
   result_p.innerHTML = "Its a DRAW"
   document.getElementById(userChoice).classList.add('grey-glow');
 setTimeout(function(){
    document.getElementById(userChoice).classList.remove('grey-glow')
}, 500);
}

function convertLetters(compImg){
    if(compImg === "r") return "rock"
    if(compImg === "p") return "paper"
    return "scissors"
}

function getcomputerChoice(){
    let choice = ["r", "p", "s"];
    let randomNum = Math.floor(Math.random()*3);
    var compImg = choice[randomNum];
    compImgAdd(convertLetters(compImg));
    return choice[randomNum];
}


function game(userChoice){
    const computerChoice = getcomputerChoice();
     switch(userChoice + computerChoice){
         
        case "rs":
        case "pr":
        case "sp":   
            won(userChoice);
            break;

        case "sr":
        case "rp":
        case "ps":
            lose(userChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break        


     }
}

function imageAdd(userimage){
    var someimage = document.getElementById(userimage).getAttribute("src");
    document.getElementById("image1").src = someimage;
}

function compImgAdd(compImg){
    var someimage2 = document.getElementById(compImg).getAttribute("src");
    document.getElementById("image2").src = someimage2;
}



function main(){

    rock_div.addEventListener('click', function(){
        game("r");
        imageAdd("rock");
    })

    paper_div.addEventListener('click', function(){
        game("p");
        imageAdd("paper");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
        imageAdd("scissors");
    })


}

main();