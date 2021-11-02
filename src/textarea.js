let charactersExceeded = document.createElement("p");

import {textBox, submit, form} from './loadPage.js';

console.log({form});
console.log({textBox});
console.log({submit});

function checkLength() {
	if (textBox.value.length == 300) {
		console.log("max length reached");
		charactersExceeded.style.color = "red";
		charactersExceeded.style.fontWeight = "bold";
		charactersExceeded.textContent = "You have entered the maximum number of characters."
		form.appendChild(charactersExceeded);
	}
	else charactersExceeded.remove();
}

export {checkLength, submit};