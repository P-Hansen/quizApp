-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS quiz_attempts CASCADE;

CREATE TABLE quiz_attempts (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES questions(id),
  users_id INTEGER REFERENCES users(id)
);
