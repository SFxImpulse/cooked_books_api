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
      res.json(grocery_list);
    });
  });

  router.put("/grocery_list/:id", (req, res) => {

    const id = req.body.id

    console.log("BODY:", req.body, "PARAMS:", req.params);

    db.query(
      `
        INSERT INTO ingredients_grocery_list (ingredient_id, grocery_list_id) VALUES ($1::integer, $2::integer)
        ON CONFLICT (grocery_list_id) DO
        UPDATE SET ingredient_id = $1::integer, grocery_list_id = $2::integer
      `,
        [id, Number(req.params.id)]
    )
      .then(() => {
        updateGroceryList(id, Number(req.params.id))
      })
      .catch(error => console.log(error));
  });

  // router.delete("/grocery_list/:id")

  return router;
}