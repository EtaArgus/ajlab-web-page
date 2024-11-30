import { BarChart } from "lucide-react";
import { Sparkles } from "lucide-react";
import { BrainCircuit  } from "lucide-react";
import { Cpu  } from "lucide-react";
import { LineChart  } from "lucide-react";
import { Database  } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import carlostolvett from "../assets/team-pictures/carlostolvett.jfif";
import israelosorio from "../assets/team-pictures/israelosorio.jpeg";
import gregoryschuit from "../assets/team-pictures/gregoryschuit.jfif";
import cristobaltorres from "../assets/team-pictures/cristobaltorres.jfif";

export const navItems = [
  { label: "Servicios", href: "#" },
  { label: "Equipo", href: "#" },
  { label: "Contacto", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const servicios = [
  {
    icon: <BarChart />,
    text: "Business Intelligence",
    description:
      "Transformamos datos en información procesable a través de dashboards interactivos, reportes automatizados y análisis descriptivo para la toma de decisiones estratégicas.",
  },
  {
    icon: <Sparkles />,
    text: "IA Generativa",
    description:
      "Implementamos soluciones basadas en inteligencia artificial generativa para la creación de contenido automatizado, modelos de lenguaje avanzado y simulaciones personalizadas.",
  },
  {
    icon: <BrainCircuit />,
    text: "Deep Learning",
    description:
      "Desarrollamos modelos de redes neuronales profundas para resolver problemas complejos, como reconocimiento de imágenes, procesamiento de lenguaje natural y sistemas avanzados de predicción.",
  },
  {
    icon: <Cpu />,
    text: "Machine Learning",
    description:
      "Diseñamos e implementamos algoritmos de aprendizaje automático para automatizar procesos, predecir comportamientos y optimizar operaciones.",
  },
  {
    icon: <LineChart />,
    text: "Analítica Avanzada",
    description:
      "Aplicamos técnicas estadísticas y modelos matemáticos para descubrir patrones, analizar tendencias y generar insights accionables.",
  },
  {
    icon: <Database />,
    text: "Ingeniería de Datos",
    description:
      "Construimos y gestionamos arquitecturas escalables para la integración, limpieza y procesamiento eficiente de datos.",
  },
];

export const team = [
  {
    imagen: carlostolvett,
    nombre: "Carlos Tolvett",
    cargo:
      "Ingeniero Analytics",
  },
  {
    imagen: israelosorio,
    nombre: "Israel Osorio",
    cargo:
      "Ingeniero Analytics",
  },
  {
    imagen: gregoryschuit,
    nombre: "Gregory Schuit",
    cargo:
      "Ingeniero IA",
  },
  {
    imagen: cristobaltorres,
    nombre: "Cristobal Torres",
    cargo:
      "Ingeniero ML",
  },
];


export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const footerLinks = [
  { href: "#", text: "Av. Hamburgo 1620, Ñuñoa, Chile" },
  { href: "#", text: "+56 9 9616 9704" },
  { href: "#", text: "contacto@yodoranalytics.cl" },
];

