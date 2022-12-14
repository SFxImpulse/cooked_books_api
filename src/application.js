const fs = require("fs");
const path = require("path");

const express = require("express");
const bodyparser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

const db = require("./db");

const ingredients = require("./routes/ingredients");
const recipes = require("./routes/recipes");
const grocery_list = require("./routes/grocery_list");
const favourites = require("./routes/favourites");

function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      file,
      {
        encoding: "utf-8"
      },
      (error, data) => {
        if (error) return reject(error);
        resolve(data);
      }
    );
  });
}

module.exports = function application(
  ENV,
  actions = { updateGroceryList: () => {}, updateFavourites: () => {} }
) {
  app.use(cors());
  app.use(helmet());
  app.use(bodyparser.json());

  app.use("/api", ingredients(db));
  app.use("/api", recipes(db, actions.updateFavourites));
  app.use("/api", grocery_list(db, actions.updateGroceryList));
  app.use("/api", favourites(db));

  if (ENV === "development") {
    Promise.all([
      read(path.resolve(__dirname, `db/schema/create.sql`)),
      read(path.resolve(__dirname, `db/schema/development.sql`))
    ])
      .then(([create, seed]) => {
        app.get("/api/debug/reset", (request, response) => {
          db.query(create)
            .then(() => db.query(seed))
            .then(() => {
              console.log("Database Reset");
              response.status(200).send("Database Reset");
            });
        });
      })
      .catch(error => {
        console.log(`Error setting up the reset route: ${error}`);
      });
  }
  
  app.close = function() {
    return db.end();
  };

  return app;
};