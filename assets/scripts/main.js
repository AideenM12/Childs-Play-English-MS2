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
function myFunction(){
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

}


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