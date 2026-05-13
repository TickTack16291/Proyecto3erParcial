<?php
session_start();
header('Content-Type: application/json');
require 'conexion.php';

if(!isset($_SESSION['usuario_id'])) {
    echo json_encode(['success' => false, 'message' => 'Debes iniciar sesión.']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data['id']) || !isset($data['contenido'])) {
    echo json_encode(['success' => false, 'message' => 'Falta el id o contenido.']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];
$id = intval($data['id']);
$contenido = trim($data['contenido']);

if(strlen($contenido) === 0) {
    echo json_encode(['success' => false, 'message' => 'El comentario no puede estar vacío.']);
    exit;
}

try {
    $stmt = $pdo->prepare("UPDATE foro_respuestas SET contenido = ? WHERE id = ? AND usuario_id = ?");
    $stmt->execute([$contenido, $id, $usuario_id]);
    
    if($stmt->rowCount() > 0) {
        echo json_encode(['success' => true, 'message' => 'Respuesta actualizada correctamente.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'No autorizado o no hubo cambios.']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>