const beginQuiz = document.getElementById("begin-quiz");
const foodQuiz = document.getElementById("food-quiz");
const objectQuiz = document.getElementById("object-quiz");
const welcomeQuiz = document.getElementById("welcome-quiz");

const titleHeader = document.getElementById("title-h1");

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
let currentQuestionIndex;

let usedQuestions = [];


//Found on codepen
function changeBackground() {
	let colorArray = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"]
	let randColor = Math.floor(Math.random() * colorArray.length);
	$('body').css("background-color", colorArray[randColor]);
}







let questionCount = 0;

let randomQuestion = 0;

let finalQuestion = questions.length;

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







function chooseFoodQuiz() {
    $(foodQuiz).click();
    
    questions = foodQuestions;
    
	finalQuestion = foodQuestions.length - 1;
    startQuiz();
   
    
      
}

function chooseObjectQuiz() {
	$(objectQuiz).click();
	questions = objectQuestions;
	finalQuestion = objectQuestions.length - 1;
	startQuiz();
	
}

function randomQuiz() {
    let randomNum = Math.floor(Math.random() * questions.length);
	console.log(randomNum);
	currentQuestionIndex = randomNum;
    randomQuestion = questions[randomNum];
    if (!usedQuestions.includes(randomQuestion)) { // If randomQuestion is not in usedQuestions, it shows
        console.log(randomQuestion);
        usedQuestions.push(randomQuestion); // Then, the question is put in the array
    } else {
        randomQuiz();
    }
    return randomQuestion;
}


function checkSelection(solutions) {
	if (solutions == questions[currentQuestionIndex].correct && questionCount < 12) {
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
		randomQuestion++
		askQuestion();
        questionCount++
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
		})
	} else if(questionCount == 12) {
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

		}).then(function () {
			location.reload(); //Reload function found on stack overflow
		});

	} else {
		location.reload();
	}

}



function progressCounter(){

     return document.getElementById("counter").innerHTML= `Score: ${questionCount}/12`;
    }



beginQuiz.addEventListener("click", startQuiz);

foodQuiz.addEventListener("click", chooseFoodQuiz);

objectQuiz.addEventListener("click", chooseObjectQuiz);


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
