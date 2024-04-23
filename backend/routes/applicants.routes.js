const router = require("express").Router();
const Applicant = require("../models/Applicant.model.js");
const Application = require("../models/Application.model.js");
const Favorite = require("../models/Favorite.model.js");
const fileUploader = require("../config/cloudinaryConfig.js");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const { isValidObjectId } = require("mongoose");

// We are prefixed with /api/applicants

// Get one applicant
// router.get("/:applicantId[a-f0-9]{24,}", async (req, res, next) => {
router.get("/:applicantId", async (req, res, next) => {
  if (!isValidObjectId(req.params.applicantId)) {
    return next("route");
  }
  try {
    const oneApplicant = await Applicant.findById(req.params.applicantId);
    res.json(oneApplicant);
  } catch (error) {
    next(error);
  }
});

// Edit one applicant
router.put(
  "/:applicantId",
  fileUploader.single("image"),
  async (req, res, next) => {
    try {
      const { email, firstName, lastName } = req.body;
      let fieldsToUpdate = { email, firstName, lastName };

      if (req.file) {
        fieldsToUpdate.image = req.file.path;
      }

      const updatedApplicant = await Applicant.findByIdAndUpdate(
        req.params.applicantId,
        fieldsToUpdate,
        { new: true }
      );
      res.json(updatedApplicant);
    } catch (error) {
      next(error);
    }
  }
);

// Delete one applicant
router.delete("/:applicantId", async (req, res, next) => {
  try {
    await Applicant.findByIdAndDelete(req.params.applicantId);
    res.status(204).json({ message: "Applicant successfuly deleted" });
  } catch (error) {
    next(error);
  }
});

// ----- APPLICATIONS -----

// Get all applications for an applicant
router.get("/applications", isAuthenticated, async (req, res, next) => {
  try {
    const applications = await Application.find({
      applicant: req.currentUserId,
    })
      .populate({
        path: "jobOffer",
        populate: {
          path: "company",
        },
      })
      .sort({ updatedAt: -1 });
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

// Get one favorite of a user for a specific job offer
router.get(
  "/:jobOfferId/favorites",
  isAuthenticated,
  async (req, res, next) => {
    try {
      const jobOfferId = req.params.jobOfferId;
      const userId = req.user.id;
      const favorite = await Favorite.find({
        jobOffer: jobOfferId,
        applicant: userId,
      });

      res.json({ isFavorite: favorite });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
