DROP TABLE IF EXISTS saved_recipies CASCADE;
DROP TABLE IF EXISTS grocery_list_ingredients CASCADE;
DROP TABLE IF EXISTS ingredients_recipies CASCADE;
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
  description TEXT NOT NULL,
  instructions TEXT NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE grocery_list (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE ingredients_recipies (
  ingredient_id INTEGER NOT NULL,
  recipe_id INTEGER NOT NULL,
  PRIMARY KEY (ingredient_id, recipe_id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON UPDATE CASCADE,
  FOREIGN KEY (recipe_id) REFERENCES recipies(id) ON UPDATE CASCADE
);

CREATE TABLE grocery_list_ingredients (
  ingredient_id INTEGER NOT NULL,
  grocery_list_id INTEGER NOT NULL,
  PRIMARY KEY (ingredient_id, grocery_list_id),
  FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON UPDATE CASCADE,
  FOREIGN KEY (grocery_list_id) REFERENCES grocery_list(id) ON UPDATE CASCADE
);