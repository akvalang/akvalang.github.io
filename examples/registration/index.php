<?php
require_once('../header.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="style.css" rel="stylesheet">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.18/jquery-ui.min.js"></script>
    <script src="js/jquery.ddslick.min.js"></script>
    <script src="js/script.js"></script>
    <title>Registration</title>
</head>
<body>
<div class="login">
    <div class="logo"></div>
    <div class="top">
        <span class="formName">Registration</span>
        <select id="demo-htmlselect-basic">
            <option data-imagesrc="img/flags/United-Kingdom.png" value="0">Eng</option>
            <option data-imagesrc="img/flags/Ukraine.png" value="1">Ukr</option>
            <option data-imagesrc="img/flags/Russia.png" value="2">Rus</option>
            <option data-imagesrc="img/flags/Germany.png" value="3">Deu</option>
        </select>
    </div>
    <div class="tooltip" style="display: none;">
        <div class="error"></div>
        <span>Login or password incorrect. Please try again.</span>
    </div>
    <img src="img/loginIcon.svg" class="icon">
    <input type="email" name="Email" class="email" placeholder="Email" required>
    <img src="img/passIcon.svg" class="icon">
    <input type="password" name="password" class="password" placeholder="Password">
    <div class="remind"></div>
    <button type="submit" class="button" value="Registrate">Registrate</button>
</div>
<a href="http://uniseven.com.ua/login">
    <div class="newAccount">
        <span class="createAcc">Login</span>
    </div>
</a>
</body>
</html>