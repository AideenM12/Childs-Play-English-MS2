/*function myFunction(){
    document.getElementById('elephant').src='assets/images/strawberry.jpg';
}*/

/*function myFunction(){
    var x = document.getElementById('elephant');
    if(x.src.match('assets/images/strawberry (640x640).jpg')){
        x.src = "assets/images/elephant (640x640).jpg";
    }
   
    else{
        x.src = "assets/images/strawberry (640x640).jpg";
    }
}*/
/* This code was found on code project.com (https://www.codeproject.com/Questions/845323/JAVA-SCRIPT-image-image-src-match-issue)*/
/*function myFunction(){
    var x = document.getElementById('elephant');
    if(x.getAttribute('src') == "assets/images/strawberry (640x640).jpg" ){
        x.src = "assets/images/elephant (640x640).jpg";
    }
   
    else{
        x.src = "assets/images/strawberry (640x640).jpg";
    }
}
while(images< images.length){

}
function myQuizQuestions(){
    var images = []
}

if(button.onclick === img.src){

}*/


/*var questions = [
  {
    question: "What is this animal?",
    answer: [
        {
          answerText: "Elephant",
          correct: true
        },
        {
          answerText: "Dog",
          correct: false
        }
    ]
  }
]*/
function changeImage(){
    
    let images = ["assets/images/CoolCat (640x640).jpg", "assets/images/Dog (640x640).jpg", "assets/images/elephant (640x640).jpg", "assets/images/lion (640x640).jpg", "assets/images/panda bear (640x640).jpg" ];
    images.push("assets/images/penguin (640x640).jpg");
    
    /*for(i= 0,images.length > i; i++;)*/
    let newVar = Math.floor(Math.random * images.length);     
    {
        let img = new Image(200, 200);
        img.src = images//[i];

        let src = document.getElementById("elephant");
        src.appendChild(img);
       // document.getElementById("elephant").innerHTML = img;
        return images[newVar];
    }
};

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

/*let images = ["assets/images/CoolCat (640x640).jpg", "assets/images/Dog (640x640).jpg", "assets/images/elephant (640x640).jpg", "assets/images/lion (640x640).jpg"]*/;

let answers = [
    {
        imgSrc: "assets/images/elephant (640x640).jpg",
        opt1: "A Lion",
        opt2: "A Cat",
        opt3: "An Elephant",
        opt4: "A Dog"
    }
]