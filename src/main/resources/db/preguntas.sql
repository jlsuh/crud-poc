CREATE DATABASE IF NOT EXISTS customers;

USE customers;

DROP TABLE IF EXISTS order;
DROP TABLE IF EXISTS customer;

CREATE TABLE customer (
    id              BIGINT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    customer_name   VARCHAR(100)    NOT NULL,
    contact_name    VARCHAR(100)    NOT NULL,
    country         VARCHAR(100)    NOT NULL
);

CREATE TABLE customer_order (
    id          BIGINT      NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_date  TIMESTAMP   NOT NULL,
    customer_id BIGINT      NOT NULL,
    FOREIGN KEY (customer_id)
        references customer(id)
        on update cascade
        on delete restrict
);

INSERT INTO customer (customer_name, contact_name, country)
VALUES ('Alfreds Futterkiste', 'Maria Anders', 'Germany')
    , ('Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Mexico')
    , ('Antonio Moreno Taquería', 'Antonio Moreno', 'Mexico')
;

INSERT INTO customer_order (order_date, customer_id)
VALUES ('2022-08-22 21:06:30', 1)
    , ('2022-08-29 11:06:30', 2)
    , ('2022-06-03 12:06:30', 1)
    , ('2022-02-22 19:22:04', 3)
;
