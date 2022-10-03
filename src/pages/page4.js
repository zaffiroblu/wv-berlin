export default function generatePageFour() {
	// This deactivates the tab from before
	let previousActiveTab = document.querySelector('.active');
	previousActiveTab.classList.remove('active');
	console.log(previousActiveTab);

	// This removes all content from the previous page:
	let allContent = document.querySelectorAll('.content');
	allContent.forEach((item) => {
		item.remove();
	});

	// This removes all HR elements
	let hrElements = document.querySelectorAll('.hr-element');
	hrElements.forEach((item) => {
		item.remove();
	});

	//This should clone and append the 4th page
	const templatePage4 = document.getElementById('page4');
	const clonePage4 = templatePage4.content.cloneNode(true);
	const mainContainer = document.getElementById('main-container');
	mainContainer.appendChild(clonePage4);

	window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}
