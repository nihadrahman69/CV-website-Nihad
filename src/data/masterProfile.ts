import { MasterProfile } from '../types/profile';

export const masterProfile: MasterProfile = {
  personal: {
    name: "Nihad Rahman Rawdra",
    location: "Dhaka, Bangladesh",
    nationality: "Bangladeshi",
    headline: "Software Engineering Student | Technology, Business & Analytical Thinking",
    subheadline: "Versatile professional with a foundation in Software Engineering and Cybersecurity, combining analytical problem-solving with strong communication, organizational ability, and business awareness."
  },
  contact: {
    email: "rahmannih59@gmail.com",
    phoneNumbers: ["+8801829737802", "+8801308030370"],
    linkedin: "https://www.linkedin.com/in/nihad-rahman-rawdra/",
    github: "https://github.com/nihadrahman69",
    facebook: "https://www.facebook.com/nihadrahmanrawdra"
  },
  summary: "Ambitious and intellectually curious professional bridging the gap between technology and business operations. Currently pursuing a BSc in Software Engineering with a major in Cybersecurity, maintaining a strong academic record (3.78 CGPA). Combines analytical thinking and AI-assisted productivity with practical experience in administration, organization, and document management. Highly adaptable, reliable, and driven by an emerging interest in economics, management, and organizational effectiveness.",
  education: [
    {
      id: "edu-1",
      degree: "BSc Software Engineering",
      major: "Cyber Security",
      institution: "Daffodil International University",
      year: "Expected 2027",
      gpa: "CGPA 3.78"
    },
    {
      id: "edu-2",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "BCIC College",
      year: "2022",
      gpa: "GPA 5.00"
    },
    {
      id: "edu-3",
      degree: "Secondary School Certificate (SSC)",
      institution: "Monipur High School and College",
      year: "2020",
      gpa: "GPA 5.00"
    }
  ],
  experience: [
    {
      id: "exp-1",
      position: "Office Attendant",
      organization: "Private Law Firm",
      duration: "6 months",
      responsibilities: [
        "Assisted with administrative tasks, organization, and daily office operations",
        "Managed document handling including intermediate deed reading, correction, and statement writing",
        "Demonstrated responsibility, reliability, and strong communication skills in a professional environment"
      ],
      transferableSkills: [
        "Communication",
        "Presentation",
        "Organization",
        "Analytical Thinking",
        "Problem Solving",
        "Responsibility",
        "Administration"
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      name: "Supershop Management System",
      repoUrl: "https://github.com/nihadrahman69/Supershop-Management-System-C",
      description: "A terminal-based application developed to manage inventory, sales, and operations for a retail supershop.",
      technologies: ["C"],
      transferableValue: "Demonstrates practical application of programming to solve business and organizational operational challenges."
    },
    {
      id: "proj-2",
      name: "Simple Calculator",
      repoUrl: "https://github.com/nihadrahman69/simple-calculator-with-python",
      description: "A functional calculator application implementing core mathematical logic.",
      technologies: ["Python"],
      transferableValue: "Highlights foundational programming and logic implementation."
    },
    {
      id: "proj-3",
      name: "Random Card Tossing Machine",
      repoUrl: "https://github.com/nihadrahman69/random-card-tossing-machine",
      description: "A program that simulates random probability models through card tossing mechanisms.",
      technologies: ["Python"],
      transferableValue: "Demonstrates understanding of randomization, statistics, and simulation logic."
    },
    {
      id: "proj-4",
      name: "Random Dice",
      repoUrl: "https://github.com/nihadrahman69/Random-dice",
      description: "A dice rolling simulation application.",
      technologies: ["Python"],
      transferableValue: "Showcases basic utility development."
    }
  ],
  technicalSkills: [
    {
      category: "Programming",
      skills: ["C", "Java", "Python", "Swift"]
    },
    {
      category: "Database",
      skills: ["MySQL"]
    }
  ],
  professionalSkills: [
    { name: "Analytical Thinking" },
    { name: "Problem Solving" },
    { name: "Communication" },
    { name: "Presentation" },
    { name: "Organization" },
    { name: "Administration" },
    { name: "Responsibility" },
    { name: "Adaptability" },
    { name: "Business Awareness" },
    { name: "AI-Assisted Productivity" }
  ],
  languages: [
    { name: "Bangla", spoken: "Proficient", written: "Proficient" },
    { name: "English", spoken: "Proficient", written: "Proficient" },
    { name: "Hindi", spoken: "Proficient" }
  ],
  professionalInterests: [
    "Business",
    "Economics",
    "Management",
    "Organizational Operations"
  ],
  aiTools: [
    "ChatGPT",
    "Claude",
    "Google Gemini",
    "Google Antigravity",
    "Grok",
    "DeepSeek"
  ],
  additionalSkills: [
    "Intermediate deed reading, correction, and statement writing"
  ]
};
