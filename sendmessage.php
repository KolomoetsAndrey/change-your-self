<?php
$sendto = "info@change-yourself.com";
$name = $_POST['name'];
$surname = $_POST['surname'];
$city = $_POST['city'];
$phone = $_POST['phone'];
$email = $_POST['email'];

// Формирование заголовка письма
$subject  = "Заявка с сайта";
$headers  = "From: " . $email . ", " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Заявка с сайта - change-yourself.com</h2>\r\n";

if( isset( $name ) ) {
	$msg .= "<p><strong>Имя: </strong> ".$name."</p>\r\n";
}

if( isset( $surname ) ) {
	$msg .= "<p><strong>Фамилия: </strong> ".$surname."</p>\r\n";
} 

if( isset( $city ) ) {
	$msg .= "<p><strong>Город: </strong> ".$city."</p>\r\n";
}

if( isset( $phone ) ) {
	$msg .= "<p><strong>Телефон: </strong> ".$phone."</p>\r\n";
}

if( isset( $email ) ) {
	$msg .= "<p><strong>Email: </strong> ".$email."</p>\r\n";
}

$msg .= "</body></html>";

// отправка сообщения
if ( @mail( $sendto, $subject, $msg, $headers ) ) {
	echo "true";
} else {
	echo "false";
}

?>
