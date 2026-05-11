<?php
session_start();
header('Content-Type: application/json');

// Revisa si existe un ID de usuario en la capa de la sesión
if(isset($_SESSION['usuario_id']) && isset($_SESSION['nombre'])) {
    echo json_encode([
        'success' => true, 
        'usuario_id' => $_SESSION['usuario_id'],
        'nombre' => $_SESSION['nombre']
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'No hay una sesión activa.']);
}
?>