window.addEventListener('scroll', function() {
    let header = document.getElementById('header');

    if (this.window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// d-day
function diffDay() {
    const startDay = new Date("2024-09-31");
    const today = new Date();

    const dayCount = startDay - today;

    const day = Math.floor(dayCount / (1000 * 60 * 60 * 24));
    const hour = Math.floor((dayCount / (1000 * 60 * 60)) % 24);
    const min = Math.floor((dayCount / (1000 * 60)) % 60);
    const sec = Math.floor((dayCount / 1000) % 60);

    document.querySelector('.days .value').innerText = day;
    document.querySelector('.hours .value').innerHTML = hour;
    document.querySelector('.mins .value').innerHTML = min;
    document.querySelector('.secs .value').innerHTML = sec;
    // $(".day .value").text(day);
    // $(".hour .value").text(hour);
    // $(".minute .value").text(min);
    // $(".second .value").text(sec);
}
diffDay();
setInterval(diffDay, 1000);