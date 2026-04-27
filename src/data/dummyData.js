export const PORTFOLIO_DATA = {
  hero: {
    name: "SUNDEEP GANGWAR",
    role: "AI/ML Engineer & Full-Stack Developer",
    valueStatement: "Building scalable ML systems and full-stack apps with real-world impact.",
  },
  about: {
    title: "About Me",
    description1: "I am a B.Tech Computer Science and Engineering student at Harcourt Butler Technical University, Kanpur (2022 – 2026) with a CGPA of 8.22. I specialize in bridging the gap between advanced Machine Learning models and robust Full-Stack applications.",
    description2: "What sets me apart is my strong foundation in competitive programming, having solved over 1000+ DSA problems across various platforms. I actively participate in coding contests, explore new technologies, and focus on delivering scalable, real-world deployments.",
  },
  skills: {
    title: "Skills & Expertise",
    categories: [
      {
        name: "Programming & Core CS",
        skills: ["Java", "Python", "SQL", "Data Structures", "OOPs", "DBMS", "Operating Systems", "Computer Networks"]
      },
      {
        name: "Full Stack Development",
        skills: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MySQL", "FastAPI", "HTML5", "CSS3", "Redux Toolkit"]
      },
      {
        name: "AI / ML & Cloud Tools",
        skills: ["Machine Learning", "Deep Learning", "NLP", "PyTorch", "LangChain", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Git", "GitHub", "Postman"]
      }
    ]
  },
  cpProfile: {
    title: "Competitive Programming",
    platforms: [
      { name: "LeetCode", rating: "Knight Badge (Top 10%)", solved: "Multiple", url: "https://leetcode.com/u/Rdxsandy/" },
      { name: "CodeChef", rating: "Max Rating: 1620", solved: "Multiple" },
      { name: "Codeforces", rating: "Active", solved: "Multiple", url: "https://codeforces.com/profile/sihare_123" },
      { name: "GeeksforGeeks", rating: "Active", solved: "1000", url: "https://www.geeksforgeeks.org/user/sundeepga63r/" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "BioSync – AI Powered Health Monitoring",
      tagline: "FastAPI, MongoDB, Machine Learning, Hugging Face, Google Gemini API",
      problem: "Need for an intelligent health monitoring system to analyze user lifestyle patterns and predict health risks.",
      approach: "Developed a backend using FastAPI with secure JWT authentication. Implemented Random Forest models and integrated Hugging Face models for meal image classification. Used Google Gemini API to generate insights.",
      impact: "Provides personalized AI-powered daily health recommendations and scalable data storage via MongoDB Atlas.",
      techStack: ["FastAPI", "MongoDB", "Machine Learning", "Hugging Face", "Gemini API"],
      githubUrl: "https://github.com/Rdxsandy/BioSync",
      liveUrl: "https://bio-sync-sandy.vercel.app/",
      imageUrl: "/biosync.png"
    },
    {
      id: 2,
      title: "EdTech Platform",
      tagline: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Razorpay",
      problem: "Need for a comprehensive, scalable learning platform supporting diverse user roles.",
      approach: "Built a full-stack platform with Admin, Instructor, and Student roles. Developed responsive UI with React.js & Tailwind CSS and backend services with Node.js & Express.js.",
      impact: "Implemented custom REST APIs for course management and integrated Razorpay for secure transactions.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
      githubUrl: "https://github.com/Rdxsandy/backend1",
      liveUrl: "https://edtech-gray.vercel.app/",
      imageUrl: "/edtech.png"
    }
  ],
  mlWork: {
    title: "ML / AI Research & Models",
    items: []
  },
  experience: [
    {
      id: 1,
      role: "AI Engineer Intern",
      company: "Tapitt Pvt. Ltd., Vadodara, Gujarat (Remote)",
      duration: "May 2025 – July 2025",
      impact: "Built an end-to-end Document QA system using a RAG pipeline with LangChain. Implemented semantic search using FAISS and HuggingFace sentence-transformers. Applied prompt engineering techniques and integrated the AI pipeline with a Node.js REST API via Flask, enabling automated test case generation. Performed end-to-end testing across multiple document types."
    },
    {
      id: 2,
      role: "Software Development Intern (AI/ML)",
      company: "Softsingh Ventures Private Limited, Lucknow",
      duration: "May 2025 – Oct 2025",
      impact: "Developed features for an EdTech platform using the MERN stack. Built and integrated RESTful APIs, designed MongoDB schemas, and integrated a RAG-based chatbot using LLMs to assist students. Used Git and GitHub for collaborative version control."
    }
  ],
  achievements: [
    { title: "Competitive Programming", description: "Solved 1000+ DSA problems across LeetCode, GeeksforGeeks, CodeChef, and Codeforces." },
    { title: "LeetCode Accomplishments", description: "Achieved a 1850+ rating with the Knight Badge and ranked in the top 10% in multiple contests." },
    { title: "CodeChef Rating", description: "Achieved a maximum rating of 1620 on CodeChef." },
    { title: "Extracurriculars", description: "Actively participate in competitive programming and regularly explore and learn new technologies and frameworks." }
  ],
  contact: {
    email: "sundeepgangwar@gmail.com",
    linkedin: "https://www.linkedin.com/in/sundeep-gangwar-049406281/",
    github: "https://github.com/Rdxsandy"
  }
};
