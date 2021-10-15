import './rest.css';
import crocusPhoto from './images/Crocus.jpg';
import {switchTabs} from './tab-switching.js';
import {moveImage, removeImage, crocuses} from './moveImage.js';
import checkLength from './textarea.js';
import {returnForm} from './submission.js';
import {checkRequiredInputs} from './requiredInputs.js';

let result = window.matchMedia("(max-width: 650px)");
const textBox = document.querySelector("textarea");
const submit = document.querySelector("input[type=submit]");
const navTabs = document.querySelectorAll(".nav-tab");

crocuses.src = crocusPhoto;

result.addEventListener("change", () => {moveImage();});
window.addEventListener("click", () => {moveImage();});
result.addEventListener("change", () => {removeImage();});
textBox.addEventListener("input", checkLength);
submit.addEventListener("click", (e) => {
	checkRequiredInputs(e);
});
navTabs.forEach(navTab => {
	navTab.addEventListener("click", returnForm);
});
	











