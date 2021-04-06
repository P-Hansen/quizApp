INSERT INTO users (name, password, email) VALUES ('Alice', 'password', 'alice@hotmale.com');
INSERT INTO users (name, password, email) VALUES ('Kira', 'password', 'kira@hotmale.com');
INSERT INTO users (name, password, email) VALUES ('Terry', 'password', 'terry@hotmale.com');

INSERT INTO quizzes (public, category, user_id) VALUES (true, 'movies', 1);
INSERT INTO quizzes (public, category, user_id) VALUES (true, 'video game', 2);

INSERT INTO questions (question, quiz_id) VALUES ('who played neo in the matrix?', 1);
INSERT INTO questions (question, quiz_id) VALUES ('what was the highest gossing movie of 2020?', 1);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('keanu reeves', ARRAY ['laurence fishburne','matt damon','jet li'], 1);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Bad Boys For Life', ARRAY ['Sonic The Hedgehog','Bill & Ted Face the Music','titanic'], 2);

INSERT INTO questions (question, quiz_id) VALUES ('The most graphically violent game to precede the creation of the ESRB (Entertainment Software Rating Board) was...', 2);
INSERT INTO questions (question, quiz_id) VALUES ('What is the worlds first video game console?', 2);
INSERT INTO questions (question, quiz_id) VALUES ('Which of the following is a class in the game Hearthstone?', 2);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Mortal Kombat', ARRAY ['Duke Nukem','Resident Evil','Doom'], 3);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Magnavox Odyssey', ARRAY ['Coleco Telstar','Nintendo Color TV Game','Atari 2600'], 4);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Priest', ARRAY ['Sage','Cleric','Monk'], 5);

INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,1);

INSERT INTO quiz_attempt_results (quiz_attempt, question_id, answer_id, total) VALUES (1,1,1,6);
