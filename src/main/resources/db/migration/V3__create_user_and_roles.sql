DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`
(
    `id`       bigint(20) AUTO_INCREMENT,
    `email`    varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `username` varchar(255) NOT NULL,
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



