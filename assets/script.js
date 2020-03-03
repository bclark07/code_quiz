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

//header
var timer = document.querySelector(".timer");

//divs
var head = document.querySelector("#header");
var directions = document.querySelector("#directions");
var buttons = document.querySelector(".buttons");
var response = document.querySelector(".response");
var initialsInput = document.querySelector("#name");
var hslist = document.createElement("tr");
var initialsList = document.createElement("td");
var high_score = document.createElement("td");

//buttons
var button_start = document.querySelector("#button_start");
var answer_button = document.querySelector(".btn-secondary");
var button1 = document.querySelector("#button_1");
var button2 = document.querySelector("#button_2");
var button3 = document.querySelector("#button_3");
var button4 = document.querySelector("#button_4");
var submit = document.querySelector("#done");
var next = document.querySelector("#next");

//populates high scrores dropdown
document
  .querySelector(".dropdown-toggle")
  .addEventListener("click", function() {
    console.log("clicked");
    document
      .querySelector(".dropdown-item") //or menu?
      .appendChild(document.createElement("tr"));
    //populate with hdList table from the submit page
    for (i = 0; i < init.length; i++) {
      var a = init[i];
      var b = num[i];
    }
  });

function setTime() {
  timer.textContent = "Timer = " + time + " seconds";
  var update = setInterval(function() {
    time--;
    timer.textContent = "Timer = " + time + " seconds";
  }, 1000);
  return update;
}

button_start.addEventListener("click", function() {
  head.innerHTML = questions[i].title;
  directions.style.display = "none";
  buttons.style.display = "";
  timeint = setTime();
});

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
  //   HighScores.num.push(score);
  //   num.push(score);

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
    var combo = { init: initials, num: score }; //creates an object with the user's score
    storedScores.push(combo);
    localStorage.setItem("scores", JSON.stringify(storedScores));
    var sortedScores = storedScores.sort(function(a, b) {
      return b.num - a.num;
    });
    console.log(sortedScores);
    console.log("sorted1" + sortedScores); //why does this console.log differently?

    //pull num and init from local storage, put into high scores array and sort by score
    // localStorage.setItem("interestedFoods", JSON.stringify(interestedFoods));
    // create for loop to loop length of num and assign init[i] and num[i] to a td tag, embed in tr tag and append to tbody?
    // document
    //   .querySelector(".dropdown-item") //or menu?
    //   .appendChild(document.createElement("tr"));
    //populate with hdList table from the submit page

    // init.push(initials);
    // // storedScores.init.push(initials);
    // // storedScores.num.push(score);
    // localStorage.setItem("initials_list", init);
    // // localStorage.setItem("scores", num);
    // // var HighScores = { init, num };
    // localStorage.setItem("scores", JSON.stringify(storedScores));
    // for (i = 0; i < num.length; i++) {
    //   // build the table
    //   var a = init[i];
    //   var b = num[i];
    //   console.log(a, b);
    //   initialsList.innerHTML = a;
    //   high_score.innerHTML = b;
    // }
    // localStorage.setItem("lastRecipes", JSON.stringify(lastRecipes));
    // lastRecipes = JSON.parse(localStorage.getItem("lastRecipes"));
    //example
    // var email = document.querySelector("#email").value;
    // var password = document.querySelector("#password").value;
    // localStorage.setItem("email", email);
    // localStorage.setItem("password", password);
    // renderLastRegistered();

    // function renderLastRegistered() {
    //   var email = localStorage.getItem("email");
    //   var password = localStorage.getItem("password");

    //   if (email && password === null) {
    //     return;
    //   }

    //   userEmailSpan.textContent = email;
    //   userPasswordSpan.textContent = password;
    // }
    //example ends
    // var hslist = document.createElement("tr");
    // var initialsList = document.createElement("td");
    // var high_score = document.createElement("td");

    // head.innerHTML = "High Scores";
    // submit.innerHTML = "Go Back";
    // next.setAttribute("class", "btn btn-success buttonShow"); //ad new id
    // // HighScores.init.push(initialsInput.value);

    // //need for loop to loop through array and show values
    // console.log(HighScores.num.length);
    // console.log("ok");
    // for (v = 0; v < HighScores.num.length; v++) {
    //   initialsList.innerHTML = HighScores.init[v];
    //   console.log(HighScores.init[v]);
    //   high_score.innerHTML = HighScores.num[v];
    //   // hslist.appendChild(initialsList);
    //   hslist = hslist.appendChild(initialsList);
    //   hslist = hslist.prependChild(high_score);
    //   // .appendChild(high_score);
    //   //how get hslist to get new value of hslist with appended elements
    //   document.querySelector("#list_here").appendChild(hslist); //lets figure out if this is correct
    // }
    // document.querySelector(".highscores").setAttribute("style", "display: ");
  } else {
    //restarts quiz
    i = 0;
    initialsInput.value = ""; //check that clears out the form field
    head.innerHTML = questions[i].title;
    button1.innerHTML = questions[i].choices[0];
    button2.innerHTML = questions[i].choices[1];
    button3.innerHTML = questions[i].choices[2];
    button4.innerHTML = questions[i].choices[3];
    buttons.style.display = "";
    document
      .querySelector(".form-group")
      .setAttribute("style", "display: none");
    document
      .querySelector(".highscores")
      .setAttribute("style", "display: none");
    response.innerHTML = "";
    submit.innerHTML = "Submit";
    next.setAttribute("class", "btn btn-success buttonHide");
  }
});

//clears high scores list
next.addEventListener("click", function() {
  init = [];
  num = [];
  //   HighScores = { init, num };
});
