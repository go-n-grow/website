<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	use PHPMailer\PHPMailer\SMTP;

	require './phpmailer-6.1.7/src/Exception.php';
	require './phpmailer-6.1.7/src/PHPMailer.php';
	require './phpmailer-6.1.7/src/SMTP.php';

	require './config.php';

	$mail = new PHPMailer(true);

	$json = file_get_contents("php://input");

	if (!empty($json)) {
		$data = json_decode($json, true);
	} else {
		echo "Error 01: JSON data empty";
		die;
	}

	try {
		$name = $data["name"];
		$address = $data["address"];
		$userEmail = $data["mail"];
		$userSubject = "Beet-Kit Anfrage von " . $name;

		$mailBody =
			"<p>Ort: Köln</p>" .
			"<p>Name: " . $name . "</p>" .
			"<p>E-Mail: <a href='mailto:" . $userEmail . "'>" . $userEmail . "</a></p>" .
			"<p>Adresse: " . $address . "</p>";

		$mail->CharSet = "UTF-8";
		$mail->isSMTP();
		$mail->Host = $MAIL_HOST;
		$mail->SMTPAuth = true;
		$mail->Username = $MAIL_ADDRESS;
		$mail->Password = $MAIL_PASSWORD;
		$mail->SMTPSecure = 'tls';
		$mail->Port = $MAIL_SMTP_PORT;

		$mail->addReplyTo( $userEmail, $owner );
		$mail->addAddress( $MAIL_ADDRESS, $MAIL_ADDRESS_NAME );

		if ( $userEmail ) {
			$mail->SetFrom( $MAIL_ADDRESS, $MAIL_ADDRESS_NAME );
		}

		if ( $userCCMail ) {
			$mail->addCC($userCCMail);
		}

		$mail->isHTML(true);

		$mail->Subject = $userSubject;
		$mail->Body = $mailBody;
		$mail->AltBody = $mailBody;

		$mail->send();

		http_response_code(200);
		echo '{ "success": true }';
	} catch ( Exception $ex ) {
		http_response_code(500);
		echo '{ "error": "' . $mail->ErrorInfo . '" }';
	}
?>
