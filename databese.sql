CREATE TABLE "person" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE "order" (
    id SERIAL PRIMARY KEY,
    date date,
    comment VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);