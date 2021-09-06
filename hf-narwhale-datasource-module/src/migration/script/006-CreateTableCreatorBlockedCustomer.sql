CREATE TABLE IF NOT EXISTS NW_CREATOR_BLOCKED_CUSTOMER (
	ID bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
	ID_CREATOR bigint NOT NULL,
	ID_CUSTOMER bigint NOT NULL,
	REASON varchar(500) NOT NULL,
	INSERT_DATE timestamp NOT NULL DEFAULT current_timestamp,
	UPDATE_DATE timestamp ON UPDATE current_timestamp,
	FOREIGN KEY(ID_CREATOR) REFERENCES NW_CREATOR(ID),
	FOREIGN KEY(ID_CUSTOMER) REFERENCES NW_CUSTOMER(ID),
	UNIQUE KEY `CREATOR_BLOCKED_CUSTOMER` (`ID_CREATOR`,`ID_CUSTOMER`)
);