const { Schema, model } = require("mongoose");

const favoriteSchema = new Schema(
  {
    jobOffer: {
      type: Schema.Types.ObjectId,
      ref: "JobOffer",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Favorite = model("Favorite", favoriteSchema);

module.exports = Favorite;
