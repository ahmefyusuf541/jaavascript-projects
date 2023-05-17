
function game(yourCoice){
    let x = Math.random()
    if(x < (1/3) ){
    computerChoice = "rock";
    }else if(x < (2/3)){
    computerChoice = "paper";
    }else{
    computerChoice = "scissors";
    }
    result = document.getElementById('result');
    document.getElementById("choices").style.display="flex"
    document.getElementById('yourChoice').innerHTML ="<i class='fa fa-hand-"+yourCoice+"'></i><br>"+yourCoice;
    document.getElementById('computerChoice').innerHTML ="<i class='fa fa-hand-"+computerChoice+"'></i><br>"+computerChoice;
    if(computerChoice == yourCoice){
    result.style.color ="blue"
    result.innerHTML="Tie"
    }else if((yourCoice == "paper" && computerChoice == "scissors")||(yourCoice == "scissors" && computerChoice == "rock")){ 
        result.innerHTML="You lose"
        result.style.color ="red"
    }else{
        result.innerHTML="You win"
        result.style.color ="green"
    }
    }
