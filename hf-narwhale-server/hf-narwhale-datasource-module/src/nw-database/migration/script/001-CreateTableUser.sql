CREATE TABLE IF NOT EXISTS NW_USER (
	ID bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
    ID_REGISTRY bigint DEFAULT NULL,
    BLOCKED bit NOT NULL DEFAULT 0,
	INSERT_DATE timestamp NOT NULL DEFAULT current_timestamp,
	UPDATE_DATE timestamp ON UPDATE current_timestamp 
);