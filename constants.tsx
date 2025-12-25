
import { Experience, Project, Education, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Mahendra Reddy Avula",
  location: "Ongole, Andhra Pradesh",
  email: "mahendrareddyavula44@gmail.com",
  linkedin: "linkedin.com/in/mahereddy04",
  github: "github.com/mahe0420",
  resumeUrl: "https://example.com/your-resume.pdf", 
  summary: "Final-year B.Tech student specializing in Artificial Intelligence with strong foundations in full-stack web development and cloud computing. Experienced in building scalable applications using the MERN stack."
};

export const SKILLS = {
  languages: [
    { name: "C#", icon: "fas fa-hashtag" },
    { name: "Python", icon: "fab fa-python" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "Javascript", icon: "fab fa-js" },
  ],
  frameworks: [
    { name: "React.js", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express.js", icon: "fas fa-server" },
    { name: "MongoDB", icon: "fas fa-leaf" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" }
  ],
  tools: [
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "GitHub", icon: "fab fa-github" },
    { name: "VS Code", icon: "fas fa-code" },
    { name: "Postman", icon: "fas fa-rocket" }
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Web Development Internship",
    company: "Zaalima Developments",
    location: "Remote",
    period: "June 2025 – Sep 2025",
    points: [
      "Developed a MERN-stack e-commerce web application for a custom clothes printing business with design upload and order placement features.",

"Implemented secure user authentication, shopping cart, online payments, and an admin dashboard for managing products and orders.",

"Deployed the application on cloud platforms and added user order tracking, profiles, and order history features."
    ],
    certificateLink: "/certifications/Mahendra Reddy Avula-Internship.pdf",
    trainingLink: "/certifications/Mahendra Reddy Avula-Training.pdf"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Dynamic Web App for Clothes Printing Business",
    images: [
      "/clothes store assets/Screenshot 2025-10-05 173656.png",
       "/clothes store assets/Screenshot 2025-10-05 173955.png",
        "/clothes store assets/Screenshot 2025-10-05 173934.png",
         "/clothes store assets/Screenshot 2025-10-05 173821.png",
          "/clothes store assets/Screenshot 2025-10-05 173718.png"
    ],
    github: "https://github.com/mahe0420/e-commerce-clothes",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Cloudinary", "Stripe", "JWT", "TailwindCSS"]
,
    description: [
      "Built a website for custom clothes printing where users can choose clothes and upload their designs",

"Users can place orders and pay online, and admins can manage products and orders.",

"Customers can track their orders and view order history."
    ]
  },
  {
    title: "Autism Prediction",
    images: [
                "/Autism Prediction/Screenshot (16).png",
         "/Autism Prediction/Screenshot (17).png",
        "/Autism Prediction/Screenshot (18).png",
       "/Autism Prediction/Screenshot (19).png",

      "/Autism Prediction/Screenshot (20).png"
    ],
    github: "https://github.com/mahe0420/Autism-prediction-project.git",
    tech: ["Python", "TensorFlow","Flask", "Django", "MySQL", "Jupyter Notebook", "VS Code"]
,
    description: [
      "This project predicts Autism Spectrum Disorder (ASD) using machine learning to help in early detection.",

"It uses questions, images, and interactive activities, analyzed with deep learning models like MLP and CNN.",

"The system helps parents and doctors by giving early screening results and support suggestions."
    ]
  },
  {
    title: "Local Store Referral",
    images: [
                "/local store refeeral/Screenshot (21).png",
         "/local store refeeral/Screenshot (22).png",
        "/local store refeeral/Screenshot (23).png",
       "/local store refeeral/Screenshot (24).png",

      "/local store refeeral/Screenshot (25).png",
    ],
    github: "https://github.com/mahe0420/local-store-refferal.git",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"]
,
    description: [
      "A web platform that helps local stores refer customers to nearby stores using referral codes.",

"The referring store earns commission when the customer makes a purchase.",

"Built using ASP.NET Core MVC, Entity Framework, and SQL Server."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "AWS Cloud Virtual Internship",
    provider: "AICTE - EduSkills",
    year: "2024",
    description: "Certification in AWS Cloud Foundations and Architecture.",
    link: "/certifications/AWS cloud.pdf"
  },
  {
    name: "Artificial Intelligence Career Essentials",
    provider: "IBM SkillsBuild",
    year: "2025",
    description: "Foundational concepts in Generative AI and Machine Learning models.",
    link: "/certifications/IBM skills.pdf"
  },
  {
    name: "Web Full Stack Development",
    provider: "AICTE - EduSkills",
    year: "2025",
    description: "Web Full Stack Development Course",
    link: "/certifications/Web Full Stack.pdf"
  },
  {
    name: "Gen AI-Tools",
    provider: "Gen AI Academy - Google",
    year: "2025",
    description: "Foundational concepts in Generative AI And Tools",
    link: "/certifications/Gen Ai.png"
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "B.Tech, Artificial Intelligence",
    institution: "QIS College Of Engg & Tech, Ongole",
    period: "2022 - 2026",
    grade: "CGPA: 7.9 / 10"
  },
  {
    degree: "Intermediate (Class XII)",
    institution: "Sri Chaitanya College, Guntur",
    period: "2020 - 2022",
    grade: "CGPA: 8.9 / 10"
  },
  {
    degree: "School (Class X)",
    institution: "Sri Chaitanya School, Guntur",
    period: "2019 - 2020",
    grade: "CGPA: 10 / 10"
  }
];