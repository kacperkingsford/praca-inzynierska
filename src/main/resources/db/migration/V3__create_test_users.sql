-- test users, password for both: admin123
INSERT INTO users (`email`, `password`, `username`, `name`, `surname`, `gender`, `birth_date`)
VALUES
('admin@admin.com', '$2a$10$gmg7e2nSqoKLGJXxlDtxEe66YCV6OuHtdIOU.FHseEAXa6brJdHQ6', 'admin', 'admin', 'admin', 'MALE', '2000-01-01'),
('user@user.com', '$2a$10$gmg7e2nSqoKLGJXxlDtxEe66YCV6OuHtdIOU.FHseEAXa6brJdHQ6', 'user', 'user', 'user', 'MALE', '2000-01-01');

INSERT INTO user_roles (`user_id`, `role_id`)
VALUES
((SELECT `id` FROM users WHERE email = 'admin@admin.com'), (SELECT `id` FROM roles WHERE name = 'ROLE_ADMIN')),
((SELECT `id` FROM users WHERE email = 'user@user.com'), (SELECT `id` FROM roles WHERE name = 'ROLE_USER'));