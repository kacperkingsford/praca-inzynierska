DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`
(
    `id`       bigint(20) AUTO_INCREMENT,
    `email`    varchar(255) NOT NULL UNIQUE,
    `password` varchar(255) NOT NULL,
    `username` varchar(20) NOT NULL UNIQUE ,
    `name` varchar(20) NOT NULL,
    `surname` varchar(20) NOT NULL,
    `gender` varchar(6) NOT NULL,
    `birth_date` varchar(10) NOT NULL,
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`
(
    `id`   bigint(20) AUTO_INCREMENT,
    `name` varchar(20) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');



