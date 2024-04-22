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
    },
    resume: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
    },
    status: {
      type: String,
      enum: [
        "Resume sent",
        "Viewed by company",
        "Contacted by the company",
        "Application denied",
      ],
      default: "Resume sent",
    },
    archived: {
      type: Boolean,
      default: false,
    },
    applicant: {
      type: Schema.Types.ObjectId,
      ref: "Applicant",
      required: true,
    },
    jobOffer: {
      type: Schema.Types.ObjectId,
      ref: "JobOffer",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = model("Application", applicationSchema);

module.exports = Application;
