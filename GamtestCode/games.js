
//Creating a class to contruct Answer & Question objects.
class AlgebraQs {
    question;
    answer;

    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }
}

//Easy questions
let ES2Q1 = new AlgebraQs( "x + 20 = 25", "5");
let ES2Q2 = new AlgebraQs( "x - 30 = 120", "150");
let ES2Q3 = new AlgebraQs( "x * 2 = 75", "37.5");
let ES2Q4 = new AlgebraQs( "x / 3 = 12", "36");
let ES2Q5 = new AlgebraQs( "(x^2) + 10 = 24", "4");
let ES2Q = [ES2Q1, ES2Q2, ES2Q3, ES2Q4, ES2Q5];

//challenging questions
let CS2Q1 = new AlgebraQs( "3*x + 7 = 30", "7");
let CS2Q2 = new AlgebraQs( "-x - 10 = 5", "-15");
let CS2Q3 = new AlgebraQs( "x * -20 = 25", "-1.25");
let CS2Q4 = new AlgebraQs( "(x/3) / 4 = 0.25", "9");
let CS2Q5 = new AlgebraQs( "(5^x) * 0.5 = 67.5", "3");
let CS2Q = [CS2Q1, CS2Q2, CS2Q3, CS2Q4, CS2Q5];

//Hard questions.
let DS2Q1 = new AlgebraQs( "x + 20x = 105", "5");
let DS2Q2 = new AlgebraQs( "2x + 20 = 38 - x", "6");
let DS2Q3 = new AlgebraQs( "x^-2 - 9 = -9.25", "2");
let DS2Q4 = new AlgebraQs( "x^3 * 20x = 87", "3");
let DS2Q5 = new AlgebraQs( "-(x^x)/ 20 = -12.8", "4");
let DS2Q = [DS2Q1, DS2Q2, DS2Q3, DS2Q4, DS2Q5];

for(let i = 0; i <= 4; i++){
    console.log(ES2Q[i].question + " and " + ES2Q[i].answer);
}

let i = 0;

function QuestionSetter() {
    let CurrQ = document.getElementById("CurQ");
    CurrQ.innerHTML = ES2Q[i].question;
    
}

window.onload = QuestionSetter;

function Submit() {
    let Feedback = document.getElementById("AnsNotice");
    let StatusUpdate = document.getElementById("QStatus");
    let NextQ = document.getElementById("CurQ");
    let CurrAns = document.getElementById("WTF").value;
    let CorrectAns = ES2Q[i].answer;

    if (CurrAns == CorrectAns && i < 4) {
        i = i + 1
        NextQ.innerHTML = ES2Q[i].question;
        CorrectAns = ES2Q[i].answer;

        Feedback.innerHTML ="Answer is correct";
	    Feedback.style.color = "Green";
        StatusUpdate.innerHTML ="Status, correct ans= " + CorrectAns + " and index =" + i;

    } else if ( CurrAns == CorrectAns && i === 4 ){
        StatusUpdate.innerHTML ="Congratulations, you have completed the questions";

    } else {
        Feedback.innerHTML ="Answer is incorrect";
        Feedback.style.color = "red";
        StatusUpdate.innerHTML = "Status, correct ans= " + CorrectAns + " and index =" + i;
    }
}

function DrawRectangle() {
    let myCanvas = document.getElementById("GCanvas");
    let context = myCanvas.getContext("2d");
    context.fillStyle = "green";
    context.fillrect(10, 10, 100, 100);
}

window.onload = DrawRectangle;