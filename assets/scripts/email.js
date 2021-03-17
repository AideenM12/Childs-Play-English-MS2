function sendMail(contactForm){
    emailjs.send("service_pjbjzz8","Child's Play English",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.textarea.value
    }).then(
        function response(){
            console.log("SUCCESS", response)
            document.getElementById("contactUs").reset();
        },
        function error(){
            console.log("FAILED", error)
        });

        return false;       


}

let contactUs = document.getElementById("contactUs")

contactUs.addEventListener('submit', thankYou);

let thankYouMsg = document.getElementById("thanks");

function thankYou(){
thankYouMsg.style.display ="inline";
    document.getElementById("thank-you-msg").innerHTML = "Thank you for contacting us, we will be in touch shortly.";
}






