const router = require("express").Router();
const JobOffer = require("../models/JobOffer.model.js");
const Application = require("../models/Application.model.js");

// We are prefixed with /api/joboffers

// Get all job offers
router.get("/", async (req, res, next) => {
  try {
    const allJobOffers = await JobOffer.find({});
    res.json(allJobOffers);
  } catch (error) {
    next(error);
  }
});

// Get one job offer
router.get("/:jobOfferId", async (req, res, next) => {
  try {
    const oneJobOffer = await JobOffer.findById(req.params.jobOfferId);
    res.json(oneJobOffer);
  } catch (error) {
    next(error);
  }
});

// Post a new job offer
router.post("/", async (req, res, next) => {
  try {
    const newJobOffer = await JobOffer.create(req.body);
    res.json({
      message: "Job offer successfully posted",
      jobOffer: newJobOffer,
    });
  } catch (error) {
    next(error);
  }
});

// Archive one job offer
router.patch("/:jobOfferId", async (req, res, next) => {
  try {
    const updatedJobOffer = await JobOffer.findByIdAndUpdate(
      req.params.jobOfferId,
      req.body,
      { next: true }
    );
    res.json({
      message: "Job offer successfully archived",
      jobOffer: updatedJobOffer,
    });
  } catch (error) {
    next(error);
  }
});

// ----- APPLICATIONS -----

// Get all applications for a job offer
router.get("/:jobOfferId/applications", async (req, res, next) => {
  try {
    const applications = await Application.find({
      jobOffer: req.params.jobOfferId,
    });
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
