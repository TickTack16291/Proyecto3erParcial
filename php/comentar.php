<?php
session_start();
header('Content-Type: application/json');
require 'conexion.php';

// Verificar que el usuario tenga sesión activa antes de dejarlo comentar
if(!isset($_SESSION['usuario_id'])) {
    echo json_encode(['success' => false, 'message' => 'Debes iniciar sesión para publicar un comentario.']);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if(!isset($data['pagina']) || !isset($data['contenido'])) {
    echo json_encode(['success' => false, 'message' => 'Falta el contenido o identificar la página.']);
    exit;
}

$usuario_id = $_SESSION['usuario_id'];
$pagina = trim($data['pagina']); // Por ejemplo: 'apolo', 'artemis'
$contenido = trim($data['contenido']);

if(strlen($contenido) === 0) {
    echo json_encode(['success' => false, 'message' => 'El comentario no puede estar vacío.']);
    exit;
}

try {
    $stmt = $pdo->prepare("INSERT INTO comentarios (usuario_id, pagina, contenido) VALUES (?, ?, ?)");
    $stmt->execute([$usuario_id, $pagina, $contenido]);
    echo json_encode(['success' => true, 'message' => 'Comentario publicado correctamente.', 'nombre' => $_SESSION['nombre']]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error al publicar comentario: ' . $e->getMessage()]);
}
?>