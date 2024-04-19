const router = require("express").Router();
const JobOffer = require("../models/JobOffer.model.js");
const Application = require("../models/Application.model.js");
const isAuthenticated = require("../middlewares/isAuthenticated.js");

// We are prefixed with /api/joboffers

// Get all job offers
router.get("/", async (req, res, next) => {
  try {
    const search = handleSearch(req.query);
    const allJobOffers = await JobOffer.find(search).populate("company");
    res.json(allJobOffers);
  } catch (error) {
    next(error);
  }

  function handleSearch(query) {
    const search = {};
    if (query.position) {
      search.position = new RegExp(query.position, "i");
    }
    console.log(query);
    return search;
  }
});

// Get one job offer
router.get("/:jobOfferId", async (req, res, next) => {
  try {
    const oneJobOffer = await JobOffer.findById(req.params.jobOfferId).populate(
      "company"
    );
    res.json(oneJobOffer);
  } catch (error) {
    next(error);
  }
});

// Post a new job offer
router.post("/", isAuthenticated, async (req, res, next) => {
  try {
    const newJobOffer = await JobOffer.create({
      ...req.body,
      company: req.currentUserId,
    });
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
