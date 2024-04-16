const router = require("express").Router();
const Favorite = require("../models/Favorite.model.js");
const isAuthenticated = require("../middlewares/isAuthenticated.js");

// We are prefixed with /api/favorites

// Get all favorites
router.get("/", async (req, res, next) => {
  try {
    const allFavorites = await Favorite.find({});
    res.json(allFavorites);
  } catch (error) {
    next(error);
  }
});

router.use(isAuthenticated);

// Post one favorite
router.post("/:jobOfferId", async (req, res, next) => {
  try {
    const createdFavorite = await Favorite.create({
      jobOffer: req.params.jobOfferId,
      user: req.currentUserId,
    });
    res.json({
      message: "Job offer successfully added to favorites",
      createdFavorite: createdFavorite,
    });
  } catch (error) {
    next(error);
  }
});

// Delete one favorite
router.delete("/:favoriteId", async (req, res, next) => {
  try {
    await Favorite.findByIdAndDelete(req.params.favoriteId);
    res.status(204).json({ message: "Favorite successfuly deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
