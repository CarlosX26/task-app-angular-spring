CREATE TABLE IF NOT EXISTS tasks(
  id SERIAl PRIMARY KEY,
  title VARCHAR(128) NOT NULL,
  completed BOOLEAN NOT NULL
)