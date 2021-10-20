const contentDiv = document.getElementById("content");

 export default function loadElements() {
	const banner = document.createElement("div");
	banner.id = "banner";
	contentDiv.appendChild(banner);
	const title = document.getElementsByTagName("h1");
	const navBar = document.getElementsByTagName("nav");
	banner.children[0] = title;
	banner.children[1] = navBar;
	const list1 = document.CreateElement("li");
	const list2 = document.CreateElement("li");
	const list3 = document.CreateElement("li");
	list1.className = "nav-tab";
	list2.className = "nav-tab";	
	list3.className = "nav-tab";
	list1.id = "about-tab";
	list2.id = "menu-tab";
	list3.id = "contact-tab";
	list1.innerHTML = '<a href="#">About</a>';
	list2.innerHTML = '<a href="#">Menu</a>';
	list3.innerHTML = '<a href="#">Contact</a>';
    const listItems = Array.from(document.getElementsByClassName("nav-tab"));
	listItems.map(item => contentBox.appendChild(item));
	const image = document.createElement("img");
	image.id = "crocuses";
	image.setAttribute("alt", "purple crocus flowers");
	contentBox.appendChild(image);
	const aboutPage = document.createElement("div");
	aboutPage.id = "about";
	aboutPage.className = "tab-page";
	aboutPage.innerHTML = '<span class="rubric">Crocus Cafe</span> is a community cafe in Lenton, Nottingham, that was established in 2004 making it the oldest in the city. <span class="divider">The cafe serves entirely vegetarian food that is mostly vegan, and particularly caters to students and homeless people.</span> Suspended meals for the latter group may be purchased. The cafe also houses a small shop, with vegetarian groceries and toiletries stocked, as well as a select range of nature-themed art. The cafe is managed by Real Lives - a charity that provides support to vulnerable people in the community. Come and enjoy our wholesome food at not-for-profit prices, in the cosy and cheerful interior of the cafe. Outdoor seating is also available.';
	contentBox.appendChild(aboutPage);
	const bottomBar = document.createElement("div");
	bottomBar.id = "bottom-bar";
	contentBox.appendChild(bottomBar);	
}