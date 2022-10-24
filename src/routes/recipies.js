const router = require("express").Router();

module.exports = db => {
  router.get("/recipies", (req, res) => {
    db.query(`SELECT * FROM recipies`).then(({ rows: recipies }) => {
      res.json(recipies);
    });
  });

  return router;
}