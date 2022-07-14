DROP TABLE IF EXISTS users_courses;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS rol;


CREATE TABLE rol(
    rol_id SERIAL PRIMARY KEY,
    rol_name VARCHAR(50) NOT NULL
);

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_lastName VARCHAR(50) NOT NULL,
    user_email VARCHAR (255) UNIQUE,
    rol INT REFERENCES rol(rol_id)
);

CREATE TABLE courses(
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL,
    course_description VARCHAR(50) NOT NULL
);

CREATE TABLE users_courses(
    user_id INT REFERENCES users(user_id),
    courser_id INT REFERENCES courses(course_id)
);