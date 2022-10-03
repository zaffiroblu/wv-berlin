export default function generatePageThree() {
	// This deactivates the tab from before
	let previousActiveTab = document.querySelector('.active');
	previousActiveTab.classList.remove('active');
	console.log(previousActiveTab);

	// This activates the new tab
	let currentActiveTab = document.querySelector('#contact-tab');
	currentActiveTab.classList.add('active');
	console.log(currentActiveTab);

	// This removes all content from the previous page:
	let allContent = document.querySelectorAll('.content');
	allContent.forEach((item) => {
		item.remove();
	});

	//This should clone and append the 3rd page
	const templatePage3 = document.getElementById('page3');
	const clonePage3 = templatePage3.content.cloneNode(true);
	const mainContainer = document.getElementById('main-container');
	mainContainer.appendChild(clonePage3);

	window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}
