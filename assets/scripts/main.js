



   /* function changeImage(){
     let newPic = [Math.floor(Math.random() * images.length)];
     document.getElementById('elephant').src = newPic.toString();
     
     return images[newPic];
}
*/







    /*for(i= 0,images.length > i; i++;)
    let newVar = Math.floor(Math.random * images.length);     
    {
        let img = new Image(200, 200);
        img.src = images//[i];

        let src = document.getElementById("elephant");
        src.appendChild(img);
       // document.getElementById("elephant").innerHTML = img;
        return images[newVar];
    }
};*/

/*const opt1 = document.getElementById("button1");
const opt2 = document.getElementById("button2");
const opt3 = document.getElementById("button3");
const opt4 = document.getElementById("button4");


let answers = [
    {
        imgSrc: "assets/images/elephant.jpg",
        button1: "A Lion",
        button2: "A Cat",
        button3: "An Elephant",
        button4: "A Dog",
        correct: "button3",
    },
];
/*let wellDone = alert("Well done Great Job!");
let uhOh = alert("uh oh! Maybe next time!");
function checkAnswer(){
    if(options.onClick() === answers.correct){
        alert("wellDone");
    }
    else{
        alert("uhOh");
    }
}*/

const beginQuiz = document.getElementById("begin-quiz");

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

let questions = [
    {
        question: "What animal is this?",
        imgSrc: "assets/images/unicorn.jpg",
        opt1: "A Unicorn",
        opt2: "A Panda",
        opt3: "A Duck",
        opt4: "A Dog",
        correct: "opt1",

    },
     {
        question: "What animal is this?",
        imgSrc: "assets/images/coolcat.jpg",
        opt1: "A Cow",
        opt2: "An Elephant",
        opt3: "A Cat",
        opt4: "A Lion",
        correct: "opt3",

    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/turtle.jpg",
        opt1: "A Shark",
        opt2: "A Turtle",
        opt3: "A Horse",
        opt4: "A Pig",
        correct: "opt2",

    },
    {
        question: "What animal is this?",
        imgSrc: "assets/images/cow.jpg",
        opt1: "A Mouse",
        opt2: "A Parrot",
        opt3: "A Rabbit",
        opt4: "A Cow",
        correct: "opt4",

    },
];

let finalQuestion = questions.length - 1;

let currentQuestion = 0;

function askQuestion(){
    let q = questions[currentQuestion];
    qImages.innerHTML = "<img src="+ q.imgSrc +">";
    question.innerHTML = "<p>"+ q.question +"</p>";
    opt1.innerHTML = q.opt1;
    opt2.innerHTML = q.opt2;
    opt3.innerHTML = q.opt3;
    opt4.innerHTML = q.opt4;

}
function prevQuestion(){
    if(currentQuestion > 0){
        askQuestion();
        --currentQuestion
        
    }
    else{
        currentQuestion = 0;
    }
}
function nextQuestion(){
    if( currentQuestion < finalQuestion ){
        
        askQuestion();
        currentQuestion++
             
      
    }
    else{
        
         let gameOver = "GameOver";
         alert(gameOver);

    }
    
}


/*function checkSelection(answer){
    if(answer === questions[currentQuestion].correct){
        let congrats = "Well Done!";
        alert(congrats);
        answerIsCorrect();
    }
    else{
        let uhOh = "uhOh!";
        alert(uhOh);
        answerIsWrong();
    }
     if(currentQuestion < finalQuestion){
         currentQuestion++;
         askQuestion();
     }
     else{
         let gameOver = "GameOver";
         alert(gameOver);
     }
}*/
//let answer = [opt1.innerHTML, opt2.innerHTML, opt3.innerHTML, opt4.innerHTML];

function checkSelection(solutions){
    if(solutions == questions[currentQuestion].correct && currentQuestion < finalQuestion){
        let congrats = "Well Done!";
        alert(congrats);
        
        currentQuestion++
         askQuestion();
    }
    else if(solutions != questions[currentQuestion].correct ){
        let uhOh = "uhOh!";
        alert(uhOh);
       
    }
    else if(currentQuestion == finalQuestion){
         let gameOver = "GameOver";
         alert(gameOver);
     }
     else{
         nextQuestion();
     }
     
}



/*function nextQuestion(){
    while( currentQuestion < finalQuestion ){
        currentQuestion++
        askQuestion();
    
        
      
      
    }
}*/


beginQuiz.addEventListener("click", startQuiz);

function startQuiz(){
    beginQuiz.style.display = "none";
    askQuestion();
    quiz.style.display = "block";
}

opt1.addEventListener("click", () => {
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
})

nxtBtn.addEventListener("click", nextQuestion)