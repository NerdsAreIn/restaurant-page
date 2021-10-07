const crocuses = document.getElementById("crocuses");
const tabPages = querySelectorAll(".tab-page");

// matchMedia() is a window object method whose argument is a media query string. It returns an object
// that contains the search result. This can then be matched against the document - using <matches> property -
// to see if the specified conditions are present. An event handler function can be added via <addListener> property
// to continually run the search and refresh the results.
let result = window.matchMedia("(max-width: 650px)");
 
export function moveImage(result){
 	if (result.matches) { 
		tabPages.forEach(tabPage => {
			if (!(tabPage.className.includes("hidden")) 
 				crocuses.addAttribute("style", "float: right !important");
                crocuses.style.marginTop = "20px";                                     
                tabPage.appendChild(crocuses);
			}
  		});

	}
};

