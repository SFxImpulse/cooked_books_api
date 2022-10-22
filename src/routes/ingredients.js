const router = require("express").Router();

module.exports = db => {
  router.get("/ingredients", (req, res) => {
    db.query(`SELECT * FROM ingredients`).then(({ rows: ingredients }) => {
      res.json(ingredients);
    });
  });

  return router;
}