const router = require("express").Router();
const Application = require("../models/Application.model.js");

// We are prefixed with /api/applications

// Get all applications
router.get("/", async (req, res, next) => {
  try {
    const applications = await Application.find({});
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

// Get one application
router.get("/:applicationId", async (req, res, next) => {
  try {
    const oneApplication = await Application.findById(req.params.applicationId);
    res.json(oneApplication);
  } catch (error) {
    next(error);
  }
});

// Post one application
router.post("/:applicantId/:jobOfferId", async (req, res, next) => {
  try {
    const newApplication = await Application.create({
      ...req.body,
      applicant: req.params.applicantId,
      jobOffer: req.params.jobOfferId,
    });
    res.json({
      message: "Successfully applied",
      application: newApplication,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
