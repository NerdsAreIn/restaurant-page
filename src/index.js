import './rest.css';
import {switchTabs} from './tab-switching.js';
import {loadElements, crocuses, tabPages, dividers, aboutPage, menuPage, contactPage, tabs, textBox} from './loadPage.js';
window.onload = () => {
	loadElements();    
};
import {moveImage, removeImage, result} from './moveImage.js';
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
		//console.log(e);
	});	
});
//object.list1.onclick = () => {console.log("clicked");};
result.addEventListener("change", moveImage);
window.addEventListener("click", () => moveImage());
result.addEventListener("change", removeImage);
textBox.addEventListener("input", checkLength);
submit.addEventListener("click", (e) => {
	checkRequiredInputs(e);
});

//console.log({tabs});


	











