export const personalInfo = {
  name: "Mahmudul Hasan",
  title: "Full-Stack Software & Systems Engineer",
  tagline: "Architecting high-concurrency Rust & Java backends, edge IoT hardware protocols (ZKTeco ADMS, RTSP, Frigate AI), and interactive 3D web platforms.",
  status: "Available for High-Impact Roles",
  location: "Natun Bazar, Vatara, Dhaka, Bangladesh",
  phone: "+880 1410-749454",
  email: "eng.mahmudulhasan.bd@gmail.com",
  github: "https://github.com/mhcybroot",
  linkedin: "https://linkedin.com/in/mhcybroot",
  whatsapp: "https://wa.me/8801410749454",
  cvPdf: "/documents/MAHMUDUL_HASAN_CV.pdf",
  cvDocx: "/documents/MAHMUDUL_HASAN_CV.docx",
  metrics: [
    { label: "Production Experience", value: "2.5+", unit: "Years" },
    { label: "Verified Repositories", value: "10+", unit: "Projects" },
    { label: "Live Client Platforms", value: "4", unit: "Domains" },
    { label: "DPI Diploma (Distinction)", value: "3.75", unit: "CGPA" },
  ]
};

export const skillsCategories = [
  {
    category: "Backend & Systems",
    icon: "Server",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Java 21 (Spring Boot 3.4/4.0)", level: 92 },
      { name: "Rust 2024 (Axum, Tokio)", level: 88 },
      { name: "PostgreSQL & SeaORM", level: 90 },
      { name: "Spring Security 6 & JWT", level: 88 },
      { name: "WebSockets & Event Streams", level: 85 },
      { name: "RESTful API Architecture", level: 95 },
    ]
  },
  {
    category: "Frontend & Mobile",
    icon: "Layout",
    color: "from-cyan-400 to-emerald-400",
    skills: [
      { name: "React 19 & TypeScript", level: 90 },
      { name: "Flutter (BLoC Clean Arch)", level: 85 },
      { name: "Three.js & React Three Fiber", level: 82 },
      { name: "Tailwind CSS v4 & Base UI", level: 95 },
      { name: "GSAP & Framer Motion", level: 86 },
      { name: "Vite Build Pipelines", level: 90 },
    ]
  },
  {
    category: "IoT & Hardware Integration",
    icon: "Cpu",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "ZKTeco ADMS Push Protocol", level: 95 },
      { name: "Frigate NVR AI Computer Vision", level: 88 },
      { name: "CCTV RTSP & HTTP Streaming", level: 90 },
      { name: "Multi-Terminal Hardware Sync", level: 88 },
      { name: "Barcode & Gate Controllers", level: 92 },
      { name: "Edge Device Telemetry", level: 86 },
    ]
  },
  {
    category: "DevOps & Infrastructure",
    icon: "Network",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "MikroTik RouterOS & VLANs", level: 92 },
      { name: "Linux Server (Ubuntu/Debian)", level: 90 },
      { name: "Hostinger Cloud VPS", level: 90 },
      { name: "Vicidial VoIP / Asterisk PBX", level: 85 },
      { name: "Docker & Nginx Reverse Proxy", level: 86 },
      { name: "Chrome Extension (Manifest V3)", level: 88 },
    ]
  }
];

