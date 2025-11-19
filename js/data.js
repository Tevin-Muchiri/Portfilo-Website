// Personal Information
const personalInfo = {
  name: "Tevin Muchiri",
  title: "Computer Science Student",
  subtitle: "3rd Year at Strathmore University | First Class Honors",
  bio: "Computer Science student at Strathmore University with strong skills in full-stack web development (HTML, CSS, JavaScript, React.js, Node.js), Python, Data Science and SQL. Ranked in the top 1% of the class; recognized for problem-solving, adaptability, and teamwork. Experienced in high-pressure environments from work at Equity Bank Limited; passionate about innovation and impactful tech solutions.",
  email: "tevin.muchiringiru@gmail.com",
  location: "Nairobi, Kenya",
  profileImage: "assets/tevin.svg",
};

// Social Links
const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/tevin-ngiru/",
    icon: "fab fa-linkedin",
  },
  {
    platform: "GitHub",
    url: "https://github.com/Tevin-Muchiri",
    icon: "fab fa-github",
  },
  {
    platform: "Email",
    url: "mailto:tevin.muchiringiru@gmail.com",
    icon: "fas fa-envelope",
  },
];

// Work Experience
const experiences = [
  {
    id: "exp1",
    company: "Strathmore University",
    role: "Lab Assistant",
    duration: "Jun 2024 - Present",
    startDate: new Date("2024-06-01"),
    endDate: null,
    description: [
      "Organized and invigilated practical lessons and examinations, ensuring smooth operations for 60+ students per session",
      "Troubleshoot and resolved network connectivity issues, minimizing downtime during lab sessions",
      "Assisted students with technical queries on programming, databases, and networking concepts",
      "Documented recurring technical issues and proposed solutions to improve lab efficiency",
    ],
    technologies: [
      "Networking",
      "Programming",
      "Databases",
      "Technical Support",
    ],
    location: "Nairobi, Kenya",
  },
  {
    id: "exp2",
    company: "Equity Bank Limited",
    role: "Relationship Officer",
    duration: "Feb 2023 - Jul 2023",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-07-31"),
    description: [
      "Processed an average of 150 teller transactions daily, including deposits and withdrawals",
      "Managed all M-Pesa transactions (deposits and withdrawals) for branch customers, ensuring compliance with financial procedures",
      "Generated and submitted daily, weekly, and monthly operational reports for branch performance monitoring",
      "Delivered frontline customer service by resolving transaction and connectivity issues in a timely manner",
      "Reviewed and verified colleagues' transaction records for accuracy and alignment with documentation standards",
    ],
    technologies: [
      "M-Pesa",
      "Banking Systems",
      "Customer Service",
      "Financial Reporting",
    ],
    location: "Nairobi West, Kenya",
  },
  {
    id: "exp3",
    company: "New Hope Initiative School - Kibera",
    role: "Volunteer Teacher",
    duration: "Jan 2023 - Feb 2023",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-28"),
    description: [
      "Taught Mathematics and Religious Education as primary subjects",
      "Provided support in English, Social Studies, and Creative Arts when needed",
      "Assisted with extracurricular activities, including football, drama, and scouts",
    ],
    technologies: ["Teaching", "Curriculum Development", "Student Mentoring"],
    location: "Kibera, Kenya",
  },
];

