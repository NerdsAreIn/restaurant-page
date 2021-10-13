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