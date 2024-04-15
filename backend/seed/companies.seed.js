require("../db/index.js");
const bcrypt = require("bcryptjs");

const Company = require("../models/Company.model.js");

const password = "123";
const safePassword = bcrypt.hashSync(password);

const companies = [
  {
    email: "hr@apple.com",
    password: safePassword,
    name: "Apple Inc.",
    headquarters: "Apple Park, Cupertino, California, U.S.",
    numberOfEmployees: 160000,
    website: "https://www.apple.com/",
  },
  {
    email: "hr@microsoft.com",
    password: safePassword,
    name: "Microsoft Corporation",
    headquarters: "Redmond, Washington, U.S.",
    numberOfEmployees: 175000,
    website: "https://www.microsoft.com/",
  },
  {
    email: "hr@amazon.com",
    password: safePassword,
    name: "Amazon.com Inc.",
    headquarters: "Seattle, Washington, U.S.",
    numberOfEmployees: 1300000,
    website: "https://www.amazon.com/",
  },
  {
    email: "hr@meta.com",
    password: safePassword,
    name: "Meta Platforms, Inc.",
    headquarters: "Menlo Park, California, U.S.",
    numberOfEmployees: 60000,
    website: "https://about.fb.com/",
  },
  {
    email: "hr@alphabet.com",
    password: safePassword,
    name: "Alphabet Inc.",
    headquarters: "Googleplex, Mountain View, California, U.S.",
    numberOfEmployees: 135000,
    website: "https://abc.xyz/",
  },
  {
    email: "hr@tesla.com",
    password: safePassword,
    name: "Tesla, Inc.",
    headquarters: "Palo Alto, California, U.S.",
    numberOfEmployees: 70000,
    website: "https://www.tesla.com/",
  },
  {
    email: "hr@intel.com",
    password: safePassword,
    name: "Intel Corporation",
    headquarters: "Santa Clara, California, U.S.",
    numberOfEmployees: 110800,
    website: "https://www.intel.com/",
  },
  {
    email: "hr@nvidia.com",
    password: safePassword,
    name: "Nvidia Corporation",
    headquarters: "Santa Clara, California, U.S.",
    numberOfEmployees: 18000,
    website: "https://www.nvidia.com/",
  },
  {
    email: "hr@ibm.com",
    password: safePassword,
    name: "International Business Machines Corporation",
    headquarters: "Armonk, New York, U.S.",
    numberOfEmployees: 345900,
    website: "https://www.ibm.com/",
  },
  {
    email: "hr@netflix.com",
    password: safePassword,
    name: "Netflix, Inc.",
    headquarters: "Los Gatos, California, U.S.",
    numberOfEmployees: 10000,
    website: "https://www.netflix.com/",
  },
];

async function seed() {
  try {
    await Company.deleteMany();
    const createdCompanies = await Company.create(companies);
    console.log(`${createdCompanies.length} companies created`);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}

seed();
