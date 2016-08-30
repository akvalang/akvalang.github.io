<?php
/**
 * Created by PhpStorm.
 * User: nastya.done
 * Date: 14.12.15
 * Time: 22:43
 */

$cookie_name = 'user';
if(!isset($_COOKIE[$cookie_name]) && $_COOKIE[$cookie_name] != 'sodium238'){
    header("Location: http://uniseven.com.ua");
    exit;
}
else {
    $authorized = true;
}