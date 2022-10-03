export default function loadPageOne() {
	//This should clone and append the 1st page
	let templatePage1Load = document.getElementById('page1');
	let clonePage1Load = templatePage1Load.content.cloneNode(true);
	let mainContainer = document.getElementById('main-container');
	mainContainer.appendChild(clonePage1Load);

	window.scrollTo(0, 0);
}
