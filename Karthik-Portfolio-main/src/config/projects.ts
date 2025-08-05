export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  links: {
    website?: string;
    github?: string;
    video?: string;
  };
  preview: string;
  video?: string;
  color: string;
}

export const projects = [
  {
    id: 1,
    title: "CKD Detection with Federated Learning",
    subtitle: "Privacy-Preserving Medical AI",
    description: "A federated deep learning model to predict Chronic Kidney Disease from decentralized patient data across multiple nodes. Ensures data security while enabling early diagnosis.",
    tech: ["Python", "TensorFlow", "Federated Learning", "Scikit-learn"],
    links: {
      website: "",
      github: "https://github.com/Sai-harshith-tule/CKD-prediction-using-federated-learning",
      video: ""
    },
    preview: "https://i.postimg.cc/3NBM3WtJ/Screenshot-2025-08-05-140711.png",
    color: "from-green-400 to-blue-500"
  },
  {
    id: 2,
    title: "Vegetation Classification Using ResNet",
    subtitle: "Geo-AI for Land Use Mapping",
    description: "A ResNet-based image classifier trained on satellite views to classify vegetation types from map data. Useful for crop planning and environmental monitoring.",
    tech: ["Python", "PyTorch", "Google Maps API", "ResNet"],
    links: {
      website: "https://sentinel-landcover-classification-123.streamlit.app/",
      github: "https://github.com/mvskarthik123/vegetation-type-classification",
      video: ""
    },
    preview: "https://i.postimg.cc/rFKcqwCQ/vegetation-home-pic.png",
    color: "from-lime-400 to-teal-500"
  },
  {
    id: 3,
    title: "Harmful Brain Activity Detection",
    subtitle: "EEG-Based Seizure Classifier",
    description: "A convolutional neural network that analyzes EEG spectrograms to detect harmful brain patterns related to seizure activity. Designed for clinical accuracy and low false-positive rate.",
    tech: ["Python", "TensorFlow", "KerasCV", "EEG"],
    links: {
      website: "",
      github: "https://github.com/mvskarthik123/harmful-brain-activity",
      video: ""
    },
    preview: "https://i.postimg.cc/nz9mBJvx/header.png",
    color: "from-red-400 to-pink-500"
  },
  {
    id: 4,
    title: "BV Blog Platform",
    subtitle: "Campus Blogging Web App",
    description: "A full-stack blogging platform built for BV Raju Institute of Technology students and faculty to publish articles, manage content, and comment. Built with MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    links: {
      website: "",
      github: "https://github.com/mvskarthik123/BV-Blog",
      video: ""
    },
    preview: "https://i.postimg.cc/T2Z70h8W/Whats-App-Image-2025-08-05-at-14-20-11-bd50e9ab.jpg",
    color: "from-indigo-400 to-purple-500"
  },
  {
    id: 5,
    title: "Library Management System",
    subtitle: "Book Issuing & Admin Panel",
    description: "A PHP-MySQL based web app to manage book inventory, student registrations, issuing/returning of books, and admin control panel.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    links: {
      website: "",
      github: "https://github.com/mvskarthik123/library-management",
      video: ""
    },
    preview: "https://i.postimg.cc/d1vgn8vk/Chat-GPT-Image-Jun-21-2025-06-05-29-PM.png",
    color: "from-orange-400 to-yellow-500"
  }
];
