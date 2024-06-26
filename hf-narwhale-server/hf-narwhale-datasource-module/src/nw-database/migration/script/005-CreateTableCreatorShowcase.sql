CREATE TABLE IF NOT EXISTS NW_CREATOR_SHOWCASE (
	ID bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
	ID_CREATOR bigint UNIQUE KEY NOT NULL,
	CAPTION varchar(200) NOT NULL,
	TEXT varchar(1000) DEFAULT NULL,
	INSERT_DATE timestamp NOT NULL DEFAULT current_timestamp,
	UPDATE_DATE timestamp ON UPDATE current_timestamp,
	FOREIGN KEY(ID_CREATOR) REFERENCES NW_CREATOR(ID)
);