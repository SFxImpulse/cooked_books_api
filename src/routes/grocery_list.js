const router = require("express").Router();

module.exports = (db, updateGroceryList) => {
  router.get("/grocery_list", (req, res) => {
    db.query(
      `SELECT * FROM grocery_list`
    ).then(({ rows: grocery_list }) => {
      res.json(
        grocery_list.reduce(
          (previous, current) => ({ ...previous, [current.id]: current }),
          {}
        )
      );
    });
  });

  router.put("/grocery_list/:id", (req, res) => {

    const { id, name } = req.body.ingredients;

    db.query(
      `
      INSERT INTO grocery_list (ingredient_id)
      `      
    )
  })

  return router;
}