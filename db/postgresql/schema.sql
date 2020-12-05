
-- Will have to change SDC if you want to create a different database name

DROP DATABASE IF EXISTS SDC;
CREATE DATABASE SDC;

\c SDC

CREATE TABLE IF NOT EXISTS listings (
	id INT PRIMARY KEY NOT NULL,
  address VARCHAR(50) NOT NULL,
  baths INT,
  beds INT,
  city VARCHAR(30) NOT NULL,
  price INT,
  state VARCHAR(15) NOT NULL,
  zipCode INT NOT NULL
);

CREATE TABLE IF NOT EXISTS photos (
  id INT PRIMARY KEY NOT NULL REFERENCES listings (id),
  bathroom VARCHAR(80),
  bedroom VARCHAR(80),
  bedroom2 VARCHAR(80),
  house VARCHAR(80),
  house2 VARCHAR(80),
  house3 VARCHAR(80),
  kitchen VARCHAR(80),
  kitchen2 VARCHAR(80),
  livingroom VARCHAR(80),
  livingroom2 VARCHAR(80)
);

-- Run these commands to seed the database with your generated csv files
-- COPY listings FROM <path to your csv file> CSV HEADER;
-- COPY photos FROM <path to your csv file> CSV HEADER;
