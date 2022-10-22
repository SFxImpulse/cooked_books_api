const router = require("express").Router();

module.exports = db => {
  router.get("/recipies", (req, res) => {
    db.query(
      `
      SELECT
        ingredients_recipies.recipe_id AS recipe_id,
        recipies.name AS recipe_name,
        recipies.description AS description,
        array_agg(DISTINCT ingredients.id) AS ingredients_id,
        array_agg(DISTINCT ingredients.name) AS ingredients_name,
        recipies.instructions AS instructions,
        recipies.image AS recipe_image
      FROM recipies
      JOIN ingredients_recipies ON ingredients_recipies.recipe_id = recipies.id
      JOIN ingredients ON ingredients.id = ingredients_recipies.ingredient_id
      GROUP BY recipe_id, recipe_name, description, instructions, recipe_image
      ORDER BY recipe_id
      `
    ).then(({ rows: recipies }) => {
      res.json(recipies);
    });
  });

  return router;
}