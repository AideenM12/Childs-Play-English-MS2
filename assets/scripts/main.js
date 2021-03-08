const beginQuiz = document.getElementById("begin-quiz");
const foodQuiz = document.getElementById("food-quiz");
const objectQuiz = document.getElementById("object-quiz");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const qImages = document.getElementById("qImages");

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
let solutions = document.getElementsByClassName("solutions");

const nxtBtn = document.getElementById("nxtBtn");
const prevBtn = document.getElementById("prevBtn");

function chooseFoodQuiz(){
    $(foodQuiz).click()
    questions = foodQuestions;
}

function chooseObjectQuiz(){
    $(objectQuiz).click()
    questions = objectQuestions;
}
//Found on codepen
function changeBackground(){
    let colorArray = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff","#fffffc"]
    let randColor = Math.floor(Math.random()*colorArray.length);
     $('body').css("background-color", colorArray[randColor]);
}

let questions = [
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/unicorn.jpg",
        opt1: "A Unicorn",
        opt2: "A Panda",
        opt3: "A Duck",
        opt4: "A Dog",
        correct: "opt1",
       

    },
     {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/coolcat.jpg",
        opt1: "A Cow",
        opt2: "An Elephant",
        opt3: "A Cat",
        opt4: "A Lion",
        correct: "opt3",

    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/turtle.jpg",
        opt1: "A Shark",
        opt2: "A Turtle",
        opt3: "A Horse",
        opt4: "A Pig",
        correct: "opt2",

    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/cow.jpg",
        opt1: "A Mouse",
        opt2: "A Parrot",
        opt3: "A Rabbit",
        opt4: "A Cow",
        correct: "opt4",

    },
    {
        question: "What animal is this?",
        imgSrc:"assets/images/animals/shark.jpg" ,
        opt1: "A Horse" ,
        opt2: "A Unicorn",
        opt3: "A Shark",
        opt4: "A Cat",
        correct: "opt3",

    },
    {
     question: "What animal is this?",
        imgSrc: "assets/images/animals/duck.jpg",
        opt1: "A Duck",
        opt2: "A Parrot",
        opt3: "An Owl",
        opt4: "A Lion",
        correct: "opt1",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/rabbit.jpg",
        opt1: "A Pig",
        opt2: "A Rabbit",
        opt3: "A Turtle",
        opt4: "A Dog",
        correct: "opt2",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/elephant.jpg",
        opt1: "A Panda Bear",
        opt2: "A Horse",
        opt3: "A Mouse",
        opt4: "An Elephant",
        correct: "opt4",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/pig.jpg",
        opt1: "An Owl",
        opt2: "A Pig",
        opt3: "A Shark",
        opt4: "A Penguin",
        correct: "opt2",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/horse.jpg",
        opt1: "A Duck",
        opt2: "A Cat",
        opt3: "A Horse",
        opt4: "A Turtle",
        correct: "opt3",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/penguin.jpg",
        opt1: "A Penguin",
        opt2: "A Parrot",
        opt3: "An Elephant ",
        opt4: "A Cow",
        correct: "opt1",
    },
     {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/lion.jpg",
        opt1: "A Unicorn",
        opt2: "A Rabbit",
        opt3: "A Cat",
        opt4: "A Lion",
        correct: "opt4",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/panda-bear.jpg",
        opt1: "A Penguin",
        opt2: "A Dog",
        opt3: "A Panda Bear",
        opt4: "A Duck",
        correct: "opt3",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/mouse.jpg",
        opt1: "A Rabbit",
        opt2: "A Shark",
        opt3: "A Mouse ",
        opt4: "A Turtle",
        correct: "opt3",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/owl.jpg",
        opt1: "An Owl",
        opt2: "A Parrot",
        opt3: "A Penguin",
        opt4: "A Duck",
        correct: "opt1",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/dog.jpg",
        opt1: "A Mouse",
        opt2: "A Cat",
        opt3: "A Cow",
        opt4: "A Dog",
        correct: "opt4",
    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/animals/parrot.jpg",
        opt1: "A Lion",
        opt2: "A Horse",
        opt3: "A Pig",
        opt4: "A Parrot",
        correct: "opt4",
    },
];

