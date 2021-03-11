function sendMail(contactForm){
    emailjs.send("service_pjbjzz8","Child's Play English",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.textarea.value
    })
    .then(
        function response(){
            console.log("SUCCESS", response)
        },
        function error(){
            console.log("FAILED", error)
        });
        return false;

}