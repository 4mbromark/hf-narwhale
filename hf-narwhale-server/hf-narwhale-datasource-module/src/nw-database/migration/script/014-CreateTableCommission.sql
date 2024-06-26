CREATE TABLE IF NOT EXISTS NW_COMMISSION (
	ID bigint PRIMARY KEY NOT NULL AUTO_INCREMENT,
    ID_CREATOR bigint NOT NULL,
    ID_CUSTOMER bigint,
    ID_TEMPLATE bigint,
    TYPE varchar(20) NOT NULL,
    TITLE varchar(200) NOT NULL,
    DESCRIPTION varchar(10000) NOT NULL,
    STATUS varchar(30) NOT NULL,
    PRIORITY varchar(20) DEFAULT NULL,
	INSERT_DATE timestamp NOT NULL DEFAULT current_timestamp,
	UPDATE_DATE timestamp ON UPDATE current_timestamp,
    FOREIGN KEY(ID_CREATOR) REFERENCES NW_CREATOR(ID),
    FOREIGN KEY(ID_CUSTOMER) REFERENCES NW_CUSTOMER(ID),
    FOREIGN KEY(ID_TEMPLATE) REFERENCES NW_CREATOR_COMMISSION_TEMPLATE(ID)
);