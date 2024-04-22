const router = require("express").Router();
const fileUploader = require("../config/cloudinaryConfig.js");
const Company = require("../models/Company.model.js");
const JobOffer = require("../models/JobOffer.model.js");

// We are prefixed with /api/companies

// Get all companies
router.get("/", async (req, res, next) => {
  try {
    const allCompanies = await Company.find({});
    res.json(allCompanies);
  } catch (error) {
    next(error);
  }
});

// Get one company (private)
router.get("/:companyId", async (req, res, next) => {
  try {
    const oneCompany = await Company.findById(req.params.companyId);
    res.json(oneCompany);
  } catch (error) {
    next(error);
  }
});

// Edit one company (private)
router.put(
  "/:companyId",
  fileUploader.single("image"),
  async (req, res, next) => {
    try {
      const { name, headquarters, numberOfEmployees, website, description } =
        req.body;
      let fieldsToUpdate = {
        name,
        headquarters,
        numberOfEmployees,
        website,
        description,
      };

      if (req.file) {
        fieldsToUpdate.image = req.file.path;
      }
      const updatedCompany = await Company.findByIdAndUpdate(
        req.params.companyId,
        fieldsToUpdate,
        { new: true }
      );
      res.json(updatedCompany);
    } catch (error) {
      next(error);
    }
  }
);

// Get one company and related job offers (public)
router.get("/profile/:companyId", async (req, res, next) => {
  try {
    const company = await Company.findById(req.params.companyId);
    const jobOffers = await JobOffer.find({
      company: req.params.companyId,
    }).populate("company");
    res.json({ jobOffers, company });
  } catch (error) {
    next(error);
  }
});

// Delete one company
router.delete("/:companyId", async (req, res, next) => {
  try {
    await Company.findByIdAndDelete(req.params.companyId);
    res.status(204).json({ message: "Company successfuly deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
