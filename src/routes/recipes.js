const router = require("express").Router();

module.exports = (db, updateFavourites) => {
  router.get("/recipes", (req, res) => {
    db.query(`SELECT * FROM recipes`).then(({ rows: recipes }) => {
      res.json(recipes);
    });
  });

  router.put("/recipes/:id", (req, res) => {

    const { favourite } = req.body.favourite;
    
    console.log(req.body);
    console.log(req.params);

    if (!favourite) {
      db.query(`UPDATE recipes SET favourite = true WHERE id = $1::integer`,
        [req.params.id]
      )
        .then(() => {
          setTimeout(() => {
            res.status(204).json({});
            updateFavourites(req.params.id);
          }, 1000)
        })
        .catch(error => console.log(error));
    } else {
      db.query(`UPDATE recipes SET favourite = false WHERE id = $1::integer`,
        [req.params.id]
      )
        .then(() => {
          setTimeout(() => {
            res.status(204).json({});
            updateFavourites(req.params.id);
          }, 1000)
        })
        .catch(error => console.log(error));
    }
  });

  return router;
}