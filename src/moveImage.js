import {loadElements, object} from './loadPage.js';
//const crocuses = document.getElementById("crocuses");
//const tabPages = document.querySelectorAll(".tab-page");
//const dividers = document.querySelectorAll(".divider");
const tabPages = [object.aboutPage, object.menuPage, object.contactPage];
const crocuses = object.image;
console.log({tabPages});
console.log({crocuses});

// matchMedia() is a window object method whose argument is a media query string. It returns an object
// that contains the search result. This can then be matched against the document - using <matches> property -
// to see if the specified conditions are present. An event handler function can be added via <addListener> property
// to continually run the search and refresh the results.
let result = window.matchMedia("(max-width: 650px)");

function moveImage(){
	 	if (result.matches) { 
			for (let i = 0; i < tabPages.length; i++) {
				if (!(tabPages[i].classList.contains("hidden"))) {
					tabPages[i].insertBefore(crocuses, object.dividers[i]);			
					crocuses.setAttribute("style", "margin-top: 20px !important");
				}
			}
		}
}

function removeImage() {
		if (!(result.matches)) {
			tabPages.forEach(tabPage => {
				if (!(tabPage.classList.contains("hidden"))) {
					crocuses.remove();
					document.body.appendChild(crocuses);
					crocuses.setAttribute("style", "margin-top: revert");                      
				}
			});
		}		
	}	
 	
export {moveImage, removeImage};
