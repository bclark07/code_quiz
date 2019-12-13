var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ___________.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ___________ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "parentheses"
    },
    {
        title: "A very useful tool during debugging and development for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log"
    },
];

var name = [];
var num = [];
var HighScores = { name, num };
var time = questions.length * 15; //for countdown timer
var i = -1;
var head = document.querySelector("#header");
var question = document.querySelector("#question");
var buttonstart = document.querySelector("#button_start");
var button1 = document.querySelector("#button_1");
var button2 = document.querySelector("#button_2");
var button3 = document.querySelector("#button_3");
var button4 = document.querySelector("#button_4");
var response = document.querySelector(".response");
var submit = document.querySelector("#submit");
var timer = document.querySelector(".timer");
var form = document.createElement("form");
var initials = document.createElement("input");
var hslist = document.createElement("tr");
var initialsList = document.createElement("td");
var scor = document.createElement("td");
var timeint = 0;
var score = 0;
var jumbotron = document.querySelector(".jumbotron");

function setTime() {
    var update = setInterval(function () {
        time--;
        timer.textContent = "Timer: " + time + " seconds";
    }, 1000);
    return update;
}

buttonstart.addEventListener("click", function () {
    jumbotron.style.display="none";
    if (i === -1) {
        head.innerHTML = "";
        document.querySelector("#directions").innerHTML = "";
        timeint = setTime();
        question.innerHTML = questions[0].title;
        button1.innerHTML = questions[0].choices[0]; //way to iterate through this?
        button2.innerHTML = questions[0].choices[1];
        button3.innerHTML = questions[0].choices[2];
        button4.innerHTML = questions[0].choices[3];
        button1.setAttribute("class", "buttonShow");
        button2.setAttribute("class", "buttonShow");
        button3.setAttribute("class", "buttonShow");
        button4.setAttribute("class", "buttonShow"); //why doesn't document.querySelector(".response").setAttribute work?
        i++;
    }
});


button1.addEventListener("click", function () {
    // if (i === -1) {
    //     head.innerHTML = "";
    //     document.querySelector("#directions").innerHTML = "";
    //     timeint = setTime();
    //     question.innerHTML = questions[0].title;
    //     button1.innerHTML = questions[0].choices[0];
    //     button2.innerHTML = questions[0].choices[1];
    //     button3.innerHTML = questions[0].choices[2];
    //     button4.innerHTML = questions[0].choices[3];
    //     button2.setAttribute("class", "buttonShow");
    //     button3.setAttribute("class", "buttonShow");
    //     button4.setAttribute("class", "buttonShow"); //why doesn't document.querySelector(".response").setAttribute work?
    //     i++;
    //     console.log(i);
    // } else 
    if (button1.innerHTML === "Submit") {
        var initialsInput = document.querySelector("#name");
        head.innerHTML = "High Scores";
        button1.innerHTML = "Go Back";
        button2.innerHTML = "Clear High Scores";
        button2.setAttribute("class", "buttonShow");
        HighScores.name.push(initialsInput.value);
        initials.innerHTML = ""; //clears out the form field
        submit.appendChild(hslist);//lets figure out if this is correct
        initialsList.innerHTML = "BC";
        hslist.appendChild(inititialsList);
        scor.innerHTML = 57;
        hslist.appendChild(scor);
        console.log(HighScores);
        i = -1; //so don't have to set up a button reader for "Go Back"
    } else {
        console.log(1, time);
        if (questions[i].answer === button1.innerHTML) {
            response.setAttribute("id", "right"); //why doesn't document.querySelector(".response").setAttribute work?
            response.innerHTML = "Success!";
        } else {
            wrong();
        }
        new_q();
    }
});

function new_q() {
    if (i < 4) {
        i++;
        console.log(i);
        question.innerHTML = questions[i].title;
        button1.innerHTML = questions[i].choices[0];
        button2.innerHTML = questions[i].choices[1];
        button3.innerHTML = questions[i].choices[2];
        button4.innerHTML = questions[i].choices[3];
    } else if (i === 4) {
        reset();
    }
}

function reset() {
    score = time;
    clearInterval(timeint);
    time = questions.length * 15;
    HighScores.num.push(score);
    console.log(HighScores);
    head.innerHTML = "All done!";
    question.innerHTML = "";
    document.querySelector("#directions").innerHTML = "Your final score is " + score;
    // response.innerHTML = "";
    initials.setAttribute("id", "name");
    // initials.addEventListener("click", function () {initials.value = ""
    form.appendChild(initials);
    submit.appendChild(form); //how create an element in the middle of an array?
    initials.innerHTML = "Enter Initials: ";                   // Insert text
    button1.innerHTML = "Submit";
    button2.setAttribute("class", "buttonHide");
    button3.setAttribute("class", "buttonHide");
    button4.setAttribute("class", "buttonHide");
}

button2.addEventListener("click", function () {
    console.log(2, time);
    if (button2.innerHTML === "Clear High Scores") {
        HighScores = {};
        console.log(i, "hmmm");
    } else if (questions[i].answer === button2.innerHTML) {
        response.setAttribute("id", "right");
        response.innerHTML = "Success!";
        new_q();
    } else {
        wrong();
        new_q();
    }

});


button3.addEventListener("click", function () {
    console.log(3, time);
    if (questions[i].answer === button3.innerHTML) {
        response.setAttribute("id", "right");
        response.innerHTML = "Success!";
    } else {
        wrong();
    }
    new_q();

});

button4.addEventListener("click", function () {
    console.log(4, time);
    if (questions[i].answer === button4.innerHTML) {
        response.setAttribute("id", "right");
        response.innerHTML = "Success!";
    } else {
        wrong();
    }
    new_q();

});

function wrong() {
    response.setAttribute("id", "wrong");
    response.innerHTML = "Wrong, -10 seconds";
    time = time - 10;
    timer.textContent = "Timer: " + time + " seconds";
}



    // need to store the answer somewhere and compare it to the correct answer
    // need to return a grade
    //worry about the colors and bootstrap later - go back and change all the assignements to reflect the bootstrap


