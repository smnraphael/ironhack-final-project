const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model.js");
const Company = require("../models/Company.model.js");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const SALT = 12;

// We are prefixed with /api/auth

// User Sign up
router.post("/user/signup", async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ message: "This email is already used" });
    }
    const hashedPassword = await bcrypt.hash(password, SALT);
    const createdUser = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
    });
    res
      .status(201)
      .json({ message: "User account created", id: createdUser._id });
  } catch (error) {
    next(error);
  }
});

// Company Sign up
router.post("/company/signup", async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const foundCompany = await Company.findOne({ email });
    if (foundCompany) {
      return res.status(400).json({ message: "This email is already used" });
    }
    const hashedPassword = await bcrypt.hash(password, SALT);
    const createdCompany = await Company.create({
      email,
      password: hashedPassword,
      name,
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
    const foundUser = await User.findOne({ email }, { password: 1, email: 1 });
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

// Company Log in
router.post("/company/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const foundCompany = await Company.findOne(
      { email },
      { password: 1, email: 1 }
    );
    if (!foundCompany) {
      res.status(400).json({ message: "Wrong credentials" });
    }
    const correctPassword = await bcrypt.compare(
      password,
      foundCompany.password
    );
    if (!correctPassword) {
      res.status(400).json({ message: "Wrong credentials" });
    }
    const token = jwt.sign({ id: foundCompany._id }, process.env.SECRET_TOKEN, {
      algorithm: "HS256",
      expiresIn: "1d",
    });
    res.json({ authToken: token });
  } catch (error) {
    next(error);
  }
});

// User Verify
router.get("/user/verify", isAuthenticated, async (req, res, next) => {
  try {
    const user = await User.findById(req.currentUserId);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Company Verify
router.get("/company/verify", isAuthenticated, async (req, res, next) => {
  try {
    const company = await Company.findById(req.currentUserId);
    res.json(company);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
