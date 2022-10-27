DROP TABLE IF EXISTS favourites CASCADE;
DROP TABLE IF EXISTS grocery_list CASCADE;
DROP TABLE IF EXISTS recipies CASCADE;
DROP TABLE IF EXISTS ingredients CASCADE;

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  foodGroup VARCHAR(255) NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE recipies (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  ingredients jsonb,
  description TEXT NOT NULL,
  instructions TEXT NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE grocery_list (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  ingredients jsonb
);