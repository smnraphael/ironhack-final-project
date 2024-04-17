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
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/814px-Apple_logo_black.svg.png",
  },
  {
    email: "hr@microsoft.com",
    password: safePassword,
    name: "Microsoft Corporation",
    headquarters: "Redmond, Washington, U.S.",
    numberOfEmployees: 175000,
    website: "https://www.microsoft.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_logo.jpg/480px-Microsoft_logo.jpg",
  },
  {
    email: "hr@amazon.com",
    password: safePassword,
    name: "Amazon.com Inc.",
    headquarters: "Seattle, Washington, U.S.",
    numberOfEmployees: 1300000,
    website: "https://www.amazon.com/",
    logo: "https://www.1min30.com/wp-content/uploads/2017/12/Embl%C3%A8me-Amazon.jpg",
  },
  {
    email: "hr@meta.com",
    password: safePassword,
    name: "Meta Platforms, Inc.",
    headquarters: "Menlo Park, California, U.S.",
    numberOfEmployees: 60000,
    website: "https://about.fb.com/",
    logo: "https://www.logo-meta.com/wp-content/uploads/2021/11/logo-meta-facebook-embleme-bleu-3D-650x366-1.jpeg",
  },
  {
    email: "hr@alphabet.com",
    password: safePassword,
    name: "Alphabet Inc.",
    headquarters: "Googleplex, Mountain View, California, U.S.",
    numberOfEmployees: 135000,
    website: "https://abc.xyz/",
    logo: "https://toppng.com/uploads/preview/alphabet-logo-11530965262mcvcbhaafb.png",
  },
  {
    email: "hr@tesla.com",
    password: safePassword,
    name: "Tesla, Inc.",
    headquarters: "Palo Alto, California, U.S.",
    numberOfEmployees: 70000,
    website: "https://www.tesla.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    email: "hr@intel.com",
    password: safePassword,
    name: "Intel Corporation",
    headquarters: "Santa Clara, California, U.S.",
    numberOfEmployees: 110800,
    website: "https://www.intel.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  },
  {
    email: "hr@nvidia.com",
    password: safePassword,
    name: "Nvidia Corporation",
    headquarters: "Santa Clara, California, U.S.",
    numberOfEmployees: 18000,
    website: "https://www.nvidia.com/",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/4/47/Nvidia_%28logo%29.svg/1280px-Nvidia_%28logo%29.svg.png",
  },
  {
    email: "hr@ibm.com",
    password: safePassword,
    name: "International Business Machines Corporation",
    headquarters: "Armonk, New York, U.S.",
    numberOfEmployees: 345900,
    website: "https://www.ibm.com/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png",
  },
  {
    email: "hr@netflix.com",
    password: safePassword,
    name: "Netflix, Inc.",
    headquarters: "Los Gatos, California, U.S.",
    numberOfEmployees: 10000,
    website: "https://www.netflix.com/",
    logo: "https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png",
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
