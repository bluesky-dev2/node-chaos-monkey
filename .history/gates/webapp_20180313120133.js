const ChaosControl = require("../chaos-control");

module.exports = expressApp => {
  const router = expressApp.Router();

  router.post("/chaos/pranks", (req, res) => {
    console.log(`Chaos gate was asked to start a new prank ${req.body}`);
    new ChaosControl().startPrank(req.body, expressApp);
    res.status(200).json({status: "OK"});
  });

  process.on("uncaughtException", error => {
    console.log(`Uncaught error is now handled error`);
    console.log(error);
  });

  process.on("unhandledRejection", (reason, p) => {
    console.log(`Uncaught promise is now handled error`);
    console.log(error);
  });

  app.use(router);
};
