const { Schema, model } = require("mongoose");
const User = require("./User.model");

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    headquarters: {
      type: String,
    },
    numberOfEmployees: {
      type: Number,
    },
    website: {
      type: String,
    },
    description: {
      type: String,
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

const Company = User.discriminator("Company", companySchema);

module.exports = Company;
