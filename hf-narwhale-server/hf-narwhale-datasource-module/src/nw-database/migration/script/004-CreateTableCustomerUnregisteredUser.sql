CREATE TABLE IF NOT EXISTS NW_CUSTOMER_UNREGISTERED_USER (
	ID bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
	ID_CUSTOMER bigint UNIQUE KEY NOT NULL,
	EMAIL_ADDRESS varchar(256) UNIQUE KEY NOT NULL,
	INSERT_DATE timestamp NOT NULL DEFAULT current_timestamp,
	UPDATE_DATE timestamp ON UPDATE current_timestamp,
	FOREIGN KEY(ID_CUSTOMER) REFERENCES NW_CUSTOMER(ID)
);