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
document.getElementById('contact-btn').onclick = function(){
    Swal.fire({
  title: 'Custom animation with Animate.css',
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  },function(){
      window.location.href = "index.html";
}
    })
}

 
            

     /* let contactBtn = document.getElementById("contact-btn");
      
      contactBtn.addEventListener("click",resetForm);

      function resetForm(){
          
          document.getElementById("contactUs").reset();
      }
           $(document).on('click', "#contact-btn", function() {
		// Reset the form
		document.getElementById('contactUs').reset();
	})*/
