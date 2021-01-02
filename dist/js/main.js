const navigation__links = document.querySelector('.navigation__links');
const navigation__openMenu = document.querySelector('.navigation__openMenu');
const navigation__closeMenu = document.querySelector('.navigation__closeMenu');

navigation__openMenu.addEventListener('click', show);
navigation__closeMenu.addEventListener('click', close);

function show() {
    navigation__links.style.display='flex';
    navigation__links.style.top='0';
}

function close() {
    navigation__links.style.top='-100%';
}