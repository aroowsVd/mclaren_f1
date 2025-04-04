document.addEventListener('DOMContentLoaded', function() {
    // window scroll events
    window.addEventListener('scroll', function() {
        // nav down
        let header = document.getElementById('header');

        if (this.window.scrollY > 0) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }


        // top & down
        const section02Height = document.getElementById('ad_01').clientHeight;
        const section03Height = document.getElementById('driver').clientHeight;

        if (window.scrollY >= section02Height + section03Height) {
            document.querySelector(".global_btn").style.opacity = "1";
            // document.querySelector(".go_down").style.display = "block";
        } else {
            document.querySelector(".global_btn").style.opacity = "0";
            // document.querySelector(".go_down").style.display = "none";
        }

        // '위로 이동' 버튼 클릭 이벤트
        document.querySelector(".go_top").addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // '아래로 이동' 버튼 클릭 이벤트
        document.querySelector(".go_down").addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        });
    });

    // d-day
    function diffDay() {
        const startDay = new Date("2025-05-31");
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

    /* driver section03 */
    /*
        알고리즘
        1. slide toggle 클릭
        2. index번호의 섹션을 fiter blur 10px 즉시 
           즉시 slide toggle animaition-state-ment = running
            toggle width가 100% 를 500ms동안 진행
        3. 500ms 이후 -> foreach로 selected class해체, 다음 색션에 클래스 selected 추가
    */
    // const visualSlide = () => {
    //     const driverToggleBtn = document.querySelectorAll('.slide_toggle');
    //     const driverCon = document.querySelectorAll('.driver_con');
    //     const driverSection = document.querySelector('.section_03');
    
    //     driverToggleBtn.forEach((item, index) => {
    //         item.addEventListener('click', (e) => {
    //             e.preventDefault();
    
    //             // 애니메이션을 실행 상태로 설정
    //             item.style.animationPlayState = 'running';
    
    //             // 애니메이션 종료 시점 이벤트 핸들러 등록
    //             item.addEventListener('animationend', () => {
    //                 // 모든 클래스 초기화
    //                 driverCon.forEach((content) => {
    //                     content.classList.remove('selected');
    //                 });
    
    //                 driverToggleBtn.forEach((content) => {
    //                     content.classList.remove('selected');
    //                 });
    
    //                 driverSection.classList.remove('piastri');
    
    //                 // 선택 상태와 섹션 배경을 토글
    //                 if (index === 0) {
    //                     driverCon[1].classList.add('selected');
    //                     driverToggleBtn[1].classList.add('selected');
    //                     driverSection.classList.add('piastri');
    //                 } else {
    //                     driverCon[0].classList.add('selected');
    //                     driverToggleBtn[0].classList.add('selected');
    //                 }
    
    //                 // 애니메이션 상태를 "paused"로 설정하여 다음 클릭에 영향을 주지 않도록 함
    //                 item.style.animationPlayState = 'paused';
    //             }, { once: true }); // 클릭마다 이벤트 핸들러가 한 번만 실행되도록 설정
    //         });
    //     });
    // };
    
    // visualSlide();

    const visualSlide = () => {
        const driverToggleBtn = document.querySelectorAll('.slide_toggle');
        const driverCon = document.querySelectorAll('.driver_con');
        const driverSection = document.querySelector('.section_03');
        const norris = document.querySelector('.norris');
        const piastri = document.querySelector('.piastri');
    
        driverToggleBtn.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
    
                // 애니메이션을 실행 상태로 설정
                item.style.animationPlayState = 'running';
    
                // 애니메이션 종료 시점 이벤트 핸들러 등록
                // 모든 클래스 초기화

                setTimeout(() => {
                    driverCon.forEach((content) => {
                        content.classList.remove('selected');
                    });
    
                    driverToggleBtn.forEach((content) => {
                        content.classList.remove('selected');
                    });
    
                    driverSection.classList.remove('piastri');
    
                    // 선택 상태와 섹션 배경을 토글
                    if (index === 0) {
                        driverCon[1].classList.add('selected');
                        driverToggleBtn[1].classList.add('selected');
                        driverSection.classList.add('piastri');
                        norris.style.display = 'none';
                        piastri.style.display = 'block'
                    } else {
                        driverCon[0].classList.add('selected');
                        driverToggleBtn[0].classList.add('selected');
                        norris.style.display = 'block';
                        piastri.style.display = 'none'
                    }
    
                    // 애니메이션 상태를 "paused"로 설정하여 다음 클릭에 영향을 주지 않도록 함
                    item.style.animationPlayState = 'paused';
                }, 600);
            });
        });
    };
    
    visualSlide();

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
        const modalCloseBtn = document.querySelector('.modal button');

        modal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('active');
        });
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

    const newsHover = () => {
        const imgBoxs = document.querySelectorAll('.img_box');
        const newDescs = document.querySelectorAll('.news_desc');

        newDescs.forEach((item, index) => {
            item.addEventListener('mouseover', () => {
                newDescs.forEach((content) => {
                    content.classList.remove('active');
                });

                imgBoxs.forEach((content) => {
                    content.classList.remove('active');
                });
                imgBoxs[index].classList.add('active');
                newDescs[index].classList.add('active');
            });
        });
    };
    newsHover();
});