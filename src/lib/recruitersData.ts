// This file will act as our central database for company recruiters.

export type Recruiter = {
  name: string;
  logo: string;
  description: string; // Added description field
};

export const recruitersData: Recruiter[] = [
  { 
    name: "ServiceNow", 
    logo: "/logos/companies/servicenow.png",
    description: "A leading platform for digital workflows, ServiceNow hires our graduates for roles in software engineering and cloud infrastructure, valuing their strong problem-solving and full-stack development skills."
  },
  { 
    name: "Autodesk", 
    logo: "/logos/companies/autodesk.png",
    description: "A global leader in 3D design and engineering software, Autodesk seeks out our students for their expertise in computer graphics, computational geometry, and software architecture."
  },
  { 
    name: "Wells Fargo", 
    logo: "/logos/companies/wellsfargo.png",
    description: "As a major financial institution, Wells Fargo recruits our CGS graduates for critical roles in cybersecurity, fraud detection, and developing secure fintech solutions."
  },
  { 
    name: "Juspay", 
    logo: "/logos/companies/juspay.png",
    description: "A pioneering payments technology company, Juspay values our students' deep understanding of secure coding practices, network protocols, and scalable system design."
  },
  { 
    name: "BP", 
    logo: "/logos/companies/bp.png",
    description: "The global energy company hires our AIML graduates to work on data-driven solutions, including predictive analytics for energy markets and machine learning for operational efficiency."
  },
  { 
    name: "Philips", 
    logo: "/logos/companies/philips.png",
    description: "A leader in health technology, Philips recruits our students for their skills in medical imaging analysis, AI in diagnostics, and developing software for healthcare devices."
  },
  { 
    name: "Amazon", 
    logo: "/logos/companies/amazon.png",
    description: "Amazon Web Services (AWS) and their e-commerce divisions actively hire our graduates for roles in cloud computing, machine learning, and large-scale systems engineering."
  },
  { 
    name: "Microsoft", 
    logo: "/logos/companies/microsoft.png",
    description: "Microsoft is a top destination for our graduates, who take on roles in software development for Azure, AI research, and building next-generation applications."
  },
];
