const validNumber = /^0\d{10}/;
let inputMessages = [];
let invalidMessage = 0;
let requiredInputs;

import {submitForm} from './submission.js';
export {checkRequiredInputs};

function createInvalidNumMessage() {
	const value = document.createElement("div");
	value.setAttribute("style", "color: white; border: 2px solid red; margin-top: -10px; border-radius: 10px; background-color: rgba(255, 0, 0, 0.4)");
	value.innerHTML = "<p><b>!</b> You must enter a valid telephone number of 11 digits.</p>";	
	return value;
}

function createInputRequiredMessage() {
	const value = document.createElement("div");			
    value.setAttribute("style", "color: white; border: 2px solid red; margin-top: -10px; border-radius: 10px; background-color: rgba(255, 0, 0, 0.4)");
	value.innerHTML = "<p><b>!</b> You need to fill out this field.</p>";
	return value;		
}

function checkNumber(requiredInput) {  
	let invalidNumberMessage = createInvalidNumMessage();
	if (!(requiredInput.value.match(validNumber))) {        
		requiredInput.parentElement.appendChild(invalidNumberMessage);
		++invalidMessage;
	}
	else if (requiredInput.value.match(validNumber)) {
        if (requiredInput.parentElement.contains(invalidNumberMessage)) {
		requiredInput.parentElement.removeChild(invalidNumberMessage);
		}
		invalidMessage = -1;
       	return invalidMessage;	
	}
}

// TODO: Want to find a more elegant solution to counting the messages and making the submission contingent on there being none, but this just about works for now:
function checkRequiredInputs(e) {
   	requiredInputs = document.querySelectorAll("[required]");
	e.preventDefault();  
	for (let i = 0; i < requiredInputs.length; i++) {  
		if (requiredInputs[i].value == "" && requiredInputs[i].parentElement.children.length < 4) {				
			requiredInputs[i].parentElement.appendChild(createInputRequiredMessage());
			inputMessages[i] = 1; 			
		}  
		else if (requiredInputs[i].value != "")  {					
			if (requiredInputs[i].parentElement.children.length > 3 ) {
				requiredInputs[i].parentElement.lastElementChild.remove();
				inputMessages[i] = 0;
				if (requiredInputs[i].id == "tel") {
					const that = requiredInputs[i]; 
                   	checkNumber(that);
				}							       		
			}
			else if (requiredInputs[i].id == "tel") {
					const that = requiredInputs[i]; 
                   	checkNumber(that);
			}	
		}	
	}
	if (!(inputMessages.includes(1)) && invalidMessage == -1) {
        submitForm(e);
        return;
	}
}
