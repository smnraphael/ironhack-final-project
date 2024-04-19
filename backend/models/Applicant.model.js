const { Schema, model } = require("mongoose");
const User = require("./User.model");

const applicantSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        "https://openseauserdata.com/files/7f16cec1cc177a7e148067006e73c02a.png",
    },
  },
  {
    timestamps: true,
  }
);

const Applicant = User.discriminator("Applicant", applicantSchema);

module.exports = Applicant;
