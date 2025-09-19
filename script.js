// Like and comment functionality for upcoming events
document.addEventListener('DOMContentLoaded', function() {
    // Like button logic
    document.querySelectorAll('.upcoming-events .like-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            let countSpan = btn.querySelector('.like-count');
            let liked = btn.classList.toggle('liked');
            let count = parseInt(countSpan.textContent, 10);
            if (liked) {
                count++;
                btn.style.color = 'red';
            } else {
                count = Math.max(0, count - 1);
                btn.style.color = '';
            }
            countSpan.textContent = count;
        });
    });

    // Comment button toggle
    document.querySelectorAll('.upcoming-events .comment-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            let box = btn.closest('.box');
            let section = box.querySelector('.comment-section');
            section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
        });
    });

    // Comment form logic
    document.querySelectorAll('.upcoming-events .comment-form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let input = form.querySelector('.comment-input');
            let comment = input.value.trim();
            if (comment) {
                let list = form.closest('.comment-section').querySelector('.comments-list');
                let div = document.createElement('div');
                div.className = 'comment-item';
                div.textContent = comment;
                list.appendChild(div);
                input.value = '';
            }
        });
    });
});
let menuBars = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menuBars.onclick = () => {
    menuBars.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () => {
    themeToggler.classList.toggle('active');
}

window.onscroll = () => {
    menuBars.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
    }
});

// Initialize home slider
var homeSwiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// Initialize review slider
var reviewSwiper = new Swiper(".review-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
