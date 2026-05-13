<?php
header('Content-Type: application/json');
require 'conexion.php';

if(!isset($_GET['pagina'])) {
    echo json_encode(['success' => false, 'message' => 'Falta la pagina']);
    exit;
}

$pagina = $_GET['pagina'];

try {
    $stmt = $pdo->prepare("
        SELECT t.id, t.usuario_id, t.titulo, t.mensaje, t.fecha_creacion, u.nombre,
               (SELECT COUNT(*) FROM foro_respuestas r WHERE r.tema_id = t.id) as respuestas_count
        FROM foro_temas t
        INNER JOIN usuarios u ON t.usuario_id = u.id
        WHERE t.pagina = ?
        ORDER BY t.fecha_creacion DESC
    ");
    $stmt->execute([$pagina]);
    $temas = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode(['success' => true, 'temas' => $temas]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $e->getMessage()]);
}
?>