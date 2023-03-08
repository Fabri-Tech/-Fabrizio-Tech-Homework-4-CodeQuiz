            //contant letiables

            const allArrays = [];
            const startBtn = document.querySelector("#startbtn");
            const questions = document.querySelector("#questions");
            const highscoreTable = document.querySelector("#highscoreTable");
            const scorePage = document.querySelector("#score-page");
            const scoreboard = document.querySelector("#scoreboard");
            const currentScore = document.querySelector("#score");
            const optionsContainerContainer = document.querySelector("#optionsContainer");
            const optionA = document.querySelector("#optionA");
            const optionB = document.querySelector("#optionB");
            const optionC = document.querySelector("#optionC");
            const optionD = document.querySelector("#optionD");
            const totalScore = document.querySelector("#total-score");

            // Quiz letiables
            let score = 0;
            let counter = 0;
            let timeLeft = 60;
            let timerInterval;



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
            
            
            
            // Event listener for start button click
            startBtn.addEventListener("click", function () {

            // Hide Start button
            startBtn.classList.add("inv");


        // Show questions and options
        questions.classList.remove("inv");
        optionsContainerContainer.classList.remove("inv");

        //This will show questions and answers
        questions.textContent = quizData.questions[counter];
        optionA.textContent = quizData.optionsContainer[counter][0];
        optionB.textContent = quizData.optionsContainer[counter][1];
        optionC.textContent = quizData.optionsContainer[counter][2];
        optionD.textContent = quizData.optionsContainer[counter][3];

        //Increment counter
        counter++;
    });



             // Event listener for option selection
            optionsContainer.addEventListener("click", optionsContainerSelected);

            //this function will be used when the user selects an answer of the test
            function optionsContainerSelected(e) {
                const selectedOption = e.target;
                const selectedAnswer = selectedOption.dataset["optionid"];
              
                if (selectedAnswer == quizData.correctAnswers[counter]) {
                  score += 10; // update the score
                  selectedOption.parentElement.classList.add("correct");
                }
                 else {
                  selectedOption.parentElement.classList.add("incorrect");
                }
              
              }
                    
            // Timer function
            startTimer();

            function startTimer() {
                let timerDisplay = document.getElementById("timer");
                let timerInterval = setInterval(function() {
                if (timeLeft > 0) {
                    timeLeft--;
                    timerDisplay.innerHTML = "Time remaining: " + timeLeft + " seconds";
                } else {
                    clearInterval(timerInterval);
                    submitQuiz();
                }
                }, 1000);
            }
            


            // Submit quiz function
            function submitQuiz() {
                // Stop the timer
                clearInterval(timerInterval);
                
                // Hide the questions and options
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

 // Append final score and button to score page
        scorePage.appendChild(finalScoreDisplay);
        scorePage.appendChild(highscoreBtn);
        }


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


// Define a single event listener for all answer options
function answerSelected() {
    // Determine which option was selected
    let selectedOption = this.textContent;

    // Check if the selected option is correct
    if (selectedOption === quizData.correctAnswers[currentQuestionIndex]) {
        // Answer is correct
        score += 10;
        currentScore.textContent = score;
    } else {
        // Answer is incorrect
        score -= 10;
        currentScore.textContent = score;
    }

}

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
                                
 // SEt the timer
startTimer();
// Display timer
let timerDisplay = document.createElement("p");
timerDisplay.setAttribute("id", "timer");
timerDisplay.textContent = "Time remaining: " + timeLeft + " seconds";
scoreboard.appendChild(timerDisplay);


        // Start timer
        startTimer();
        
        // Display first question
        generateQuestion();
        }
        
        // Event listener for high score button
        document.querySelector("#highscoreBtn").addEventListener("click", function() {
            // Hide high score table and show score page
            highscoreTable.classList.add("inv");
            scorePage.classList.remove("inv");
            });
                      
// Attach the answerSelected event listener to all answer options
optionA.addEventListener("click", answerSelected);
optionB.addEventListener("click", answerSelected);
optionC.addEventListener("click", answerSelected);
optionD.addEventListener("click", answerSelected);


            


                //Creates the scoreboard
                for (let i = 0; i < allArrays.length; i++) {
                    let newLi = document.createElement("li");
                    newLi.textContent = allArrays[i].initials + " - " + allArrays[i].score;
                    scoreBoard.appendChild(newLi);
                }
            highscoreTable.classList.remove("inv");


            //This function will show the Highscore table once the user clicks on the 'View Highscores' button
            function showScoreboard() {
                start.classList.add("inv");
                optionsContainerContainer.classList.add("inv");
                scorePage.classList.add("inv");
                finalScore.classList.add("inv");
                scoreBoard.classList.remove("inv");
                initialForm.classList.add("inv");
                currentScore.classList.add("inv");
                totalScore.classList.add("inv");
                highscoreTable.classList.add("inv");
            
                // clear existing scores from scoreboard
                scoreBoard.innerHTML = "";
            
                allArrays = JSON.parse(localStorage.getItem("scores")) || [];
                for (let i = 0; i < allArrays.length; i++) {
                let newLi = document.createElement("li");
                newLi.textContent = allArrays[i].initials + " - " + allArrays[i].score;
                scoreBoard.appendChild(newLi);
                }
            }


            //Loads the scores from local storage once the page is loaded
            window.onload = function() {
                allArrays = JSON.parse(localStorage.getItem("scores")) || [];
                };
                
                //This code will show the score each time the user clicks on an option
                optionsContainer.addEventListener("click", function() {
                currentScore.textContent = "Current Score: " + score;
                });
                
                //This code will start the timer once the test is started
                let timeLeft = 60;
                function startTimer() {
                const timerDisplay = document.getElementById("time");
                const timerInterval = setInterval(function() {
                if (timeLeft > 0) {
                timeLeft--;
                timerDisplay.textContent = "Time: " + timeLeft;
                } else {
                clearInterval(timerInterval);
                finalScore();
                totalScore.textContent = "Time's Up! 😢";
                }
                }, 1000);
                }
                
                //This code will start the timer once the user starts the test
                startBtn.addEventListener("click", startTimer);