const submit = document.querySelector("input[type=submit]");
const charactersExceeded = document.createElement("p");
const textBox = document.querySelector("textarea");
const form = document.querySelector("form");

function checkLength() {
       if (textBox.value.length == 300) {
			console.log("max length reached");
			charactersExceeded.style.color = "red";
			charactersExceeded.style.fontWeight = "bold";
            charactersExceeded.textContent = "You have entered the maximum number of characters."
			form.insertBefore(charactersExceeded, submit);
		}
       else charactersExceeded.remove();
	}
export {checkLength, textBox};