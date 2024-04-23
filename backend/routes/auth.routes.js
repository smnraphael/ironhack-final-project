const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model.js");
const Applicant = require("../models/Applicant.model.js");
const Company = require("../models/Company.model.js");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const SALT = 12;

// We are prefixed with /api/auth

// Applicant Sign up
router.post("/applicant/signup", async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const foundApplicant = await Applicant.findOne({ email });
    if (foundApplicant) {
      return res.status(400).json({ message: "This email is already used" });
    }
    const hashedPassword = await bcrypt.hash(password, SALT);
    const createdApplicant = await Applicant.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    res
      .status(201)
      .json({ message: "User account created", id: createdApplicant._id });
  } catch (error) {
    next(error);
  }
});

// Company Sign up
router.post("/company/signup", async (req, res, next) => {
  try {
    const {
      email,
      password,
      name,
      headquarters,
      numberOfEmployees,
      website,
      description,
    } = req.body;
    const foundCompany = await Company.findOne({ email });
    if (foundCompany) {
      return res.status(400).json({ message: "This email is already used" });
    }
    const hashedPassword = await bcrypt.hash(password, SALT);
    const createdCompany = await Company.create({
      email,
      password: hashedPassword,
      name,
      headquarters,
      numberOfEmployees,
      website,
      description,
    });
    res
      .status(201)
      .json({ message: "Company account created", id: createdCompany._id });
  } catch (error) {
    next(error);
  }
});

// User Log in
router.post("/user/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      res.status(400).json({ message: "Wrong credentials" });
    }
    const correctPassword = await bcrypt.compare(password, foundUser.password);
    if (!correctPassword) {
      res.status(400).json({ message: "Wrong credentials" });
    }
    const token = jwt.sign({ id: foundUser._id }, process.env.SECRET_TOKEN, {
      algorithm: "HS256",
    });
    res.json({ authToken: token });
  } catch (error) {
    next(error);
  }
});

// User Verify
router.get("/user/verify", isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.currentUserId).select("-password");
    if (!user) {
      return res.status(400).send("User not found");
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
