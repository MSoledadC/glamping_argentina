<?php
// Variables para el correo electrónico
$to = 'mariasoledadcabanillas@gmail.com';
$subject = 'Reserva';
$headers = 'From: mariasoledadcabanillas@gmail.com' . "\r\n" .
    'Reply-To: mariasoledadcabanillas@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Variables del formulario
$fecha_ingreso = $_POST['fecha_ingreso'];
$fecha_egreso = $_POST['fecha_egreso'];
$huespedes = $_POST['huespedes'];

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
$message = "Fecha de ingreso: $fecha_ingreso\n" .
           "Fecha de egreso: $fecha_egreso\n" .
           "Huéspedes: $huespedes\n";

// Enviar el correo electrónico
mail($to, $subject, $message, $headers);

header('Location: index.html');
?>

