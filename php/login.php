<?php
session_start();
header('Content-Type: application/json');
require 'conexion.php';

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data['correo']) || !isset($data['contrasena'])) {
    echo json_encode(['success' => false, 'message' => 'Faltan credenciales.']);
    exit;
}

$correo = trim($data['correo']);
$password = $data['contrasena'];

try {
    $stmt = $pdo->prepare("SELECT id, nombre, contrasena FROM usuarios WHERE correo = ?");
    $stmt->execute([$correo]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    // Verificamos si el usuario existe y si la contraseña (hash) coincide
    if($user && password_verify($password, $user['contrasena'])) {
        // Establecer variables de sesión para la persistencia
        $_SESSION['usuario_id'] = $user['id'];
        $_SESSION['nombre'] = $user['nombre'];
        echo json_encode(['success' => true, 'message' => 'Inicio de sesión exitoso.', 'nombre' => $user['nombre']]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Correo o contraseña incorrectos.']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>