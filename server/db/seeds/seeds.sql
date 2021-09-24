INSERT INTO users (first_name, last_name, email, username, password, country, city, province, street, post_code)
VALUES ('Empty', 'User', 'none@none.com', 'somedude', '12345', 'USA', 'Orlando', 'Florida', '1375 E Buena Vista Dr', '32830'),
('Slash', '', 'c00lhatz@gmail.com', 'axlrose', '12345', 'USA', 'Los Angeles', 'California', '3331 W 8th St', '90005'),
('Axl', 'Rose', 'paradise_city@hotmail.com', 'slash', '12345', 'USA', 'Los Angeles', 'California', '3331 W 8th St', '90005'),
('Duff', 'McKagan', 'cool_beanz@gmail.com', 'b0ssb4ss', '12345', 'USA', 'Los Angeles', 'California', '3331 W 8th St', '90005'),
('Rob', 'Gardner', 'bdumtas@gmail.com', 'b0ssdrumz', '12345', 'USA', 'Los Angeles', 'California', '3331 W 8th St', '90005'),
('Dave', 'Mustaine', 'holywars@hotmail.com', 'pun1shmentDue', '12345', 'USA', 'Los Angeles', 'California', '613 S Grand Ave', '90017'),
('Marty', 'Friedman', 'tornad0fS0uls@hotmail.com', 'blown4w4y', '12345', 'USA', 'Los Angeles', 'California', '613 S Grand Ave', '90017'),
('David', 'Ellefson', 'poison_cure@hotmail.com', 'rustInPeace', '12345', 'USA', 'Los Angeles', 'California', '613 S Grand Ave', '90017'),
('Nick', 'Menza', 'hangar69@hotmail.com', '5magicx', '12345', 'USA', 'Los Angeles', 'California', '613 S Grand Ave', '90017'),
('Noel', 'Gallagher', 'liam_sucks@gmail.com', 'wonderwall', '12345', 'UK', 'Longsight', 'Manchester', '258 Stockport Rd', 'M13 0JY'),
('Paul', 'Gilbert', 'ultimateGuitarist@techniques.com', 'lickz420', '12345', 'USA', 'Carbondale', 'Illinois', '101 W Monroe St', '62901'),;

INSERT INTO bands (leader_id, name, featured)
VALUES
(10, 'Oasis', TRUE),
(1, 'Coldplay', FALSE),
(1, 'AC/DC', TRUE),
(1, 'Red Hot Chili Peppers', TRUE),
(1, 'Lamb of God', FALSE),
(1, 'Polyphia', TRUE),
(11, 'Racer X', TRUE),
(1, 'Chon', TRUE),
(1, 'Periphery', FALSE),
(2, 'Guns N'' Roses', TRUE),
(6, 'Megadeth', FALSE);


INSERT INTO instruments (name)
VALUES
('Guitar'),
('Bass'),
('Drums'),
('Piano'),
('Violin'),
('Cello'),
('Vocal');


INSERT INTO genres (name)
VALUES
('Classic'),
('Jazz'),
('Hiphop'),
('Rock'),
('Progressive rock'),
('Heavy Metal'),
('Progressive metal'),
('Djent');





