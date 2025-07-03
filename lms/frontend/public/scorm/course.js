var startTime = new Date();
var quizAnswers = { q1: 'a', q2: 'b' }; // Correct answers
var currentScore = 0;
var timeInterval;

function initializeCourse() {
    console.log("Initializing dummy SCORM course...");
    
    // Initialize SCORM
    if (ScormProcessInitialize()) {
        console.log("SCORM API initialized successfully");
        
        // Check if learner has previous data
        var lessonStatus = ScormProcessGetValue("cmi.core.lesson_status");
        var score = ScormProcessGetValue("cmi.core.score.raw");
        var sessionTime = ScormProcessGetValue("cmi.core.session_time");
        
        console.log("Previous lesson status: " + lessonStatus);
        console.log("Previous score: " + score);
        
        // Set initial values if this is first visit
        if (lessonStatus === "" || lessonStatus === "not attempted") {
            ScormProcessSetValue("cmi.core.lesson_status", "incomplete");
            ScormProcessSetValue("cmi.core.score.min", "0");
            ScormProcessSetValue("cmi.core.score.max", "100");
        }
        
        // Update UI with existing data
        if (score !== "") {
            currentScore = parseInt(score);
            updateScoreDisplay();
        }
        
        updateStatusDisplay("incomplete");
        
        // Start tracking time
        startTimeTracking();
        
        // Commit initial data
        ScormProcessCommit();
    } else {
        console.log("SCORM API not available - running in standalone mode");
        updateStatusDisplay("incomplete");
        startTimeTracking();
    }
    
    // Play welcome audio (optional)
    playWelcomeAudio();
}

function startTimeTracking() {
    timeInterval = setInterval(function() {
        updateTimeDisplay();
    }, 1000);
}

function updateTimeDisplay() {
    var currentTime = new Date();
    var timeSpent = Math.floor((currentTime - startTime) / 1000);
    var minutes = Math.floor(timeSpent / 60);
    var seconds = timeSpent % 60;
    
    var timeString = String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    document.getElementById('timeSpent').textContent = timeString;
    
    // Update session time in SCORM format (PT[n]H[n]M[n]S)
    var scormTime = "PT" + Math.floor(timeSpent / 3600) + "H" + 
                    Math.floor((timeSpent % 3600) / 60) + "M" + 
                    (timeSpent % 60) + "S";
    ScormProcessSetValue("cmi.core.session_time", scormTime);
}

function updateScoreDisplay() {
    document.getElementById('currentScore').textContent = currentScore + '%';
}

function updateStatusDisplay(status) {
    document.getElementById('lessonStatus').textContent = status;
    document.getElementById('lessonStatus').className = 'status-' + status;
}

function submitQuiz() {
    var q1Answer = document.querySelector('input[name="q1"]:checked');
    var q2Answer = document.querySelector('input[name="q2"]:checked');
    
    if (!q1Answer || !q2Answer) {
        alert('Please answer all questions before submitting.');
        return;
    }
    
    var correctAnswers = 0;
    var totalQuestions = 2;
    
    // Check answers
    if (q1Answer.value === quizAnswers.q1) correctAnswers++;
    if (q2Answer.value === quizAnswers.q2) correctAnswers++;
    
    // Calculate score
    currentScore = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Update UI
    updateScoreDisplay();
    
    // Show results
    var resultDiv = document.getElementById('quizResult');
    var resultText = `You scored ${correctAnswers} out of ${totalQuestions} questions correctly (${currentScore}%).`;
    
    if (currentScore >= 80) {
        resultText += " Congratulations! You passed the quiz.";
        updateStatusDisplay("passed");
        updateProgress(100);
    } else {
        resultText += " Please review the material and try again.";
        updateStatusDisplay("failed");
        updateProgress(50);
    }
    
    resultDiv.innerHTML = `<p>${resultText}</p>`;
    resultDiv.style.display = 'block';
    
    // Update SCORM data
    ScormProcessSetValue("cmi.core.score.raw", currentScore.toString());
    ScormProcessSetValue("cmi.core.lesson_status", currentScore >= 80 ? "passed" : "failed");
    
    // Set interactions (SCORM 1.2)
    ScormProcessSetValue("cmi.interactions.0.id", "quiz_question_1");
    ScormProcessSetValue("cmi.interactions.0.student_response", q1Answer.value);
    ScormProcessSetValue("cmi.interactions.0.result", q1Answer.value === quizAnswers.q1 ? "correct" : "wrong");
    
    ScormProcessSetValue("cmi.interactions.1.id", "quiz_question_2");
    ScormProcessSetValue("cmi.interactions.1.student_response", q2Answer.value);
    ScormProcessSetValue("cmi.interactions.1.result", q2Answer.value === quizAnswers.q2 ? "correct" : "wrong");
    
    // Commit the data
    ScormProcessCommit();
    
    console.log("Quiz submitted. Score: " + currentScore + "%");
}

function updateProgress(percentage) {
    var progressFill = document.getElementById('progressFill');
    progressFill.style.width = percentage + '%';
    
    // Update SCORM progress
    ScormProcessSetValue("cmi.core.score.raw", percentage.toString());
}

function nextPage() {
    // This would normally navigate to next page
    // For this demo, we'll complete the course
    completeCourse();
}

function previousPage() {
    // This would normally navigate to previous page
    console.log("Previous page clicked");
}

function completeCourse() {
    if (currentScore >= 80) {
        updateStatusDisplay("completed");
        ScormProcessSetValue("cmi.core.lesson_status", "completed");
        alert("Congratulations! You have successfully completed the course.");
    } else {
        alert("Please complete the quiz with a passing score (80%) before finishing the course.");
        return;
    }
    
    finishCourse();
}

function finishCourse() {
    if (timeInterval) {
        clearInterval(timeInterval);
    }
    
    // Final commit of all data
    ScormProcessCommit();
    
    // Terminate SCORM session
    ScormProcessFinish();
    
    console.log("Course finished");
}

function playWelcomeAudio() {
    var audio = document.getElementById('welcomeAudio');
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Audio autoplay prevented:", error);
        });
    }
}