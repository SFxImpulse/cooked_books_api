const router = require("express").Router();

module.exports = db => {
  router.get("/favourites", (req, res) => {
    db.query(`SELECT * FROM favourites`).then(({ rows: favourites }) => {
      res.json(favourites);
    });
  });

  return router;
};