function submitQuiz() {
    var totalQuestions = 10;
    var score = 0;
  
    // Check answer for question 1
    if (document.getElementById("q1a1").checked) {
      score++;
    }
  
    // Check answer for question 2
    if (document.getElementById("q2a3").checked) {
      score++;
    }
  
    // Check answer for question 3
    if (document.getElementById("q3a2").checked) {
      score++;
    }
  
    // Check answer for question 4
    if (document.getElementById("q4a2").checked) {
        score++;
      }
    // Check answer for question 5
    if (document.getElementById("q5a1").checked) {
        score++;
      }
    // Check answer for question 6
    if (document.getElementById("q6a1").checked) {
        score++;
      }
    // Check answer for question 7
    if (document.getElementById("q7a1").checked) {
        score++;
      }
    // Check answer for question 8
    if (document.getElementById("q8a1").checked) {
        score++;
      }
    // Check answer for question 9
    if (document.getElementById("q9a1").checked) {
        score++;
      }
    // Check answer for question 10
    if (document.getElementById("q10a1").checked) {
        score++;
      }
  
    // Calculate score and display it
    var percentage = (score / totalQuestions) * 100;
    var resultMessage;
  
    if (percentage >= 70) {
      resultMessage = "Congratulations, you have successfully cleared the quiz and earned a badge!";
    } else {
      resultMessage = "OOPS! Your score is " + score + ", You have to retake the quiz!";
    }
  
    var resultHTML = '<div class="result-container">';
    resultHTML += '<h2>Quiz Result:</h2>';
    resultHTML += '<p>You scored ' + score + ' out of ' + totalQuestions + ' (' + percentage + '%)</p>';
    resultHTML += '<p>' + resultMessage + '</p>';
    resultHTML += '</div>';
  
    // Open new window with the results
    var resultWindow = window.open("", "Quiz Result", "width=600,height=400");
    resultWindow.document.write(resultHTML);
  }
  