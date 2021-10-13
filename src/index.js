import './rest.css';
import {switchTabs} from './tab-switching.js';
import crocusPhoto from './images/Crocus.jpg';
import {moveImage, removeImage, crocuses} from './moveImage.js';
import checkLength from './textarea.js';
import {submitForm, returnForm} from './submission.js';

let result = window.matchMedia("(max-width: 650px)");
const textBox = document.querySelector("textarea");
const submit = document.querySelector("input[type=submit]");
const tabPages = document.querySelectorAll(".tab-page");

crocuses.src = crocusPhoto;

result.addEventListener("change", () => {moveImage();});
window.addEventListener("click", () => {moveImage();});
result.addEventListener("change", () => {removeImage();});
textBox.addEventListener("input", checkLength);
submit.addEventListener("click", (e) => {
	submitForm(e);
});
tabPages.forEach(tabPage => {
	tabPage.addEventListener("click", returnForm);
});
	











