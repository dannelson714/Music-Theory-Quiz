var question_1 = {
    question: "A chord with the root, major third, augmented fourth,\n and augmented sixth could be an example of the following: ",
    answers: ["A Neapolitan Sixth Chord", "An Italian Sixth Chord", "A French Sixth Chord", "A German Sixth Chord"],
    correct: "A French Sixth Chord"

}

var question_2 = {
    question: "Which of the following is an example of an asymmetric meter?",
    answers: ["3/2","7/8","12/8","3/8"],
    correct: "7/8"

}  

var question_3 = {
    question: "If your row is A-C-Bb-E-Gb-Cb-F-D-Db-Ab-G-Eb then\nwhich of the following is the retrograde inverse?",
    answers: ["Eb-Cb-Bb-F-E-Db-G-C-D-Ab-Gb-A", "A-Gb-Ab-D-C-G-Db-E-F-Bb-Cb-Eb", "Eb-G-Ab-Db-D-F-Cb-Gb-E-Bb-C-A", "A-C-Bb-E-Gb-Cb-F-D-Db-Ab-G-Eb"],
    correct: "Eb-Cb-Bb-F-E-Db-G-C-D-Ab-Gb-A"

}

var question_4 = {
    question: "In the key of Db major which of the following correctly spells a iv6 chord?",
    answers: ["Gb-Bb-Db", "F-Ab-Cb", "A-C#-F#", "Bbb-Db-Gb"],
    correct: "Bbb-Db-Gb"

}

var question_5 = {
    question: "Which of Bach's sons was a musician in the court of\n Frederick the Great when a visit by the elder Bach resulted\n in the production of the Das Musikalische Opfer?",
    answers: ["J.C. Bach", "W.F. Bach", "C.P.E. Bach", "J.S. Bach"],
    correct: "C.P.E. Bach"

}

question_list = [question_1, question_2, question_3, question_4, question_5];

function moveUP(){
    // if so and so;
    i++
    createNewQuestion(question_list[i])
}

function correctAnswer(choice,newQuestion,i){
    i++;
    if (choice==newQuestion.correct) {
        window.alert("Correct!")
    }
    else {
        window.alert("Wrong!")
    }
    createNewQuestion(question_list[i],i)
}

var startButton = document.querySelector("#start")
startButton.addEventListener("click", function() {
    starterClass = document.getElementById("starter");
    starterClass.remove();
    i=0
    createNewQuestion(question_list[i],i);
});

function createNewQuestion (newQuestion, index) {
    var body = document.body;
    var newSec = document.createElement("section")
    var ques = document.createElement("h2");
    var a1 = document.createElement("button");
    var a2 = document.createElement("button");
    var a3 = document.createElement("button");
    var a4 = document.createElement("button");

    answer_list = [1,2,3,4]

    ques.textContent = newQuestion.question;
    a1.textContent = newQuestion.answers[0];
    a2.textContent = newQuestion.answers[1];
    a3.textContent = newQuestion.answers[2];
    a4.textContent = newQuestion.answers[3];

    body.appendChild(newSec)
    newSec.appendChild(ques);
    newSec.appendChild(a1);
    newSec.appendChild(a2);
    newSec.appendChild(a3);
    newSec.appendChild(a4);

    newSec.setAttribute = ("id","remove");
    ques.setAttribute("style", "white-space: pre-line;");
    a1.setAttribute("style", "white-space: pre-line;");
    a2.setAttribute("style", "white-space: pre-line;");
    a3.setAttribute("style", "white-space: pre-line;");
    a4.setAttribute("style", "white-space: pre-line;");

    a1.addEventListener("click", function() {
        correctAnswer(a1.innerHTML, newQuestion,index)
        newSec.remove();
    })

    a2.addEventListener("click", function() {
        correctAnswer(a2.innerHTML, newQuestion,index)
        newSec.remove();
    })

    a3.addEventListener("click", function() {
        correctAnswer(a3.innerHTML, newQuestion, index)
        newSec.remove();
    })

    a4.addEventListener("click", function() {
        correctAnswer(a4.innerHTML, newQuestion,index)
        newSec.remove();
    })
};
