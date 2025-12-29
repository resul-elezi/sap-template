'use strict';

const hamburgerBtn = document.querySelector('.hs-collapse-toggle');
const menu = document.querySelector('.hs-collapse');
const links = document.querySelectorAll('#links-div a');

links.forEach(link =>
    link.addEventListener('click', () => {
        if (hamburgerBtn.getAttribute('aria-expanded') === 'true') {
            hamburgerBtn.click();
        }
    })
);


document.documentElement.addEventListener('click', (e) => {
    const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    const clickedInsideMenu = menu.contains(e.target);
    const clickedOnButton = e.target === hamburgerBtn;

    if (isOpen && !clickedInsideMenu && !clickedOnButton) {
        hamburgerBtn.click();
    }
});