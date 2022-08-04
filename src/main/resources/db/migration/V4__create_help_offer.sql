DROP TABLE IF EXISTS `help_offer`;
CREATE TABLE `help_offer`
(
    `id`              bigint(20) AUTO_INCREMENT,
    `name`            varchar(255)  NOT NULL,
    `description`     varchar(6048) NOT NULL,
    `city`            varchar(40)   NOT NULL,
    `street`          varchar(30)   NOT NULL,
    `number`          INT           NOT NULL,
    `post_code`       varchar(6)    NOT NULL,
    `image_path`      varchar(1024) NOT NULL,
    `image_file_name` varchar(128)  NOT NULL,
    `created_by_user_id` bigint(20) NOT NULL,
    `reserved_by_user_id` bigint(20) DEFAULT NULL,
    FOREIGN KEY (created_by_user_id) REFERENCES users(id),
    PRIMARY KEY (`id`)
);
