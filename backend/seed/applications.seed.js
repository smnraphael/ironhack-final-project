require("../db/index.js");

const Application = require("../models/Application.model.js");
const JobOffer = require("../models/JobOffer.model.js");
const User = require("../models/User.model.js");

const applications = [
  {
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    socialNetwork: "http://linkedin.com/johndoe",
    resume: "JohnDoe_Resume.pdf",
    coverLetter:
      "Dear Hiring Manager, I am excited to apply for the Senior Software Engineer position at Apple Inc. I have 8 years of experience...",
  },
  {
    email: "jane.smith@example.com",
    firstName: "Jane",
    lastName: "Smith",
    socialNetwork: "http://linkedin.com/janesmith",
    resume: "JaneSmith_Resume.pdf",
    coverLetter:
      "To Whom It May Concern, I am writing to express my interest in the Software Development Engineer position at Alphabet Inc...",
  },
  {
    email: "alex.jones@example.com",
    firstName: "Alex",
    lastName: "Jones",
    socialNetwork: "http://linkedin.com/alexjones",
    resume: "AlexJones_Resume.pdf",
    coverLetter:
      "Hello, I am applying for the Cloud Solutions Architect position at Amazon.com Inc. With over 10 years of experience in cloud computing...",
  },
  {
    email: "sarah.chang@example.com",
    firstName: "Sarah",
    lastName: "Chang",
    socialNetwork: "http://linkedin.com/sarahchang",
    resume: "SarahChang_Resume.pdf",
    coverLetter:
      "Dear Hiring Team, I am thrilled to submit my application for the Machine Learning Engineer role at Meta Platforms, Inc...",
  },
  {
    email: "michael.nguyen@example.com",
    firstName: "Michael",
    lastName: "Nguyen",
    socialNetwork: "http://linkedin.com/michaelnguyen",
    resume: "MichaelNguyen_Resume.pdf",
    coverLetter:
      "Dear Hiring Manager, I am writing to express my interest in the Senior Cybersecurity Analyst position at Tesla, Inc...",
  },
  {
    email: "emily.wang@example.com",
    firstName: "Emily",
    lastName: "Wang",
    socialNetwork: "http://linkedin.com/emilywang",
    resume: "EmilyWang_Resume.pdf",
    coverLetter:
      "To Whom It May Concern, I am excited to apply for the Senior Data Scientist position at Microsoft Corporation...",
  },
  {
    email: "david.kim@example.com",
    firstName: "David",
    lastName: "Kim",
    socialNetwork: "http://linkedin.com/davidkim",
    resume: "DavidKim_Resume.pdf",
    coverLetter:
      "Hello, I am submitting my application for the Software Development Engineer position at Nvidia Corporation...",
  },
  {
    email: "amanda.garcia@example.com",
    firstName: "Amanda",
    lastName: "Garcia",
    socialNetwork: "http://linkedin.com/amandagarcia",
    resume: "AmandaGarcia_Resume.pdf",
    coverLetter:
      "Dear Hiring Team, I am applying for the Senior AI Research Scientist role at Netflix, Inc. I have a strong background in...",
  },
  {
    email: "ryan.wong@example.com",
    firstName: "Ryan",
    lastName: "Wong",
    socialNetwork: "http://linkedin.com/ryanwong",
    resume: "RyanWong_Resume.pdf",
    coverLetter:
      "To Whom It May Concern, I am excited to apply for the Senior Software Engineer position at Intel Corporation...",
  },
  {
    email: "lisa.jackson@example.com",
    firstName: "Lisa",
    lastName: "Jackson",
    socialNetwork: "http://linkedin.com/lisajackson",
    resume: "LisaJackson_Resume.pdf",
    coverLetter:
      "Dear Hiring Manager, I am writing to express my interest in the Cloud Solutions Architect position at Amazon.com Inc...",
  },
];

async function seed() {
  try {
    await Application.deleteMany();
    const jobOffer = await JobOffer.find();
    applications.forEach((application) => {
      const randomJobOfferId = Math.floor(Math.random() * jobOffer.length);
      application.jobOffer = jobOffer[randomJobOfferId]._id;
    });
    const user = await User.find();
    applications.forEach((application) => {
      const randomUserId = Math.floor(Math.random() * user.length);
      application.user = user[randomUserId]._id;
    });
    const createdApplications = await Application.create(applications);
    console.log(`${createdApplications.length} applications created`);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}

seed();
