import {tabs, tabPages} from './loadPage.js';
import {returnForm} from './submission.js';

const switchTabs = function() {
	tabs[0].onclick = () => {
		tabPages[1].classList.add("hidden");
		tabPages[2].classList.add("hidden");
        tabPages[0].classList.remove("hidden");
        returnForm();
	};
	tabs[1].onclick = () => {
		tabPages[0].classList.add("hidden");
		tabPages[2].classList.add("hidden");
        tabPages[1].classList.remove("hidden");
        returnForm();
	};
	tabs[2].onclick = () => {
		tabPages[1].classList.add("hidden");
		tabPages[0].classList.add("hidden");
        tabPages[2].classList.remove("hidden");
        returnForm();
	};
};

/*const switchTabs = function() {
	for (let i = 0; i < tabs.length; ++i) {
		tabs[i].addEventListener("click", () => {
			tabPages[i].classList.toggle("hidden");
			returnForm();
		});	
		//tabPages[i].classList.add("hidden");
	}
};*/

export {switchTabs};


