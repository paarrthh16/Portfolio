export type ProjectAccent = "primary" | "cyber-teal" | "neon-green" | "destructive";

export type ProjectItem = {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: [string, string, string];
  techStack: string[];
  github: string;
  demo?: string;
  accent: ProjectAccent;
  featured?: boolean;
};

export const projectItems: ProjectItem[] = [
  {
    category: "Security & Computer Vision",
    title: "PixelVault",
    subtitle: "Zero-Trust, Privacy-Preserving Image Sharing System",
    description:
      "Image sharing platform that uses YOLOv8-based ROI detection to selectively encrypt sensitive regions while preserving full contextual visibility, with browser-side decryption ensuring complete server-side blindness to plaintext data.",
    highlights: [
      "Hybrid AES-256-GCM + RSA-2048 encryption pipeline",
      "Browser-side decryption via Web Crypto API",
      "RBAC with non-extractable CryptoKey storage in IndexedDB",
    ],
    techStack: ["Python", "FastAPI", "YOLOv8", "AES-256-GCM", "RSA-2048", "React.js", "PostgreSQL", "Web Crypto API"],
    github: "https://github.com/paarrthh16/PixelVault",
    accent: "primary",
    featured: true,
  },
  {
    category: "Distributed Systems",
    title: "Distributed Order Processor",
    subtitle: "Scalable Async Order Processing Pipeline",
    description:
      "Distributed order processing system using FastAPI and RabbitMQ to decouple synchronous APIs, with asynchronous workers handling high-throughput, fault-tolerant transaction processing.",
    highlights: [
      "Zero data loss during simulated flash-sale testing",
      "40%+ latency reduction via Redis distributed caching",
      "Fully containerized with Docker and Docker Compose",
    ],
    techStack: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/ParthShah/Distributed-Order-Processor",
    accent: "cyber-teal",
    featured: true,
  },
  {
    category: "AI / Computer Vision",
    title: "Derma Vision AI",
    subtitle: "Real-Time Skin Type Classification & Recommendation Engine",
    description:
      "End-to-end computer vision pipeline for real-time skin type classification from user-uploaded images, paired with a hybrid recommendation engine and cloud-native backend for secure user data handling.",
    highlights: [
      "Content-based + collaborative filtering recommendation engine",
      "Supabase (PostgreSQL) backend for auth and data",
      "Low-latency Streamlit frontend with Plotly analytics",
    ],
    techStack: ["Python", "TensorFlow", "OpenCV", "Supabase", "Streamlit", "Plotly"],
    github: "https://github.com/paarrthh16/dermavision-ai",
    accent: "neon-green",
  },
];