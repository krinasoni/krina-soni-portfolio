export const projectsData = [
  {
    id: "ai-travel-planner",
    title: "AI Travel Planner",
    subtitle: "Intelligent Multi-User Itinerary & Trip Collaboration System",
    category: "AI & Full-Stack",
    badge: "Featured AI Project",
    summary: "An AI-powered travel planning platform featuring personalised itineraries, collaborative group trip planning, invitation codes, and shared trip management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AI Integration", "Tailwind CSS"],
    githubUrl: "https://github.com/krinasoni/ai-travel-planner",
    demoUrl: "https://ai-travel-planner-demo.vercel.app",
    accentColor: "#A855F7",
    highlights: [
      "Personalised AI Itineraries tailored to travel duration, budget, and specific traveler tastes.",
      "Real-time Collaborative Planning allowing travel groups to co-curate schedules.",
      "Unique Invitation Codes enabling seamless and secure group onboarding.",
      "Shared Trip Management with interactive day-by-day maps and activity checklists."
    ],
    architecture: "Built with a responsive React frontend communicating via RESTful endpoints to a Node.js/Express micro-service layer. Integrates generative AI APIs with custom structured prompt pipelines for reliable itinerary generation and MongoDB for persistent multi-user session state.",
    mockupType: "travel"
  },
  {
    id: "studyai",
    title: "StudyAI",
    subtitle: "AI-Powered Study Assistant",
    category: "iOS Application",
    badge: "AI & EdTech",
    summary: "Developed an AI-powered iOS study assistant that transforms lecture materials into structured and interactive learning resources. The application enables students to upload PDFs, record voice notes, generate AI-powered summaries and create flashcards for effective revision.",
    technologies: ["Swift", "SwiftUI", "Python", "FastAPI", "Firebase", "Cloud Firestore", "Core Data", "AI/NLP"],
    githubUrl: "https://github.com/krinasoni/studyai",
    demoUrl: "https://github.com/krinasoni/studyai/releases",
    accentColor: "#A855F7",
    highlights: [
      "iOS Interface Development: Engineered responsive, fluid SwiftUI views and intuitive mobile study workflows.",
      "Backend API Integration: Developed asynchronous, high-throughput endpoints with Python and FastAPI.",
      "Document Processing: Automated parsing of lecture PDF slides and voice note audio recordings.",
      "AI-Powered Content Generation: Integrated NLP pipelines generating concise summaries and key concepts.",
      "Flashcard Management: Designed interactive revision decks for high-yield spaced repetition study.",
      "Cloud Data Synchronisation: Backed by Firebase and Cloud Firestore with offline Core Data persistence."
    ],
    architecture: "Built with a native iOS frontend in Swift and SwiftUI, leveraging Core Data for offline persistence. Communicates with a scalable Python and FastAPI backend service handling document parsing, audio transcription, and AI/NLP summarization, with real-time multi-device cloud synchronization powered by Firebase and Cloud Firestore.",
    mockupType: "studyai"
  },
  {
    id: "algomed",
    title: "AlgoMed",
    subtitle: "AI-Assisted Healthcare & Patient Consultation Platform",
    category: "AI & Full-Stack Healthcare",
    badge: "Healthcare Technology",
    summary: "A full-stack healthcare platform designed to connect patients with healthcare professionals through online consultations and AI-assisted clinical services. Patients can discover doctors, schedule appointments, and communicate through a streamlined digital experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "MERN Stack", "AI Integration"],
    githubUrl: "",
    demoUrl: "",
    accentColor: "#22C7A5",
    highlights: [
      "Doctor Discovery: Browse healthcare professionals and explore their profiles.",
      "Appointment Scheduling: Find suitable consultation times and manage appointments.",
      "Patient Communication: Bring patients and healthcare professionals together through an online experience.",
      "AI-Assisted Services: Support the healthcare workflow with AI-enabled clinical assistance."
    ],
    architecture: "Designed around the MERN stack, with a React client communicating with Node.js and Express API services and MongoDB for application data. AI-assisted capabilities complement the consultation workflow. Add authentication, privacy, and clinical-safety details only where they are implemented in the project.",
    mockupType: "algomed"
  },
  {
    id: "safeher",
    title: "SafeHer",
    subtitle: "Personal Safety Companion (Android)",
    category: "Android Application",
    badge: "Personal Safety & GPS",
    summary: "A personal safety Android application designed to support users during emergencies through SOS alerts, GPS-based location sharing and trusted contact management. The application provides safety check-ins, emergency contact notifications and access to nearby emergency services.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Google Maps SDK", "Room Database", "WorkManager", "Location Services"],
    githubUrl: "https://github.com/krinasoni/safeher",
    demoUrl: "https://github.com/krinasoni/safeher/releases",
    accentColor: "#F43F5E",
    highlights: [
      "One-Tap SOS Emergency Alerts: Instantly triggers multi-channel emergency distress notifications.",
      "GPS-Based Live Location Sharing: Real-time breadcrumb tracking powered by Android Location Services & Google Maps.",
      "Trusted Emergency Contacts: Custom hierarchy for immediate alerting and automated SMS/push broadcasts.",
      "Safety Timer & Journey Check-ins: Automated background check-in countdowns managed via WorkManager.",
      "Nearby Services Discovery: Direct mapping and routing to nearest hospitals, police stations, and safe zones.",
      "Offline Data Storage: Encrypted Room Database caching emergency history, contacts, and offline protocols."
    ],
    architecture: "Architected natively in Kotlin with Jetpack Compose following MVVM and clean architecture principles. Utilizes Android Location Services and Google Maps SDK for high-precision real-time positioning, WorkManager for reliable background safety timers, Firebase for cloud notification dispatch, and Room Database for encrypted local offline persistence.",
    mockupType: "safeher"
  }
];
