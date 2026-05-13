<?php
session_start();
header('Content-Type: application/json');
require 'conexion.php';

if(!isset($_SESSION['usuario_id'])) {
    echo json_encode(['success' => false, 'message' => 'Debes iniciar sesión.']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data['id']) || !isset($data['titulo']) || !isset($data['mensaje'])) {
    echo json_encode(['success' => false, 'message' => 'Falta el id, titulo o mensaje.']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];
$id = intval($data['id']);
$titulo = trim($data['titulo']);
$mensaje = trim($data['mensaje']);

if(strlen($titulo) === 0 || strlen($mensaje) === 0) {
    echo json_encode(['success' => false, 'message' => 'Los campos no pueden estar vacíos.']);
    exit;
}

try {
    $stmt = $pdo->prepare("UPDATE foro_temas SET titulo = ?, mensaje = ? WHERE id = ? AND usuario_id = ?");
    $stmt->execute([$titulo, $mensaje, $id, $usuario_id]);
    
    if($stmt->rowCount() > 0) {
        echo json_encode(['success' => true, 'message' => 'Tema actualizado correctamente.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'No autorizado o no hubo cambios.']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>