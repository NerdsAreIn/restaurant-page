import {tabPages, form, submit} from './loadPage.js';

const inputs = document.getElementsByClassName("input");

function vanishForm() {
	form.style.display = "none";
	submit.style.display = "none";
}

function resetForm() {
	for (let input of inputs) {
			input.value = "";
		}		
        form.style.display = "revert";
        submit.style.display = "revert";
}
 
function createSubmissionNotice() {
	let submissionNotice = document.createElement("p");
    submissionNotice.textContent = "Thank you. Your booking has been logged. See you soon.";    
    submissionNotice.setAttribute("style", "font-size: 25px; font-weight: bold; font-family: inherit; color: rgb(56, 95, 56); margin: 50px 10px 20px 20px");
	return submissionNotice;
}

function submitForm(e) {
	e.preventDefault();
	vanishForm();     
	tabPages[2].appendChild(createSubmissionNotice());
}

function returnForm() {
   	if (form.style.display === "none") {
		tabPages[2].lastElementChild.remove();
		resetForm();
    }
	else return;
}

export {submitForm, returnForm};
 
