INSERT INTO users (name, password, email) VALUES ('Alice', 'password', 'alice@hotmale.com');
INSERT INTO users (name, password, email) VALUES ('Kira', 'password', 'kira@hotmale.com');
INSERT INTO users (name, password, email) VALUES ('Terry', 'password', 'terry@hotmale.com');
INSERT INTO quizzes (public, category, user_id) VALUES (true, 'movies', 1);
INSERT INTO questions (question, quiz_id) VALUES ('who played neo in the matrix?', 1);
INSERT INTO questions (question, quiz_id) VALUES ('what was the heighest gossing movie of 2020?', 1);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('keanu reeves', ARRAY ['laurence fishburne','matt damon','jet li'], 1);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Bad Boys For Life', ARRAY ['Sonic The Hedgehog','Bill & Ted Face the Music','titanic'], 2);