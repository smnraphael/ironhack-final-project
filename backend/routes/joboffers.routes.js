const router = require("express").Router();
const JobOffer = require("../models/JobOffer.model.js");

// We are prefixed with /api/joboffers

router.get("/", async (req, res, next) => {
  try {
    const allJobOffers = await JobOffer.find({});
    res.json(allJobOffers);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const oneJobOffer = await JobOffer.findById(req.params.id);
    res.json(oneJobOffer);
  } catch (error) {
    next(error);
  }
});

router.get("/companies/:id", async (req, res, next) => {
  try {
    const jobOffers = await JobOffer.find({
      company: req.params.id,
    });
    res.json(jobOffers);
  } catch (error) {
    next(error);
  }
});

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

router.patch("/:id", async (req, res, next) => {
  try {
    const updatedJobOffer = await JobOffer.findByIdAndUpdate(
      req.params.id,
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

module.exports = router;
