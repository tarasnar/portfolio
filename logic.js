window.onload = () => {
    const windowButton = document.querySelector('.open-window');
    const contentWindow = document.querySelector('.window');
    contentWindow.style.display = 'none';
    windowButton.addEventListener('click', () => {
        if (contentWindow.style.display === 'none') {
            contentWindow.style.display = 'block';
        } else {
            contentWindow.style.display = 'none';
        }
    });

    const hamBtn = document.getElementById('hamburger-button');
    const hamMenu = document.getElementById('mobile-nav');
    hamMenu.style.display = 'none';
    hamBtn.addEventListener('click', () => {
        if (hamMenu.style.display === 'none') {
            hamMenu.style.display = 'block';
        } else {
            hamMenu.style.display = 'none';
        }
    });
}
