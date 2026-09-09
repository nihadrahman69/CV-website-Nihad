export interface MasterProfile {
  personal: {
    name: string;
    location: string;
    nationality: string;
    cvDetails?: {
      dateOfBirth: string;
      fullAddress: string;
      religion: string;
    };
    headline: string;
    subheadline: string;
  };
  contact: {
    email: string;
    phoneNumbers: string[];
    linkedin: string;
    github: string;
    facebook: string;
  };
  summary: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  technicalSkills: TechnicalSkillCategory[];
  professionalSkills: ProfessionalSkill[];
  languages: Language[];
  professionalInterests: string[];
  aiTools: string[];
  additionalSkills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  major?: string;
  year: string;
  gpa?: string;
}

export interface Experience {
  id: string;
  position: string;
  organization: string;
  duration: string;
  responsibilities: string[];
  transferableSkills: string[];
}

export interface Project {
  id: string;
  name: string;
  repoUrl: string;
  description: string;
  technologies: string[];
  transferableValue?: string;
}

export interface TechnicalSkillCategory {
  category: string;
  skills: string[];
}

export interface ProfessionalSkill {
  name: string;
}

export interface Language {
  name: string;
  spoken: string;
  written?: string;
}

export interface CVProfile {
  id: string;
  name: string;
  targetRole: string;
  summaryOverride: string;
  sectionOrder: string[];
  skillPriority: string[];
  projectFilter: string[];
  keywordEmphasis: string[];
  toneDescription: string;
}
