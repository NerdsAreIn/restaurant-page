import {tabPages, form, submit} from './loadPage.js';

const inputs = document.getElementsByClassName("input");

console.log({inputs});
console.log({form});
console.log({tabPages});

function submitForm(e) {
	console.log("clicked");
	e.preventDefault();
    const submissionNotice = document.createElement("p");
    submissionNotice.textContent = "Thank you. Your booking has been logged. See you soon.";    
    submissionNotice.setAttribute("style", "font-size: 25px; font-weight: bold; font-family: inherit; color: rgb(56, 95, 56); margin: 50px 10px 20px 20px");	
    form.style.display = "none";
	submit.style.display = "none";
	tabPages[2].appendChild(submissionNotice);
}

function returnForm() {
	if (form.style.display == "none") {
		tabPages[2].lastElementChild.remove();
		for (let input of inputs) {
			input.value = "";
		}		
        form.style.display = "revert";
        submit.style.display = "revert";
    }
}

export {submitForm, returnForm};
 
