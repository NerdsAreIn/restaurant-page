const contentDiv = document.getElementById("content");
const crocuses = createImage();
const submit = createSubmitButton();
let dividers2 = [];
let tabPages = [];
let tabs = [];

import crocusPhoto from './images/Crocus.jpg';

function createImage() {
	const crocuses = document.createElement("img");
	crocuses.id = "crocuses";
	crocuses.setAttribute("alt", "purple crocus flowers");
    crocuses.src = crocusPhoto;    
	return crocuses;
}
function createSubmitButton() {
	const submit = document.createElement("input");
    submit.id = "submit";
    submit.setAttribute("value", "Submit");
	submit.setAttribute("type", "submit");
	console.log({submit});
	return submit;
}

 function loadElements() {
	const banner = document.createElement("div");
	banner.id = "banner";
	contentDiv.appendChild(banner);
	const title = document.createElement("h1");
	const navBar = document.createElement("nav");
	title.textContent = "Crocus Cafe";
	banner.appendChild(title);
	banner.appendChild(navBar);
	const list1 = document.createElement("li");
	const list2 = document.createElement("li");
	const list3 = document.createElement("li");
	list1.className = "nav-tab";
	list2.className = "nav-tab";	
	list3.className = "nav-tab";
	list1.id = "about-tab";
	list2.id = "menu-tab";
	list3.id = "contact-tab";
	list1.innerHTML = '<a href="#">About</a>';
	list2.innerHTML = '<a href="#">Menu</a>';
	list3.innerHTML = '<a href="#">Contact</a>';
    tabs.push(list1);
    tabs.push(list2);
    tabs.push(list3);
	navBar.appendChild(list1);
	navBar.appendChild(list2);
	navBar.appendChild(list3);
	contentDiv.appendChild(crocuses);
  	const aboutPage = document.createElement("div");
	aboutPage.id = "about";
	aboutPage.className = "tab-page";
    aboutPage.innerHTML = '<span class="rubric">Crocus Cafe</span> is a community cafe in Lenton, Nottingham, that was established in 2004 making it the oldest in the city. <span class="divider">The cafe serves entirely vegetarian food that is mostly vegan, and particularly caters to students and homeless people.</span> Suspended meals for the latter group may be purchased. The cafe also houses a small shop, with vegetarian groceries and toiletries stocked, as well as a select range of nature-themed art. The cafe is managed by Real Lives - a charity that provides support to vulnerable people in the community. Come and enjoy our wholesome food at not-for-profit prices, in the cosy and cheerful interior of the cafe. Outdoor seating is also available.';
	tabPages.push(aboutPage);
	const menuPage = document.createElement("div");
	menuPage.id= "menu";
	menuPage.classList.add("tab-page");
	menuPage.classList.add("hidden");
	menuPage.innerHTML = '<h2>Breakfasts</h2><h3>Served All Day</h5>            <ul class="foodstuff"><li>Beans on toast (v).................£2.00</li><li>Sausage cob (v)......................£2.50</li><li>Tomatoes on toast (v)..............£5.00</li><li>Mushrooms on toast (v).............£5.00</li><li>Scrambled egg on toast.............£4.00</li><li>Omelette and toast....................£4.00</li><li>"Tofegg" and mushroom cob..........£4.00</li><li>Porridge (v)...............................£4.00</li><li>Scrambled tofu on toast (v)........£5.00</li></ul><span class="divider"></span><p>Add an extra: sausage/egg/tomato - £1 each. All other breakfast items just 50p each.</p><h2>Salads, Sides and Soups</h2><ul class="foodstuff"><li>Wedges (v)..................................£2.00</li><li>Side salad (v)............................£3.00</li><li>Soups of the day (v)...................£3.50</li><li>House salad (v)............................£5.50</li>Mezze (v)..................................£6.50</li></ul><h2>Sandwiches</h2><h3>Served on Bread with a Salad Garnish</h5><ul class="foodstuff"><li>Cheese and chutney (v).................£3.50</li><li>Hummus and chutney (v).................£3.50</li><li>Tofu and chutney (v)...................£4.50</li></ul>';
	tabPages.push(menuPage);
	const contactPage = document.createElement("div");
	contactPage.id = "contact";
	contactPage.classList.add("tab-page");
	contactPage.classList.add("hidden");
    contactPage.innerHTML = '<h2 id="details-header">Contact Details</h2><ul><li><b class="rubric">Address</b>:<pre>18 Lenton Boulevard Nottingham NG7 2ES</pre></li><li><div><p><b class="rubric">Email</b>: wearecrocus@hotmail.com</p><p><b class="rubric">Tel</b>: 0115 950 5080</p></div></li></ul><span class="divider"></span><h2 id="booking-header" class="more-margin">Make a Booking</h2><form id="booking-details" action="#" autocomplete="off"><div class="container"><label for="customer">Name:</label><br><input class="input" id="customer" required name="customer" value=""></div><div class="container"><label for="date">Choose a date:</label><br><input class="input" type="date" id="date" name="date" value="" required></div><div class="container"><label for="guests">Size of party:</label><br><input class="input" type="number" name="guest-count" value="" id="guests" max="10" min="1" required></div><div class="container"><label for="tel">Contact number:</label><br><input class="input" name="tel" value="" id="tel" required maxlength="11"></div><br><label for="feedback">Any feedback, comments or requests:</label><textarea class="input" name="feedback" cols="50" rows="6" maxlength="300"></textarea><!--<input type="submit" value="Submit" id="submit">--></form>';
    contactPage.appendChild(submit);
    tabPages.push(contactPage);
    contentDiv.appendChild(aboutPage);
	contentDiv.appendChild(menuPage);
    contentDiv.appendChild(contactPage);
	let dividers = document.getElementsByClassName("divider");
    dividers2.push(dividers[0]);
    dividers2.push(dividers[1]);
    dividers2.push(dividers[2]);
   	const bottomBar = document.createElement("div");
	bottomBar.id = "bottom-bar";
	contentDiv.appendChild(bottomBar);		
}

const textBox = contentDiv.getElementsByTagName("textarea");
//const submit = contentDiv.getElementsByClassName("input")[5];
const form = contentDiv.getElementsByTagName("form");
//const contactPage = contentDiv.getElementByClassName("tab-page")[2];
console.log({textBox});
console.log({submit});
console.log({form});
//console.log({contactPage});
export {loadElements, crocuses, tabPages, tabs, dividers2, textBox, submit, form};