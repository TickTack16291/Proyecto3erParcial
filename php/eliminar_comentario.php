<?php
session_start();
header('Content-Type: application/json');
require 'conexion.php';

if(!isset($_SESSION['usuario_id'])) {
    echo json_encode(['success' => false, 'message' => 'Debes iniciar sesión.']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data['id'])) {
    echo json_encode(['success' => false, 'message' => 'Falta el id.']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];
$id = intval($data['id']);

try {
    $stmt = $pdo->prepare("DELETE FROM comentarios WHERE id = ? AND usuario_id = ?");
    $stmt->execute([$id, $usuario_id]);
    
    if($stmt->rowCount() > 0) {
        echo json_encode(['success' => true, 'message' => 'Comentario eliminado.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'No autorizado o el comentario no existe.']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>