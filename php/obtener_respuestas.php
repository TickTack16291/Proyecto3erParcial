<?php
header('Content-Type: application/json');
require 'conexion.php';

if(!isset($_GET['tema_id'])) {
    echo json_encode(['success' => false, 'message' => 'Falta el ID del tema']);
    exit;
}

$tema_id = $_GET['tema_id'];

try {
    $stmt = $pdo->prepare("
        SELECT r.id, r.contenido, r.fecha_respuesta, u.nombre 
        FROM foro_respuestas r
        INNER JOIN usuarios u ON r.usuario_id = u.id
        WHERE r.tema_id = ?
        ORDER BY r.fecha_respuesta ASC
    ");
    $stmt->execute([$tema_id]);
    $respuestas = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(['success' => true, 'respuestas' => $respuestas]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>