const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", require("./auth.routes.js"));
router.use("/users", require("./users.routes.js"));

module.exports = router;
