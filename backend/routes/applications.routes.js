const router = require("express").Router();
const Application = require("../models/Application.model.js");
const fileUploader = require("../config/cloudinaryConfig.js");

// We are prefixed with /api/applications

// Get all applications
router.get("/", async (req, res, next) => {
  try {
    const applications = await Application.find({}).sort({ updatedAt: -1 });
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
router.post(
  "/:applicantId/:jobOfferId",
  fileUploader.single("resume"),
  async (req, res, next) => {
    try {
      const { firstName, lastName, email, coverLetter, socialNetwork } =
        req.body;
      let fieldsToUpdate = {
        firstName,
        lastName,
        email,
        coverLetter,
        socialNetwork,
      };

      if (req.file) {
        fieldsToUpdate.resume = req.file.path;
      }

      const newApplication = await Application.create({
        ...fieldsToUpdate,
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
  }
);

// Edit one application (update status)
router.patch("/:applicationId", async (req, res, next) => {
  try {
    const updatedApplication = await Application.findByIdAndUpdate(
      req.params.applicationId,
      req.body
    );
    res.json({
      message: "Successfuly updated status",
      application: updatedApplication,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
