// This file will act as our central database for news and events.

export type NewsItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
};

export const newsData: NewsItem[] = [
    { 
      id: 1, 
      title: "Research meets reality", 
      description: "An industry-academia partnership with Amazon gives doctoral fellows funding to pursue big ideas in AI research.", 
      category: "Student Experience",
      image: "/images/news/news-1.jpg",
      date: "September 20, 2025"
    },
    { 
      id: 2, 
      title: "Helping robots become a “part” of our world", 
      description: "Johns Hopkins computer scientists release new findings and a specialized dataset for training robots to recognize specific object parts.", 
      category: "Research",
      image: "/images/news/news-2.jpg",
      date: "September 18, 2025"
    },
    { 
      id: 3, 
      title: "Computer science faculty receive Johns Hopkins Nexus Awards", 
      description: "The Nexus Awards Program supports a diverse range of programming, research, and teaching activities at the Hopkins Bloomberg Center.", 
      category: "Awards and Honors",
      image: "/images/news/news-3.jpg",
      date: "September 15, 2025"
    },
     { 
      id: 4, 
      title: "Annual CGS Symposium on Cybersecurity", 
      description: "Our department hosted the annual symposium, bringing together experts from around the world to discuss the future of digital security and defense.", 
      category: "Event",
      image: "/images/programme-scope.jpg",
      date: "September 10, 2025"
    },
];