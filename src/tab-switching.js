import {aboutPage, menuPage, contactPage, tabs} from './loadPage.js';

//const tabs = [object.list1, object.list2, object.list3];

const switchTabs = (function() {
	tabs.forEach(tab => {
		tab.addEventListener("click", (e) => {
			if (tab.id == "about-tab") {
                console.log(e);
                console.log(object.list1);
				menuPage.classList.add("hidden");
				contactPage.classList.add("hidden");
                aboutPage.classList.remove("hidden");
                console.log("clicked");                
			}
			else if (tab.id == "menu-tab") {   
	            aboutPage.classList.add("hidden");
				contactPage.classList.add("hidden");
                menuPage.classList.remove("hidden");
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
})();

export {switchTabs};

