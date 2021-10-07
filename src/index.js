import './rest.css';
import switchTabs from './tab-switching.js';
import './images/Crocus.jpg';
//import moveImage from './moveImage.js';

let result = window.matchMedia("(max-width: 650px)");
const crocuses = document.getElementById("crocuses");
const tabPages = querySelectorAll(".tab-page");

function moveImage(result){
 	if (result.matches) { 
		tabPages.forEach(tabPage => {
			if (tabPage.className !== "tab-page hidden") {
                tabPage.appendChild(crocuses);
 				//crocuses.setAttribute("style", "float: right");
                //crocuses.style.marginTop = "20px";                              
			}
  		});
	}
}

result.addListener(moveImage);





