// Created objects for each question
var question_1 = {
    question: "A chord with the root, major third, augmented fourth, and augmented sixth could be an example of the following: ",
    answers: ["A Neapolitan Sixth Chord", "An Italian Sixth Chord", "A French Sixth Chord", "A German Sixth Chord"],
    correct: "A French Sixth Chord"

}

var question_2 = {
    question: "Which of the following is an example of an asymmetric meter?",
    answers: ["3/2","7/8","12/8","3/8"],
    correct: "7/8"

}  

var question_3 = {
    question: "If your row is A-C-Bb-E-Gb-Cb-F-D-Db-Ab-G-Eb then which of the following is the retrograde inverse?",
    answers: ["Eb-Cb-Bb-F-E-Db-G-C-D-Ab-Gb-A", "A-Gb-Ab-D-C-G-Db-E-F-Bb-Cb-Eb", "Eb-G-Ab-Db-D-F-Cb-Gb-E-Bb-C-A", "A-C-Bb-E-Gb-Cb-F-D-Db-Ab-G-Eb"],
    correct: "Eb-Cb-Bb-F-E-Db-G-C-D-Ab-Gb-A"

}

var question_4 = {
    question: "If you are in the key of Ab major and have modulated to the subdominant, which of the following correctly spells a iv6 chord in the modulated key area?",
    answers: ["Gb-Bb-Db", "F-Ab-Cb", "A-C#-F#", "Bbb-Db-Gb"],
    correct: "Bbb-Db-Gb"

}

var question_5 = {
    question: "Which of Bach's sons was a musician in the court of Frederick the Great when a visit by the elder Bach resulted in the production of the Das Musikalische Opfer?",
    answers: ["J.C. Bach", "W.F. Bach", "C.P.E. Bach", "J.S. Bach"],
    correct: "C.P.E. Bach"

}

//Array of question objects to pull from in main function.
question_list = [question_1, question_2, question_3, question_4, question_5];

//Variable for timing
var secondsLeft = 75;
var timeEl = document.querySelector(".time")
var timeEnd = false;

//Sets the timer.
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time remaining: " + secondsLeft;
        if(timeEnd){
            quizEnd(secondsLeft)
            clearInterval(timerInterval);
        }
        if(secondsLeft <= 0) {
            secondsLeft = 0;
            timeEl.textContent = "Time remaining: " + secondsLeft;
            clearInterval(timerInterval);
            quizEnd(secondsLeft);
        }
    }, 1000);
}

//Causes the 'Correct' or 'Wrong' text to disappear.
function setResultTime(ansSec) {
    var resultDisplaySec = 1
    var timerInterval = setInterval(function() {
        resultDisplaySec--;
        if(resultDisplaySec === 0) {
            clearInterval(timerInterval);
            ansSec.remove();
        }
    }, 1000);
}

//Checks the user choice for correctness, displays result on screen.
function questionResult(result, ans) {
    if (result) {
        ans.textContent = "Correct!"
    }
    else {
        ans.textContent = "Wrong!"
    }
    setResultTime(ans);
}

//Checks answer, shows results to user, loads next question.
function correctAnswer(choice,newQuestion,i, ans, newSec){
    i++;
    if (choice==newQuestion.correct) {
        questionResult(true, ans);
    }
    else {
        questionResult(false, ans);
        secondsLeft -= 10;
        if (secondsLeft <= 0){
            secondsLeft = 0;
        }
    }
    newSec.textContent="";
    if (i==question_list.length){
        //changes variable and stops the clock when last question is answered.
        timeEnd = true;
    }
    else {
        createNewQuestion(question_list[i],i)
    }
}

//Provides start button functionality and gets the quiz underway.
var startButton = document.querySelector("#start")
startButton.addEventListener("click", function() {
    starterClass = document.getElementById("starter");
    starterClass.remove();
    i=0
    createNewQuestion(question_list[i],i);
    var finishTime = setTime();
});

