window.addEventListener('scroll', function() {
    let header = document.getElementById('header');

    if (this.window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});