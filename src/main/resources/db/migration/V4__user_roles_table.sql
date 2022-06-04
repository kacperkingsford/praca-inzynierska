DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles`
(
    `user_id` bigint(20) NOT NULL,
    `role_id` bigint(20) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (role_id) REFERENCES roles (id),
    UNIQUE (user_id, role_id)
);




