            //contant variables
          
            const highscoreTable = document.querySelector("#highscoreTable");
            const scorePage = document.querySelector("#score-page");
            const scoreboard = document.querySelector("#scoreboard");
            const currentScore = document.querySelector("#score");

            // Quiz variables
            let score = 0;




            // Quiz questions
            const quizData = {
            questions: [
                "1. What does HTML stand for?",
                "2. What is the correct way to apply CSS to an HTML element?",
                "3. What is the purpose of the display property in CSS?",
                "4. What is the correct syntax for a JavaScript function?",
                "5. What is the correct way to select an element with the ID 'myDiv' in JavaScript?",
                "6. What is the purpose of the for loop in JavaScript?",
                "7. Which of the following is not a JavaScript data type?",
                "8. How do you place a comment in JavaScript?",
                "9. Which of the following is not a valid CSS selector?",
                "10. What is the correct way to add a comment in HTML?"
            ],
            correctAnswers: [
                "HyperText Markup Language",
                "Using the <style> element or an external CSS file",
                "To control how an element is displayed on the web page",
                "function myFunction()",
                "document.getElementById('myDiv')",
                "To execute a block of code a set number of times",
                "Picture",
                "//",
                "$myDiv",
                "<!-- This is a comment -->"
            ],
            optionsContainer: [
                ["<javascript>", "<style>", "To set the color of text", "function: myFunction()"],
                ["<body>", "<link>", "To set the size of text", "function myFunction()"],
                ["HyperText Markup Language", "<css>", "To set the font of text", "function = myFunction()"],
                ["<p>", "style=''", "To control how an element is displayed on the web page", "function => myFunction()"],
                ["#myDiv", ".myDiv", "$('#myDiv')", "document.querySelector('#myDiv')"],
                ["To execute a block of code a set number of times", "To execute a block of code while a condition is true", "To execute a block of code when an event occurs", "To execute a block of code in reverse order"],
                ["Number", "String", "Array", "Boolean"],
                ["//", "/* */", "*/", "'''"],
                ["p", "#myDiv", ".myDiv", "$('#myDiv')"],
                ["<!-- This is a comment -->", "<comment>", "/* This is a comment */", "// This is a comment"]
            ]
            };
            

//This will check if the answers are correct
function checkAnswer(e) {
    if (e.target.dataset.optionid == quizData.correctAnswers[currentQuestion]) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.questions.length) {
      showQuestion(currentQuestion);
    } else {
      clearInterval(timer);
      showEndQuiz();
    }
  }
//this will show the end results of the quiz
function showEndQuiz() {
  const endQuizSection = document.getElementById("end-quiz");
  const finalScore = document.getElementById("final-score");
  finalScore.innerText = score;
  endQuizSection.classList.remove("inv");
  endQuizSection.scrollIntoView({ behavior: 'smooth' });
}

// this will start the counter
let timeLeft = 600; 

const timer = setInterval(function() {
  timeLeft--; // decrement time left by 1 second
  
  // update the time left displayed on the page
  document.getElementById('time-left').textContent = `${timeLeft} seconds left`;
  
  // end the quiz when the time runs out
  if (timeLeft === 0) {
    clearInterval(timer); // stop the timer
    endQuiz(); // function to end the quiz and display the user's score
  }
}, 1000); // set the interval to run every 1 second (1000 milliseconds)



// Event listener for start button click
const startBtn = document.querySelector('#startbtn');
startBtn.addEventListener("click", function () {
  // Hide Start button
  startBtn.classList.add("inv");

  // Show questions and options
  const questions = document.querySelector('.questions');
  const optionsContainer = document.querySelector('.options-container');
  questions.classList.remove("inv");
  optionsContainer.classList.remove("inv");

// event listener for the options of the quizz
  const optionButtons = document.querySelectorAll('button[data-optionid]');
optionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the selected option's ID and compare with the correct answer
    const selectedOptionId = parseInt(button.dataset.optionid);
    const correctOptionId = quizData.correctAnswers.indexOf(quizData.optionsContainer[counter][0]);
    if (selectedOptionId === correctOptionId) {
      score += 10;
    } else {
      score -= 10;
    }

    // Move to the next question
    counter += 1;
    if (counter < quizData.questions.length) {
      // Show the next question and options
      questions.textContent = quizData.questions[counter];
      optionA.textContent = quizData.optionsContainer[counter][0];
      optionB.textContent = quizData.optionsContainer[counter][1];
      optionC.textContent = quizData.optionsContainer[counter][2];
      optionD.textContent = quizData.optionsContainer[counter][3];
    } else {
      // End of quiz
      clearInterval(timerInterval);
      scorePage.classList.remove("inv");
      currentScore.textContent = "Your score: " + score;
      const totalScore = document.querySelector("#total-score");
      totalScore.textContent = "Total Score: " + score;
    }
  });
});

  // Reset counter if reached end of questions
  if (counter >= quizData.questions.length) {
    counter = 0;
  }
});
  

