//This file deals solely with handling interactions with the contact form.

//The sendMail function was taken from Matt Rudge's Code Institute lessons and repurposed for this project

function sendMail(contactForm) {
	emailjs.send("service_pjbjzz8", "Child's Play English", {
		"from_name": contactForm.name.value,
		"from_email": contactForm.emailaddress.value,
		"message": contactForm.textarea.value
	}).then(
		function response() {
			console.log("SUCCESS", response)
			document.getElementById("contactUs").reset();
		},
		function error() {
			console.log("FAILED", error)
		});

	return false;
}

/* The contactUs variable is used to create to the submit event listener to trigger the thankYou function*/

let contactUs = document.getElementById("contactUs")

contactUs.addEventListener('submit', thankYou);

/* thankYouMsg variable allows and thankYou function allow and thank you response to display if the form has been submitted correctly*/

let thankYouMsg = document.getElementById("thanks");

function thankYou() {
	thankYouMsg.style.display = "inline";
	document.getElementById("thank-you-msg").innerHTML = "Thank you for contacting us, we will be in touch shortly.";
}