// Certifications (ordered: Machine Learning, Python, then newest to oldest)
const certifications = [
  {
    id: "cert1",
    name: "Machine Learning (Ongoing)",
    issuer: "ALX Africa",
    issueDate: new Date("2025-12-31"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "",
  },
  {
    id: "cert2",
    name: "Python for Data Science",
    issuer: "ALX Africa",
    issueDate: new Date("2025-12-31"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "",
  },
  {
    id: "cert3",
    name: "Data Analytics Professional Certificate",
    issuer: "ALX Africa",
    issueDate: new Date("2025-08-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certificates/Data Analytics.png",
  },
  {
    id: "cert4",
    name: "Professional Foundations",
    issuer: "ALX Africa",
    issueDate: new Date("2025-04-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certificates/Professional Foundations.png",
  },
  {
    id: "cert5",
    name: "CCNA: Enterprise Networking, Security & Automation",
    issuer: "Cisco",
    issueDate: new Date("2025-04-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage:
      "assets/certificates/CCNA Enterprise Networking, Security & Automation.png",
  },
  {
    id: "cert6",
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    issueDate: new Date("2025-04-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage:
      "assets/certificates/CCNA Switching, Routing, and Wireless Essentials.png",
  },
  {
    id: "cert7",
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    issueDate: new Date("2025-04-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certificates/Introduction to Networks CCNA.png",
  },
  {
    id: "cert8",
    name: "Certified Ethical Hacking",
    issuer: "Cisco",
    issueDate: new Date("2025-04-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certificates/Ethical hacker.png",
  },
  {
    id: "cert9",
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    issueDate: new Date("2025-03-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage:
      "assets/certificates/Introduction to Cybersecurity Cisco.png",
  },
  {
    id: "cert10",
    name: "Cybersecurity Fundamentals",
    issuer: "IBM",
    issueDate: new Date("2025-01-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage: "assets/certificates/IBM Cybersecurity.png",
  },
  {
    id: "cert11",
    name: "IT Essentials",
    issuer: "Cisco",
    issueDate: new Date("2023-10-01"),
    credentialId: "",
    verificationUrl: "",
    certificateImage:
      "assets/certificates/TevinNgiru-IT Essentials PC-certificate.png",
  },
];

// Skills
const skills = [
  {
    category: "Programming & Scripting",
    highlighted: true,
    skills: [
      { name: "Python", level: "Expert" },
      { name: "JavaScript", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
    ],
  },
  {
    category: "Web Development",
    highlighted: true,
    skills: [
      { name: "HTML/CSS", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
    ],
  },
  {
    category: "Database Management",
    highlighted: true,
    skills: [
      { name: "SQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Oracle", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Firebase", level: "Intermediate" },
      { name: "Database Design", level: "Advanced" },
    ],
  },
  {
    category: "Data Analytics & Visualization",
    highlighted: true,
    skills: [
      { name: "Pandas", level: "Advanced" },
      { name: "NumPy", level: "Advanced" },
      { name: "Matplotlib", level: "Advanced" },
      { name: "Scikit-learn", level: "Advanced" },
      { name: "Jupyter Notebook", level: "Advanced" },
      { name: "Google Colab", level: "Advanced" },
      { name: "Anaconda", level: "Advanced" },
      { name: "Excel", level: "Advanced" },
      { name: "Power BI", level: "Intermediate" },
    ],
  },
  {
    category: "Mobile Development",
    highlighted: true,
    skills: [
      { name: "Android Development", level: "Intermediate" },
      { name: "Java (Android)", level: "Intermediate" },
      { name: "Kotlin", level: "Intermediate" },
    ],
  },
  {
    category: "Networking & Cybersecurity",
    highlighted: true,
    skills: [
      { name: "CCNA", level: "Advanced" },
      { name: "Network Security", level: "Advanced" },
      { name: "Ethical Hacking", level: "Intermediate" },
      { name: "Cybersecurity Fundamentals", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Productivity",
    highlighted: false,
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "AI Tools", level: "Advanced" },
      { name: "Microsoft Office Suite", level: "Expert" },
      { name: "Google Workspace", level: "Expert" },
      { name: "Canva", level: "Advanced" },
    ],
  },
];

// Projects
const projects = [
  {
    id: "proj1",
    title: "Accelerated Learning Pedagogy Academic Management System",
    description:
      "A centralized full-stack system for ChallengeAid managing all program activities including notes, quizzes, and attendance tracking. Built with modern web technologies for seamless academic management.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    thumbnail: "assets/project1.jpg",
    liveUrl: null,
    githubUrl:
      "https://github.com/Tevin-Muchiri/Accelerated-Learning-Pedagogy-Academic-Management-System",
    completionDate: new Date("2024-11-01"),
    featured: true,
  },
  {
    id: "proj2",
    title: "Twitter Clone - Mobile App",
    description:
      "A mobile social media application replicating Twitter's core features. Built with Kotlin and Jetpack Compose for a modern Android experience with real-time updates and user interactions.",
    technologies: ["Kotlin", "Jetpack Compose", "Android", "Firebase"],
    thumbnail: "assets/project2.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/Tevin-Muchiri/TwitterClone",
    completionDate: new Date("2024-09-15"),
    featured: true,
  },
  {
    id: "proj3",
    title: "Expense and Income Tracker",
    description:
      "A comprehensive full-stack financial management application for tracking income and expenses. Features include categorization, analytics, and detailed financial reports with an intuitive user interface.",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    thumbnail: "assets/project3.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/Tevin-Muchiri/Expense-and-Income-Tracker",
    completionDate: new Date("2024-08-20"),
    featured: true,
  },
  {
    id: "proj4",
    title: "Amazon Clone",
    description:
      "A full-stack e-commerce platform replicating Amazon's core functionality. Includes product listings, shopping cart, user authentication, and payment integration with a responsive design.",
    technologies: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
    thumbnail: "assets/project4.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/Tevin-Muchiri/Amazon-clone",
    completionDate: new Date("2024-07-10"),
    featured: false,
  },
  {
    id: "proj5",
    title: "Recipe Website",
    description:
      "A full-stack recipe sharing platform where users can browse, search, and share recipes. Features include user authentication, recipe ratings, and a responsive design for all devices.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    thumbnail: "assets/project4.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/Tevin-Muchiri/Recipe-Website",
    completionDate: new Date("2024-06-15"),
    featured: false,
  },
  {
    id: "proj6",
    title: "Java Scientific Calculator",
    description:
      "A desktop application replicating the MacBook calculator interface using Java. Features advanced mathematical operations, a clean UI, and keyboard support for seamless calculations.",
    technologies: ["Java", "Swing", "AWT"],
    thumbnail: "assets/project4.jpg",
    liveUrl: null,
    githubUrl: "https://github.com/Tevin-Muchiri/Java-Scientific-Calculator",
    completionDate: new Date("2024-05-20"),
    featured: false,
  },
];
