const router = require("express").Router();
const Applicant = require("../models/Applicant.model.js");
const fileUploader = require("../config/cloudinaryConfig.js");

// We are prefixed with /api/applicants

// Get one applicant
router.get("/:applicantId", async (req, res, next) => {
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

module.exports = router;
