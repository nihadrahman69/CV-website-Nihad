import type { MasterProfile } from '../types/profile';

export const masterProfile: MasterProfile = {
  personal: {
    name: "Nihad Rahman Rawdra",
    location: "Dhaka, Bangladesh",
    nationality: "Bangladeshi",
    headline: "Software Engineering Student | Technology, Business & Analytical Thinking",
    subheadline: "Versatile professional with a foundation in Software Engineering and Cybersecurity, combining analytical problem-solving with strong communication, organizational ability, and business awareness."
  },
  contact: {
    email: "rahmannih69@gmail.com",
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
        "Supported daily office operations including administrative coordination, document organization, and workflow management",
        "Reviewed, corrected, and prepared legal documents including property deeds and formal written statements",
        "Maintained professional communication standards and consistent reliability in a legal office environment"
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
      name: "Intelligent Traffic Management System",
      repoUrl: "https://github.com/nihadrahman69/Intelligent-Traffic-Management-System",
      description: "Java console application simulating intelligent traffic signal control for urban intersections — featuring real-time monitoring, manual override, emergency vehicle prioritization, and sensor-based traffic flow simulation.",
      technologies: ["Java"],
      transferableValue: "Applied systems thinking — modeling real-world state machines, prioritization logic, and simulated sensor input."
    },
    {
      id: "proj-2",
      name: "Supershop Management System",
      repoUrl: "https://github.com/nihadrahman69/Supershop-Management-System-C",
      description: "Terminal-based retail management application for tracking inventory, processing sales, and streamlining store operations.",
      technologies: ["C"],
      transferableValue: "Practical application of programming to solve business and operational challenges."
    },
    {
      id: "proj-3",
      name: "Roman to Integer Conversion (Vice Versa)",
      repoUrl: "https://github.com/nihadrahman69/Roman-to-Integer-conversion-vice-versa",
      description: "Java programs implementing bidirectional conversion between Roman numerals and integers through string parsing and algorithmic logic.",
      technologies: ["Java"],
      transferableValue: "Demonstrates algorithmic thinking and string/number parsing in a statically typed language."
    },
    {
      id: "proj-4",
      name: "Simple Calculator",
      repoUrl: "https://github.com/nihadrahman69/simple-calculator-with-python",
      description: "Python calculator application implementing core arithmetic operations and mathematical logic.",
      technologies: ["Python"],
      transferableValue: "Foundational programming and logic implementation."
    },
    {
      id: "proj-5",
      name: "Random Card Tossing Machine",
      repoUrl: "https://github.com/nihadrahman69/random-card-tossing-machine",
      description: "Python program simulating randomized probability models through card-based mechanics.",
      technologies: ["Python"],
      transferableValue: "Understanding of randomization, statistics, and simulation logic."
    },
    {
      id: "proj-6",
      name: "Random Dice",
      repoUrl: "https://github.com/nihadrahman69/Random-dice",
      description: "Python application simulating dice rolls with randomization logic.",
      technologies: ["Python"],
      transferableValue: "Basic utility development and probability simulation."
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