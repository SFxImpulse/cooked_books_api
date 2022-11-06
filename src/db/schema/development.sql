INSERT INTO ingredients (name, type, foodGroup, image)
VALUES
  ('Milk', 'Liquid', 'Dairy', 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWlsa3xlbnwwfHwwfHw%3D&w=1000&q=80'),
  ('Egg', 'Quantity', 'Protein', 'https://www.australianeggs.org.au/assets/tiles/How-chickens-make-eggs__FocusFillWyIwLjAwIiwiMC4wMCIsMTIwMCw2Mjhd.jpg'),
  ('Flour', 'Liquid', 'Grain', 'https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/All-about-grain-flours-resized.jpg');

INSERT INTO recipies (name, ingredients, description, instructions, image)
VALUES
  ('Pancakes', '[{"id": 1, "name": "Milk"}, {"id": 2, "name": "Egg"}, {"id": 3, "name": "Flour"}]', 'These are Pancakes', 'Make pancakes', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg'),
  ('Omelette', '[{"id": 1, "name": "Milk"}, {"id": 2, "name": "Egg"}]', 'This is an Omelette', 'Make an Omelette', 'https://www.simplyrecipes.com/thmb/88DRjIp5gbMQt7vSQCADPptJoAw=/2000x1334/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__10__HT-Make-an-Omelet-LEAD-HORIZONTAL-17cd2e469c4a4ccbbd1273a7cae6425c.jpg');

INSERT INTO grocery_list (name)
VALUES
  ('My Grocery List');

-- INSERT INTO ingredients_grocery_list (ingredient_id, grocery_list_id)
-- VALUES
  -- (1, 1), (2, 1);