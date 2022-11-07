const router = require("express").Router();

module.exports = db => {
  router.get("/recipes", (req, res) => {
    db.query(`SELECT * FROM recipes`).then(({ rows: recipes }) => {
      res.json(recipes);
    });
  });

  return router;
}