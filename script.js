var score = 0;
const answers = ["option31", "option22", "option43", "option24", "option15"]
const quesDone = [false, false, false, false, false]

function checkAnswer(quesNo, optionObj) {
    if (optionObj.id == answers[quesNo - 1] && quesDone[quesNo - 1] == false) {
        styleCorrect(optionObj);
        score += 1;
    } else {
        styleWrong(optionObj);
        styleCorrect(document.getElementById(answers[quesNo - 1]));
    }

    quesDone[quesNo - 1] = true
}

function styleCorrect(obj) {
    obj.style.border = "1px solid #06c616";
    obj.style.backgroundColor = "#06c616";
    obj.style.color = "white";
}

function styleWrong(obj) {
    obj.style.border = "1px solid #fd1717";
    obj.style.backgroundColor = "#fd1717";
    obj.style.color = "white";
}

function getScore() {
    document.getElementById("score").innerHTML = score + "/5";
}