import './rest.css';
import {moveImage, removeImage, result} from './moveImage.js';
import {loadElements, textBox} from './loadPage.js';
import {switchTabs} from './tab-switching.js';

window.onload = (e) => {
	loadElements();
	switchTabs(); 	
};

import {checkRequiredInputs} from './requiredInputs.js';
import {checkLength, submit} from './textarea.js';


result.addEventListener("change", moveImage);
window.addEventListener("click", moveImage);
result.addEventListener("change", removeImage);
textBox.addEventListener("input", checkLength);
submit.addEventListener("click", (e) => {
	checkRequiredInputs(e);
});



	











