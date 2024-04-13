const { Schema, model } = require("mongoose");

const applicationSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    socialNetwork: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    jobOffer: {
      type: Schema.Types.ObjectId,
      ref: "JobOffer",
    },
  },
  {
    timestamps: true,
  }
);

const Application = model("Application", applicationSchema);

module.exports = Application;
