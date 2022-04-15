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

//Засчитывание ответов на впоросы

const locateR = document.querySelector('.locate_russia');
const locateE = document.querySelector('.locate_europe');

locateR.addEventListener("click", function(e) {
    let answer = document.querySelector('.right_answer-question');
    let answerContent = Number(answer.textContent);
    if (answerContent <= 0) {
        answer.innerHTML = 1;
    } else {
        answer.innerHTML = 0;
    }
    e.preventDefault();
});

locateE.addEventListener("click", function(e) {
    let answer = document.querySelector('.right_answer-question');
    let answerContent = Number(answer.textContent);
    if (answerContent <= 0) {
        answer.innerHTML = 1;
    } else {
        answer.innerHTML = 0;
    }
    e.preventDefault();
});


// Фильтрация апартаментов

const oao = document.querySelector('.cost-apps').textContent;

const oaoa = Number(oao.replace(/\s/g, ''));

if (oaoa >= 100000000) {
    console.log('Больше');
} else {
    console.log('Меньше');
}

console.log(oaoa);

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