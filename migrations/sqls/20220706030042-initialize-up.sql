CREATE TABLE books2
(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT "id of the book",
    name VARCHAR(255) NOT NULL COMMENT "name of the book",
    year INT NOT NULL COMMENT "publication's year of the book",
    category VARCHAR(255) COMMENT "category of the book"
)