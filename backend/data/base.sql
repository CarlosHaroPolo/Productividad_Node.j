CREATE DATABASE IF NOT EXISTS productividad;
USE productividad;

CREATE TABLE `activities` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity` varchar(80) NOT NULL,
  `description` varchar(80) DEFAULT NULL,
  `idType` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_type_id` (`idType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `records` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `totalHours` float DEFAULT NULL,
  `date` date NOT NULL,
  `state` int(11) DEFAULT NULL,
  `day` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `r_a` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idRecord` int(11) NOT NULL,
  `idActivity` int(11) NOT NULL,
  `hour` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_activities_id` (`idActivity`),
  KEY `fk_record_id` (`idRecord`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(80) NOT NULL,
  `description` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` varchar(80) NOT NULL,
`status`  int(11) DEFAULT NULL ,
  PRIMARY KEY(`id`)
) 

ALTER TABLE `activities`
  ADD CONSTRAINT `fk_type_id` FOREIGN KEY (`idType`) REFERENCES `types` (`id`);

ALTER TABLE `r_a`
  ADD CONSTRAINT `fk_activities_id` FOREIGN KEY (`idActivity`) REFERENCES `activities` (`id`),
  ADD CONSTRAINT `fk_record_id` FOREIGN KEY (`idRecord`) REFERENCES `records` (`id`),
  ADD CONSTRAINT `fk_records_id` FOREIGN KEY (`idRecord`) REFERENCES `records` (`id`);

COMMIT;

-- INSERTAR LAS 
INSERT INTO types (type, description) VALUES
('FORMACIÓN', 'Se enfoca en la adquisición de habilidades y conocimientos técnicos.'),
('SALUD Y BIENESTAR', 'Actividades enfocadas en el mantenimiento o mejora de la salud física.'),
('ORGANIZACIÓN Y MEJORA DEL HOGAR', 'Tareas domésticas destinadas a mantener y mejorar el ambiente del hogar.'),
('TESIS', 'Trabajo de investigación que puede incluir desarrollo teórico.'),
('DESARROLLO PERSONAL', 'Acciones encaminadas a mejorar las oportunidades laborales y profesional.');

INSERT INTO records(totalHours, date, state, day) VALUES ( '0', '2024-12-30', '0', '0');
