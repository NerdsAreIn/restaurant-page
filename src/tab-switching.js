import {tabs, tabPages} from './loadPage.js';

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

