<?php
session_start();
header('Content-Type: application/json');
require 'conexion.php';

if(!isset($_SESSION['usuario_id'])) {
    echo json_encode(['success' => false, 'message' => 'Debes iniciar sesión para crear un tema.']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data['pagina']) || !isset($data['titulo']) || !isset($data['mensaje'])) {
    echo json_encode(['success' => false, 'message' => 'Faltan datos para crear el tema.']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];
$pagina = trim($data['pagina']);
$titulo = trim($data['titulo']);
$mensaje = trim($data['mensaje']);

if(strlen($titulo) === 0 || strlen($mensaje) === 0) {
    echo json_encode(['success' => false, 'message' => 'El título y el mensaje no pueden estar vacíos.']);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO foro_temas (usuario_id, pagina, titulo, mensaje) VALUES (?, ?, ?, ?)");
    $stmt->execute([$usuario_id, $pagina, $titulo, $mensaje]);
    echo json_encode(['success' => true, 'message' => 'Tema creado con éxito.']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al crear tema: ' . $e->getMessage()]);
}
?>