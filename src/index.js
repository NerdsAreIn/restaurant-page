import './rest.css';
import {switchTabs} from './tab-switching.js';
import crocusPhoto from './images/Crocus.jpg';
import {moveImage, removeImage, crocuses} from './moveImage.js';

let result = window.matchMedia("(max-width: 650px)");
const submit = document.querySelector("input[type=submit]");

submit.onclick = () => {
	console.log({submit});
	preventDefault();
}
const charactersExceeded = document.createElement("p");
const textBox = document.querySelector("textarea");
const contactPage = document.getElementById("contact");
charactersExceeded.style.color = "red";
if (textBox.value.length > 300) {
	contactPage.insertBefore(charactersExceeded, submit);
}

//const crocuses = document.getElementById("crocuses");
crocuses.src = crocusPhoto;
//const tabPages = document.querySelectorAll(".tab-page");
//const dividers = document.querySelectorAll(".divider");



//moveImage(result);
//removeImage(result);
result.addEventListener("change", () => {moveImage();});
window.addEventListener("click", () => {moveImage();});
result.addEventListener("change", () => {removeImage();});









