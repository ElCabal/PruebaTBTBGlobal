INSERT INTO rol 
(rol_name)
VALUES
('basic'),
('medium'),
('premium');

INSERT INTO users 
(user_name, user_lastName, user_email,rol )
VALUES
('Leanne','Graham','Sincere@april.biz',2),
('Ervin','Howell','Shanna@melissa.tv',3),
('Clementine','Bauch','Nathan@yesenia.net',2),
('Patricia','Lebsack','Julianne.OConner@kory.org',1),
('Chelsey','Dietrich','Lucio_Hettinger@annie.ca',1);

INSERT INTO courses 
(course_name, course_description )
VALUES
('React','Multi-tiered zero tolerance productivity'),
('Angular','User-centric fault-tolerant solution'),
('Django','Synchronised bottom-line interface'),
('Ionic','Configurable multimedia task-force'),
('Express','Implemented secondary concept');


--Change name column
ALTER TABLE courses
RENAME COLUMN course_name TO course_title;
SELECT * FROM courses;

-- Update user
UPDATE users
	SET user_name = 'Sandra', user_lastName = 'Patricia'
	WHERE user_id = 1;
SELECT * FROM users;

-- Delete user
DELETE FROM users
    WHERE user_id = 1;
SELECT * FROM users;

-- Show rol name assigned to users
SELECT r.rol_name,user_name,user_lastName,user_email
FROM users AS u INNER JOIN rol AS r ON u.rol = r.rol_id;


