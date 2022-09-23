var btn = document.getElementById("startBtn")
var timeRemaining = 60;

function beginQuiz() {
    //timer needs to start
    timerStarts()
    //the first questions shows up
}

function timerStarts() {
    var quizInterval = setInterval(function(){
        timeRemaining--;
        console.log(timeRemaining)

        if(timeRemaining <= 0 ){
            clearInterval(quizInterval)
        }
    }, 1000)
}

btn.addEventListener("click", beginQuiz)