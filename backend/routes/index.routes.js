const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth", require("./auth.routes.js"));
router.use("/applicants", require("./applicants.routes.js"));
router.use("/companies", require("./companies.routes.js"));
router.use("/joboffers", require("./joboffers.routes.js"));
router.use("/applications", require("./applications.routes.js"));
router.use("/favorites", require("./favorites.routes.js"));

module.exports = router;
