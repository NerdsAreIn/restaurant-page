const requiredInputs = document.querySelectorAll("[required]");
const validNumber = /^0\d{10}/;
let inputMessages = [];
let invalidMessage = 0;
import {submitForm} from './submission.js';
export {checkRequiredInputs};

function checkNumber(requiredInput) {  
	let invalidNumberMessage;
	if (!(requiredInput.value.match(validNumber))) {
        invalidNumberMessage = document.createElement("div");
		invalidNumberMessage.setAttribute("style", "color: white; border: 2px solid red; margin-top: -10px; border-radius: 10px; background-color: rgba(255, 0, 0, 0.4)");
		invalidNumberMessage.innerHTML = "<p><b>!</b> You must enter a valid telephone number of 11 digits.</p>";				
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
    let inputRequiredMessage;    
    e.preventDefault();  
	for (let i = 0; i < requiredInputs.length; i++) {  
		if (requiredInputs[i].value == "" && requiredInputs[i].parentElement.children.length < 4) {
			inputRequiredMessage = document.createElement("div");			
            inputRequiredMessage.setAttribute("style", "color: white; border: 2px solid red; margin-top: -10px; border-radius: 10px; background-color: rgba(255, 0, 0, 0.4)")
			inputRequiredMessage.innerHTML = "<p><b>!</b> You need to fill out this field.</p>";				
			requiredInputs[i].parentElement.appendChild(inputRequiredMessage);
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
