CREATE DATABASE IF NOT EXISTS crud_poc;

USE crud_poc;

DROP TABLE IF EXISTS person;

CREATE TABLE person (
    id         BIGINT       NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name  VARCHAR(100) NOT NULL,
    age        TINYINT      NOT NULL,
    PRIMARY KEY (id)
);
