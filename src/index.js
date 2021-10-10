import './rest.css';
import switchTabs from './tab-switching.js';
import './images/Crocus.jpg';
//import moveImage from './moveImage.js';

let result = window.matchMedia("(max-width: 650px)");
const crocuses = document.getElementById("crocuses");
const tabPages = document.querySelectorAll(".tab-page");
const dividers = document.querySelectorAll(".divider");
console.log(tabPages);

function moveImage(result){
 	if (result.matches) { 
        for (let i = 0; i < tabPages.length; i++) {
			if (!(tabPages[i].classList.contains("hidden"))) {
                tabPages[i].insertBefore(crocuses, dividers[i]); 				
                crocuses.setAttribute("style", "margin-top: 20px !important");
			}
  		}
	}
}

function removeImage(result) {
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

result.addListener(moveImage);
result.addListener(removeImage)





