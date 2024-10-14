const navLinkItems = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo-img')
//nav


// Hàm để đặt 'active' cho link 'Home'
function setActiveLink() {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    navLinkItems.forEach((item) => {
        console.log(item.href)
        // Kiểm tra URL hiện tại có khớp với href của thẻ 'nav-link'
        if (item.href === currentUrl || (item.id === 'home' && currentUrl.includes('#home'))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Gọi hàm để kiểm tra khi tải trang
window.addEventListener('load', setActiveLink);

if (logo) {
    logo.addEventListener('click', () => {
        navLinkItems.forEach((navLink) => {
            navLink.classList.remove('active');
        });
        document.querySelector('#home').classList.add('active');
    });
}
navLinkItems.forEach((item, i) => {


    item.addEventListener('click', () => {

        if (!item.classList.contains('active')) {
            navLinkItems.forEach((navLink) => {
                navLink.classList.remove('active');
            })
            item.classList.add('active')
        }
    })

})

const heroForm = document.querySelectorAll('.hero-form');
const emailInput = document.querySelector('.email-input');
const errorMsg = document.getElementById('errorMsg');

heroForm.addEventListener('submit', (e) => {
    if (emailInput.value.includes(' ')) {
        e.preventDefault();
    }
})

emailInput.addEventListener('input', () => {
    emailInput.value = emailInput.value.replace(/\s/g, '');
});

const feedbackList = document.querySelector('.feedback-list')
const feedbackItems = document.querySelectorAll('.feedback-item')
const feedbackDots = document.querySelector('.feedback-dots')
const dots = document.querySelectorAll('.dot')
const totalItems = document.querySelectorAll('.feedback-item').length;
let itemsPerSlide = 2
let gap = 30
const totalSlides = Math.ceil(totalItems / itemsPerSlide);
console.log(totalSlides)
let currentIndex = 0;


// feedback
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        if (i === 0) dot.classList.add('active')
        feedbackDots.appendChild(dot)

        dot.addEventListener('click', function () {
            goToSlide(i);
        });
    }

}

function goToSlide(index) {
    currentIndex = index
    let offset = -currentIndex * 100;
    feedbackList.style.transform = `translateX(calc(${offset}% - ${currentIndex}*${gap}px))`

    activeDot(index)
}

function activeDot(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

createDots()