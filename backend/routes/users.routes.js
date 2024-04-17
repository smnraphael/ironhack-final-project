const router = require("express").Router();
const User = require("../models/User.model.js");
const fileUploader = require("../config/cloudinaryConfig.js");

// We are prefixed with /api/users

// Get one user
router.get("/:userId", async (req, res, next) => {
  try {
    const oneUser = await User.findById(req.params.userId);
    res.json(oneUser);
  } catch (error) {
    next(error);
  }
});

// Edit one user
router.put(
  "/:userId",
  fileUploader.single("avatar"),
  async (req, res, next) => {
    try {
      const filePath = req.file.path;
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
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
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

// Delete one user
router.delete("/:userId", async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(204).json({ message: "User successfuly deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
