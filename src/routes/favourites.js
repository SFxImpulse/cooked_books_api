const router = require("express").Router();

module.exports = db => {
  router.get("/favourites", (req, res) => {
    db.query(`SELECT array_agg(recipe_id) AS recipe_ids FROM favourites`).then(({ rows: favourites }) => {
      res.json(favourites);
    });
  });

  return router;
};