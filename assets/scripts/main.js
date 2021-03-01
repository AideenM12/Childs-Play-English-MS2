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
// This code was found on Stack overflow;
let images = new Array();
 images[0] = "assets/images/elephant.jpg";
            images[1] = "assets/images/coolcat.jpg";
            images[2] = "assets/images/penguin.jpg";
            images[3] = "assets/images/dog.jpg";
            images[4] = "assets/images/horse.jpg";
            images[5] = "assets/images/mouse.jpg";
            images[6] = "assets/images/duck.jpg";
            images[7] = "assets/images/turtle.jpg";
            images[8] = "assets/images/parrot.jpg";
            images[9] = "assets/images/cow.jpg";
            images[10] = "assets/images/lion.jpg";
            images[11] = "assets/images/panda-bear.jpg";
            images[12] = "assets/images/pig.jpg";
            images[13] = "assets/images/rabbit.jpg";
            images[14] = "assets/images/shark.jpg";
            images[15] = "assets/images/owl.jpg";
            images[16] = "assets/images/unicorn.jpg";
            
            var currentPic = 0;
            var lastPic = images.length-1;
            function changeImage()
            {
                if (currentPic == lastPic)
                {
                    currentPic = 0;
                    document.getElementById('elephant').src = images[currentPic];
                }
                else
                {
                    currentpic++;
                    document.getElementById('elephant').src = images[currentPic];
                }
            }




    
/*    let images = ["assets/images/coolcat.jpg", "assets/images/Dog (640x640).jpg", "assets/images/elephant (640x640).jpg", "assets/images/lion (640x640).jpg", "assets/images/panda bear (640x640).jpg" ];
    images.push("assets/images/penguin.jpg");



    function changeImage(){
     let newPic = [Math.floor(Math.random() * images.length)];
     document.getElementById('elephant').src = newPic.toString();
     
     return images[newPic];
}*/








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
};

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");


let answers = [
    {
        imgSrc: "assets/images/elephant (640x640).jpg",
        opt1: "A Lion",
        opt2: "A Cat",
        opt3: "An Elephant",
        opt4: "A Dog"
    }
]*/