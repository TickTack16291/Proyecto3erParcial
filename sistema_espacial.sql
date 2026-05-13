-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 11-05-2026 a las 22:50:28
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistema_espacial`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `pagina` varchar(50) NOT NULL,
  `contenido` text NOT NULL,
  `fecha_publicacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `usuario_id`, `pagina`, `contenido`, `fecha_publicacion`) VALUES
(2, 1, 'apolo', 'hola', '2026-05-11 21:50:48'),
(3, 1, 'artemis', 'Hola', '2026-05-11 22:01:05'),
(4, 1, 'mexico', 'Hola', '2026-05-11 22:01:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro_respuestas`
--

DROP TABLE IF EXISTS `foro_respuestas`;
CREATE TABLE IF NOT EXISTS `foro_respuestas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tema_id` int NOT NULL,
  `usuario_id` int NOT NULL,
  `contenido` text NOT NULL,
  `fecha_respuesta` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `tema_id` (`tema_id`),
  KEY `usuario_id` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `foro_respuestas`
--

INSERT INTO `foro_respuestas` (`id`, `tema_id`, `usuario_id`, `contenido`, `fecha_respuesta`) VALUES
(1, 1, 2, 'Holaaaa, esta es mi cuenta secundariaaaaaaa xd', '2026-05-11 17:54:38');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro_temas`
--

DROP TABLE IF EXISTS `foro_temas`;
CREATE TABLE IF NOT EXISTS `foro_temas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `pagina` varchar(50) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `mensaje` text NOT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `foro_temas`
--

INSERT INTO `foro_temas` (`id`, `usuario_id`, `pagina`, `titulo`, `mensaje`, `fecha_creacion`) VALUES
(1, 1, 'artemis', 'Prueba de foro, ¿Quién lo quiere probar? JAJAJJAAJ EMI', 'Hola esta es una prueba con el primer usuario, vamos a ver si es verdad', '2026-05-11 17:53:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contrasena`, `fecha_registro`) VALUES
(1, 'Erick Diaz', 'erickillodq@hotmail.com', '$2y$10$ADEdCDwDGE9mbqRxODIwSuARdplHxPItpKVAWdrAOlCtHdJG4X/sa', '2026-05-11 16:45:29'),
(2, 'ErickDosDiaz', 'di424215@uaeh.edu.mx', '$2y$10$IOWgTYap8asTci4VjwsQ6eYov81kmrAwIkPtaFMgXvra1MtCgZg0W', '2026-05-11 17:54:01');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `foro_respuestas`
--
ALTER TABLE `foro_respuestas`
  ADD CONSTRAINT `foro_respuestas_ibfk_1` FOREIGN KEY (`tema_id`) REFERENCES `foro_temas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `foro_respuestas_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `foro_temas`
--
ALTER TABLE `foro_temas`
  ADD CONSTRAINT `foro_temas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
