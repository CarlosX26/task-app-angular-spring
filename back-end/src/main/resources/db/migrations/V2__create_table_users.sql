CREATE TABLE IF NOT EXISTS users(
  id SERIAl PRIMARY KEY,
  "name" VARCHAR(128) NOT NULL,
  email VARCHAR(128) UNIQUE NOT NULL,
  "password" VARCHAR(256) NOT NULL,
)