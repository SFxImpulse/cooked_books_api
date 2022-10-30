const router = require("express").Router();

module.exports = (db, updateGroceryList) => {
  router.get("/grocery_list", (req, res) => {
    db.query(
      `
      SELECT
        grocery_list.id,
        grocery_list.name,
        array_agg(json_build_object('id', ingredients_grocery_list.ingredient_id, 'name', ingredients.name)) AS ingredients
      FROM grocery_list
      JOIN ingredients_grocery_list ON ingredients_grocery_list.grocery_list_id = grocery_list.id
      JOIN ingredients ON ingredients.id = ingredients_grocery_list.ingredient_id
      GROUP BY grocery_list.id
      ORDER BY grocery_list.id
      `
    ).then(({ rows: grocery_list }) => {
      res.json(
        grocery_list.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  // router.put("/grocery_list/:id", (req, res) => {

  //   const { id, name } = req.body.ingredients;

  //   db.query(
  //     `
  //     INSERT INTO ingredients_grocery_list (ingredient_id)
  //     `      
  //   )
  // })

  return router;
}