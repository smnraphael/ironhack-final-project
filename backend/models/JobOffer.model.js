const { Schema, model } = require("mongoose");

const jobOfferSchema = new Schema(
  {
    position: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    employmentType: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    workLevel: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    remote: {
      type: String,
      required: true,
      enum: ["On Site", "Hybrid", "Remote"],
    },
    companyOverview: {
      type: String,
      required: true,
    },
    positionOverview: {
      type: String,
      required: true,
    },
    keyResponsibilities: {
      type: String,
      required: true,
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const JobOffer = model("JobOffer", jobOfferSchema);

module.exports = JobOffer;
