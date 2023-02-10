// DEPENDENCIES
const express = require("express");
const breadsController = require("./controllers/breads_controller.js");
const reactViewsEngine = require("express-react-views").createEngine();

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// /breads
app.use("/breads", breadsController);

// MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", reactViewsEngine);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads");
});

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
