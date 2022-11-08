const router = require("express").Router();

module.exports = (db, updateFavourites) => {
  router.get("/recipes", (req, res) => {
    db.query(`SELECT * FROM recipes`).then(({ rows: recipes }) => {
      res.json(recipes);
    });
  });

  // router.put("/api/recipes/:id", (req, res) => {

  //   const {  }
  // })

  return router;
}