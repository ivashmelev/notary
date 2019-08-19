<?php 
header('Access-Control-Allow-Origin: *');

require_once ('../../modules/mail.php');

$name = $_POST['name'];
$phone = $_POST['phone'];
$adminMail = $_POST['admin_mail'];
$mail = $_POST['mail'];
$comment = $_POST['comment'];

smtpmail("Заявка на сайте от $name", "$adminMail", "Заявка на сайте от $name", "Имя - $name </br> Телефон - $phone </br> Почта - $mail </br> Комментарий - $comment </br>");
?>