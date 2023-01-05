

var allArrays = []; // this will allow to store the initials and scores, otherwise it will be erased each time we load the page

var start = document.querySelector("#startbtn"); //this will start the test

//scores
var score = 100; // this is the max score available
var tableHighscore = document.querySelector("#highscoreTable"); //this will show the highscores of the test
var scorePage =document.querySelector("#score-page"); //this is where the user will click to see the Highscore table
var scoreBoard = document.querySelector("#scoreboard") //this is the list where the scoreboard will be placed
var score = document.querySelector("#score"); //this will show the current score
var totalScore = document.querySelector("#total-score"); // this will show the final score of the test


// options variables
var options = document.querySelector("#options"); //this will contain the multiple choice answers
var A = document.querySelector("#optionA"); //option A
var B = document.querySelector("#optionB"); //option B
var C = document.querySelector("#optionC"); //option C
var D = document.querySelector("#optionD"); //option D

var timer; //this will show the timer
var initialForm = document.querySelector("#initials")

var counter;

var testInfo = {

    //questions of the quizz
    testArray : ["1. What does HTML stand for?", "2. What is the correct way to apply CSS to an HTML element?", "3. What is the purpose of the display property in CSS?", "4. What is the correct syntax for a JavaScript function?", "5. What is the correct way to select an element with the ID 'myDiv' in JavaScript?", "6. What is the purpose of the for loop in JavaScript?", "7. Which of the following is not a JavaScript data type?","8. How you place a comment in JavaScript?", "9. Which of the following is not a valid CSS selector?", "10. What is the correct way to add a comment in HTML?"],
    
    //Correct answers of the quizz
    answersArray: ["<javascript>" , "<link>", "To control how an element is displayed on the web page", "function myFunction()", "document.getElementById('myDiv')", "To execute a block of code a set number of times", "Picture", "//", "$myDiv", "<!-- This is a comment -->", ],
   
    //All of the possible option answers of the quizz
    opAArray: ["<body>", "<style>", "To set the color of text", "function: myFunction()", "#myDiv", "To execute a block of code a set number of times", "Number", "??", "#myDiv", "<!-- This is a comment -->"],
    opBArray: ["<div>", "<link>", "To set the size of text", "function myFunction()", ".myDiv", "To execute a block of code while a condition is true", "String", "<>", ".myDiv", "// This is a comment"],
    opCArray: ["<javascript>", "<css>", "To set the font of text", "function = myFunction()", "$myDiv", "To execute a block of code when an event occurs", "Array", "!!", "p", "/* This is a comment */"],
    opDArray: ["<p>", "style=''", "To control how an element is displayed on the web page", "function => myFunction()", "document.getElementById('myDiv')", "To execute a block of code in reverse order", "Picture", "//", "$myDiv", "# This is a comment"],
}

//this function will start the test and will send the user to the first question of the test
function startTest() {
    start.classList.add("inv");
    counter = 0
    questions.textContent = testInfo.testArray[counter];
    options.classList.remove("inv");
    opAArray.textContent = testInfo.opAArray[counter];
    opBArray.textContent = testInfo.opBArray[counter];
    opCArray.textContent = testInfo.opCArray[counter];
    opDArray.textContent = testInfo.opDArray[counter];

    //scorePlacer.classlist.remove(inv)

};

//this function will be used when the user selects an answer of the test
function optionSelected() {

    var buttonSelected = event.target;

    if (buttonSelected.textContent === testInfo.answersArray[counter]) {
        totalScore.textContent = "Well Done! 😃";
    }

    else {
        totalScore.textContent = testInfo.answersArray = "Try Again! 😢";
        score = score - 10; // each wrong answer will substract 10 points

// this code will be activated once there are no more questions in the test        
}
    if (counter > testInfo.testArray.length-2) {
        finalScore();
        return;
    }

// this code will show the questions and answer
start.classList.add("inv");
// quizInstructions.classList.add("hide");
counter++;
questions.textContent = testInfo.testArray[counter];

options.classList.remove("inv");
opA.textContent = testInfo.opAArray[counter];
opB.textContent = testInfo.opBArray[counter];
opC.textContent = testInfo.opCArray[counter];
opD.textContent = testInfo.opDArray[counter];
console.log(counter);

}

//This functions will will show the score ask the user for the name's initials

function finalScore() {

    questions.textContent = "Finish!";
    options.classList.add("inv");
    totalScore.classList.add("inv");
    tableHighscore.classList.add("inv");

    totalScore.text = "Your final score is : " + score;

    
    var newForm = document.createElement("form");
    console.log(newForm);
    newForm.innerHTML = "Please enter your initials : ";
    
    
    
   
    
}

