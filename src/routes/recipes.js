const router = require("express").Router();

module.exports = (db, updateFavourites) => {
  router.get("/recipes", (req, res) => {
    db.query(`SELECT * FROM recipes`).then(({ rows: recipes }) => {
      res.json(recipes);
    });
  });

  router.put("/recipes/:id", (req, res) => {

    const favourite = req.body.favourite;
    
    console.log(req.body.favourite);
    console.log(req.params);

    db.query(`UPDATE recipes SET favourite = $1::boolean WHERE id = $2::integer`,
      [favourite, Number(req.params.id)]
    )
      .then(() => {
        setTimeout(() => {
          res.status(204).json({});
          updateFavourites(req.params.id);
        }, 1000)
      })
      .catch(error => console.log(error));
  });

  return router;
}