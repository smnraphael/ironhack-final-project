require("../db/index.js");

const JobOffer = require("../models/JobOffer.model.js");
const Company = require("../models/Company.model.js");

const jobOffers = [
  {
    position: "Senior Software Engineer",
    location: "New York",
    employmentType: "Part-Time",
    experience: 5,
    workLevel: "Senior Level",
    salary: 120000,
    remote: "Hybrid",
    companyOverview:
      "Apple Inc. is a multinational technology company known for its innovative products and services including the iPhone, iPad, Mac, and Apple Watch.",
    positionOverview:
      "As a Senior Software Engineer at Apple, you will be responsible for designing, developing, and maintaining high-quality software solutions for our ecosystem of products.",
    keyResponsibilities:
      "1. Collaborate with cross-functional teams to define, design, and ship new features.\n2. Architect and develop scalable software systems.\n3. Conduct code reviews and mentor junior engineers.\n4. Troubleshoot and resolve technical issues.\n5. Stay updated with the latest technologies and industry trends.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Senior Software Engineer",
    location: "Seattle",
    employmentType: "Full-Time",
    experience: 6,
    workLevel: "Senior Level",
    salary: 130000,
    remote: "Remote",
    companyOverview:
      "Amazon.com Inc. is a multinational technology company known for its e-commerce, cloud computing, digital streaming, and artificial intelligence services.",
    positionOverview:
      "Join Amazon as a Senior Software Engineer and contribute to building scalable and innovative solutions that impact millions of customers worldwide.",
    keyResponsibilities:
      "1. Design, develop, and deploy high-performance software solutions.\n2. Collaborate with cross-functional teams to deliver on project goals.\n3. Drive continuous improvement through code reviews and feedback.\n4. Mentor junior engineers and share best practices.\n5. Keep up-to-date with emerging technologies and industry trends.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Software Development Engineer",
    location: "Mountain View",
    employmentType: "Full-Time",
    experience: 3,
    workLevel: "Entry Level",
    salary: 100000,
    remote: "Hybrid",
    companyOverview:
      "Alphabet Inc. is a multinational conglomerate that oversees various businesses, including Google, the world's most popular search engine.",
    positionOverview:
      "As a Software Development Engineer at Alphabet, you will have the opportunity to work on cutting-edge projects that impact billions of users worldwide.",
    keyResponsibilities:
      "1. Develop and maintain software solutions across various platforms.\n2. Collaborate with product managers and engineers to deliver high-quality products.\n3. Participate in design and code reviews to ensure code quality and maintainability.\n4. Troubleshoot and debug issues to improve application performance.\n5. Stay current with industry trends and technologies.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Machine Learning Engineer",
    location: "Menlo Park",
    employmentType: "Part-Time",
    experience: 4,
    workLevel: "Mid Level",
    salary: 140000,
    remote: "Hybrid",
    companyOverview:
      "Meta Platforms, Inc. is a social media conglomerate known for its flagship social networking service Facebook, as well as other platforms such as Instagram and WhatsApp.",
    positionOverview:
      "Join Meta as a Machine Learning Engineer and contribute to developing cutting-edge algorithms and systems that power our platforms and services.",
    keyResponsibilities:
      "1. Design and implement machine learning models and algorithms.\n2. Analyze large datasets to extract meaningful insights and patterns.\n3. Collaborate with cross-functional teams to integrate machine learning solutions into products.\n4. Optimize algorithms for performance, scalability, and reliability.\n5. Stay abreast of advancements in machine learning and related fields.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Senior Data Scientist",
    location: "Redmond",
    employmentType: "Full-Time",
    experience: 7,
    workLevel: "Senior Level",
    salary: 150000,
    remote: "Remote",
    companyOverview:
      "Microsoft Corporation is a leading technology company known for its software products and services, including Windows, Office, and Azure cloud computing platform.",
    positionOverview:
      "As a Senior Data Scientist at Microsoft, you will play a key role in developing data-driven solutions and driving insights to enable informed decision-making across the organization.",
    keyResponsibilities:
      "1. Lead data science projects from concept to implementation.\n2. Analyze complex datasets to extract actionable insights.\n3. Develop predictive models and machine learning algorithms.\n4. Collaborate with stakeholders to understand business requirements and translate them into analytical solutions.\n5. Mentor junior data scientists and contribute to team growth and development.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Cloud Solutions Architect",
    location: "Seattle",
    employmentType: "Full-Time",
    experience: 8,
    workLevel: "Senior Level",
    salary: 160000,
    remote: "On Site",
    companyOverview:
      "Amazon.com Inc. is a multinational technology company known for its e-commerce, cloud computing, digital streaming, and artificial intelligence services.",
    positionOverview:
      "Join Amazon as a Cloud Solutions Architect and help customers design, implement, and manage scalable cloud solutions on the AWS platform.",
    keyResponsibilities:
      "1. Architect and design cloud solutions that meet customer requirements and align with best practices.\n2. Lead technical discussions with customers to understand their business needs and recommend appropriate cloud architectures.\n3. Develop proof-of-concepts and prototypes to demonstrate the feasibility of proposed solutions.\n4. Collaborate with cross-functional teams to deliver comprehensive cloud solutions.\n5. Provide technical guidance and mentoring to junior team members.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Senior Cybersecurity Analyst",
    location: "Palo Alto",
    employmentType: "Full-Time",
    experience: 6,
    workLevel: "Senior Level",
    salary: 145000,
    remote: "Hybrid",
    companyOverview:
      "Tesla, Inc. is an American electric vehicle and clean energy company known for its electric cars, solar energy products, and energy storage solutions.",
    positionOverview:
      "As a Senior Cybersecurity Analyst at Tesla, you will play a critical role in protecting our systems and infrastructure from cyber threats.",
    keyResponsibilities:
      "1. Monitor and analyze security events to detect and respond to cyber threats.\n2. Conduct security assessments and vulnerability scans to identify risks and weaknesses.\n3. Develop and implement security controls and procedures to mitigate risks.\n4. Investigate security incidents and coordinate incident response activities.\n5. Stay informed about emerging cybersecurity threats and technologies.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Software Development Engineer",
    location: "Santa Clara",
    employmentType: "Full-Time",
    experience: 4,
    workLevel: "Mid Level",
    salary: 125000,
    remote: "Remote",
    companyOverview:
      "Nvidia Corporation is a multinational technology company known for its graphics processing units (GPUs) and semiconductor products for gaming, professional visualization, data center, and automotive markets.",
    positionOverview:
      "Join Nvidia as a Software Development Engineer and contribute to building cutting-edge software solutions that leverage the power of our GPU technology.",
    keyResponsibilities:
      "1. Design, develop, and maintain software applications and frameworks.\n2. Collaborate with cross-functional teams to define software requirements and architecture.\n3. Implement efficient algorithms and data structures for performance-critical applications.\n4. Write clean, maintainable, and scalable code.\n5. Participate in code reviews, design discussions, and technical presentations.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Senior AI Research Scientist",
    location: "Los Gatos",
    employmentType: "Full-Time",
    experience: 8,
    workLevel: "Senior Level",
    salary: 170000,
    remote: "Remote",
    companyOverview:
      "Netflix, Inc. is a global streaming entertainment service offering movies and TV series, including original content.",
    positionOverview:
      "As a Senior AI Research Scientist at Netflix, you will lead research initiatives to advance the state-of-the-art in machine learning and artificial intelligence for content recommendation and personalization.",
    keyResponsibilities:
      "1. Lead research projects to develop novel machine learning algorithms and models.\n2. Collaborate with cross-functional teams to integrate research findings into production systems.\n3. Analyze data and perform experiments to evaluate and improve algorithm performance.\n4. Stay abreast of advancements in AI/ML research and technology.\n5. Mentor junior researchers and contribute to team growth and development.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
  {
    position: "Senior Software Engineer",
    location: "Santa Clara",
    employmentType: "Full-Time",
    experience: 6,
    workLevel: "Senior Level",
    salary: 140000,
    remote: "On Site",
    companyOverview:
      "Intel Corporation is a multinational technology company known for its semiconductor chips and other computing products.",
    positionOverview:
      "Join Intel as a Senior Software Engineer and contribute to developing innovative software solutions that power Intel's products and services.",
    keyResponsibilities:
      "1. Design, develop, and maintain software for Intel's platforms and products.\n2. Collaborate with hardware engineers to optimize software performance.\n3. Participate in architecture and design discussions.\n4. Investigate and resolve software issues.\n5. Stay updated on industry trends and emerging technologies.",
    qualifications:
      "1. Bachelor's degree in Computer Science or related field.\n2. Minimum of 5 years of experience in software development.\n3. Proficiency in multiple programming languages such as Java, JavaScript, or Python.\n4. Strong problem-solving skills and ability to work in a fast-paced environment.\n5. Excellent communication and teamwork abilities.",
  },
];

async function seed() {
  try {
    await JobOffer.deleteMany();
    const company = await Company.find();
    jobOffers.forEach((jobOffer) => {
      const randomCompanyId = Math.floor(Math.random() * company.length);
      jobOffer.company = company[randomCompanyId]._id;
    });
    const createdJobOffers = await JobOffer.create(jobOffers);
    console.log(`${createdJobOffers.length} job offers created`);
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
}

seed();
