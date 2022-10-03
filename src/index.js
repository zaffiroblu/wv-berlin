import '../sass/main.scss';
import '/src/assets/images/vw-berlin-logo-big.png';
import '/src/assets/images/wv-logo.png';
import '/src/assets/images/florian-wehde-1uWanmgkd5g-unsplash.jpg';
import '/src/assets/images/ian-schneider-PAykYb-8Er8-unsplash.jpg';
import '/src/assets/images/nathan-dumlao-6VhPY27jdps-unsplash.jpg';
import '/src/assets/images/bonnie-kittle-9-nse_cRvkE-unsplash.jpg';
import '/src/assets/images/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg';

import loadPageOne from './loadPage1';
onload = loadPageOne();

import generatePageOne from './pages/page1';
import generatePageTwo from './pages/page2';
import generatePageThree from './pages/page3';
import generatePageFour from './pages/page4';
window.goToPageFour = generatePageFour;

const startSeite = document.getElementById('home-tab');
const aboutUs = document.getElementById('about-us-tab');
const kontakt = document.getElementById('contact-tab');
// const impressumBtn1 = document.getElementById('impressum-btn-1');
// const allImpressumBtns = document.querySelectorAll('.impressum-btn');

startSeite.addEventListener('click', generatePageOne);

aboutUs.addEventListener('click', generatePageTwo);

kontakt.addEventListener('click', generatePageThree);
