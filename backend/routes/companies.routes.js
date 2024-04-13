const router = require("express").Router();
const Company = require("../models/Company.model.js");

// We are prefixed with /api/companies

router.get("/", async (req, res, next) => {
  try {
    const allCompanies = await Company.find({});
    res.json(allCompanies);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const oneCompany = await Company.findById(req.params.id);
    res.json(oneCompany);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCompany);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Company successfuly deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