// Submit quiz function
function submitQuiz() {
    // Stop the timer
    clearInterval(timerInterval);                
    // Hide the questions and options
    const questions = document.querySelector('.questions');
    const optionsContainerContainer = document.querySelector('.options-container-container');
    questions.classList.add("inv");
    optionsContainerContainer.classList.add("inv");
              
    // Show the final score
    finalScore();
}

//Show  final score
function finalScore() {
    // Create element for final score
    let finalScoreDisplay = document.createElement("p");
    finalScoreDisplay.textContent = "Your final score is " + score + " out of 100";
    highscoreBtn.setAttribute("onclick", "location.href='highscores.html'");
    scorePage.appendChild(finalScoreDisplay);
    scorePage.appendChild(highscoreBtn);
}


// Create button for highscore
let highscoreBtn = document.createElement("button");
highscoreBtn.textContent = "View High Scores";
highscoreBtn.setAttribute("id", "highscoreBtn");

//Add event lister for highscore
highscoreBtn.addEventListener("click", function() {
    // Hide score page and show high score table
    scorePage.classList.add("inv");
    highscoreTable.classList.remove("inv");
});

// gets the value of the user's input
let initialsInput = document.querySelector("#initialsInput");
if (initialsInput.value.trim() === "") {
    return;
}

// Adds the new initials and score to the scoreboard
let newScore = {
    initials: initialsInput.value.trim(),
    score: score
};
allArrays.push(newScore);
localStorage.setItem("scores", JSON.stringify(allArrays));
initialForm.classList.add("inv");

// Sorts the scoreboard in descending order
allArrays.sort((a, b) => {
    return b.score - a.score;
});

// Update the scoreboard displayed on the page
updateScoreboard(allArrays);






// Generate question function
function generateQuestion() {
// Check if there are still questions left
if (counter >= quizData.questions.length) {
// Quiz is over, show final score
submitQuiz();
return;
}

// Start the quiz
function startQuiz() {
// Hide the start button
startBtn.classList.add("inv");
                                
       
// Display first question
generateQuestion();
        }
        
        // Event listener for high score button
        document.querySelector("#highscoreBtn").addEventListener("click", function() {
            // Hide high score table and show score page
            highscoreTable.classList.add("inv");
            scorePage.classList.remove("inv");
            });
                      
                //Creates the scoreboard
                for (let i = 0; i < allArrays.length; i++) {
                    let newLi = document.createElement("li");
                    newLi.textContent = allArrays[i].initials + " - " + allArrays[i].score;
                    scoreBoard.appendChild(newLi);
                }
            highscoreTable.classList.remove("inv");

// create an empty array to store the high scores
let highScores = [];

// function to add user's name and score to the highScores array
function addScoreToHighScores(name, score) {
  highScores.push({ name, score });
}

// function to sort the highScores array based on scores in descending order
function sortHighScores() {
  highScores.sort((a, b) => b.score - a.score);
}

// function to display the high score table
function displayHighScores() {
  // select the high score table element
  const table = document.getElementById('high-score-table');

  // clear the table contents
  table.innerHTML = '';

  // create a header row for the table
  const headerRow = document.createElement('tr');
  const headerName = document.createElement('th');
  headerName.innerText = 'Name';
  const headerScore = document.createElement('th');
  headerScore.innerText = 'Score';
  headerRow.appendChild(headerName);
  headerRow.appendChild(headerScore);
  table.appendChild(headerRow);

  // create a row for each high score and add it to the table
  highScores.forEach((score, index) => {
    const row = document.createElement('tr');
    const name = document.createElement('td');
    name.innerText = score.name;
    const scoreCell = document.createElement('td');
    scoreCell.innerText = score.score;
    row.appendChild(name);
    row.appendChild(scoreCell);
    table.appendChild(row);
  });
}



//Event listerns to restart the test
const restartBtn = document.getElementById("restart-btn");
const exitBtn = document.getElementById("exit-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

exitBtn.addEventListener("click", function() {
  window.close();
});
