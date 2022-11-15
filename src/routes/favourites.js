const router = require("express").Router();

module.exports = db => {
  router.get("/favourites", (req, res) => {
    db.query(`SELECT array_agg(recipe_id) AS recipe_ids FROM favourites`).then(({ rows: favourites }) => {
      res.json(favourites);
    });
  });

  router.post("/favourites/:id", (req, res) => {

    console.log(req.body);

    db.query(`INSERT INTO favourites (recipe_id) VALUES ($1::integer)`,
    [])
  })

  return router;
};