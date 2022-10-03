export default function generatePageOne() {
	// This deactivates the tab from before
	let previousActiveTab = document.querySelector('.active');
	previousActiveTab.classList.remove('active');
	console.log(previousActiveTab);

	// This activates the new tab
	let currentActiveTab = document.querySelector('#home-tab');
	currentActiveTab.classList.add('active');
	console.log(currentActiveTab);

	// This removes all content from the previous page:
	let allContent = document.querySelectorAll('.content');
	allContent.forEach((item) => {
		item.remove();
	});

	//This should clone and append the 1st page:
	const templatePage1 = document.getElementById('page1');
	const clonePage1 = templatePage1.content.cloneNode(true);
	const mainContainer = document.getElementById('main-container');
	mainContainer.appendChild(clonePage1);

	window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}
