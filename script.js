const questions = [
    {
        question: "Which is the largest mammal in the world ?",
        answers: [
            {text:"Shark", correct: false},
            {text:"Blue Whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false}
        ]
    },
    {
        question: "Which is the smallest continent in the world ?",
        answers: [
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false}
        ]
    },{
        question: "Which is the smallest country in the world ?",
        answers: [
            {text: "Vatican City",correct: true},
            {text: "Russia", correct: false},
            {text: "India", correct: false},
            {text: "USA", correct: false}
        ]
    }
        ];
const questionElement = document.getElementById("question");
const answerButton = document.querySelector(".answers-button");
const nextButton = document.getElementById("next");

let currentQuestionIndex;
let score;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    nextButton.style.display = "none";
    answerButton.innerHTML = "";
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)

    }
}

function selectAnswer(o){
    const selectedBtn = o.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
console.log(score);
console.log(question.length);