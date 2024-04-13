const { Schema, model } = require("mongoose");

const favoriteSchema = new Schema(
  {
    jobOffer: {
      type: Schema.Types.ObjectId,
      ref: "JobOffer",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
