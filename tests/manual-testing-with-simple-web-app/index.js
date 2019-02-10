 const ChaosMonkey = require("../..");
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

ChaosMonkey.initialize(app);

var router = express.Router();

router.post("/api/products", (req, res) => {
  console.log(`The product is ${req.body}`);
  res.status(200).json(req.body);
});

router.get("/api/products", (req, res) => {
  console.log(`Get product was invoked`);
  res.status(200).json({});
});


process.on("uncaughtException", error => {
  console.log(`Uncaught error is now handled error`);
  console.log(error);
});

process.on("unhandledRejection", (reason, p) => {
  console.log(`Uncaught promise is now handled error`);
  console.log(p);
});

app.use(router);