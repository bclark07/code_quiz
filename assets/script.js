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

var HighScores = [];
var time = questions.length * 15; //for countdown timer
var i = -1;
var head = document.querySelector("#header");
var question = document.querySelector("#question");
var button1 = document.querySelector("#button_1");
var button2 = document.querySelector("#button_2");
var button3 = document.querySelector("#button_3");
var button4 = document.querySelector("#button_4");
var response = document.querySelector(".response");
var submit = document.querySelector("#submit");
var timer = document.querySelector(".timer");

function setTime() {
    setInterval(function () {
        time--;
        timer.textContent = "Timer :" + time + " seconds";
    }, 1000);
}

button1.addEventListener("click", function () {
    if (i === -1) {
        head.innerHTML = "";
        document.querySelector("#directions").innerHTML = "";
        var timeint = setTime();
        question.innerHTML = questions[0].title;
        button1.innerHTML = questions[0].choices[0];
        button2.innerHTML = questions[0].choices[1];
        button3.innerHTML = questions[0].choices[2];
        button4.innerHTML = questions[0].choices[3];
        button2.setAttribute("class", "buttonShow");
        button3.setAttribute("class", "buttonShow");
        button4.setAttribute("class", "buttonShow"); //why doesn't document.querySelector(".response").setAttribute work?
        i++;
        console.log(i);
    } else {
        if (questions[i].answer === button1.innerHTML) {
            response.setAttribute("id", "right"); //why doesn't document.querySelector(".response").setAttribute work?
            response.innerHTML = "Success!";
        } else {
            response.setAttribute("id", "wrong");
            response.innerHTML = "Wrong, -10 seconds";
            time = time - 10;
        }
        reset();
    }
});

function reset() {
    if (i < 4) {
        i++;
        console.log(i);
        question.innerHTML = questions[i].title;
        button1.innerHTML = questions[i].choices[0];
        button2.innerHTML = questions[i].choices[1];
        button3.innerHTML = questions[i].choices[2];
        button4.innerHTML = questions[i].choices[3];
    } else if (i === 4) {
        // clearInterval(timeint); //why doesn't this work?
        var score = time;
        head.innerHTML = "All done!";
        question.innerHTML = "";
        document.querySelector("#directions").innerHTML = "Your final score is " + score;
        response.innerHTML = "";
        var form = document.createElement("form");
        var initials = document.createElement("input");
        form.appendChild(initials);
        response.appendChild(form);
        submit.appendChild(form); //how create an element in the middle of an array?
        // initials.innerHTML = "Enter Initials: ";                   // Insert text
        // response.appendChild(form); //why can't I append using class names?
        button1.innerHTML = "Submit";
        button2.setAttribute("class", "buttonHide");
        button3.setAttribute("class", "buttonHide");
        button4.setAttribute("class", "buttonHide");

        // <form class="initials">
        // Initials:<br>
        // <input class="input" type="text" name="Name">
        // <br>
        // </form>

        //prepend form element
        i++;
    } else { }
}

button2.addEventListener("click", function () {
    if (questions[i].answer === button2.innerHTML) {
        response.setAttribute("id", "right");
        response.innerHTML = "Success!";
    } else {
        response.setAttribute("id", "wrong");
        response.innerHTML = "Wrong, -10 seconds";
        time = time - 10;
    }
    reset();

});

button3.addEventListener("click", function () {
    if (questions[i].answer === button3.innerHTML) {
        response.setAttribute("id", "right");
        response.innerHTML = "Success!";
    } else {
        response.setAttribute("id", "wrong");
        response.innerHTML = "Wrong, -10 seconds";
        time = time - 10;
    }
    reset();

});

button4.addEventListener("click", function () {
    if (questions[i].answer === button4.innerHTML) {
        response.setAttribute("id", "right");
        response.innerHTML = "Success!";
    } else {
        response.setAttribute("id", "wrong");
        response.innerHTML = "Wrong, -10 seconds";
        time = time - 10;
    }
    reset();

});


// // var new_movie = element.createElement(h1);
// // var para = document.createElement("p");
// // element.appendChild(new_movie);

    // container.setAttribute("class", "AnswerHide");

    // var one = "";
    // var two = "";
    // var three = "";
    // var four = "";


    // for (i = 0; i < questions.length; i++) {

    //     console.log(questions.length);
    //     console.log(answer_1);
    //     one = (answer_1[i]);


    // }




    // need to store the answer somewhere and compare it to the correct answer
    // need to return a grade
    //worry about the colors and bootstrap later - go back and change all the assignements to reflect the bootstrap

    // var msgDiv = document.querySelector("#msg"); will change the message?

