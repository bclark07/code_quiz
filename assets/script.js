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
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ___________ when being assigned to variables.",
    choices: ["quotes", "commas", "curly brackets", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool during debugging and development for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
  }
];

var time = questions.length * 15; //for countdown timer
var timeint = 0;
var i = 0;
var score = 0;
var sortedScores = JSON.parse(localStorage.getItem("scores")) || [];

//header
var timer = document.querySelector(".timer");

//divs
var head = document.querySelector("#header");
var directions = document.querySelector("#directions");
var buttons = document.querySelector(".buttons");
var response = document.querySelector(".response");
var initialsInput = document.querySelector("#name");

//buttons
var button_start = document.querySelector("#button_start");
var answer_button = document.querySelector(".btn-secondary");
var button1 = document.querySelector("#button_1");
var button2 = document.querySelector("#button_2");
var button3 = document.querySelector("#button_3");
var button4 = document.querySelector("#button_4");
var submit = document.querySelector("#done");
var clear = document.querySelector("#clear");
var exit = document.querySelector("#exit");

// create tr and td elements to append to tbody in html
function createTable(objectArr, marker) {
  for (v = 0; v < objectArr.length; v++) {
    var td1 = new DOMParser().parseFromString(objectArr[v].init, "text/xml");
    var td2 = new DOMParser().parseFromString(objectArr[v].num, "text/xml");
    var row = document.createElement("tr");
    row.setAttribute("class", "d-flex justify-content-around");
    row.appendChild(td1.firstChild);
    row.appendChild(td2.firstChild);
    document.querySelector(marker).appendChild(row);
  }
}

//populates high scores dropdown
//why isn't this working on the home page?
document
  .querySelector("#dropdownMenuButton")
  .addEventListener("click", function() {
    console.log("clicked");
    document.querySelector(".dropdown-scores").innerHTML = "";
    createTable(sortedScores, ".dropdown-scores");
  });

function setTime() {
  timer.textContent = "Timer = " + time + " seconds";
  var update = setInterval(function() {
    time--;
    timer.textContent = "Timer = " + time + " seconds";
    if (time <= 0) {
      clearInterval(timeint);
      reset();
      alert("Sorry, your time ran out");
    }
  }, 1000);
  return update;
}

button_start.addEventListener("click", function() {
  head.innerHTML = questions[i].title;
  directions.style.display = "none";
  buttons.style.display = "";
  timeint = setTime();
});

function reset() {
  head.innerHTML = "Coding Quiz Challenge";
  directions.style.display = "";
  buttons.style.display = "none";
  i = 0;
  button1.innerHTML = questions[i].choices[0];
  button2.innerHTML = questions[i].choices[1];
  button3.innerHTML = questions[i].choices[2];
  button4.innerHTML = questions[i].choices[3];
  response.innerHTML = "";
  time = questions.length * 15;
  timer.textContent = "Timer = 0 seconds";
}

//determines if a question was answered correctly or incorrectly
button1.addEventListener("click", function() {
  if (questions[i].answer === button1.innerHTML) {
    response.setAttribute("id", "right");
    response.innerHTML = "Success!";
  } else {
    wrong();
  }
  new_q();
});

//determines if a question was answered correctly or incorrectly
button2.addEventListener("click", function() {
  if (questions[i].answer === button2.innerHTML) {
    response.setAttribute("id", "right");
    response.innerHTML = "Success!";
  } else {
    wrong();
  }
  new_q();
});

//determines if a question was answered correctly or incorrectly
button3.addEventListener("click", function() {
  if (questions[i].answer === button3.innerHTML) {
    response.setAttribute("id", "right");
    response.innerHTML = "Success!";
  } else {
    wrong();
  }
  new_q();
});

//determines if a question was answered correctly or incorrectly
button4.addEventListener("click", function() {
  if (questions[i].answer === button4.innerHTML) {
    response.setAttribute("id", "right");
    response.innerHTML = "Success!";
  } else {
    wrong();
  }
  new_q();
});

//subtracts 10 seconds if answer incorrectly
function wrong() {
  response.setAttribute("id", "wrong");
  response.innerHTML = "Wrong, -10 seconds";
  time = time - 10;
  timer.textContent = "Timer = " + time + " seconds";
}

//changes the quiz question and answers when answer a question
function new_q() {
  if (i < 4) {
    i++;
    head.innerHTML = questions[i].title;
    button1.innerHTML = questions[i].choices[0];
    button2.innerHTML = questions[i].choices[1];
    button3.innerHTML = questions[i].choices[2];
    button4.innerHTML = questions[i].choices[3];
  } else if (i === 4) {
    finished_quiz();
  }
}

function finished_quiz() {
  score = time;
  clearInterval(timeint);
  time = questions.length * 15;
  buttons.style.display = "none";
  head.innerHTML = "All done!";
  document.querySelector(".form-group").setAttribute("style", "");
  document.querySelector("#result").innerHTML = "Your final score is " + score;
}

//add on-clicks for start, answer buttons, submit and submit trigger the clear/go-back option?
submit.addEventListener("click", function() {
  if (submit.innerHTML === "Submit") {
    var storedScores = JSON.parse(localStorage.getItem("scores")) || [];
    var initials = document.querySelector("#name").value; //gets this initials
    document.querySelector("#name").value = "";
    var combo = {
      init: "<td>" + initials + "</td>",
      num: "<td>" + score + "</td>"
    }; //creates an object with the user's score
    storedScores.push(combo);
    sortedScores = storedScores.sort(function(a, b) {
      var val1 = new DOMParser().parseFromString(b.num, "text/xml");
      var val2 = new DOMParser().parseFromString(a.num, "text/xml");
      return val1.firstChild.innerHTML - val2.firstChild.innerHTML;
    });
    console.log(sortedScores);
    console.log("sorted1" + sortedScores); //why does this console.log differently?
    localStorage.setItem("scores", JSON.stringify(sortedScores));
    document
      .querySelector(".form-group")
      .setAttribute("style", "display: none");
    document.querySelector(".highscores").setAttribute("style", "");
  }
  document.querySelector(".list_here").innerHTML = "";
  createTable(sortedScores, ".list_here");

  //clears high scores list
  clear.addEventListener("click", function() {
    localStorage.removeItem("scores");
  });

  //returns to main page
  exit.addEventListener("click", function() {
    reset();
    document
      .querySelector(".highscores")
      .setAttribute("style", "display: none");
  });
});
