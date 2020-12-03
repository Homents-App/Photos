
-- Will have to change SDC if you want to create a different database name
\c SDC

CREATE TABLE listings (
	id SERIAL PRIMARY KEY NOT NULL,
  address VARCHAR(50) NOT NULL,
  state VARCHAR(15) NOT NULL,
  city VARCHAR(30) NOT NULL,
  zipCode INT NOT NULL,
  price INT,
  beds INT,
  baths INT,
  photos VARCHAR(100)[]
);
