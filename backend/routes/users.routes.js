const router = require("express").Router();
const User = require("../models/User.model.js");

// We are prefixed with /api/users

router.get("/:id", async (req, res, next) => {
  try {
    const oneUser = await User.findById(req.params.id);
    res.json(oneUser);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "User successfuly deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
