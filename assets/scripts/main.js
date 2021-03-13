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


function chooseFoodQuiz() {
	$(foodQuiz).click()
	questions = foodQuestions;
	finalQuestion = foodQuestions.length - 1;
	startQuiz();
	askQuestion();
}

function chooseObjectQuiz() {
	$(objectQuiz).click()
	questions = objectQuestions;
	finalQuestion = objectQuestions.length - 1;
	startQuiz();
	askQuestion();
}
//Found on codepen
function changeBackground() {
	let colorArray = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#fffffc"]
	let randColor = Math.floor(Math.random() * colorArray.length);
	$('body').css("background-color", colorArray[randColor]);
}

const questions = [{
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
		imgSrc: "assets/images/animals/shark.jpg",
		opt1: "A Horse",
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

let foodQuestions = [{
		question: "What food is this?",
		imgSrc: "assets/images/food/strawberry.jpg",
		opt1: "Chocolate",
		opt2: "Fish",
		opt3: "Icecream",
		opt4: "A Strawberry",
		correct: "opt4",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/bread.jpg",
		opt1: "Cookies",
		opt2: "Bread",
		opt3: "Pizza",
		opt4: "Fruit",
		correct: "opt2",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/salad.jpg",
		opt1: "Salad",
		opt2: "Coffee",
		opt3: "A Burger",
		opt4: "Meat",
		correct: "opt1",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/burger.jpg",
		opt1: "Cheese",
		opt2: "A Strawberry",
		opt3: "A Burger",
		opt4: "Chicken",
		correct: "opt3",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/pizza.jpg",
		opt1: "Fruit",
		opt2: "Chocolate",
		opt3: "Pizza",
		opt4: "Cookies",
		correct: "opt3",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/candy.jpg",
		opt1: "Bread",
		opt2: "Icecream",
		opt3: "Coffee",
		opt4: "Candy",
		correct: "opt4",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/meat.jpg",
		opt1: "Meat",
		opt2: "Chocolate",
		opt3: "Chicken",
		opt4: "Fish",
		correct: "opt1",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/cheese.jpg",
		opt1: "Cookies",
		opt2: "Cheese",
		opt3: "Salad",
		opt4: "Pizza",
		correct: "opt2",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/icecream.jpg",
		opt1: "Bread",
		opt2: "Candy",
		opt3: "Icecream",
		opt4: "Chocolate",
		correct: "opt3",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/chicken.jpg",
		opt1: "Salad",
		opt2: "Chicken",
		opt3: "Cookies",
		opt4: "A Burger",
		correct: "opt2",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/fruit.jpg",
		opt1: "Fruit",
		opt2: "Cheese",
		opt3: "Fish",
		opt4: "Coffee",
		correct: "opt1",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/chocolate.jpg",
		opt1: "A Strawberry",
		opt2: "Bread",
		opt3: "Icecream",
		opt4: "Chocolate",
		correct: "opt4",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/fish.jpg",
		opt1: "Pizza",
		opt2: "Cheese",
		opt3: "Fish",
		opt4: "Fruit",
		correct: "opt3",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/coffee.jpg",
		opt1: "Coffee",
		opt2: "Candy",
		opt3: "Cookies",
		opt4: "Chicken",
		correct: "opt1",
	},
	{
		question: "What food is this?",
		imgSrc: "assets/images/food/cookies.jpg",
		opt1: "Icecream",
		opt2: "Cookies",
		opt3: "Meat",
		opt4: "Pizza",
		correct: "opt2",
	},
];

let objectQuestions = [{
		question: "What object is this?",
		imgSrc: "assets/images/objects/truck.jpg",
		opt1: "A Train",
		opt2: "A Bus",
		opt3: "A Bike",
		opt4: "A Truck",
		correct: "opt4",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/bike.jpg",
		opt1: "Crayons",
		opt2: "A Bike",
		opt3: "A Phone",
		opt4: "A Rocket",
		correct: "opt2",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/train.jpg",
		opt1: "A Guitar",
		opt2: "A Helicopter",
		opt3: "A Train",
		opt4: "A Ring",
		correct: "opt3",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/books.jpg",
		opt1: "Books",
		opt2: "A Clock",
		opt3: "A TV",
		opt4: "A Pencil",
		correct: "opt1",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/television.jpg",
		opt1: "A Phone",
		opt2: "A Truck",
		opt3: "A TV",
		opt4: "A Castle",
		correct: "opt3",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/bus.jpg",
		opt1: "A Rocket",
		opt2: "A Bus",
		opt3: "A Train",
		opt4: "A Helicopter",
		correct: "opt2",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/spaceship.jpg",
		opt1: "A Rocket",
		opt2: "A Ring",
		opt3: "A Pencil",
		opt4: "A Spaceship",
		correct: "opt4",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/castle.jpg",
		opt1: "A Castle",
		opt2: "A Phone",
		opt3: "A Ring",
		opt4: "A Clock",
		correct: "opt1",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/rocket.jpg",
		opt1: "A Truck",
		opt2: "Crayons",
		opt3: "A Helicopter",
		opt4: "A Rocket",
		correct: "opt4",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/clock.jpg",
		opt1: "Books",
		opt2: "A Clock",
		opt3: "A Pencil",
		opt4: "A Bus",
		correct: "opt2",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/ring.jpg",
		opt1: "A Guitar",
		opt2: "A Spaceship",
		opt3: "A Ring",
		opt4: "A Bike",
		correct: "opt3",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/crayons.jpg",
		opt1: "A Pencil",
		opt2: "Crayons",
		opt3: "A Clock",
		opt4: "A TV",
		correct: "opt2",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/phone.jpg",
		opt1: "A Phone",
		opt2: "A Bus",
		opt3: "A TV",
		opt4: "A Clock",
		correct: "opt1",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/guitar.jpg",
		opt1: "A Rocket",
		opt2: "A Castle",
		opt3: "A Truck",
		opt4: "A Guitar",
		correct: "opt4",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/pencil.jpg",
		opt1: "A Helicopter",
		opt2: "A Spaceship",
		opt3: "A Pencil",
		opt4: "A Rocket",
		correct: "opt3",
	},
	{
		question: "What object is this?",
		imgSrc: "assets/images/objects/helicopter.jpg",
		opt1: "A Spaceship",
		opt2: "A Helicopter",
		opt3: "A Bike",
		opt4: "A Bus",
		correct: "opt2",
	},

];


function randomQ() {

	let randomNum = Math.floor(Math.random() * questions.length);
	console.log(randomNum)
	currentQuestionIndex = randomNum;
    randomQuestion = questions[randomNum];
    //let index = randomQuestion.indexOf();
   // let removed = questions.splice(randomNum, 1);

    return randomQuestion;
    randomQuestion.splice();
}



let questionCount = 0;

let randomQuestion = 0;

let finalQuestion = questions.length;

function askQuestion() {
    let q = randomQ();
    
	qImages.innerHTML = "<img src=" + q.imgSrc + ">";
	question.innerHTML = "<p>" + q.question + "</p>";
	opt1.innerHTML = q.opt1;
	opt2.innerHTML = q.opt2;
	opt3.innerHTML = q.opt3;
	opt4.innerHTML = q.opt4;
    changeBackground();
   
   // noRepeat(questions)
    
}

/*function noRepeat(questions){
    let duplicate = questions.slice(0);
    return fuction(){
        if(duplicate.length < 1){
            duplicate = questions.slice(0)}
            var index = Math.floor(Math.random() * duplicate.length);
    var item = duplicate[index];
    duplicate.splice(index, 1);
    return item;
    }
}*/

function prevQuestion() {
	if (currentQuestionIndex <= 0) randomQuestion = questions.length;
	randomQuestion--;
	return askQuestion();
}

function nextQuestion() {
	if (currentQuestionIndex < finalQuestion) {
		randomQuestion++
		return askQuestion();

	} else {
		swal.fire({
			showClass: {
				popup: 'animate__animated animate__swing'
			},
			hideClass: {
				popup: 'animate__animated animate__backOutRight'
			},
			text: 'Game Over! Great Work!',
			confirmButtonText: 'Okay',
			confirmButtonColor: '#fffffc',
			imageUrl: 'assets/images/misc/astronaut.jpg',
			imageWidth: 200,
			imageHeight: 300,
			imageAlt: 'Custom image',
			background: '#009bf5',
		}).then(function () {
			location.reload(); //Reload function found on stack overflow
		});
	}
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
		randomQuestion++
		askQuestion();
        questionCount++
         
	} else if (solutions != questions[currentQuestionIndex].correct) {
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
	} else if (questionCount == 12) {
		swal.fire({
			showClass: {
				popup: 'animate__animated animate__swing'
			},
			hideClass: {
				popup: 'animate__animated animate__backOutRight'
			},
			text: 'Game Over! Great Work!',
			confirmButtonText: 'Okay',
			confirmButtonColor: '#d81159',
			imageUrl: 'assets/images/misc/astronaut.jpg',
			imageWidth: 200,
			imageHeight: 300,
			imageAlt: 'Custom image',
			background: '#009bf5',

		}).then(function () {
			location.reload();
		});

	} else {
		nextQuestion();
	}

}


beginQuiz.addEventListener("click", startQuiz);

foodQuiz.addEventListener("click", chooseFoodQuiz);

objectQuiz.addEventListener("click", chooseObjectQuiz)





function startQuiz() {
	beginQuiz.style.display = "none";
	welcomeQuiz.style.display = "none";
	titleHeader.style.display = "none";
	askQuestion();
    quiz.style.display = "block";
	question.style.display = "inline";
	qImages.style.display = "block";
	solution.style.display = "inline";
	nxtBtn.style.display = "inline";
	prevBtn.style.display = "inline";
}
