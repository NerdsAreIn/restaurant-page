import {crocuses, tabPages, dividers2} from './loadPage.js';
console.log({dividers2});
console.log({crocuses});
console.log({tabPages});

// matchMedia() is a window object method whose argument is a media query string. It returns an object
// that contains the search result. This can then be matched against the document - using <matches> property -
// to see if the specified conditions are present. An event handler function can be added via <addListener> property
// to continually run the search and refresh the results.
let result = window.matchMedia("(max-width: 650px)");

function moveImage(){
	 	if (result.matches) { 
			for (let i = 0; i < tabPages.length; i++) {
				if (!(tabPages[i].classList.contains("hidden"))) {
                    console.log(dividers2[i]);
					tabPages[i].insertBefore(crocuses, dividers2[i]);			
					crocuses.setAttribute("style", "margin-top: 20px !important");
				}
			}
		}
}

function removeImage() {
		if (!(result.matches)) {
			tabPages.forEach(tabPage => {
				if (!(tabPage.classList.contains("hidden"))) {
					tabPage.removeChild(crocuses);
					document.body.appendChild(crocuses);
					crocuses.setAttribute("style", "margin-top: revert");                      
				}
			});
		}		
	}	
 	
export {moveImage, removeImage, result};
//console.log({tabPages});
//console.log({crocuses});
//console.log(dividers);