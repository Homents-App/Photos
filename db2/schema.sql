
-- Will have to change SDC if you want to create a different database name

DROP DATABASE IF EXISTS SDC;
CREATE DATABASE SDC;

\c SDC

CREATE TABLE IF NOT EXISTS listings (
	id INT PRIMARY KEY NOT NULL,
  address VARCHAR(50) NOT NULL,
  state VARCHAR(15) NOT NULL,
  city VARCHAR(30) NOT NULL,
  zipCode INT NOT NULL,
  price INT,
  beds INT,
  baths INT
);

CREATE TABLE IF NOT EXISTS photos (
  id INT PRIMARY KEY NOT NULL REFERENCES listings (id),
  house VARCHAR(80),
  house2 VARCHAR(80),
  house3 VARCHAR(80),
  bedroom VARCHAR(80),
  bedroom2 VARCHAR(80),
  bedroom3 VARCHAR(80),
  kitchen VARCHAR(80),
  kitchen2 VARCHAR(80),
  livingroom VARCHAR(80),
  livingroom2 VARCHAR(80),
  bathroom VARCHAR(80),
  bathroom2 VARCHAR(80)
);