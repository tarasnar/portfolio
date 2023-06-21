window.onload = () => {
    const windowBtn = document.querySelector('.open-window');
    const contentWndw = document.querySelector('.window');
    contentWndw.style.display = 'none';
    windowBtn.addEventListener('click', () => {
        if (contentWndw.style.display === 'none') {
            contentWndw.style.display = 'block';
        } else {
            contentWndw.style.display = 'none';
        }
    });

    const hamBtn = document.getElementById('hamburger-button');
    const hamMenu = document.getElementById('mobile-nav');
    hamMenu.style.display = 'none';
    hamBtn.addEventListener('click', () => {
        if (hamMenu.style.display === 'none') {
            hamMenu.style.display = 'block';
            hamBtn.style.backgroundImage = "url('closemenu.png')";
        } else {
            hamMenu.style.display = 'none';
            hamBtn.style.backgroundImage = "url('hammenu.png')";
        }
        ;
    });
}
