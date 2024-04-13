const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", require("./auth.routes.js"));
router.use("/users", require("./users.routes.js"));
router.use("/companies", require("./companies.routes.js"));
router.use("/joboffers", require("./joboffers.routes.js"));

module.exports = router;
