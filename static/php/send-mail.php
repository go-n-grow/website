<?php
	$receiver = "anmeldung@go-n-grow.org";
	$from = $_POST["mail"];

	$shopName = $_POST["shop"];
	$owner = $_POST["owner"];
	$subject = "Anmeldung von $shopName";
	$message = $_POST["message"];

	$header = "From: " . $from . "\r\n" .
		"Reply-To: " . $from . "\r\n" .
		'X-Mailer: PHP/' . phpversion();

	mail($receiver, $subject, $message, $header);
?>