//Quiz ends and user receives score, is prompted to enter initials, creates button to submit results to high score list.
function quizEnd(finishTime){
    var body = document.body;
    var newSec = document.createElement("section");
    var allDone = document.createElement("h2");
    var endResult = document.createElement("h2");
    var responseForm = document.createElement("form");
    var responseDiv = document.createElement("div");
    var responseLabel = document.createElement("label");
    var responseInput = document.createElement("input");
    var submitButton = document.createElement("form")
    var submitInput = document.createElement("input")

    allDone.textContent = "All done!"
    endResult.textContent = "Your final score is: " + finishTime;
    responseLabel.textContent = "Enter initials: ";

    body.appendChild(newSec);
    newSec.appendChild(allDone);
    newSec.appendChild(endResult);
    newSec.appendChild(responseForm);
    responseForm.appendChild(responseDiv);
    responseDiv.appendChild(responseLabel);
    responseDiv.appendChild(responseInput);
    responseForm.appendChild(submitButton);
    submitButton.appendChild(submitInput);

    submitButton.setAttribute("action", "./highScore.html");
    submitButton.setAttribute("style", "margin-left: 95px;");
    submitInput.setAttribute("type", "submit");
    submitInput.setAttribute("value", "Submit");
    submitInput.setAttribute("style", "padding: 8px; margin-left: -23px; cursor: pointer; font-size: 24px;background-color: #60267a; color: white;")

    submitButton.addEventListener("click", function(event) {
        var user = {
            user_name: responseInput.value.trim(),
            score: finishTime
        };
        if (localStorage.getItem("hsList") === null){
            var hsList = [];
            hsList.push(user);
            localStorage.setItem("hsList", JSON.stringify(hsList));
        }
        else {
            var hsList = JSON.parse(localStorage.getItem("hsList"));
            console.log(hsList);
            hsList.push(user);
            console.log(hsList);
            localStorage.setItem("hsList", JSON.stringify(hsList))
        }
    })
}

//Generates each question by pulling from array of question objects
function createNewQuestion (newQuestion, index) {
    var body = document.body;
    var newSec = document.createElement("section")
    var ques = document.createElement("h2");
    var a1 = document.createElement("button");
    var a2 = document.createElement("button");
    var a3 = document.createElement("button");
    var a4 = document.createElement("button");
    var secSec = document.createElement("section")
    var ans = document.createElement("h2")

    answer_list = [1,2,3,4]

    ques.textContent = newQuestion.question;
    a1.textContent = newQuestion.answers[0];
    a2.textContent = newQuestion.answers[1];
    a3.textContent = newQuestion.answers[2];
    a4.textContent = newQuestion.answers[3];
    ans.textContent = "";

    body.appendChild(newSec);
    body.appendChild(secSec);
    newSec.appendChild(ques);
    newSec.appendChild(a1);
    newSec.appendChild(a2);
    newSec.appendChild(a3);
    newSec.appendChild(a4);
    secSec.appendChild(ans);

    newSec.setAttribute = ("id","remove");
    ques.setAttribute("style", "white-space: pre-line; width: 450px");
    a1.setAttribute("style", "white-space: pre-line; width: 450px");
    a2.setAttribute("style", "white-space: pre-line; width: 450px");
    a3.setAttribute("style", "white-space: pre-line; width: 450px");
    a4.setAttribute("style", "white-space: pre-line; width: 450px");
    ans.setAttribute("style", "white-space: pre-line; position: absolute; top: 600px");

    a1.addEventListener("click", function() {
        correctAnswer(a1.innerHTML, newQuestion,index, ans, newSec)
    })

    a2.addEventListener("click", function() {
        correctAnswer(a2.innerHTML, newQuestion,index, ans, newSec)
        newSec.remove();
    })

    a3.addEventListener("click", function() {
        correctAnswer(a3.innerHTML, newQuestion, index, ans, newSec)
        newSec.remove();
    })

    a4.addEventListener("click", function() {
        correctAnswer(a4.innerHTML, newQuestion,index, ans, newSec)
        newSec.remove();
    })
};


