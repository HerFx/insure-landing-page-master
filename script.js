const burger = document.getElementById('hamburger');
const nav = document.getElementById('nav-ul');
const div = document.createElement('div');
const conteiner = document.querySelector('conteiner');
div.classList.add('nav-mobile-img');

burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    burger.classList.toggle('exit');
    nav.appendChild(div);
    document.body.classList.toggle('stop-scrolling');
});