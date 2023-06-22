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

    const hamButton = document.getElementById('hamburger-button');
    const hamMenu = document.querySelector('.hamburger-nav');
    hamMenu.style.display = 'none';
    hamButton.addEventListener('click', () => {
        if (hamMenu.style.display === 'none') {
            hamMenu.style.display = 'block';
            hamButton.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/close-icon-135858264.jpg')";
        } else {
            hamMenu.style.display = 'none';
            hamButton.style.backgroundImage = "url('https://cdn.icon-icons.com/icons2/1660/PNG/512/3844473-hamburger-menu-more-navigation_110336.png')";
        }
    });
}
