export default function generatePageTwo() {
	// This deactivates the tab from before
	let previousActiveTab = document.querySelector('.active');
	previousActiveTab.classList.remove('active');

	// This activates the new tab
	let currentActiveTab = document.querySelector('#about-us-tab');
	currentActiveTab.classList.add('active');

	// This removes all content from the previous page:
	let allContent = document.querySelectorAll('.content');
	allContent.forEach((item) => {
		item.remove();
	});

	//This should clone and append the 2nd page:
	const templatePage2 = document.getElementById('page2');
	const clonePage2 = templatePage2.content.cloneNode(true);
	const mainContainer = document.getElementById('main-container');
	mainContainer.appendChild(clonePage2);

	window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}
