<?php
header('Content-Type: application/json');
require 'conexion.php';

// Esto es para que en el frontend se carguen los mensajes de una pagina en especifico
if(!isset($_GET['pagina'])) {
    echo json_encode(['success' => false, 'message' => 'Especifique la pagina a la que pertenecen los comentarios']);
    exit;
}

$pagina = $_GET['pagina'];

try {
    // Obtenemos los comentarios junto con el nombre del usuario
    $stmt = $pdo->prepare("
        SELECT c.id, c.usuario_id, c.contenido, c.fecha_publicacion, u.nombre 
        FROM comentarios c
        INNER JOIN usuarios u ON c.usuario_id = u.id
        WHERE c.pagina = ?
        ORDER BY c.fecha_publicacion DESC
    ");
    $stmt->execute([$pagina]);
    $comentarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(['success' => true, 'comentarios' => $comentarios]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>