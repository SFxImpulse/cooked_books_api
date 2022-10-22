const router = require("express").Router();

module.exports = db => {
  router.get("/grocery_list", (req, res) => {
    db.query(
      `
      SELECT
        grocery_list_ingredients.grocery_list_id AS grocery_list_id,
        array_agg(ingredients.name) AS ingredients
      FROM grocery_list_ingredients
      JOIN ingredients ON ingredients.id = grocery_list_ingredients.ingredient_id
      GROUP BY grocery_list_id
      ORDER BY grocery_list_id
      `
    ).then(({ rows: grocery_list }) => {
      res.json(grocery_list);
    });
  });

  return router;
}