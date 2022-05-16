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
        document.body.style.paddingRight = 0;
        setTimeout(function() {
            iconMenu.style.pointerEvents = "auto";
        }, 300);
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            document.body.classList.toggle('_lock');
        } else {
            const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
            document.body.style.paddingRight = lockPaddingValue;
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


// Слайдер картинок главная

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



//  ПОП-АП ОКНА ДЛЯ КОМНАТ


const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 50;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            if (popupLink.classList.contains('first')) {
                const curentPopup = document.querySelector('.popup__first');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('second')) {
                const curentPopup = document.querySelector('.popup__second');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('third')) {
                const curentPopup = document.querySelector('.popup__third');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('four')) {
                const curentPopup = document.querySelector('.popup__four');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('five')) {
                const curentPopup = document.querySelector('.popup__five');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('six')) {
                const curentPopup = document.querySelector('.popup__six');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('seven')) {
                const curentPopup = document.querySelector('.popup__seven');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('eight')) {
                const curentPopup = document.querySelector('.popup__eight');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('nine')) {
                const curentPopup = document.querySelector('.popup__nine');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('ten')) {
                const curentPopup = document.querySelector('.popup__ten');
                popupOpen(curentPopup);
            }
            e.preventDefault();

            let popupTESTs = document.querySelectorAll('.popup');
            for (let i = 0; i < popupTESTs.length; i++) {
                let popupTEST = popupTESTs[i];
                if (popupTEST.classList.contains('open')) {
                    // Слайдер картинок попап
                    let allImgSliderPopup = popupTEST.querySelectorAll('.popup__slider-img-item');
                    let popupMainImg = popupTEST.querySelector('.popup__main-img');
                    if (allImgSliderPopup) {
                        for (let i = 0; i < allImgSliderPopup.length; i++) {
                            let imgSliderPopup = allImgSliderPopup[i];
                            imgSliderPopup.addEventListener("click", function(e) {
                                for (let i = 0; i < allImgSliderPopup.length; i++) {
                                    if (allImgSliderPopup[i].classList.contains('_active')) {
                                        allImgSliderPopup[i].classList.remove('_active');
                                    }
                                }
                                popupMainImg.src = allImgSliderPopup[i].src;
                                allImgSliderPopup[i].classList.add('_active');
                            });
                        }
                    }
                } else {}
            }

        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function(e) {
            body.classList.remove('__lock');
            body.style.paddingRight = '0px';
            if (e.target.closest('.popup')) {
                const curentPopup = e.target.closest('.popup');
                curentPopup.classList.remove('open');
            }
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function(e) {
            if (!e.target.closest('.popup__content')) {
                curentPopup.classList.remove('open');
                body.classList.remove('__lock');
                body.style.paddingRight = '0px';

            }
        });
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    document.body.style.paddingRight = lockPaddingValue;
    document.body.classList.toggle('__lock');
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}


//  КНОПКА SHOWMORE


let boxShowMores = document.querySelectorAll('.cards__hide-infirst');
let btnShowMore = document.querySelector('.four-section__showmore-button');
let showMoreButton = document.querySelector('.show__more');
let hideMoreButton = document.querySelector('.hide__more');
let showMoreButtonAll = document.querySelector('.four-section__showmore-button');


if (boxShowMores) {

    for (let j = 0; j < boxShowMores.length; j++) {
        boxShowMores[j].classList.add('card__hidden')
    }
}

btnShowMore.addEventListener("click", function(e) {

    for (let j = 0; j < boxShowMores.length; j++) {
        boxShowMores[j].classList.toggle('card__hidden')

    }

});




showMoreButtonAll.addEventListener("click", function(e) {
    hideMoreButton.classList.toggle('_active');
    showMoreButton.classList.toggle('_active');
    e.preventDefault();
});



// ТЕСТ

const cardLocate = document.querySelectorAll('.test__card');
let answer = document.querySelector('.right_answer-question');
let testButton = document.querySelector('.test__button');
const firstCardTest = document.querySelectorAll('.first__card-test');
const secondCardTest = document.querySelectorAll('.second__card-test');
const thirdCardTest = document.querySelectorAll('.third__card-test');
const fourCardTest = document.querySelectorAll('.four__card-test');
const fiveCardTest = document.querySelectorAll('.five__card-test');
let locateRussia = document.querySelector('.locate_russia');
let locateEurope = document.querySelector('.locate_europe');
let finalCardTest = document.querySelector('.test__final');
let testButtonText = testButton.textContent;

cardLocate.forEach(item => {
    item.addEventListener('click', (e) => {
        cardLocate.forEach(el => {
            el.classList.remove('active');
        });
        item.classList.add('active');
        e.preventDefault();
    })

})



testButton.addEventListener("click", function(e) {
    let answer = document.querySelector('.right_answer-question');
    let answerContent = Number(answer.textContent);
    if (answerContent == '0') {
        for (let i = 0; i < firstCardTest.length; i++) {
            firstCardTest[i].classList.remove('card__active-card');
            secondCardTest[i].classList.add('card__active-card');
            answer.innerHTML = 1;

        }
    } else if (answerContent == '1') {
        for (let i = 0; i < secondCardTest.length; i++) {
            secondCardTest[i].classList.remove('card__active-card');
            thirdCardTest[i].classList.add('card__active-card');
            answer.innerHTML = 2;
        }
    } else if (answerContent == '2') {
        for (let i = 0; i < thirdCardTest.length; i++) {
            thirdCardTest[i].classList.remove('card__active-card');
            fourCardTest[i].classList.add('card__active-card');
            answer.innerHTML = 3;
        }
    } else if (answerContent == '3') {
        for (let i = 0; i < fourCardTest.length; i++) {
            fourCardTest[i].classList.remove('card__active-card');
            fiveCardTest[i].classList.add('card__active-card');
            answer.innerHTML = 4;
        }
    } else if (answerContent == '4') {
        for (let i = 0; i < fiveCardTest.length; i++) {
            testButton.innerHTML = "Завершить тест";
            answer.innerHTML = 5;
        }
    } else if (answerContent == '5') {
        alert('Поздравляем, вы прошли тест!');

    }
    e.preventDefault();
});