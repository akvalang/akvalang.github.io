<?php
/**
 * Created by PhpStorm.
 * User: nastya.done
 * Date: 04.03.16
 * Time: 12:44
 */

$uploaddir = getcwd().DIRECTORY_SEPARATOR.'upload'.DIRECTORY_SEPARATOR;
$uploadfile = $uploaddir.basename($_FILES['file']['name']);

move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile);
