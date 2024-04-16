const router = require("express").Router();
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
router.put("/:companyId", async (req, res, next) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.companyId,
      req.body,
      { new: true }
    );
    res.json(updatedCompany);
  } catch (error) {
    next(error);
  }
});

// Get one company and related job offers (public)
router.get("/profile/:companyId", async (req, res, next) => {
  try {
    const oneCompany = await Company.findById(req.params.companyId);
    const jobOffers = await JobOffer.find({
      company: req.params.companyId,
    });
    res.json({ oneCompany, jobOffers });
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
