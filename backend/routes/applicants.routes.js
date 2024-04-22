const router = require("express").Router();
const Applicant = require("../models/Applicant.model.js");
const Application = require("../models/Application.model.js");
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
  fileUploader.single("avatar"),
  async (req, res, next) => {
    try {
      const filePath = req.file.path;
      const updatedApplicant = await Applicant.findByIdAndUpdate(
        req.params.applicantId,
        {
          email,
          password: hashedPassword,
          firstName,
          lastName,
          avatar: filePath,
        },
        {
          new: true,
        }
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
      .populate("jobOffer")
      .sort({ updatedAt: -1 });
    res.json(applications);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
