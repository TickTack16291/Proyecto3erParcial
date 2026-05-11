CREATE DATABASE IF NOT EXISTS sistema_espacial;
USE sistema_espacial;

-- --------------------------------------------------------
-- 1. Tabla de Usuarios
-- Almacena la información del usuario para el inicio de sesión.
-- La contraseña debe estar hasheada (e.g., con password_hash de PHP).
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(150) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- --------------------------------------------------------
-- 2. Tabla de Comentarios
-- Almacena los comentarios sueltos que hacen los usuarios 
-- en las páginas individuales.
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    pagina VARCHAR(50) NOT NULL, -- Identificador de la página (ej. 'apolo', 'artemis', 'mexico')
    contenido TEXT NOT NULL,
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- --------------------------------------------------------
-- 3. Tabla de Temas del Foro
-- Almacena las "preguntas destacadas" o nuevos temas credos.
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS foro_temas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    pagina VARCHAR(50) NOT NULL, -- Identificador de la página donde se creó el tema
    titulo VARCHAR(255) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- --------------------------------------------------------
-- 4. Tabla de Respuestas del Foro
-- Almacena las respuestas estructuradas dentro de un hilo (tema) del foro.
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS foro_respuestas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tema_id INT NOT NULL,
    usuario_id INT NOT NULL,
    contenido TEXT NOT NULL,
    fecha_respuesta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tema_id) REFERENCES foro_temas(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
