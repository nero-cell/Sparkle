'use strict';

let burger = document.querySelector('.header__burger');
let headerLinks = document.querySelector('.header__links');

burger.onclick = function() {
    headerLinks.classList.toggle('active');
    burger.classList.toggle('active');
};

document.addEventListener('click', menuLock);

function menuLock(event) {
    if (!event.target.closest('.header__menu') && 
        headerLinks.getBoundingClientRect().x < document.body.offsetWidth) {
        headerLinks.classList.remove('active');
        burger.classList.remove('active');
        burger.classList.add('full');
        setTimeout(removeFull, 700);
    }
}

function removeFull() {
    burger.classList.remove('full');
}