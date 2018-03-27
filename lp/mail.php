<?php
$recepient = 'udovi4enko.m@yandex.ru'; /* поменять на свой*/
$sitename = 'LP Навесы'; /* поменять на название сайта*/

$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$header = trim($_POST['header']);
$message = "\nИмя: $name \nТелефон: $phone \nЗаголовок: $header";

$subject = "Новая заявка с сайта " . $sitename;
$result = mail($recepient, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>