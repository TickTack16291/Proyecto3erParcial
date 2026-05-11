<?php
session_start();
header('Content-Type: application/json');
require 'conexion.php';

if(!isset($_SESSION['usuario_id'])) {
    echo json_encode(['success' => false, 'message' => 'Debes iniciar sesión para responder.']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data['tema_id']) || !isset($data['contenido'])) {
    echo json_encode(['success' => false, 'message' => 'Faltan datos para la respuesta.']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];
$tema_id = $data['tema_id'];
$contenido = trim($data['contenido']);

if(strlen($contenido) === 0) {
    echo json_encode(['success' => false, 'message' => 'La respuesta no puede estar vacía.']);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO foro_respuestas (tema_id, usuario_id, contenido) VALUES (?, ?, ?)");
    $stmt->execute([$tema_id, $usuario_id, $contenido]);
    echo json_encode(['success' => true, 'message' => 'Respuesta añadida con éxito.']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al responder: ' . $e->getMessage()]);
}
?>