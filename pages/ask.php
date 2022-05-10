<?php 
    session_start();
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link rel="icon" href="../img/favicon.ico" type="image/x-icon">
    <meta name="description" content="Актуальные объявления о продаже квартир в городе Москва. Продажа квартир в городе Москва недорого. Лучшие квартиры в башне - Федерация, уютные и комфортные условия для проживания, приятные цены и люксовые номера." />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/media.css">
    <title>Blitz Estate ~ Service Page</title>
</head>

<body>
    <div class="wrapper">



        <!--------------------- Первая секция --------------------->
        <section class="first-section first-section__ask-page">
            <div class="container">

                <!--- шапка --->
                <header class="first-section__header header">

                    <div class="header__menu menu">
                        <div class="menu__icon">
                            <span></span>
                        </div>

                        <div class="menu__text">Меню</div>

                        <div class="menu__body">
                            <ul class="menu__list">
                                <li class="menu__item"><a href="../index.html" class="menu__link all__link" data-goto="">Главная</a></li>
                                <li class="menu__item"><a href="../index.html" class="menu__link all__link" data-goto="">Апартаменты</a></li>
                                <li class="menu__item"><a href="../index.html" class="menu__link all__link" data-goto="">Наши услуги</a></li>
                                <li class="menu__item"><a href="../index.html" class="menu__link all__link" data-goto="">Агентство</a></li>
                                <li class="menu__item"><a href="../index.html" class="menu__link all__link" data-goto="">О нас</a></li>
                                <li class="menu__item"><a href="../index.html" class="menu__link all__link" data-goto="">Тест</a></li>
                            </ul>
                        </div>
                        <!-- menu__body -->

                    </div>
                    <!-- header__menu menu -->

                    <div class="header__center-right">
                        <div class="header__center">
                            <a href="../index.html"><img src="../img/logo_dark.svg" alt="" class="header__logo"></a>
                            <div class="header__center-text">Продажа недвижимости в Москва-Сити</div>
                        </div>

                        <div class="header__right">
                            <a href="tel: +74951991999" class="header__phone ">+7 (495) 199-19-99</a>
                            <a href="tel: +74951991999" class="header__button ">Заказать звонок</a>
                        </div>
                    </div>
                    <!-- header__center-right -->
                </header>

                <!--- Раздел под шапкой (превью) --->
                <div class="first-section__preview preview _anim-active">

                    <div class="preview__text-block preview__text-block__ask-page">
                        <h1 class="preview__title" style="font-size: 42px; margin-bottom: 0px;">Форма обратной связи</h1>
                        <div class="preview__subtitle">Здесь вы можете задать, любой интересующий вас вопрос или предложение</div>
                    </div>

                    <form action="../php/mail_send.php" method="post" class="ask-page">

                        <div class="ask-page__top">
                            <div class="ask-page__line" style="margin-right: 30px;">
                                <label for="" class="ask-page__text">ФИО</label>
                                <input type="text" class="ask-page__input" placeholder="Анатолий Венсанский Александрович" required name="full_name">
                            </div>
                            <div class="ask-page__line">
                                <label for="" class="ask-page__text">Номер телефона</label>
                                <input type="number" class="ask-page__input" placeholder="+ 7 (923) 234-22-33" required name="phone_number">
                            </div>
                        </div>
                        <div class="ask-page__line">
                            <label for="" class="ask-page__text">Почтовый адрес</label>
                            <input type="text" class="ask-page__input" placeholder="justpri@mail.ru " required name="email">
                        </div>
                        <div class="ask-page__line">
                            <label for="" class="ask-page__text">Ваше сообщение</label>
                            <textarea type="text" class="ask-page__input ask-page__textarea" placeholder="Ваш текст" required name="user_text"></textarea>
                        </div>

                        <button type="submit" class="ask-page__button">Отправить</button>
                        <p class="ask-page__signup" style="color:green; font-weight: bold; margin-top: 20px;">
                                    <?php 
                                        echo $_SESSION['mail_message'];
                                        unset ($_SESSION['mail_message']);
                                    ?>
                                </p>

                    </form>

                </div>

            </div>
            <!-- container -->
        </section>

        <!--------------------- Восьмая секция (подвал)--------------------->

        <footer class="eight-section ">
            <div class="eight-section__container container ">
                <div class="eight-section__content-container ">


                    <div class="eight-section__left ">
                        <div class="eight-section__left-time-title ">Время работы:</div>
                        <div class="eight-section__left-time-text ">Пн-Пт: 8:00-23:00, Сб-Вс: 9:00-21:00</div>
                        <div class="eight-section__left-adress-text ">Пресненская набережная, дом 12 Башня "Федерация " Восток, 31 этаж, Офис Р</div>
                        <div class="eight-section__left-container ">
                            <div class="eight-section__left-infoO ">ОГРН: 1187746683464</div>
                            <div class="eight-section__left-infoI ">ИНН: 7703462548</div>
                        </div>
                    </div>

                    <div class="eight-section__center ">
                        <div class="eight-section__center-img ">
                            <a href="../index.html"><img src="../img/logo_white.svg " alt="Логотип "></a>
                        </div>
                        <div class="eight-section__center-text ">Продажа недвижимости в Москва-Сити</div>
                    </div>

                    <div class="eight-section__right ">
                        <div class="eight-section__right-phone "><a href="tel: +74951991999">+7 (495) 199-19-99</a></div>
                        <div class="eight-section__right-email "><a href="mail:  moscow@blitz.estate">moscow@blitz.estate</a></div>
                        <a href="tel: +74951991999" class="eight-section__right-button ">Заказать звонок</a>
                    </div>


                </div>
            </div>
        </footer>

    </div>
    <script src="../js/main.js "></script>
</body>

</html>