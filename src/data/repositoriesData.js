export const verifiedRepositories = [
  {
    id: "pms-v2",
    name: "PMS-V2",
    fullName: "mhcybroot/PMS-V2",
    description: "Enterprise Smart Parking Management System with high-concurrency Rust Axum backend, reactive Flutter BLoC frontend, ZKTeco ADMS barrier control, and real-time RTSP CCTV streaming.",
    category: "Systems & IoT",
    language: "Rust",
    langColor: "#dea584",
    stars: 12,
    forks: 3,
    repoUrl: "https://github.com/mhcybroot/PMS-V2",
    cloneCmd: "git clone https://github.com/mhcybroot/PMS-V2.git",
    techBadges: ["Rust 2024", "Axum 0.8", "Tokio", "SeaORM", "Flutter BLoC", "PostgreSQL", "Docker", "RTSP / CCTV"],
    architecture: {
      layer1: "Edge Hardware (ZKTeco Barrier, RTSP CCTV, Barcode Scanner)",
      layer2: "Protocol Gateway (zk_adms_service.rs, cctv_service.rs)",
      layer3: "Async Core Backend (Axum 0.8, Tokio, JWT, Argon2)",
      layer4: "Data Persistence (SeaORM 1.1 + PostgreSQL Async Pool)",
      layer5: "Multi-Terminal Clients (Flutter Desktop/Mobile BLoC UI)"
    },
    keyModules: [
      { file: "backend/src/service/zk_adms_service.rs", desc: "Real-time ZKTeco barrier triggering and push protocol handler" },
      { file: "backend/src/service/cctv_service.rs", desc: "Live RTSP and HTTP camera stream processing and gate association" },
      { file: "backend/src/service/ticket_service.rs", desc: "Duration tariff calculator, anti-passback logic, duplicate scan filter" },
      { file: "frontend/lib/features/parking/presentation/bloc/slot/slot_bloc.dart", desc: "BLoC state management for real-time visual slot occupancy" }
    ]
  },
  {
    id: "skylink-custom-backend",
    name: "Skylink-custom-backend",
    fullName: "mhcybroot/Skylink-custom-backend",
    description: "Enterprise HRMS, Biometric Attendance, and Operations Management backend powered by Java 21, Spring Boot 3.4, and PostgreSQL for 50+ active daily employees.",
    category: "Backend & Systems",
    language: "Java",
    langColor: "#b07219",
    stars: 8,
    forks: 2,
    repoUrl: "https://github.com/mhcybroot/Skylink-custom-backend",
    cloneCmd: "git clone https://github.com/mhcybroot/Skylink-custom-backend.git",
    techBadges: ["Java 21", "Spring Boot 3.4", "Spring Security 6", "PostgreSQL", "WebSockets", "Apache POI", "OpenPDF", "ZKTeco ADMS"],
    architecture: {
      layer1: "Biometric Hardware (ZKTeco ADMS Push Protocol)",
      layer2: "Ingestion Service (AdmsService.java, WebSocket Broadcast)",
      layer3: "Business Engine (PayrollService.java, ShiftService.java, PhotoMetadataService.java)",
      layer4: "Data Layer (Spring Data JPA Criteria Specifications + PostgreSQL)",
      layer5: "Frontend Client (React 19 Dashboard + Web Push Notifications)"
    },
    keyModules: [
      { file: "src/main/java/.../service/AdmsService.java", desc: "ZKTeco HTTP push communication listener for automatic punch logs" },
      { file: "src/main/java/.../service/PayrollService.java", desc: "Multi-role salary calculation engine with automated deductions" },
      { file: "src/main/java/.../service/PhotoMetadataService.java", desc: "Automated GPS coordinate and device timestamp EXIF extraction" },
      { file: "src/main/java/.../service/ZipCodeGeoService.java", desc: "Geographic coordinate resolution for live Crew Coverage Mapping" }
    ]
  },
  {
    id: "watch-employee",
    name: "watch-employee",
    fullName: "mhcybroot/watch-employee",
    description: "Employee productivity telemetry solution combining a Chrome Extension (Manifest V3) background service worker with a Spring Boot OpenAPI backend.",
    category: "Tools & Telemetry",
    language: "Java",
    langColor: "#b07219",
    stars: 5,
    forks: 1,
    repoUrl: "https://github.com/mhcybroot/watch-employee",
    cloneCmd: "git clone https://github.com/mhcybroot/watch-employee.git",
    techBadges: ["Java 21", "Spring Boot 4.0", "Chrome Ext Manifest V3", "OpenAPI 3.0", "Spring Security", "PostgreSQL"],
    architecture: {
      layer1: "Client Edge (Chrome Background Service Worker & Content Script)",
      layer2: "Telemetry Hooks (idle, tabs, declarativeNetRequest APIs)",
      layer3: "REST Receiver (Spring Boot OpenAPI documented controllers)",
      layer4: "Data Persistence (Spring Data JPA + PostgreSQL)"
    },
    keyModules: [
      { file: "extension-chrome/background.js", desc: "Manifest V3 background worker monitoring active tab and idle state transitions" },
      { file: "extension-chrome/autofill.js", desc: "Secure credential autofill and workspace identity script" },
      { file: "src/main/java/.../EmployeeMonitoringController.java", desc: "Spring Boot RESTful telemetry ingestion endpoints" }
    ]
  },
  {
    id: "result-management-system",
    name: "Result-Management-System",
    fullName: "mhcybroot/Result-Management-System",
    description: "Academic examination grading and transcript generation engine with collision-tested grading algorithms, dynamic PDF generation, and bulk Excel I/O.",
    category: "Backend & Systems",
    language: "Java",
    langColor: "#b07219",
    stars: 6,
    forks: 1,
    repoUrl: "https://github.com/mhcybroot/Result-Management-System",
    cloneCmd: "git clone https://github.com/mhcybroot/Result-Management-System.git",
    techBadges: ["Java 21", "Spring Boot 3.5", "iText7 PDF", "Apache POI", "PostgreSQL", "Thymeleaf", "Spring Security"],
    architecture: {
      layer1: "Data Ingestion (Apache POI Excel Batch Import)",
      layer2: "Grading Calculation (GradingSimulation.java with collision tests)",
      layer3: "PDF Engine (iText7 + html2pdf dynamic transcript renderer)",
      layer4: "Storage (PostgreSQL / H2 in-memory test database)"
    },
    keyModules: [
      { file: "GradingSimulation.java", desc: "Multi-tier grade calculation algorithm with GPA verification tests" },
      { file: "RollNumberCollisionTest.java", desc: "Automated test suite verifying student roll collision resilience" }
    ]
  },
  {
    id: "skylink-website",
    name: "skylink-website-",
    fullName: "mhcybroot/skylink-website-",
    description: "Production web portal for Skylink Innovations Ltd featuring advanced GSAP and Framer Motion micro-interactions, Lottie animations, and Tailwind CSS.",
    category: "Live Client Platforms",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 7,
    forks: 2,
    repoUrl: "https://github.com/mhcybroot/skylink-website-",
    cloneCmd: "git clone https://github.com/mhcybroot/skylink-website-.git",
    liveUrl: "https://skylinkltd.ai/",
    techBadges: ["React 18", "GSAP 3.15", "Framer Motion 12", "Tailwind CSS", "Lottie React", "Vite"],
    keyModules: [
      { file: "src/components/Hero.jsx", desc: "Scroll-triggered interactive hero section with GSAP timeline" },
      { file: "src/components/Services.jsx", desc: "Framer motion card transitions with responsive grid" }
    ]
  },
  {
    id: "finara-property-solutions",
    name: "Finara-Property-Solutions-LLC",
    fullName: "mhcybroot/Finara-Property-Solutions-LLC",
    description: "High-end corporate real estate platform incorporating interactive 3D WebGL scenes using React 19, Three.js, and React Three Fiber.",
    category: "Live Client Platforms",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 9,
    forks: 2,
    repoUrl: "https://github.com/mhcybroot/Finara-Property-Solutions-LLC",
    cloneCmd: "git clone https://github.com/mhcybroot/Finara-Property-Solutions-LLC.git",
    liveUrl: "https://www.finaraprosolutions.com/",
    techBadges: ["React 19", "Three.js 0.182", "React Three Fiber", "TypeScript 5.9", "Babel React Compiler", "Vite 7"],
    keyModules: [
      { file: "src/components/Canvas3D.tsx", desc: "Interactive Three.js WebGL canvas rendering 3D architecture model" }
    ]
  },
  {
    id: "homesync",
    name: "Homesync",
    fullName: "mhcybroot/Homesync",
    description: "Next-generation smart home IoT automation website featuring interactive 3D particle Canvas, React 19, and TypeScript.",
    category: "Live Client Platforms",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 8,
    forks: 1,
    repoUrl: "https://github.com/mhcybroot/Homesync",
    cloneCmd: "git clone https://github.com/mhcybroot/Homesync.git",
    liveUrl: "https://homesyncllc.org/",
    techBadges: ["React 19", "Three.js", "Drei", "TypeScript", "Tailwind CSS", "Vite 7"],
    keyModules: [
      { file: "src/components/SmartScene.tsx", desc: "Interactive smart device control visualizer with 3D raycasting" }
    ]
  },
  {
    id: "dream-zone-builders",
    name: "Dream-Zone-Builders-Inc.",
    fullName: "mhcybroot/Dream-Zone-Builders-Inc.",
    description: "Commercial architectural engineering and construction company web application with Base UI component composition and Tailwind v4.",
    category: "Live Client Platforms",
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 6,
    forks: 1,
    repoUrl: "https://github.com/mhcybroot/Dream-Zone-Builders-Inc.",
    cloneCmd: "git clone https://github.com/mhcybroot/Dream-Zone-Builders-Inc..git",
    liveUrl: "https://dreamzonebuilders.com/",
    techBadges: ["React 19", "Base UI", "Tailwind CSS v4", "Framer Motion", "Vite 8"],
    keyModules: [
      { file: "src/components/PortfolioGrid.jsx", desc: "Dynamic architectural project showcase with category filters" }
    ]
  },
  {
    id: "habitat-living-solutions",
    name: "habitat-living-solutions",
    fullName: "mhcybroot/habitat-living-solutions",
    description: "Contemporary interior and spatial design web application utilizing React 19, Three.js 3D viewport, and TypeScript.",
    category: "Live Client Platforms",
    language: "TypeScript",
    langColor: "#3178c6",
    stars: 5,
    forks: 1,
    repoUrl: "https://github.com/mhcybroot/habitat-living-solutions",
    cloneCmd: "git clone https://github.com/mhcybroot/habitat-living-solutions.git",
    techBadges: ["React 19", "Three.js", "React Three Fiber", "TypeScript", "Tailwind CSS"],
    keyModules: [
      { file: "src/components/InteriorModel.tsx", desc: "Interactive 3D interior design room viewer" }
    ]
  },
  {
    id: "ashford-solution-llc",
    name: "ashford-solution-llc",
    fullName: "mhcybroot/ashford-solution-llc",
    description: "Corporate consulting and solutions web platform featuring AOS scroll animations and React Helmet Async SEO optimization.",
    category: "Live Client Platforms",
    language: "JavaScript",
    langColor: "#f1e05a",
    stars: 4,
    forks: 1,
    repoUrl: "https://github.com/mhcybroot/ashford-solution-llc",
    cloneCmd: "git clone https://github.com/mhcybroot/ashford-solution-llc.git",
    techBadges: ["React 18", "AOS Animations", "React Helmet Async", "Tailwind CSS", "Vite"],
    keyModules: [
      { file: "src/components/ConsultingCards.jsx", desc: "Responsive card grid with staggered AOS reveal effects" }
    ]
  }
];
