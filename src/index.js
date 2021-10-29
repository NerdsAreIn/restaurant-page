import './rest.css';
import {moveImage, removeImage, result} from './moveImage.js';
import {loadElements, tabs, textBox} from './loadPage.js';
import {switchTabs} from './tab-switching.js';
window.onload = (e) => {
	loadElements();
	switchTabs();
	//checkRequiredInputs(e);   
};
//const textBox = document.querySelector("textarea");

import {returnForm} from './submission.js';
import {checkRequiredInputs} from './requiredInputs.js';
import {checkLength, submit} from './textarea.js';
console.log({submit});

//let result = window.matchMedia("(max-width: 650px)");
//const submit = document.querySelector("input[type=submit]");
//const tabs = document.querySelectorAll(".nav-tab");

tabs.forEach(tab => {	
    tab.addEventListener("click", returnForm);
	tab.addEventListener("click", e => {
		console.log(e);
	});	
});
result.addEventListener("change", moveImage);
window.addEventListener("click", moveImage);
result.addEventListener("change", removeImage);
textBox.addEventListener("input", checkLength);
submit.addEventListener("click", (e) => {
	checkRequiredInputs(e);
});

//export {textBox};


	











