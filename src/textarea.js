//const submit = document.getElementById("submit");
const charactersExceeded = document.createElement("p");
//const form = document.getElementsByTagName("form")[0];
import {textBox, submit, form} from './loadPage.js';

console.log({form});
console.log({textBox});
console.log({submit});

function checkLength() {
	//const textBox = document.querySelector("textarea");
       if (textBox.value.length == 300) {
			console.log("max length reached");
			charactersExceeded.style.color = "red";
			charactersExceeded.style.fontWeight = "bold";
            charactersExceeded.textContent = "You have entered the maximum number of characters."
			form.insertBefore(charactersExceeded, submit);
		}
       else charactersExceeded.remove();
       //return textBox;
	}
//const textBox = checkLength();
//console.log({textBox});

export {checkLength, submit};