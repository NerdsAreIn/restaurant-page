const requiredInputs = document.querySelectorAll("[required]");
//const submit = document.getElementById("submit");
const form = document.querySelector("form");
import {submitForm} from './submission.js';

export default function checkRequiredInputs(e) {
    console.log({requiredInputs});
    const inputRequiredMessage;
    e.preventDefault();
	check: for (let i = 0; i < requiredInputs.length; i++) {
		if (requiredInputs[i].value == "") {
            if (!(requiredInputs[i].parentElement.contains(inputRequiredMessage))) {
				inputRequiredMessage = document.createElement("div");
				inputRequiredMessage.style.color = "red";
				inputRequiredMessage.innerHTML = "<p>You need to fill out this field.</p>";
				//form.children[i].insertBefore(inputRequiredMessage, requiredInputs[i]);
				requiredInputs[i].parentElement.appendChild(inputRequiredMessage);
			}
		}
		else if (requiredInputs[i].value != "") {
			if (requiredInputs[i].parentElement.contains(inputRequiredMessage)) {
				requiredInputs[i].parentElement.removeChild(inputRequiredMessage);
			}	
            else continue check;		
		}
	}	
	if (!(form.contains(inputRequiredMessage))) {
        console.log("No message!");
		submitForm(e);
	}
	else checkRequiredInputs(e);
}

