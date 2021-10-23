//const tabs = document.querySelectorAll(".nav-tab");
const tabs = [object.list1, object.list2, object.list3];
//const aboutPage = document.getElementById("about");
//const menuPage = document.getElementById("menu");
//const contactPage = document.getElementById("contact");
import {loadElements, object} from './loadPage.js';

function switchTabs() {
	tabs.forEach(tab => {
		tab.addEventListener("click", (e) => {
			if (e.target == object.list1) {
                console.log(e);
                console.log(object.list1);
				object.menuPage.classList.add("hidden");
				object.contactPage.classList.add("hidden");
                object.aboutPage.classList.remove("hidden");
                console.log("clicked");                
			}
			else if (e.target == object.list2) {
   
	            object.aboutPage.classList.add("hidden");
				object.contactPage.classList.add("hidden");
                object.menuPage.classList.remove("hidden");
                console.log("clicked 2!");
			}
			else if (e.target == object.list3) {
			    object.aboutPage.classList.add("hidden");
				object.menuPage.classList.add("hidden");
                object.contactPage.classList.remove("hidden");
				console.log("clicked 3");
			}
		});
	});
}

export {switchTabs, tabs};

