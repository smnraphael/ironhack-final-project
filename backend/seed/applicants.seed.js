require("../db/index.js");
const bcrypt = require("bcryptjs");

const Applicant = require("../models/Applicant.model.js");

const password = "123";
const safePassword = bcrypt.hashSync(password);

const applicants = [
  {
    email: "simonraphael@hotmail.fr",
    password: safePassword,
    firstName: "Raphaël",
    lastName: "Simon",
  },
  {
    email: "johndoe@example.com",
    password: safePassword,
    firstName: "John",
    lastName: "Doe",
  },
  {
    email: "alexsmith@example.com",
    password: safePassword,
    firstName: "Alex",
    lastName: "Smith",
  },
  {
    email: "emilybrown@example.com",
    password: safePassword,
    firstName: "Emily",
    lastName: "Brown",
  },
  {
    email: "michaeljones@example.com",
    password: safePassword,
    firstName: "Michael",
    lastName: "Jones",
  },
  {
    email: "sarahwilson@example.com",
    password: safePassword,
    firstName: "Sarah",
    lastName: "Wilson",
  },
  {
    email: "ryanlee@example.com",
    password: safePassword,
    firstName: "Ryan",
    lastName: "Lee",
  },
  {
    email: "amandasmith@example.com",
    password: safePassword,
    firstName: "Amanda",
    lastName: "Smith",
  },
  {
    email: "davidtaylor@example.com",
    password: safePassword,
    firstName: "David",
    lastName: "Taylor",
  },
  {
    email: "laurawang@example.com",
    password: safePassword,
    firstName: "Laura",
    lastName: "Wang",
  },
];

async function seed() {
  try {
    await Applicant.deleteMany();
    const createdApplicants = await Applicant.create(applicants);
    console.log(`${createdApplicants.length} applicants created`);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}

seed();
