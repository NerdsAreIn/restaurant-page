const requiredInputs = document.querySelectorAll("[required]");
import {submitForm} from './submission.js';

// TODO: Want to find a more elegant solution to counting the messages and making the submission contingent on there being none, but this just about works for now:
function checkRequiredInputs(e) {
    let inputRequiredMessage;
    let inputMessages = 0;
    e.preventDefault();  
	for (let i = 0; i < requiredInputs.length; i++) {  
		if (requiredInputs[i].value == "" && requiredInputs[i].parentElement.children.length < 4) {
			//console.log("no message");
			inputRequiredMessage = document.createElement("div");
			inputRequiredMessage.style.color = "red";
			inputRequiredMessage.innerHTML = "<p>You need to fill out this field.</p>";				
			requiredInputs[i].parentElement.appendChild(inputRequiredMessage);
			inputRequiredMessage;
			inputMessages += 1;      
			//console.log(inputMessages);				
		}  
		else if (requiredInputs[i].value != "")  {
			//console.log("I've got a message!"); 
			inputMessages -= 1;		
			if (requiredInputs[i].parentElement.children.length > 3 ) {
				requiredInputs[i].parentElement.lastElementChild.remove();						//console.log(inputMessages);              		
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