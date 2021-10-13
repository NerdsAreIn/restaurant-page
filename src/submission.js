const form = document.querySelector("form");
const contactPage = document.getElementById("contact");

function submitForm(e) {
	console.log("clicked");
	e.preventDefault();
    const submissionNotice = document.createElement("p");
    submissionNotice.textContent = "Thank you. Your booking has been logged. See you soon."    
    submissionNotice.setAttribute("style", "font-size: 25px; font-weight: bold; font-family: inherit; color: rgb(56, 95, 56); margin-top: 50px");
    form.style.display = "none";
	contactPage.appendChild(submissionNotice);
}

function returnForm() {
	if (submissionNotice) {
		submissionNotice.remove();
		form.style.display = "unset";
	}
}

export {submitForm, returnForm};
 
