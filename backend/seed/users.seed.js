require("../db/index.js");
const bcrypt = require("bcryptjs");

const User = require("../models/User.model.js");

const password = "123";
const safePassword = bcrypt.hashSync(password);

const users = [
  {
    email: "johndoe@example.com",
    password: safePassword,
    firstName: "John",
    lastName: "Doe",
    avatar:
      "https://lh5.googleusercontent.com/proxy/swauUCDkb6bxTsSpoEmcnqYahRFvXabwkprJghyVnET4zRW7Z1cZWyLW0zCCkZ5T5XgyVK5CFlEhEcedPfH58Syk49NFUHwuUgivRTi9GWZcbf4jREppKHikXmqd1r3VhnjXVE4PWaXhFTKaBTj2Ns04",
  },
  {
    email: "janedoe@example.com",
    password: safePassword,
    firstName: "Jane",
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
    await User.deleteMany();
    const createdUsers = await User.create(users);
    console.log(`${createdUsers.length} users created`);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}

seed();
