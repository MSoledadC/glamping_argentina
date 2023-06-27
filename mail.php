<?php
// Variables para el correo electrónico

$to = 'mariasoledadcabanillas@gmail.com';
$subject = 'Consulta';
$logo_url =  'http://glamping_argentina.com/img/logo.png';
$url = $_SERVER['HTTP_REFERER'];


// Variables del formulario
$fecha_ingreso = $_POST['Fechaingreso'];
$fecha_egreso = $_POST['Fechaegreso'];
$huespedes = $_POST['Huespedes'];
$email = $_POST['email'];



//$titulo = $_POST['titulo'];

// Validar y escapar los datos del formulario aquí
$fecha_ingreso = htmlspecialchars(trim($fecha_ingreso));
$fecha_egreso = htmlspecialchars(trim($fecha_egreso));
$huespedes = htmlspecialchars(trim($huespedes));




if (!filter_var($fecha_ingreso, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^(\d{4})-(\d{2})-(\d{2})$/")))) {
    // La fecha de ingreso no es válida
}

if (!filter_var($fecha_egreso, FILTER_VALIDATE_REGEXP, array("options"=>array("regexp"=>"/^(\d{4})-(\d{2})-(\d{2})$/")))) {
    // La fecha de egreso no es válida
}

if (!filter_var($huespedes, FILTER_VALIDATE_INT)) {
    // El número de huéspedes no es válido
}

// Construir el mensaje del correo electrónico
$message = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Glamping Argentina</title></head>
<head>
  <style>
    /* Estilos para el correo electrónico */
    body { font-family: Arial, sans-serif; font-size: 16px; }
    h1 { color: #0dbf6f; }
  </style>
</head>
<body>
  <img src=\"$logo_url\" alt=\"Logo de la empresa\">
  <h1>Gracias por contactar con nosotros</h1>
  <p>A continuación, encontrará los detalles de su consulta:</p>
  <ul>
    <li>Consulta Glamping: $url</li>
    <li>Fecha de ingreso: $fecha_ingreso</li>
    <li>Fecha de egreso: $fecha_egreso</li>
    <li>Huéspedes: $huespedes</li>
  </ul>
  <p>Esperamos tenerlo pronto con nosotros.</p>
  <p>Saludos cordiales,<br>El equipo de Glamping Argentina</p>
</body>
</html>";

// Encabezados para el correo electrónico
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-type: text/html\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

// Enviar el correo electrónico
//mail($to, $subject, $message, $headers);

// Enviar el correo electrónico
mail($to, $subject, $message, $headers);
mail($email, $subject, $message, $headers);

header('Location: index.html');
?>



