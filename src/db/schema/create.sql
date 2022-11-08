DROP TABLE IF EXISTS ingredients_grocery_list CASCADE;
DROP TABLE IF EXISTS grocery_list CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;
DROP TABLE IF EXISTS ingredients CASCADE;

CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  foodGroup VARCHAR(255) NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  ingredients jsonb,
  description TEXT NOT NULL,
  instructions TEXT NOT NULL,
  image TEXT NOT NULL,
  favourite BOOLEAN DEFAULT FALSE
);

CREATE TABLE grocery_list (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE ingredients_grocery_list (
  ingredient_id INTEGER REFERENCES ingredients(id) ON DELETE CASCADE,
  grocery_list_id INTEGER REFERENCES grocery_list(id) ON DELETE CASCADE,
  PRIMARY KEY (ingredient_id, grocery_list_id)
);