// const questions = [
//     {
//         question: "Which is largest animal in the world",
//         answer: [
//             { text: "Shark", correct: false },
//             { text: "Blue whale", correct: true },
//             { text: "Elephant", correct: false },
//             { text: "Giraffe", correct: false },
//         ]
//     },

//     {
//         question: "Which is the largest desert in the world",
//         answer: [
//             { text: "Kalahari", correct: false },
//             { text: "Gobi", correct: false },
//             { text: "sahara", correct: false },
//             { text: "Antartica", correct: true },
//         ]
//     },
//     {
//         question: "Which is the smallest continent in the world",
//         answer: [
//             { text: "Asia", correct: false },
//             { text: "Australia", correct: true },
//             { text: "Arctic", correct: false },
//             { text: "Africa", correct: false },
//         ]
//     },
//     {
//         question: "What color is the sky on a clear day?",
//         answer: [
//             { text: "Green", correct: false },
//             { text: "Blue", correct: true },
//             { text: "Red", correct: false },
//             { text: "Yellow", correct: false },
//         ]
//     },

//     {
//         question: "Which fruit is known for being yellow and curved?",
//         answer: [
//             { text: "Apple", correct: false },
//             { text: "Banana", correct: true },
//             { text: "Orange", correct: false },
//             { text: "Strawberry", correct: false },
//         ]
//     },

//     {
//         question: "What is the largest planet in our solar system?",
//         answer: [
//             { text: "Earth", correct: false },
//             { text: "Jupiter", correct: true },
//             { text: "Mars", correct: false },
//             { text: "Venus", correct: false },
//         ]
//     },

//     {
//         question: "What is the main ingredient in guacamole?",
//         answer: [
//             { text: "Tomato", correct: false },
//             { text: "Avocado", correct: true },
//             { text: "Onion", correct: false },
//             { text: "Pepper", correct: false },
//         ]
//     },

//     {
//         question: "Which shape has three sides?",
//         answer: [
//             { text: "Square", correct: false },
//             { text: "Triangle", correct: true },
//             { text: "Circle", correct: false },
//             { text: "Rectangle", correct: false },
//         ]
//     },
//     {
//         question: "What is the name of the toy that can spin on a finger?",
//         answer: [
//             { text: "Yo-yo", correct: false },
//             { text: "Fidget Spinner", correct: true },
//             { text: "Rubik's Cube", correct: false },
//             { text: "Slinky", correct: false },
//         ]
//     },


//     {
//         question: "Which animal is known as the king of the jungle?",
//         answer: [
//             { text: "Lion", correct: true },
//             { text: "Elephant", correct: false },
//             { text: "Tiger", correct: false },
//             { text: "Bear", correct: false },
//         ]
//     },
// ]


const questions = [
    {
        question: "What does 'console.log' do in JavaScript?",
        answer: [
            { text: "Logs information to the console", correct: true },
            { text: "Displays an alert message", correct: false },
            { text: "Prints information to the webpage", correct: false },
            { text: "Executes JavaScript code", correct: false },
        ]
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        answer: [
            { text: "//", correct: true },
            { text: "/*", correct: false },
            { text: "#", correct: false },
            { text: "<!--", correct: false },
        ]
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answer: [
            { text: "var", correct: true },
            { text: "let", correct: true },
            { text: "const", correct: true },
            { text: "function", correct: false },
        ]
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        answer: [
            { text: "55", correct: true },
            { text: "10", correct: false },
            { text: "Error", correct: false },
            { text: "NaN", correct: false },
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: [
            { text: "function myFunction() {}", correct: true },
            { text: "create function myFunction() {}", correct: false },
            { text: "define myFunction() {}", correct: false },
            { text: "func myFunction() {}", correct: false },
        ]
    },
    {
        question: "Which of the following is a JavaScript data type?",
        answer: [
            { text: "String", correct: true },
            { text: "Float", correct: false },
            { text: "Decimal", correct: false },
            { text: "Integer", correct: false },
        ]
    },
    {
        question: "How do you start a loop in JavaScript?",
        answer: [
            { text: "for", correct: true },
            { text: "loop", correct: false },
            { text: "while", correct: true },
            { text: "repeat", correct: false },
        ]
    },
    {
        question: "What does 'typeof' do in JavaScript?",
        answer: [
            { text: "Returns the data type of a variable", correct: true },
            { text: "Changes the data type of a variable", correct: false },
            { text: "Declares a variable", correct: false },
            { text: "Defines a function", correct: false },
        ]
    },
    {
        question: "What does 'alert' do in JavaScript?",
        answer: [
            { text: "Shows a message in a pop-up window", correct: true },
            { text: "Logs a message to the console", correct: false },
            { text: "Prints a message to the webpage", correct: false },
            { text: "Defines a function", correct: false },
        ]
    },
    {
        question: "How do you access the first element of an array in JavaScript?",
        answer: [
            { text: "array[0]", correct: true },
            { text: "array[1]", correct: false },
            { text: "array.first()", correct: false },
            { text: "array.get(0)", correct: false },
        ]
    }
];









const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQustionIndex = 0;
let score = 0;

function startQuiz() {
    currentQustionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions()
}

function showQuestions() {
    resetState()
    let currentQuestion = questions[currentQustionIndex]
    let questionNo = currentQustionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question


    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });



}


function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true"
    if (iscorrect) {
        selectedBtn.classList.add("correct")
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true
    });
    nextButton.style.display = "block"

}

function showScore() {
    resetState()
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQustionIndex++;
    if (currentQustionIndex < questions.length) {
        showQuestions()
    } else {
        showScore()
    }
}

nextButton.addEventListener("click", () => {
    if (currentQustionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz()
    }
})
startQuiz()




























