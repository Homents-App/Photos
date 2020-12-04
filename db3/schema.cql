CREATE KEYSPACE IF NOT EXISTS SDC

USE SDC;

CREATE TABLE IF NOT EXISTS listings (
	id INT PRIMARY KEY,
  address VARCHAR(50),
  state VARCHAR(15),
  city VARCHAR(30),
  zipCode INT,
  price INT,
  beds INT,
  baths INT,
  photos set<VARCHAR(70)>
);

