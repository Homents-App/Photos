CREATE KEYSPACE IF NOT EXISTS SDC
WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE SDC;

CREATE TABLE IF NOT EXISTS listings (
	id int,
  address varchar,
  baths int,
  beds int,
  city text,
  price int,
  state text,
  zipCode int,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS photos (
	id int,
  bathroom varchar,
  bathroom2 varchar,
  bedroom varchar,
  bedroom2 varchar,
  bedroom3 varchar,
  house varchar,
  house2 varchar,
  house3 varchar,
  kitchen varchar,
  kitchen2 varchar,
  livingroom varchar,
  livingroom2 varchar,
  PRIMARY KEY (id)
);
