const router = require("express").Router();
const Application = require("../models/Application.model.js");

// We are prefixed with /api/applications

router.get("/joboffers/:id", async (req, res, next) => {
  try {
    const applications = await Application.find({
      jobOffer: req.params.id,
    });
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

router.post("/joboffers/:id", async (req, res, next) => {
  try {
    const newApplication = await Application.create(req.body);
    res.json({
      message: "Successfully applied",
      application: newApplication,
    });
  } catch (error) {
    next(error);
  }
});

// GET /api/applications/job-offers/:id // get applications for a job offer
// POST /api/applications/job-offers/:id // apply to a job offer

module.exports = router;
