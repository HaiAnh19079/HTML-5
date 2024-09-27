const navLinkItems = document.querySelectorAll('.nav-link');

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

//nav
navLinkItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('active')) {
            navLinkItems.forEach((navLink) => {
                navLink.classList.remove('active');
            })
            item.classList.add('active')
        }
    })

})

// feedback
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        if (i === 0) dot.classList.add('active')
        feedbackDots.appendChild(dot)

        dot.addEventListener('click', function () {
            goToSlide(i); // Khi click vào dot, chuyển đến slide tương ứng
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