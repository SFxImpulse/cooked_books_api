INSERT INTO ingredients (name, type)
VALUES
  ('Chicken Wings', 'Meat'),
  ('Garlic Powder', 'Spice'),
  ('Garlic Paste', 'Paste'),
  ('Frank''s Red Hot', 'Sauce'),
  ('Baking Powder', 'Baking Formula'),
  ('Light Brown Sugar', 'Spice'),
  ('Black Pepper', 'Spice'),
  ('Salt', 'Spice'),
  ('Unsalted Butter', 'Dairy'),
  ('Parmesan Cheese', 'Dairy');

INSERT INTO recipes (name, ingredients, description, instructions, image)
VALUES
  ('Garlic Buffalo Parmesan Chicken Wings', '[{"id": 1, "name": "Chicken Wings"}, {"id": 2, "name": "Garlic Powder"}, {"id": 3, "name": "Garlic Paste"}, {"id": 4, "name": "Frank''s Red Hot"}, {"id": 5, "name": "Baking Powder"}, {"id": 6, "name": "Light Brown Sugar"}, {"id": 7, "name": "Black Pepper"}, {"id": 8, "name": "Salt"}, {"id": 9, "name": "Unsalted Butter"}, {"id": 10, "name": "Parmesan"}]', 'Buffalo Seasoned Chicken Wings are a staple American invention, these wings come with a tangy garlic flavour and crispy parmesan coating in every bite.', 'Preheat Oven to 425°, line backing sheet with foil and place a wire rack on top. Pat wings dry, place them in a large bowl and combine the wings with baking powder and seasonings and bake for 40 minutes, flipping halfway through. Add the sauce, butter, garlic paste, and cheese to a medium saucepan and boil, reducing to a simmer and stirring until combined. Combine the wings with the sauce in a bowl, shaking until each wing is coated entirely and serve.', 'https://i0.wp.com/www.jaylynnlittle.com/wp-content/uploads/2020/06/BGPwings-6887-scaled.jpg?resize=1024%2C1536&ssl=1');

INSERT INTO grocery_list (name)
VALUES
  ('My Grocery List');

-- INSERT INTO ingredients_grocery_list (ingredient_id, grocery_list_id)
-- VALUES
  -- (1, 1), (2, 1);