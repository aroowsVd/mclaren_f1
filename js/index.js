// nav down
window.addEventListener('scroll', function() {
    let header = document.getElementById('header');

    if (this.window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {

    // d-day
    function diffDay() {
        const startDay = new Date("2024-09-31");
        const today = new Date();
    
        const dayCount = startDay - today;
    
        const day = Math.floor(dayCount / (1000 * 60 * 60 * 24));
        const hour = Math.floor((dayCount / (1000 * 60 * 60)) % 24);
        const min = Math.floor((dayCount / (1000 * 60)) % 60);
        const sec = Math.floor((dayCount / 1000) % 60);
    
        const dDay = document.querySelectorAll('.days .value');
        const dHour = document.querySelectorAll('.hours .value');
        const dMin = document.querySelectorAll('.mins .value');
        const dSec = document.querySelectorAll('.secs .value');
        
        dDay.forEach(dVal => dVal.innerText = day);
        dHour.forEach(hVal => hVal.innerText = hour);
        dMin.forEach(mVal => mVal.innerText = min);
        dSec.forEach(sVal => sVal.innerText = sec);
        // document.querySelector('.days .value').innerText = day;
        // document.querySelector('.hours .value').innerHTML = hour;
        // document.querySelector('.mins .value').innerHTML = min;
        // document.querySelector('.secs .value').innerHTML = sec;
    }
    diffDay();
    setInterval(diffDay, 1000);

    const tabBtn = document.querySelectorAll('.btn.btn_tab');
    const tabContent = document.querySelectorAll('.machine_desc');
    tabBtn.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            tabContent.forEach((content) => {
                content.classList.remove('selected');
            });

            tabBtn.forEach((content) => {
                content.classList.remove('selected');
            });

            tabBtn[index].classList.add('selected');
            tabContent[index].classList.add('selected');
        })
    });

    const modalClose = () => {
        const modal = document.querySelector('.modal');
        const modalCloseBtn = document.querySelector('.modal > button');

        modalCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
        });
    };
    modalClose();

    const modalOpen = () => {
        const modal = document.querySelector('.modal');
        const modalOpenBtn = document.querySelector('.modal_open');

        modalOpenBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });
    };
    modalOpen();
});