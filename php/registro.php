<?php
header('Content-Type: application/json');
require 'conexion.php';

// Leer datos enviados en formato JSON
$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data['nombre']) || !isset($data['correo']) || !isset($data['contrasena'])) {
    echo json_encode(['success' => false, 'message' => 'Todos los campos son obligatorios.']);
    exit;
}

$nombre = trim($data['nombre']);
$correo = trim($data['correo']);
// Ciframos la contraseña para almacenarla de forma segura
$password = password_hash($data['contrasena'], PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare("INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)");
    $stmt->execute([$nombre, $correo, $password]);
    echo json_encode(['success' => true, 'message' => 'Usuario registrado exitosamente.']);
} catch (PDOException $e) {
    if ($e->getCode() == 23000) { // Código de error de duplicado (correo repetido)
        echo json_encode(['success' => false, 'message' => 'El correo electrónico ya está registrado.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al registrar el usuario: ' . $e->getMessage()]);
    }
}
?>