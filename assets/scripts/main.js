// Main Javascript Document

// Start and Choose Quiz variables
const beginQuiz = document.getElementById("begin-quiz");
const foodQuiz = document.getElementById("food-quiz");
const objectQuiz = document.getElementById("object-quiz");
const welcomeQuiz = document.getElementById("welcome-quiz");

// Interative H1 variable
const titleHeader = document.getElementById("title-h1");


// Question and Image variables
const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const qImages = document.getElementById("qImages");


// Answer button variables
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
let solutions = document.getElementsByClassName("solutions");
let currentQuestionIndex;

//Empty array created to catch used questions
let usedQuestions = [];


/* This function changes the background colour each time a new question is asked
 This code was found on codepen and modified for the needs of the project*/
function changeBackground() {
    let colorArray = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff",
        "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"
    ]
    let randColor = Math.floor(Math.random() * colorArray.length);
    $('body').css("background-color", colorArray[randColor]);
}


//Question variables

let questionCount = 0;
let randomQuestion = 0;
let finalQuestion = questions.length;

/* This function generates a question from the questions
 array and also calls the change background function*/

function askQuestion() {
    let q = randomQuiz();
    qImages.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    opt1.innerHTML = q.opt1;
    opt2.innerHTML = q.opt2;
    opt3.innerHTML = q.opt3;
    opt4.innerHTML = q.opt4;
    changeBackground();
}


/*This function allows the user to select the questions
 from the foodQuestions Array*/

function chooseFoodQuiz() {
    $(foodQuiz).click();
    questions = foodQuestions;
    finalQuestion = foodQuestions.length - 1;
    startQuiz();
}

/*This function allows the user to select the questions
 from the objectQuestions Array*/

function chooseObjectQuiz() {
    $(objectQuiz).click();
    questions = objectQuestions;
    finalQuestion = objectQuestions.length - 1;
    startQuiz();
}

/* This function randomises the questions and the if statement
 prevents the questions from being repeated */
function randomQuiz() {
    let randomNum = Math.floor(Math.random() * questions.length);

    currentQuestionIndex = randomNum;
    randomQuestion = questions[randomNum];
    // If randomQuestion is not in usedQuestions, it shows
    // Then, the question is put in the array

    if (!usedQuestions.includes(randomQuestion)) {

        usedQuestions.push(randomQuestion);
    } else {
        randomQuiz();
    }
    return randomQuestion;
}

/* This function checks the answer of the user and responds
 appropriately based on the conditions of whether the answer 
 is correct, incorrect or whether the quiz has finished*/

//Reload function found on stack overflow

function checkSelection(solutions) {
    if (solutions == questions[currentQuestionIndex].correct && questionCount <
        12) {
        swal.fire({
            showClass: {
                popup: 'animate__animated animate__backInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
            customClass: {
                background: '#71f909',
                textColor: '#fffffc',
            },
            width: 500,
            height: 600,
            text: 'Well Done!',
            confirmButtonText: 'Cool!',
            confirmButtonColor: '#009bf5',
            imageUrl: 'assets/images/misc/littlegirl.jpg',
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
            background: '#71f909',

            textColor: '#fffffc'
        });
        randomQuestion++;
        askQuestion();
        questionCount++;
        progressCounter();

    } else if (solutions != questions[currentQuestionIndex].correct) {
        swal.fire({
            showClass: {
                popup: 'animate__animated animate__jello'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
            textColor: '#fffffc',
            text: 'Uh Oh Try Again!',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#009bf5',
            imageUrl: 'assets/images/misc/littleboy.jpg',
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
            background: '#d00000',
        });
    } else if (questionCount == 12) {
        swal.fire({
            showClass: {
                popup: 'animate__animated animate__swing'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
            textColor: '#fffffc',
            text: 'Game Over! Great Work!',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#d81159',
            imageUrl: 'assets/images/misc/astronaut.jpg',
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
            background: '#009bf5',

        }).then(function() {
            location.reload();
        });

    } else {
        location.reload();
    }

}


/*This function documents the users progress in the quiz*/

function progressCounter() {

    return document.getElementById("counter").innerHTML =
        `Score: ${questionCount}/12`;
}

/* These event listeners are used to determine the appropriate
 function based on the users action */

beginQuiz.addEventListener("click", startQuiz);

foodQuiz.addEventListener("click", chooseFoodQuiz);

objectQuiz.addEventListener("click", chooseObjectQuiz);

/* This function initiates the quiz based on which
 event listener has been triggered*/

function startQuiz() {
    beginQuiz.style.display = "none";
    welcomeQuiz.style.display = "none";
    titleHeader.style.display = "none";
    askQuestion();
    progressCounter();
    quiz.style.display = "block";
    question.style.display = "inline";
    qImages.style.display = "block";
    solution.style.display = "inline";
    counter.style.display = "inline";
}