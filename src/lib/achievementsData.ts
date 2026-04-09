// This file will act as our central database for student achievements.

export type Achievement = {
  id: number;
  image: string;
  title: string;
  description: string;
};

export const studentAchievements: Achievement[] = [
    { 
      id: 1,
      image: "/images/student-achivement/saravana&dinesh.webp", 
      title: "Hindustan Debugging Contest", 
      description: "Saravanakumar B and Dinesh E of the AIML branch secured the 2nd position among numerous teams from across the state. Their exceptional problem-solving skills and rapid debugging techniques were highly praised by the judges." 
    },
    { 
      id: 2,
      image: "/images/student-achivement/winimage.jpeg", 
      title: "Textile BrandBuild 360 - First Prize", 
      description: "Deepika S and Vishnu M (AIML) secured the 1st position and a cash prize of ₹3,000 at Kumaraguru College of Technology, showcasing exceptional brand strategy and technical creativity." 
    },
    { 
      id: 3,
      image: "/images/student-achivement/sujithaimg.webp", 
      title: "HICAS Debugging Competition", 
      description: "Sujitha A from the CGS branch, along with her teammate, demonstrated outstanding technical prowess to win first prize in the highly competitive intra-collegiate debugging event hosted at HICAS." 
    },
    { 
      id: 4,
      image: "/images/student-achivement/SRKclg.jpeg", 
      title: "Memes Competition Contest", 
      description: "Vignesh V and Mohammed Fazil H from the AIML branch showcased their creativity and humor, winning the First Prize at the inter-collegiate memes competition hosted by Sri Ramakrishna College." 
    },
    { 
      id: 5,
      image: "/images/student-achivement/achivement-5.jpg", 
      title: "National Level AI Symposium", 
      description: "Our final year students presented a groundbreaking paper on generative AI models, receiving the 'Best Paper' award at the National AI Symposium hosted by IIT Madras. The research focused on creating more efficient and realistic text-to-image generation." 
    },
    { 
      id: 6,
      image: "/images/student-achivement/debugging.jpeg", 
      title: "Cyber Security Capture The Flag", 
      description: "A team from our CGS program won the national 'Capture The Flag' cybersecurity competition, successfully defending against simulated attacks and demonstrating superior ethical hacking skills. They have been invited to the international finals in Singapore." 
    },
];