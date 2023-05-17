let time = 10;
let qnNo = 0;
let score = 0;
let totalQn = quizes.length;
let container = document.getElementById('container');
let no = document.getElementById('no');
let qtn = document.getElementById('qtn');
let choiceA = document.getElementById('choiceA');
let choiceB = document.getElementById('choiceB');
let choiceC = document.getElementById('choiceC');
let choiceD = document.getElementById('choiceD');
let scorer = document.getElementById('scorer');
let message = document.getElementById('message');
let timer = document.getElementById('timer');
let finals = document.getElementById('final');

function quize(){
    no.innerHTML = (qnNo+1)+" out of "+ totalQn;
    qtn.innerHTML = quizes[qnNo][0];
    choiceA.innerHTML = quizes[qnNo][1];
    choiceB.innerHTML = quizes[qnNo][2];
    choiceC.innerHTML = quizes[qnNo][3];
    choiceD.innerHTML = quizes[qnNo][4];
    scorer.innerHTML = "Score : "+score;
}


function next(){
    ++qnNo;
    if(qnNo == totalQn){
        finalResult();
    }
        quize();
}


function validate(ans){
let correct = quizes[qnNo][5];
    if(ans == correct){
        score++;
        message.style.display = "block";
        message.style.color = "green";
        message.innerHTML = "Correct! You get the answer";
    }else{
        message.style.display = "block";
        message.style.color = "red";
        message.innerHTML = "Incorrect! <br>Correct Answer is : "+correct;
    }
    scorer.innerHTML = score;

    next();
}

function finalResult(){
    container.style.display="none";
    finals.style.display = "block";
    finals.innerHTML = `
    <h1>End of exam <br> 
    you get ${score} out of ${totalQn} </h1>
    <button class='btn' onclick='location.reload()'>start again</button>
    `;
}
quize();
