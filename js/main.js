"use strict"
// Меню бургер 

const iconMenu = document.querySelector('.menu__icon');
const MenuBody = document.querySelector('.menu__body');
const body = document.querySelector('body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('_active');
        MenuBody.classList.toggle('_active');
        iconMenu.style.pointerEvents = "none";
        setTimeout(function() {
            iconMenu.style.pointerEvents = "auto";
        }, 300);
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.body.classList.toggle('_lock');
        } else {
            document.body.classList.toggle('__lock');
        }
    });
}


//Прокрутка при клике 

const menuLinks = document.querySelectorAll('.all__link[data-goto]');
let pageHeight = window.innerHeight;
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                document.body.classList.remove('__lock');
                iconMenu.classList.remove('_active');
                MenuBody.classList.remove('_active');
            }


            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


// Активация карточки грид при наведении 

const gridCardImgs = document.querySelectorAll('.third-section__grid-overlay');
const gridCardContainers = document.querySelectorAll('.third-section__servis-container');
const gridCards = document.querySelectorAll('.third-section__grid-item');

if (gridCards) {
    for (let i = 0; i < gridCards.length; i++) {
        let gridCard = gridCards[i];
        gridCard.addEventListener("mouseover", function(e) {
            gridCardImgs[i].classList.add('_overlay-active');
            gridCardContainers[i].classList.add('_overlay-active');
            e.preventDefault();
        });

        gridCard.addEventListener("mouseout", function(e) {
            gridCardImgs[i].classList.remove('_overlay-active');
            gridCardContainers[i].classList.remove('_overlay-active');
        });

    }
}

const cardLocate = document.querySelectorAll('.test__card');
let answer = document.querySelector('.right_answer-question');
let answerContent = Number(answer.textContent);

cardLocate.forEach(item => {
    item.addEventListener('click', (e) => {
        cardLocate.forEach(el => {
            answer.innerHTML = 0;
            el.classList.remove('active');
        });
        item.classList.add('active');
        answer.innerHTML = 1;
        e.preventDefault();
    })

})


// Слайдер картинок

let allImgSlider = document.querySelectorAll('.five-section__slider-img-item');
let mainImg = document.querySelector('.five-section__main-img');

if (allImgSlider) {
    for (let i = 0; i < allImgSlider.length; i++) {
        let imgSlider = allImgSlider[i];

        imgSlider.addEventListener("click", function(e) {

            for (let i = 0; i < allImgSlider.length; i++) {
                if (allImgSlider[i].classList.contains('_active')) {
                    allImgSlider[i].classList.remove('_active');
                }
            }
            mainImg.src = allImgSlider[i].src;
            allImgSlider[i].classList.add('_active');

        });
    }
}

// Фильтрация апартаментов

const appCards = document.querySelectorAll('.appartment-block__apps-card');
const appButtons = document.querySelectorAll('.appartment-block__item');

appButtons.forEach(item => {
    item.addEventListener('click', (e) => {
        appButtons.forEach(el => { el.classList.remove('_active'); });
        item.classList.add('_active')
    })
})

document.querySelector('.appartment-block__menu').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    let filterClass = event.target.dataset['f'];


    appCards.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});


// Кнопка showmore

let showMoreButton = document.querySelector('.show__more');
let hideMoreButton = document.querySelector('.hide__more');
let showMoreButtonAll = document.querySelector('.four-section__showmore-button');

showMoreButtonAll.addEventListener("click", function(e) {
    hideMoreButton.classList.toggle('_active');
    showMoreButton.classList.toggle('_active');
    e.preventDefault();
});


//анимации при скроле
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;

            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_anim-active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}