import {tabs, tabPages} from './loadPage.js';
console.log({tabs});
console.log({tabPages});
console.log(tabs[0]);
//console.log({menuPage});
//console.log({contactPage});

/*const switchTabs = (function() {
	tabs.forEach(tab => {
		tab.addEventListener("click", (e) => {
			if (tab.id == "about-tab") {
        		tabPages[1].classList.add("hidden");
				tabPages[2].classList.add("hidden");
                tabPages[0].classList.remove("hidden");
                console.log("clicked");                
			}
			else if (tab.id == "menu-tab") {   
	            tabPages[0].classList.add("hidden");
				tabPages[2].classList.add("hidden");
                tabPages[1].classList.remove("hidden");
                console.log("clicked 2!");
			}
			else if (tab.id == "contact-tab") {
			    aboutPage.classList.add("hidden");
				menuPage.classList.add("hidden");
                contactPage.classList.remove("hidden");
				console.log("clicked 3");
			}
		});
	});
})();*/

const switchTabs = function() {
	tabs[0].onclick = () => {
		tabPages[1].classList.add("hidden");
		tabPages[2].classList.add("hidden");
        tabPages[0].classList.remove("hidden");
        console.log("clicked 1");
	};
	tabs[1].onclick = () => {
		tabPages[0].classList.add("hidden");
		tabPages[2].classList.add("hidden");
        tabPages[1].classList.remove("hidden");
        console.log("clicked 2");
	};
	tabs[2].onclick = () => {
		tabPages[1].classList.add("hidden");
		tabPages[0].classList.add("hidden");
        tabPages[2].classList.remove("hidden");
        console.log("clicked 3");
	};
}

export {switchTabs};

