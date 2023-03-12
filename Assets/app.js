            //contant variables
          
            const highscoreTable = document.querySelector("#highscoreTable");
            const scorePage = document.querySelector("#score-page");
            const scoreboard = document.querySelector("#scoreboard");
            const currentScore = document.querySelector("#score");

            // Quiz variables
            let score = 0;
            let currentQuestion = 0;


            // Quiz quizData
            const quizData = [
              {
                question: "What does HTML stand for?",
                choices: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlinking Text Markup Language"],
                answer: "Hyper Text Markup Language"
              },
              {
                question: "What is the correct way to apply CSS to an HTML element?",
                choices: ["inline", "internal", "external", "all of the above"],
                answer: "all of the above"
              },
              {
                question: "What is the purpose of the display property in CSS?",
                choices: ["to set the font size", "to set the background color", "to specify how an element is displayed", "to align text"],
                answer: "to specify how an element is displayed"
              },
              {
                question: "What is the correct syntax for a JavaScript function?",
                choices: ["function = myFunction()", "function:myFunction()", "function myFunction()", "myFunction():function"],
                answer: "function myFunction()"
              },
              {
                question: "What is the correct way to select an element with the ID 'myDiv' in JavaScript?",
                choices: ["document.getElementByName('myDiv')", "document.getElement('myDiv')", "document.getElementById('myDiv')", "document.select('myDiv')"],
                answer: "document.getElementById('myDiv')"
              },
              {
                question: "What is the purpose of the for loop in JavaScript?",
                choices: ["to execute code only if a certain condition is met", "to execute code repeatedly while a certain condition is true", "to execute code a specific number of times", "to execute code randomly"],
                answer: "to execute code repeatedly while a certain condition is true"
              },
              {
                question: "Which of the following is not a JavaScript data type?",
                choices: ["number", "string", "boolean", "table"],
                answer: "table"
              },
              {
                question: "How do you place a comment in JavaScript?",
                choices: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "both // and /* are correct"],
                answer: "// This is a comment"
              },
              {
                question: "Which of the following is not a valid CSS selector?",
                choices: [":hover", ":before", ":after", ":between"],
                answer: ":between"
              },
              {
                question: "What is the correct way to add a comment in HTML?",
                choices: ["<!-- This is a comment -->", "// This is a comment", "/* This is a comment */", "<comment>This is a comment</comment>"],
                answer: "<!-- This is a comment -->"
              }
            ];
            
            
  // Get references to the HTML elements
  questionContainer.innerText = quizData[questionIndex].question;
const optionButtons = document.querySelectorAll('#optionsContainer button');
optionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedOption = button.dataset.optionid;
    checkAnswer(selectedOption);
  });
});

// Function to display the quiz question and options
function displayQuestion(questionIndex) {
  // Set the text of the question container to the current question
  questionContainer.innerText = quizData.optionsContainer[questionIndex];

  // Set the text of the option buttons to the current options
  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].innerText = quizData.optionsContainer[questionIndex][i];
  }
}

// Call the displayQuestion function to display the first question
// Function to display the quiz question and options
function displayQuestion(questionIndex) {
  const currentQuestion = quizData[questionIndex];
  // Set the text of the question container to the current question
  quizData[questionIndex].question.innerText = currentQuestion.question;

  // Set the text of the option buttons to the current options
  for (let i = 0; i < optionButtons.length; i++) {
    const optionButton = optionButtons[i];
    const optionText = currentQuestion.choices[i];
    optionButton.innerText = optionText;
  }
}

          

//This will check if the answers are correct
function checkAnswer(selectedOption) {
  if (quizData[currentQuestion].answer === quizData[currentQuestion].choices[selectedOption]) {
    score += 10;
  } else {
    score -= 10;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    displayQuestion(currentQuestion);
  } else {
    endQuiz();
  }
}

document.getElementById("submit-btn").addEventListener("click", checkAnswer);



// Event listener for start button click
const startBtn = document.querySelector('#startbtn');
startBtn.addEventListener("click", function () {
  // Hide Start button
  startBtn.classList.add("inv");
  
  // Show questions and options
  function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.classList.add('inv');
    optionButtons.forEach((button) => {
      button.classList.add('inv');
    });
    scorePage.classList.remove('inv');
    currentScore.textContent = `Your score: ${score}`;
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const name = prompt('Please enter your name:');
    highScores.push({ name, score });
    localStorage.setItem('highScores', JSON.stringify(highScores));
    highScores.sort((a, b) => b.score - a.score);
    const tableBody = document.querySelector('#highscoreTable tbody');
    tableBody.innerHTML = '';
    highScores.forEach((item, index) => {
      const row = tableBody.insertRow();
      const rankCell = row.insertCell(0);
      const nameCell = row.insertCell(1);
      const scoreCell = row.insertCell(2);
      rankCell.textContent = index + 1;
      nameCell.textContent = item.name;
      scoreCell.textContent = item.score;
    });
  }
  



  
// Timer element

let timer;

let timeLimit = 600; // this will give the user 10 minutes

// Define a function to update the timer display
function updateTimer() {
  // Calculate the minutes and seconds remaining
  var minutes = Math.floor(timeLimit / 60);
  var seconds = timeLimit % 60;

  // Display the time remaining in the format "mm:ss"
  console.log(("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2));

  // Decrement the time limit
  timeLimit--;

  // If the time limit has been reached, stop the timer
  if (timeLimit < 0) {
    clearInterval(intervalId);
    console.log("Time's up!");
  }
}

// Call the updateTimer function every second (1000 milliseconds)
var intervalId = setInterval(updateTimer, 1000);


//Event listerns to restart or end the test
const restartBtn = document.getElementById("restart-btn");
const exitBtn = document.getElementById("exit-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

exitBtn.addEventListener("click", function() {
  window.close();
});




//High score table
const saveHighscore = () => {
    const initials = document.querySelector("#initialsInput").value;
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({ initials, score });
    localStorage.setItem("highscores", JSON.stringify(highscores));
  };
  
  const showHighscoreTable = () => {
    const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    const tbody = highscoreTable.querySelector("tbody");
    tbody.innerHTML = "";
    highscores
      .sort((a, b) => b.score - a.score)
      .forEach((highscore, index) => {
        const row = document.createElement("tr");
        const rank = document.createElement("td");
        rank.textContent = index + 1;
        const initials = document.createElement("td");
        initials.textContent = highscore.initials;
        const score = document.createElement("td");
        score.textContent = highscore.score;
        row.appendChild(rank);
        row.appendChild(initials);
        row.appendChild(score);
        tbody.appendChild(row);
      });
    highscoreTable.classList.remove("inv");
  };
