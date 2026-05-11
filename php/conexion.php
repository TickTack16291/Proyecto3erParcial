<?php
$host = 'localhost';
$dbname = 'sistema_espacial';
$username = 'root'; // Usuario por defecto de XAMPP/WAMP
$password = ''; // Contraseña por defecto

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die(json_encode(["success" => false, "message" => "Error de conexión a la base de datos: " . $e->getMessage()]));
}
?>