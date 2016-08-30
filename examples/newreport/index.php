<?php
require_once('../header.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="style.css" rel="stylesheet">
    <script type="text/javascript" src="jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="jquery-1.8.3.min.js"></script>
    <script src="script.js" type="text/javascript"></script>
    <title>Новый отчет</title>
</head>
<body>
<form method="POST" id="form" name="form" action="send.php">
<div class="main">
    <h1>Новый отчёт</h1>
    <p class="title">Категория</p>
    <input type="hidden" name="category" id="reportCategory" value="Подписчки">
    <div class="category" id="category">
        <div class="col" id="selectedCat" value="Подписчки" onclick="check('selectedCat')"><p>Подписчки</p></div>
        <div class="col" id="col1" value="Письма" onclick="check('col1')"><p>Письма</p></div>
        <div class="col" id="col2" value="СMC" onclick="check('col2')"><p>СMC</p></div>
        <div class="col" id="col3" value="Отчеты" onclick="check('col3')"><p>Отчеты</p></div>
        <div class="col" id="col4" value="Деньги" onclick="check('col4')"><p>Деньги</p></div>
        <div class="col" id="col5" value="Другое" onclick="check('col5')"><p>Другое</p></div>
        </input>
    </div>
    <div class="sections">
        <section class="subCategory">
            <p class="title">Суб-категория</p>
            <select name="subCategory" id="subCategory" onchange="validate()">
                <option value="">---</option>
                <option value="Не понятно как" >Не понятно как</option>
                <option value="Не получилось">Не получилось</option>
                <option value="Не могу найти">Не могу найти</option>
                <option value="Баг">Баг</option>
            </select>
        </section>
        <section class="type">
            <p class="title">Тип</p>
            <select name="type" id="type" onchange="validate()">
                <option value="">---</option>
                <option value="Создание">Создание</option>
                <option value="Редактирование">Редактирование</option>
                <option value="Поиск">Поиск</option>
                <option value="Фильтрация">Фильтрация</option>
            </select>
        </section>
        <section class="object">
            <p class="title">Объект</p>
            <select name="object" id="object" onchange="validate()">
                <option value="">---</option>
                <option value="Импорт и добавление">Импорт и добавление</option>
                <option value="Статусы">Статусы</option>
                <option value="Сегментация">Сегментация</option>
                <option value="Доп поля">Доп поля</option>
                <option value="Экспорт">Экспорт</option>
                <option value="Чистка">Чистка</option>
                <option value="Метки">Метки</option>
                <option value="История импорта">История импорта</option>
                <option value="Пересчет подписчиков">Пересчет подписчиков</option>
                <option value="Письма подтверждения">Письма подтверждения</option>
                <option value="Причины отписки">Причины отписки</option>
            </select>
        </section>
    </div>
    <div class="objectText">
        <p class="title">Объект</p>
        <textarea name="text" rows="4" cols="40"></textarea>
    </div>
    <button type="submit" class="button" id="button" value="Отправить">Отправить</button>
        <div class="tooltip" id="tooltip" style="display: none">Спасибо, отчет успешно отправлен!</div>
        <div class="load" id="load" style="display: none"><img src="load.gif" /></div>

</div>
</form>
</body>
</html>