import './rest.css';
import {moveImage, removeImage, result} from './moveImage.js';
import {loadElements, tabs, textBox} from './loadPage.js';
import {switchTabs} from './tab-switching.js';
window.onload = () => {
	loadElements();
	//moveImage();
	//removeImage();
    switchTabs();
};
import {checkLength, submit} from './textarea.js';
import {returnForm} from './submission.js';
import {checkRequiredInputs} from './requiredInputs.js';


//let result = window.matchMedia("(max-width: 650px)");
//const textBox = document.querySelector("textarea");
//const submit = document.querySelector("input[type=submit]");
//const tabs = document.querySelectorAll(".nav-tab");

tabs.forEach(tab => {	
    //tab.addEventListener("click", switchTabs);
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




	











