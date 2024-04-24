require("../db/index.js");
const bcrypt = require("bcryptjs");

const Company = require("../models/Company.model.js");

const password = "123";
const safePassword = bcrypt.hashSync(password);

const companies = [
  {
    name: "Google LLC",
    email: "hr@google.com",
    password: safePassword,
    headquarters: "Mountain View, California, USA",
    numberOfEmployees: 135000,
    website: "https://www.google.com",
    description:
      "Google LLC, a subsidiary of Alphabet Inc., is a multinational technology company that specializes in Internet-related services and products. It is best known for its search engine, but also offers a wide range of other services including advertising technologies, cloud computing, software, and hardware. Google's mission is to organize the world's information and make it universally accessible and useful.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  },
  {
    name: "Meta Platforms, Inc.",
    email: "hr@meta.com",
    password: safePassword,
    headquarters: "Menlo Park, California, USA",
    numberOfEmployees: 72000,
    website: "https://www.meta.com",
    description:
      "Meta Platforms, Inc., formerly known as Facebook, is a social media conglomerate that owns several popular platforms including Facebook, Instagram, WhatsApp, and Oculus VR. Meta's mission is to bring people closer together and build community, enabling meaningful connections and conversations. In addition to social networking services, Meta is also involved in various technology initiatives such as virtual reality, augmented reality, and artificial intelligence.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Netflix, Inc.",
    email: "hr@netflix.com",
    password: safePassword,
    headquarters: "Los Gatos, California, USA",
    numberOfEmployees: 10000,
    website: "https://www.netflix.com",
    description:
      "Netflix, Inc. is a global streaming service offering a wide variety of television series, movies, documentaries, and original content across a range of genres and languages. Founded on the principle of providing entertainment anytime, anywhere, Netflix has revolutionized the way people consume media, with a focus on personalized recommendations and high-quality content.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Microsoft Corporation",
    email: "hr@microsoft.com",
    password: safePassword,
    headquarters: "Redmond, Washington, USA",
    numberOfEmployees: 181000,
    website: "https://www.microsoft.com",
    description:
      "Microsoft Corporation is a leading technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Known for its Windows operating systems and Office productivity suite, Microsoft has diversified its offerings to include cloud computing services (Azure), gaming (Xbox), hardware (Surface), and enterprise solutions.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Intel Corporation",
    email: "hr@intel.com",
    password: safePassword,
    headquarters: "Santa Clara, California, USA",
    numberOfEmployees: 111000,
    website: "https://www.intel.com",
    description:
      "Intel Corporation is a multinational corporation and technology company best known for designing and manufacturing semiconductor chips and other hardware components for a wide range of computing devices. Intel's processors are found in many personal computers, servers, smartphones, and other devices, playing a crucial role in powering modern technology.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Intel_logo_%282021%2C_light_blue%29.svg",
  },
  {
    name: "Mercari, Inc.",
    email: "hr@mercari.com",
    password: safePassword,
    headquarters: "Tokyo, Japan",
    numberOfEmployees: 1300,
    website: "https://www.mercari.com",
    description:
      "Mercari, Inc. is a Japanese e-commerce company operating a mobile marketplace app that allows users to buy and sell a wide variety of goods, including electronics, clothing, toys, and collectibles. With a focus on simplicity and convenience, Mercari has become one of Japan's leading online marketplaces, enabling individuals to easily monetize their unused or unwanted items.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Mercari_logo_2018.svg/1597px-Mercari_logo_2018.svg.png",
  },
  {
    name: "Amazon.com, Inc.",
    email: "hr@amazon.com",
    password: safePassword,
    headquarters: "Seattle, Washington, USA",
    numberOfEmployees: 1298000,
    website: "https://www.amazon.com",
    description:
      "Amazon.com, Inc. is a multinational technology company and the world's largest online retailer, offering a wide range of products and services through its website and mobile apps. Founded by Jeff Bezos in 1994, Amazon has expanded into various areas including e-commerce, cloud computing (Amazon Web Services), digital streaming (Amazon Prime Video), artificial intelligence (Alexa), and consumer electronics (Kindle, Echo).",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Apple Inc.",
    email: "hr@apple.com",
    password: safePassword,
    headquarters: "Cupertino, California, USA",
    numberOfEmployees: 154000,
    website: "https://www.apple.com",
    description:
      "Apple Inc. is an American multinational technology company that designs, manufactures, and markets consumer electronics, software, and services. Best known for its hardware products including the iPhone, iPad, Mac, and Apple Watch, Apple also develops its own operating systems (iOS, macOS) and software applications (Safari, iTunes, iWork). With a focus on innovation and design, Apple has built a loyal customer base and a reputation for premium quality products.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Airbnb, Inc.",
    email: "hr@airbnb.com",
    password: safePassword,
    headquarters: "San Francisco, California, USA",
    numberOfEmployees: 10800,
    website: "https://www.airbnb.com",
    description:
      "Airbnb, Inc. is an online marketplace and hospitality service that enables people to rent or lease short-term lodging including vacation rentals, apartment rentals, homestays, hostel beds, or hotel rooms. Founded in 2008, Airbnb has disrupted the traditional hospitality industry by allowing individuals to monetize their extra space and providing travelers with unique and affordable accommodation options around the world.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  },
  {
    name: "Capgemini SE",
    email: "hr@capgemini.com",
    password: safePassword,
    headquarters: "Paris, France",
    numberOfEmployees: 269000,
    website: "https://www.capgemini.com",
    description:
      "Capgemini SE is a global leader in consulting, digital transformation, technology, and engineering services. With a presence in over 50 countries and expertise across various industries including automotive, banking, consumer products, and telecommunications, Capgemini helps organizations navigate the complexities of the digital age, innovate, and achieve business transformation.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Capgemini_Logo.svg",
  },
  {
    name: "IBM",
    email: "hr@ibm.com",
    password: safePassword,
    headquarters: "Armonk, New York, USA",
    numberOfEmployees: 346000,
    website: "https://www.ibm.com",
    description:
      "IBM (International Business Machines Corporation) is a multinational technology company that provides hardware, software, cloud-based services, and cognitive computing. Founded in 1911, IBM is one of the world's largest employers and leading innovators in information technology. The company offers a wide range of products and services including mainframe computers, servers, storage systems, software development, consulting services, and artificial intelligence solutions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
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
