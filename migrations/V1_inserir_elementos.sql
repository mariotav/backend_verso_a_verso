INSERT INTO `area` (`id`, `nome`) VALUES
(1, 'A_linguagens'),
(2, 'A_ciencias_humanas'),
(3, 'A_ciencias_naturezas'),
(4, 'A_matematica');

INSERT INTO `disciplinas` (`id`, `nome`, `area_id`) VALUES
(1, 'português', 1),
(2, 'inglês', 1),
(3, 'história', 2),
(4, 'geografia', 2),
(5, 'filosofia', 2),
(6, 'sociologia', 2),
(7, 'biolgia', 3),
(8, 'química', 3),
(9, 'física', 3),
(10, 'matemática', 4);

INSERT INTO `genero` (`id`, `nome`) VALUES
(1, 'trap'),
(2, 'rap'),
(3, 'funk'),
(4, 'sertanejo'),
(5, 'pagode'),
(6, 'samba'),
(7, 'pop'),
(8, 'mpb');
