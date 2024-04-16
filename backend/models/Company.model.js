const { Schema, model } = require("mongoose");

const companySchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
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
    logo: {
      type: String,
      default:
        "https://openseauserdata.com/files/7f16cec1cc177a7e148067006e73c02a.png",
    },
  },
  {
    timestamps: true,
  }
);

const Company = model("Company", companySchema);

module.exports = Company;
