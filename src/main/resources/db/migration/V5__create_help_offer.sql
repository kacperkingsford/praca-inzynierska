INSERT INTO `help_offer` (name, description, city, street, number, post_code, image_path, image_file_name, created_by_user_id, reserved_by_user_id)
VALUES ('Mieszkanie w centrum Wrocławia', 'Dwupokojowe mieszkanie na 2 miesiące', 'Wroclaw', 'Chalupnicza', 58,
        '51-513', 'myhelp/9ef3d4c9-d80a-4709-8acc-77073cabb8c8', 'wroclaw-mieszkanie12332.jpeg', (SELECT id FROM users WHERE email = 'user@user.com'), (SELECT id FROM users WHERE email = 'admin@admin.com')),
       ('Kawalerka Kraków', 'Kawalerka od dziś na miesiąc', 'Krakow', 'Jana Kochanowskiego', 20, '40-212',
        'myhelp/e5ea7498-81bb-4a4d-9c4d-ce2850505a4e', 'kawalerka-na-warszawskiej-woli_12.jpeg', (SELECT id FROM users WHERE email = 'user@user.com'), null),
       ('Room for two people', '8 square meters room in 4 room apartament with two bathrooms', 'Warsaw', 'Elektryczna',
        12, '00-312', 'myhelp/60d024f6-317a-4025-9806-639a49b60f4a', 'jak-urzadzic-mieszkanie-na-wynajem-13.jpeg', (SELECT id FROM users WHERE email = 'admin@admin.com'), null),
       ('Mieszkanie w centrum Wrocławia', 'Dwupokojowe mieszkanie na 2 miesiące', 'Wroclaw', 'Chalupnicza', 58,
        '51-513', 'myhelp/9ef3d4c9-d80a-4709-8acc-77073cabb8c8', 'wroclaw-mieszkanie12332.jpeg', (SELECT id FROM users WHERE email = 'user@user.com'), null),
       ('Mieszkanie w centrum Wrocławia', 'Dwupokojowe mieszkanie na 2 miesiące', 'Wroclaw', 'Chalupnicza', 58,
        '51-513', 'myhelp/9ef3d4c9-d80a-4709-8acc-77073cabb8c8', 'wroclaw-mieszkanie12332.jpeg', (SELECT id FROM users WHERE email = 'admin@admin.com'), (SELECT id FROM users WHERE email = 'user@user.com')),
       ('Room for two people', '8 square meters room in 4 room apartament with two bathrooms', 'Warsaw', 'Elektryczna',
        12, '00-312', 'myhelp/60d024f6-317a-4025-9806-639a49b60f4a', 'jak-urzadzic-mieszkanie-na-wynajem-13.jpeg', (SELECT id FROM users WHERE email = 'admin@admin.com'), null);
