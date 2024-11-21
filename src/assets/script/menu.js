document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('nav ul.mobile');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
        });
    } else {
        console.error("Hamburger menu or mobile menu not found!");
    }
});