export const experienceTimeline = [
  {
    company: "Skylink Innovations Ltd",
    role: "IT Executive / Software & Systems Engineer",
    duration: "Oct 2025 – Present",
    location: "Dhaka, Bangladesh",
    type: "Current Role",
    color: "cyan",
    points: [
      "Architected all-in-one Enterprise ERP & HRMS portal (Java 21 Spring Boot 3.4, React, PostgreSQL) serving 50+ active daily staff.",
      "Engineered native ZKTeco biometric attendance synchronization via ADMS HTTP push protocol, eliminating manual tracking.",
      "Developed automated payroll computation module with multi-parameter JPA Specifications, OpenPDF, and Apache POI.",
      "Built operations tooling: Photo EXIF GPS/timestamp analyzer, interactive Crew Coverage Map, and real-time WebSocket monitoring.",
      "Deployed and maintained 7+ corporate websites on cloud VPS with Nginx and SSL configurations.",
      "Administered MikroTik core routing, managed switches, and Vicidial BPO telephony VoIP cluster."
    ]
  },
  {
    company: "SPY Security Solutions",
    role: "Software Executive / IoT & Systems Engineer",
    duration: "Mar 2024 – Oct 2025",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    color: "blue",
    points: [
      "Architected Smart Parking Management System (PMS-V2) featuring a high-concurrency Rust (Axum + Tokio) backend and Flutter (BLoC) frontend.",
      "Integrated ZKTeco gate barrier controllers via ADMS, embedded live CCTV streams over RTSP/HTTP, and implemented barcode checkout scanning.",
      "Built dynamic duration-based parking tariff engine, anti-passback rule enforcement, and duplicate-scan mitigation using SeaORM on PostgreSQL.",
      "Deployed Frigate NVR with AI computer vision object detection and REST webhooks for automated surveillance.",
      "Designed PoE physical network topologies across multi-terminal cashier gates and central edge servers."
    ]
  },
  {
    company: "The Institution of Engineers, Bangladesh (IEB)",
    role: "B.Sc. in Engineering (Equivalence) — Section A",
    duration: "Enrolled 2026 – Present",
    location: "Ramna, Dhaka",
    type: "Higher Education",
    color: "purple",
    points: [
      "Pursuing official B.Sc. in Engineering degree equivalence via AMIE examinations under the Institution of Engineers, Bangladesh (IEB).",
      "Focusing on advanced engineering mathematics, circuit theory, and computer systems engineering."
    ]
  },
  {
    company: "Dhaka Polytechnic Institute (DPI)",
    role: "Diploma in Engineering (Computer Science & Technology)",
    duration: "Session 2021 – 2022 (Completed)",
    location: "Dhaka, Bangladesh",
    type: "Academic Honors",
    color: "emerald",
    points: [
      "Graduated with top academic standing: CGPA 3.75 / 4.00 (Distinction / Top Academic Tier).",
      "Completed 4-year curriculum covering data structures, database design, operating systems, microprocessors, and network protocols."
    ]
  }
];

export const livePlatforms = [
  {
    name: "Skylink Official Portal",
    url: "https://skylinkltd.ai/",
    domain: "skylinkltd.ai",
    tech: "React, GSAP Motion, Framer Motion, Tailwind CSS",
    repo: "https://github.com/mhcybroot/skylink-website-",
    description: "Enterprise tech portal featuring advanced scroll-driven animations, micro-interactions, and responsive layout.",
    category: "Corporate Portal"
  },
  {
    name: "Finara Property Solutions LLC",
    url: "https://www.finaraprosolutions.com/",
    domain: "finaraprosolutions.com",
    tech: "React 19, Three.js, React Three Fiber, Vite",
    repo: "https://github.com/mhcybroot/Finara-Property-Solutions-LLC",
    description: "Real estate & property solutions platform featuring interactive 3D canvas rendering and modern glassmorphism design.",
    category: "Real Estate & 3D"
  },
  {
    name: "Homesync LLC",
    url: "https://homesyncllc.org/",
    domain: "homesyncllc.org",
    tech: "React 19, Three.js 3D Canvas, TypeScript, Vite",
    repo: "https://github.com/mhcybroot/Homesync",
    description: "Smart living and automation platform with full 3D interactive WebGL scene composition.",
    category: "Smart Home & IoT"
  },
  {
    name: "Dream Zone Builders Inc",
    url: "https://dreamzonebuilders.com/",
    domain: "dreamzonebuilders.com",
    tech: "React, Base UI, Tailwind CSS, Animate CSS",
    repo: "https://github.com/mhcybroot/Dream-Zone-Builders-Inc.",
    description: "Commercial construction and architectural engineering showcase with accessible UI components.",
    category: "Architecture & Engineering"
  }
];
