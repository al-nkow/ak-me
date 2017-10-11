<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);

$sender = trim($_POST[sender]);
$mail = trim($_POST[mail]);
$message = trim($_POST[message]);

$body = '<p>Пользователь: <b>'.$sender.'</b> <i>('.$mail.')</i></p><p>Сообщение: '.$message.'</p>';
$altBody = 'Пользователь: '.$sender.' ('.$mail.') Сообщение: '.$message;

require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();

$mail->Host = 'smtp.timeweb.ru';
$mail->Port = 465; // если tls - 25 или 2525 для timeweb
$mail->SMTPSecure = 'ssl'; // можно также tls или STARTTLS для timeweb
$mail->SMTPAuth = true;

$mail->Username = "info@ak-me.ru";
$mail->Password = "xTstWrJr8gFcE";

$mail->setFrom('info@ak-me.ru', 'Системное сообщение'); // от кого
// кому (можно дублировать эту строку - несколько получателей):
$mail->addAddress('al.nkow@gmail.com', 'Aleksey Kovalchuk'); 

$mail->CharSet = 'UTF-8';
$mail->isHTML(true);
$mail->Subject = 'Новое сообщение с сайта AK-ME.RU';
$mail->msgHTML($body); // тело письма
// если сервер не поддерживает письма в формате HTML - будет отправлено это:
$mail->AltBody = $altBody;

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}

?>