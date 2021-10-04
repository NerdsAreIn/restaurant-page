const tabs = document.querySelectorAll("li");
const aboutPage = document.getElementById("about");
const menuPage = document.getElementById("menu");
const contactPage = document.getElementById("contact");

const switchTabs = (function() {
	tabs.forEach(tab => {
		tab.addEventListener("click", () => {
			if (tab.id == "about-tab") {
				menuPage.classList.add("hidden");
				contactPage.classList.add("hidden");
                aboutPage.classList.remove("hidden");                
			}
			else if (tab.id == "menu-tab") {
	            aboutPage.classList.add("hidden");
				contactPage.classList.add("hidden");
                menuPage.classList.remove("hidden")
			}
			else if (tab.id == "contact-tab") {
			    aboutPage.classList.add("hidden");
				menuPage.classList.add("hidden");
                contactPage.classList.remove("hidden")
			}
		});
	});
})();

export {switchTabs};

