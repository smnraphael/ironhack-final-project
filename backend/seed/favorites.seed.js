require("../db/index.js");

const Favorite = require("../models/Favorite.model.js");
const JobOffer = require("../models/JobOffer.model.js");
const Applicant = require("../models/Applicant.model.js");

const favorites = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

async function seed() {
  try {
    await Favorite.deleteMany();
    const jobOffer = await JobOffer.find();
    favorites.forEach((favorite) => {
      const randomJobOfferId = Math.floor(Math.random() * jobOffer.length);
      favorite.jobOffer = jobOffer[randomJobOfferId]._id;
    });
    const applicant = await Applicant.find();
    favorites.forEach((favorite) => {
      const randomApplicantId = Math.floor(Math.random() * applicant.length);
      favorite.applicant = applicant[randomApplicantId]._id;
    });
    const createdFavorites = await Favorite.create(favorites);
    console.log(`${createdFavorites.length} favorites created`);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}

seed();
