<?php
$recepient = 'info@1001resnitsa.ru'; /* поменять на свой*/
$sitename = '1001 Resnitsa'; /* поменять на название сайта*/

$phone = trim($_POST['phone']);
$message = "\nТелефон: $phone";

$subject = "Новая заявка с сайта " . $sitename;
$result = mail($recepient, $subject, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>