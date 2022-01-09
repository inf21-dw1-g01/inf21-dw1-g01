
#------------CRIAÇÃO DO SCHEMA--------------

CREATE schema `filmes`;

USE `filmes`;


#---------------------------------CRIAÇÃO DAS TABELAS---------------------------------

CREATE TABLE `Filmes`(
    `id` bigint NOT NULL,
    `adult` bit NOT NULL,
    `language` nchar(5) NOT NULL,
    `original_title` nvarchar(50) NOT NULL,
    `release_date` date NOT NULL,
    `runtime` int NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB;



CREATE TABLE `genero`(
    `id` bigint NOT NULL,
    `genero` nvarchar(50) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB; 


CREATE TABLE `genero_filme`(
    `id_filme` int NOT NULL,
    `id_genero` int NOT NULL
)ENGINE=InnoDB;


CREATE TABLE `user`(
    `id` bigint NOT NULL,
    `first_name` nvarchar(20) NOT NULL,
    `last_name` nvarchar(20) NOT NULL,
    `mail` nvarchar(50) NOT NULL, 
    `lista` int,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB;


#-------------------INSERIR DADOS------------------------------

INSERT into `user` (`id`,`first_name`, `last_name`,`mail`, `lista`) VALUES 
(1, 'Mariana', 'Pereira', 'a038553@ismai.com', 1),
(2, 'Mário', 'Rodrigues', 'a039139@ismai.com', 2),
(3, 'Ana', 'Azevedo', 'a039600@ismai.com', 3);


INSERT INTO `filmes` (`id`, `adult`, `language`, `original_title`, `release_date`, `runtime`) VALUES 
(1, 0, 'en', 'Spider-Man: No Way Home', CAST('2021-12-15' AS Date), 148),
(2, 0, 'en', 'Don''t Look Up', CAST('2021-12-07' AS Date), 138),
(3, 0, 'en', '0The Matrix Resurrections', CAST('021-12-16' AS Date), 148),
(4, 0, 'en','Encanto', CAST('2021-11-24' AS Date), 102),
(5, 1, 'en', 'Resident Evil: Welcome to Raccoon City', CAST('2021-11-24' AS Date), 107),
(6, 0, 'en' , 'Venom: Let There Be Carnage', CAST('2021-09-30' AS Date), 97),
(7, 1, 'en','Last Looks', CAST('2021-12-02' AS Date), 111),
(8, 1, 'en','No Time to Die', CAST('2021-09-29' AS Date), 163),
(9, 0, 'en', 'Dune', CAST('2021-09-15' AS Date), 155),
(10, 0, 'en','Spider-Man: Far From Home', CAST('2019-06-28' AS Date), 129),
(11, 0, 'en', 'Ghostbusters: Afterlife', CAST('2021-11-11' AS Date), 124),
(12, 0, 'pt', 'Lulli', CAST('2021-12-26' AS Date), 90),
(13, 0, 'en', 'The King´s Man', CAST('2021-12-21' AS Date), 131),
(14, 0, 'en', 'Red Notice', CAST('2021-11-04' AS Date), 117),
(15, 0, 'en', 'Shang-Chi and the Legend of the Ten Rings', CAST('2021-09-01' AS Date), 132),
(16, 0, 'en', 'The Amazing Spider-Man', CAST('2012-06-23' AS Date), 136),
(17, 0,'en', 'Spider-Man: Homecoming', CAST('2017-07-05' AS Date), 133),
(18, 0, 'en', 'Clifford the Big Red Dog', CAST('2021-11-10' AS Date), 97),
(19, 0, 'en', 'Encounter', CAST('2021-12-03' AS Date), 108),
(20, 0, 'en', 'The Amazing Spider-Man 2', CAST('2014-04-16' AS Date), 142),
(21, 0, 'en','Sing 2', CAST('2021-12-01' AS Date), 110),
(22, 0, 'en', 'Eternals', CAST('2021-11-03' AS Date), 157),
(23, 0, 'en', 'Spider-Man', CAST('2002-05-01' AS Date), 121),
(24, 0, 'en', 'Ida Red', CAST('2021-11-05' AS Date), 111),
(25, 0, 'en', 'The Last Duel', CAST('2021-10-13' AS Date), 152),
(26, 0, 'en', 'The Greatest Game Ever Played', CAST('2005-09-30' AS Date), 120),
(27, 1, 'en', 'Furnace', CAST('2007-12-11' AS Date), 90),
(28, 0,'en','Twelve O''Clock High', CAST('1949-12-21' AS Date), 132),
(29, 0,'pt', 'Quando as Mulheres Querem Provas', CAST('1975-03-04' AS Date), 110),
(30, 0, 'en', 'The Second Arrival', CAST('1998-11-06' AS Date), 101);

INSERT `genero_filme` (`id_filme`, `id_genero`) VALUES 
(1, 1),
(1, 2),
(1, 15),
(2, 4),
(2, 7),
(2, 15),
(3, 1),
(3, 15),
(4, 3),
(4, 4),
(4, 8),
(4, 9),
(5, 11),
(5, 1),
(5, 15),
(6, 15),
(6, 1),
(6, 2),
(7, 1),
(7, 5),
(7, 17),
(8, 2),
(8, 1),
(8, 17),
(9, 15),
(9, 2),
(10, 1),
(10, 2),
(10, 15),
(11, 4),
(11, 9),
(11, 2),
(11, 15),
(12, 4),
(12, 14),
(12, 9),
(13, 1),
(13, 2),
(13, 17),
(14, 1),
(14, 4),
(14, 5),
(14, 17),
(15, 1),
(15, 2),
(15, 9),
(16, 1),
(16, 2),
(16, 9),
(17, 1),
(17, 2),
(17, 15),
(17, 7),
(18, 3),
(18, 4),
(18, 8),
(19, 15),
(19, 17),
(19, 2),
(20, 1),
(20, 2),
(20, 9),
(21, 3),
(21, 4),
(21, 8),
(21, 12),
(22, 1),
(22, 2),
(22, 9),
(22, 15),
(23, 9),
(23, 1),
(24, 5),
(24, 17),
(24, 7),
(24, 1),
(25, 1),
(25, 7),
(25, 10),
(26, 7),
(27, 5),
(27, 11),
(27, 13),
(28, 18),
(28, 1),
(28, 7),
(29, 4),
(29, 14),
(30, 15);

INSERT into `genero` (`genero`, `id`) VALUES 
('Action', 1),
('Adventure', 2),
('Animation', 3),
('omedy', 4),
('Crime', 5),
('ocumentary', 6),
('rama', 7),
('amily', 8),
('Fantasy', 9),
('History', 10),
('Horror', 11),
('Music', 12),
('Mystery', 13),
('Romance', 14),
('Science Fiction', 15),
('V Movie', 16),
('Thriller', 17),
('War', 18),
('Western', 19);




