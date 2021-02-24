/*function myFunction(){
    document.getElementById('elephant').src='assets/images/strawberry.jpg';
}*/

function myFunction(){
    var x = document.getElementById('elephant');
    if(x.src.match('assets/images/strawberry.jpg')){
        x.src = "assets/images/elephant (640x640).jpg";
    }
    else{
        x.src = "assets/images/strawberry.jpg";
    }
}