let foodQuestions = [
    {
         question: "What food is this?",
        imgSrc: "assets/images/food/strawberry.jpg",
        opt1: "A Lion",
        opt2: "A Horse",
        opt3: "A Pig",
        opt4: "A Parrot",
        correct: "opt4",
    }
];

let objectQuestions =[
    {
        question: "What food is this?",
        imgSrc: "assets/images/food/cheese.jpg",
        opt1: "A Lion",
        opt2: "A Horse",
        opt3: "A Pig",
        opt4: "A Parrot",
        correct: "opt4",
    }
]

function randomQ(){
    let randomNum = Math.floor(Math.random()*questions.length);
    console.log()
    randomQuestion = questions[randomNum][currentQuestion];
}

let finalQuestion = questions.length - 1;

let currentQuestion = 0;

let randomQuestion;

function askQuestion(){
    /*randomQ();
    let q = randomQuestion;*/
    let q = questions[currentQuestion];
    qImages.innerHTML = "<img src="+ q.imgSrc +">";
    question.innerHTML = "<p>"+ q.question +"</p>";
    opt1.innerHTML = q.opt1;
    opt2.innerHTML = q.opt2;
    opt3.innerHTML = q.opt3;
    opt4.innerHTML = q.opt4;
    changeBackground();
}
 
function prevQuestion(){
    if(currentQuestion <= 0) currentQuestion = questions.length;
        currentQuestion--; 
        return askQuestion();       
    }  

function nextQuestion(){
    if( currentQuestion < finalQuestion ){
        currentQuestion++  
        return askQuestion();
                   
    }
    else{
        swal.fire({
            showClass: {
                popup: 'animate__animated animate__swing'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
            text: 'Game Over! Great Work!',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#009bf5',
            imageUrl: 'assets/images/misc/astronaut.jpg',
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
            background: '#009bf5',
         });
    }
}


function checkSelection(solutions) {
    if (solutions == questions[currentQuestion].correct && currentQuestion < finalQuestion) {
        swal.fire({
             showClass: {
                popup: 'animate__animated animate__heartBeat'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
            customClass: {
                 background: '#71f909',
                 textColor: '#000',
            },
            width: 500,
            height: 600,
            text: 'Well Done',
            confirmButtonText: 'Cool!',
            confirmButtonColor: '#009bf5',
            imageUrl: 'assets/images/misc/littlegirl.jpg',
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
            background: '#71f909',
        });
        currentQuestion++
        askQuestion();
    }
    else if (solutions != questions[currentQuestion].correct) {
            swal.fire({
            showClass: {
                popup: 'animate__animated animate__jello'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
            text: 'Uh Oh Try Again!',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#009bf5',
            imageUrl: 'assets/images/misc/littleboy.jpg',
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
            background: '#d00000',
            })
    }
    else if(currentQuestion == finalQuestion){
        swal.fire({
            showClass: {
                popup: 'animate__animated animate__swing'
            },
            hideClass: {
                popup: 'animate__animated animate__backOutRight'
            },
            text: 'Game Over! Great Work!',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#009bf5',
            imageUrl: 'assets/images/misc/astronaut.jpg',
            imageWidth: 200,
            imageHeight: 300,
            imageAlt: 'Custom image',
            background: '#009bf5',
         });

     }
     else{
         nextQuestion();
     }
     
}




beginQuiz.addEventListener("click", startQuiz);

foodQuiz.addEventListener("click", chooseFoodQuiz);

objectQuiz.addEventListener("click", chooseObjectQuiz);

function startQuiz(){
    beginQuiz.style.display = "none";
   
    askQuestion();
    quiz.style.display = "block";
    qImages.style.display="block";
    solution.style.display= "inline";
    nxtBtn.style.display= "inline";
    prevBtn.style.display= "inline";
}

/*opt1.addEventListener("click", () => {
checkSelection(opt1);
});
opt2.addEventListener("click", () => {
checkSelection(opt2);
})
opt3.addEventListener("click", () => {
checkSelection(opt3);
})
opt4.addEventListener("click", () => {
checkSelection(opt4);
})*/

