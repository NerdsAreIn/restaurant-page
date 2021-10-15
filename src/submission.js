const form = document.querySelector("form");
const contactPage = document.getElementById("contact");
const inputs = document.querySelectorAll(".input");

function submitForm(e) {
	console.log("clicked");
	e.preventDefault();
    const submissionNotice = document.createElement("p");
    submissionNotice.textContent = "Thank you. Your booking has been logged. See you soon.";    
    submissionNotice.setAttribute("style", "font-size: 25px; font-weight: bold; font-family: inherit; color: rgb(56, 95, 56); margin: 50px 10px 20px 20px");	
    form.style.display = "none";
	contactPage.appendChild(submissionNotice);
}

function returnForm() {
	if (form.style.display == "none") {
		contactPage.lastElementChild.remove();
		for (let input of inputs) {
			input.value = "";
		}		
        form.style.display = "revert";
    }
}

export {submitForm, returnForm};
 
