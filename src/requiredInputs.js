const requiredInputs = document.querySelectorAll("[required]");
const validNumber = /\d {11}/;
import {submitForm} from './submission.js';

function checkNumber(requiredInput) {
	if (!(requiredInput.value.match(validNumber))) {
						let invalidNumberMessage = document.createElement("div");
            			invalidNumberMessage.setAttribute("style", "color: white; border: 2px solid red; margin-top: -10px; border-radius: 10px; background-color: rgba(255, 0, 0, 0.4)");
						invalidNumberMessage.innerHTML = "<p><b>!</b> You must enter a valid telephone number of 11 digits.</p>";				
						requiredInput.parentElement.appendChild(invalidNumberMessage);
}


// TODO: Want to find a more elegant solution to counting the messages and making the submission contingent on there being none, but this just about works for now:
function checkRequiredInputs(e) {
    let inputRequiredMessage;
    let inputMessages = 0;
    e.preventDefault();  
	for (let i = 0; i < requiredInputs.length; i++) {  
		if (requiredInputs[i].value == "" && requiredInputs[i].parentElement.children.length < 4) {
			//console.log("no message");
			inputRequiredMessage = document.createElement("div");			
            inputRequiredMessage.setAttribute("style", "color: white; border: 2px solid red; margin-top: -10px; border-radius: 10px; background-color: rgba(255, 0, 0, 0.4)")
			inputRequiredMessage.innerHTML = "<p><b>!</b> You need to fill out this field.</p>";				
			requiredInputs[i].parentElement.appendChild(inputRequiredMessage);
			++inputMessages;      
			console.log(inputMessages);				
		}  
		else if (requiredInputs[i].value != "")  {
			--inputMessages;		
			if (requiredInputs[i].parentElement.children.length > 3 ) {
				requiredInputs[i].parentElement.lastElementChild.remove();						console.log(inputMessages);              		
				if (requiredInputs[i].id == "tel") {
					that = requiredInputs[i];  
					checkNumber(that);
				}
				else return;
			}  
		}
	}
	if (inputMessages <= -4) {
        //console.log("No message!");
		submitForm(e);
        return;
	}
}

export {checkRequiredInputs};