export const portfolioData = {
  personalInfo: {
    name: "Andrew Baxter",
    title: "AI Specialist & Software Developer",
    location: "Indianapolis, IN",
    phone: "(317)-446-1938",
    email: "asbaxter1@gmail.com",
    github: "https://github.com/asbaxter",
    linkedin: "https://www.linkedin.com/in/andrew-baxter-78575a235",
    resumeUrl: "/assets/images/andrew_baxter_resume.pdf",
    bio: "I am a Software Developer specializing in Agentic AI Solutions, Custom Model Context Protocol Integrations, and Enterprise Google Workspace Automation. Currently driving AI enablement for clients, custom integrations, and AI agent solutions."
  },

  skills: {
    aiEngineering: [
      { name: "Model Context Protocol (MCP)", level: 95 },
      { name: "Retrieval-Augmented Generation (RAG)", level: 90 },
      { name: "Agentic Workflows", level: 95 },
      { name: "Gemini & OpenAI APIs", level: 90 },
      { name: "Enterprise LLM Safety", level: 90 },
      { name: "Structured Data Extraction", level: 90 },
      { name: "Prompt Engineering", level: 95 },
      { name: "Antigravity", level: 95 }
    ],
    languagesCore: [
      { name: "Python", level: 90 },
      { name: "TypeScript & JavaScript", level: 95 },
      { name: "Node.js", level: 88 },
      { name: "SQL", level: 85 },
      { name: "HTML5 & CSS3", level: 90 }
    ],
    cloudDevOps: [
      { name: "GCP Cloud Run", level: 90 },
      { name: "Docker", level: 90 },
      { name: "GCP Cloud Functions", level: 92 },
      { name: "PostgreSQL & MongoDB", level: 85 },
      { name: "CI/CD & GitHub Actions", level: 90 }
    ],
    enterpriseAutomation: [
      { name: "Google Apps Script", level: 95 },
      { name: "Google AppSheet", level: 95 },
      { name: "OAuth 2.0", level: 92 },
      { name: "GWS Marketplace Apps", level: 90 },
      { name: "Google Workspace APIs", level: 95 },
      { name: "Data Migrations", level: 95 }
    ]
  },

  mcpServers: [
    {
      id: "drive-mcp",
      name: "google-drive-mcp",
      description: "Direct document indexer and vector query resolver. Connects local agentic flows directly to private Google Drive document corpus.",
      status: "ONLINE",
      version: "2.0.4",
      lastActive: "Just now",
      methods: ["list_files", "read_file_content", "search_documents", "semantic_search"]
    },
    {
      id: "gmail-dispatch-mcp",
      name: "gmail-dispatch-mcp",
      description: "Agentic draft generator and smart priority email router. Allows secure email reading, searching, drafting, and dispatching.",
      status: "ONLINE",
      version: "1.1.2",
      lastActive: "Just now",
      methods: ["search_threads", "get_message", "create_draft", "send_dispatch"]
    },
    {
      id: "calendar-mcp",
      name: "calendar-mcp",
      description: "Automated schedule coordinator. Provides autonomous agents read/write capabilities to organize calendars and prevent overlaps.",
      status: "ONLINE",
      version: "1.0.8",
      lastActive: "3 minutes ago",
      methods: ["get_availability", "create_event", "reschedule_meeting", "delete_event"]
    }
  ],

  projects: [
    {
      title: "Enterprise Workspace Re-platforming",
      category: "Google Workspace",
      description: "Served as the Lead Developer for a massive productivity migration for a leading electric vehicle (EV) manufacturer. Audited, re-architected, and fully rebuilt dozens of business-critical Microsoft Power Apps and Power Automate workflows into Google AppSheet applications and custom Apps Script systems, re-platforming every component tied to legacy SharePoint environments from start to finish.",
      tech: ["AppSheet", "Google Apps Script", "GCP", "REST APIs", "SQL Server"],
      github: null,
      live: null
    },
    {
      title: "Enterprise Media Cloud Migration Engine",
      category: "Software",
      description: "Developed and executed a custom data migration engine for a leading technology firm during their company-wide transition from Zoom to Google Meet. The system downloaded terabytes of historical Zoom cloud video recordings, restructured them into dynamic Shared Drives, and automatically mapped appropriate access permissions to preserve data structure.",
      tech: ["Node.js", "Zoom API", "Google Drive API", "OAuth 2.0", "File Streams"],
      github: "https://github.com/asbaxter",
      live: null
    },
    {
      title: "Public Workspace Productivity Add-on",
      category: "Google Workspace",
      description: "Designed, engineered, and scaled a public Google Calendar utility active on the Google Workspace Marketplace with hundreds of installations and premium recurring revenue. Orchestrated the application's full security compliance pipeline, successfully navigating Google's strict OAuth 2.0 verification audit.",
      tech: ["Google Apps Script", "Calendar API", "Workspace Add-on SDK", "OAuth 2.0"],
      github: "https://github.com/asbaxter",
      live: "https://andrewbaxter.dev/"
    },
    {
      title: "Secured Automated Document Pipeline",
      category: "Google Workspace",
      description: "Developed a secure document distribution pipeline for an aerospace and satellite launch company to manage highly sensitive engineering files. The background system monitors secure Shared Drives, intercepts approved drafts, triggers automated watermarked PDF generations, updates tracking databases, and dispatches encrypted notification logs.",
      tech: ["Google Apps Script", "Google Drive API", "PDF Generation", "Cloud Databases"],
      github: null,
      live: null
    },
    {
      title: "Gemini Enterprise Deployment & Consulting",
      category: "AI & Agents",
      description: "Consulted and led enterprise-grade deployments of Gemini Enterprise for corporate organizations. Engineered secure cloud setups in GCP by configuring Model Armor filters, connecting corporate database nodes, enabling developer APIs, and training technical clients on building custom no-code agents.",
      tech: ["GCP", "Gemini Enterprise API", "Model Armor", "GCP IAM", "Data Connectors"],
      github: null,
      live: null
    },
    {
      title: "Heterogeneous Data Ingestion Importer",
      category: "Software",
      description: "Engineered an automated claimant data ingestion pipeline for an insurance inspection firm. The script monitors designated routing inboxes, extracts attached requests formatted in highly irregular formats (messy CSVs, unstructured text, custom XMLs), parses them via specialized formatting engines and a Generative AI fallback parser, and imports structured cases directly into core Case Management Software.",
      tech: ["Node.js", "IMAP/Nodemailer", "Data Parsers", "Gemini API", "REST APIs"],
      github: "https://github.com/asbaxter",
      live: null
    },
    {
      title: "Google Workspace MCP Servers",
      category: "MCP Servers",
      description: "A suite of custom, modular Model Context Protocol (MCP) servers allowing local AI agents (such as Google Antigravity, Claude Desktop, or Cursor) to securely and headlessly connect to Google Workspace. Built as three independent, lightweight servers (Calendar, Drive, and Gmail) to respect the principle of least privilege. Features local token caching via a shared OAuth 2.0 CLI (test_auth.py) for headless execution, automated Google Docs/Sheets extraction (Docs to text, Sheets to CSV), and advanced email thread grouping using proper header stitching (In-Reply-To and References).",
      tech: ["Python", "FastMCP", "Google APIs Client", "OAuth 2.0"],
      github: "https://github.com/asbaxter/gws-mcp",
      live: null
    },
    {
      title: "google-drive-mcp",
      category: "MCP Servers",
      description: "Direct document indexer and vector query resolver. Connects local agentic flows directly to private Google Drive document corpus.",
      tech: ["Python", "FastMCP", "Google APIs Client", "OAuth 2.0"],
      github: "https://github.com/asbaxter/gws-mcp",
      live: null,
      isMcp: true,
      status: "ONLINE",
      version: "2.0.4",
      lastActive: "Just now",
      methods: ["list_files", "read_file_content", "search_documents", "semantic_search"]
    },
    {
      title: "gmail-dispatch-mcp",
      category: "MCP Servers",
      description: "Agentic draft generator and smart priority email router. Allows secure email reading, searching, drafting, and dispatching.",
      tech: ["Python", "FastMCP", "Google APIs Client", "OAuth 2.0"],
      github: "https://github.com/asbaxter/gws-mcp",
      live: null,
      isMcp: true,
      status: "ONLINE",
      version: "1.1.2",
      lastActive: "Just now",
      methods: ["search_threads", "get_message", "create_draft", "send_dispatch"]
    },
    {
      title: "calendar-mcp",
      category: "MCP Servers",
      description: "Automated schedule coordinator. Provides autonomous agents read/write capabilities to organize calendars and prevent overlaps.",
      tech: ["Python", "FastMCP", "Google APIs Client", "OAuth 2.0"],
      github: "https://github.com/asbaxter/gws-mcp",
      live: null,
      isMcp: true,
      status: "ONLINE",
      version: "1.0.8",
      lastActive: "3 minutes ago",
      methods: ["get_availability", "create_event", "reschedule_meeting", "delete_event"]
    },
    {
      title: "Agentic QA & Automated Deployment",
      category: "AI & Agents",
      description: "Built an autonomous multi-agent system executing on recurring cron jobs to manage personal projects. The agents perform end-to-end QA, run automated regression tests, generate test coverage reports, and automatically handle deployments, saving dozens of engineering hours weekly and eliminating deployment friction.",
      tech: ["Python", "GitHub Actions", "Docker", "Node.js"],
      github: "https://github.com/asbaxter",
      live: null
    },
    {
      title: "Keyboard Hero",
      category: "Software",
      description: "Designed and engineered a low-latency, browser-based rhythm-action application. Features high-frequency event loops running at 60Hz to handle rapid tactile keyboard inputs in real-time alongside low-latency Web Audio API graph routing for clean audio synchronization, scrolling canvas arrays, and persistent high-score database layers.",
      tech: ["HTML5", "CSS3", "JavaScript", "Web Audio API"],
      github: "https://github.com/asbaxter/keyboard-hero-v2",
      live: "https://asbaxter.github.io/keyboard-hero-v2/"
    }
  ],

  experience: [
    {
      role: "Software Developer",
      company: "The Wursta Corporation",
      period: "April 2024 - Present",
      description: "Promoted to lead software engineering workflows, custom SaaS client integrations, and corporate generative AI initiatives.",
      bullets: [
        "Served as Lead Developer on a massive enterprise migration project for a leading electric vehicle (EV) manufacturer, re-platforming a complex ecosystem of legacy Microsoft applications (Power Apps, Power Automate, Power Pages) into robust Google Workspace integrations and modernized cloud applications.",
        "Created an internal generative AI workflow leveraging AI agents and the Gemini Enterprise API to automatically construct, compile, and format customized Statements of Work (SOWs), drastically reducing manual drafting time for complex and unique product offerings.",
        "Acted as a technical leader by publishing corporate engineering blogs, creating internal developer content libraries, and designing comprehensive client-facing training materials and technical workshops."
      ]
    },
    {
      role: "Jr. Workspace Integrations Developer",
      company: "The Wursta Corporation",
      period: "April 2023 - April 2024",
      description: "Engineered custom Google Workspace extensibility solutions and automated complex business workflows, specializing in connecting Workspace with third-party platforms and internal enterprise systems.",
      bullets: [
        "Sole developer of Wursta's first public Google Workspace Store add-on, managing its design, engineering, and compliance from end to end, including deployment, Stripe payment integration, and premium feature gating.",
        "Delivered customized consulting solutions for diverse enterprise clients, rapidly engineering proof-of-concepts, automated Apps Script workflows, and AppSheet applications to resolve critical business bottlenecks."
      ]
    },
    {
      role: "Data Analyst",
      company: "FedEx Ground",
      period: "May 2022 - April 2023",
      description: "Engineered spatial logistics models, carrier metrics analytics, and operational data intelligence systems to optimize terminal throughput.",
      bullets: [
        "Designed spatial SQL and data visualization models to optimize high-volume distribution route architectures, presenting critical performance indicators directly to operations executives.",
        "Formulated route auditing algorithms that identified and resolved structural sorting failures, yielding a 7% increase in SLA compliance and a reduction in delivery failures.",
        "Coordinated real-time logistics operations and data exchanges between FedEx terminal systems and third-party transportation networks."
      ]
    },
    {
      role: "Sort Manager",
      company: "FedEx Ground",
      period: "October 2021 - May 2022",
      description: "Directed high-volume sorting operations, event-driven resource deployment, and multi-tier organizational throughput scaling.",
      bullets: [
        "Managed and mentored a technical leadership team of 20+ operations managers responsible for orchestrating a rapid-response workforce of 400+ handlers.",
        "Supervised real-time throughput workflows, coordinating event-driven logistics chains to successfully process 80,000+ package transfers daily under critical daily SLAs.",
        "Designed and executed high-frequency terminal operating action plans, optimizing spatial logistics patterns to dramatically increase processing speed and reduce bottleneck latency."
      ]
    },
    {
      role: "Area Manager",
      company: "FedEx Ground",
      period: "January 2021 - October 2021",
      description: "Managing specific sorting lines, throughput metrics, and floor leadership coordination.",
      bullets: [
        "Supervised, trained, and engaged a high-performing team of operations managers on safety standards and workflow optimization.",
        "Boosted weekend processing throughput efficiency by approximately 10% by re-engineering sorting routes into compact load areas."
      ]
    },
    {
      role: "Operations Manager",
      company: "FedEx Ground",
      period: "December 2018 - January 2021",
      description: "Managing terminal floor workflows, direct staff coordination, and scheduling.",
      bullets: [
        "Led frontline teams of package handlers through multiple high-intensity sorting phases, ensuring compliance with strict sorting lanes.",
        "Managed employee time cards, handled onboarding and training, and delivered formal operational performance reviews."
      ]
    }
  ],

  education: [
    {
      school: "Butler University",
      program: "Accelerated Software Engineering Program",
      period: "May 2022 - November 2022",
      details: "Comprehensive post-graduate software engineering curriculum covering modern JavaScript/TypeScript ecosystems, MVC architectures, responsive React interfaces, Node.js backend systems, database engines, and CI/CD pipelines."
    },
    {
      school: "Ball State University",
      program: "B.S. Coursework (Criminal Justice & Digital Forensics)",
      period: "August 2014 - May 2018",
      details: "Focused study in security protocols, legal criminology theory, and computer systems digital forensics, providing a highly analytical and cybersecurity-focused foundation for software engineering."
    }
  ],

  chatKnowledgeBase: [
    {
      keywords: ["hi", "hello", "hey", "greetings"],
      answer: "Hello! I am Andrew's virtual AI Assistant. I have been loaded with details about Andrew's work history, tech stack, and key projects. Ask me anything, like 'Tell me about the EV project', 'What did you do at FedEx?', 'Tell me about your Zoom migrator', or 'Where did you study?'"
    },
    {
      keywords: ["nda", "security compliance", "sensitive data", "handling ndas", "confidentiality", "security"],
      answer: "Andrew operates under strict confidentiality standards across all client engagements:\n1. **Data Isolation & Mocks:** When developing workspace automation or databases under strict NDA constraints, Andrew works exclusively with synthesized mock data, keeping live corporate data entirely isolated.\n2. **Least Privilege Execution:** Integrates OAuth 2.0 token caching and limits developer access to minimal, granular permissions (e.g. read-only file streams where writing is not required).\n3. **Compliance Readiness:** Familiar with enterprise guardrails including GCP Model Armor filters, customer data zero-retention policies, and secure VPC Service Controls."
    },
    {
      keywords: ["day-to-day", "wursta role", "workflow", "team", "agile", "consulting", "clients"],
      answer: "At Wursta, Andrew's day-to-day focus is highly client-facing and collaborative. Rather than just writing isolated code, he acts as an engineering consultant who: 1) Directly interfaces with enterprise clients to gather custom SaaS requirements; 2) Engineers rapid functional prototypes and proof-of-concepts; 3) Delivers and scales robust productions; and 4) Leads client training sessions on Gemini Enterprise and workspace automation tools. He bridges the gap between client business needs and deep technical execution."
    },
    {
      keywords: ["architectural decision", "conflict", "ambiguity", "nda", "stakeholder pressure", "client expectation", "replatforming"],
      answer: "At Wursta, Andrew served as Lead Developer re-platforming a leading electric vehicle (EV) manufacturer's entire SharePoint and Power Apps ecosystem onto Google Workspace.\n1. **The Challenge:** Working under strict NDA constraints and high technical ambiguity, legacy systems lacked documentation, and stakeholders were anxious about service disruption during the Microsoft-to-Google transition.\n2. **The Execution:** Andrew established a systematic auditing protocol, running shadow migrations of Power Automates. Rather than forcing clients into immediate rebuilds, he created functional prototypes in AppSheet in sprint 1 to establish direct visual buy-in.\n3. **The Result:** Re-platformed dozens of workflows on schedule, preserving legacy schemas, optimizing API caches, and winning executive trust by proving Workspace's superior latency and cost metrics."
    },
    {
      keywords: ["process architecture", "unified monolith", "monolith", "modular", "fastmcp", "scopes", "isolation"],
      answer: "Andrew built his Google Workspace MCP Servers suite as three modular processes (`calendar`, `drive`, `gmail`) rather than a single unified monolith to enforce strict security and scopes:\n1. **Least Privilege & Scopes:** By isolating the servers, an agent using only calendar tools is granted access exclusively to the calendar subprocess with the minimum OAuth scopes. A breach or error in one workspace tool has zero access to another.\n2. **Headless Execution Stability:** Running separate microservices prevents memory leaks or thread blocks in a heavy document-parsing script (like Drive to text/Sheets to CSV) from bringing down active Gmail drafts or Calendar routing services."
    },
    {
      keywords: ["execution limit", "6 minutes", "long-running", "aerospace document", "watermark", "trigger", "cloud run", "time limit", "document pipeline", "aerospace pipeline", "watermarking pipeline"],
      answer: "Google Apps Script restricts single executions to 6 minutes. To process massive backlogs of sensitive aerospace PDF document approvals without hitting this ceiling, Andrew designs decoupled, asynchronous pipelines:\n1. **State-Driven Queuing:** Built a database/spreadsheet-based state machine. Files are added to a queue (`PENDING`), watermarked in batches, and updated to `COMPLETED`.\n2. **Time-Driven Triggers:** Programmatically sets up Apps Script clock triggers to run every 10 minutes. The script starts, processes a safe slice of files (e.g. 4 minutes' worth), saves its index state, sets a new trigger, and exits cleanly.\n3. **GCP Cloud Run Offloading:** For highly intensive CPU-bound tasks (like PDF watermarking or encryption), the GAS script acts as a lightweight orchestrator that dispatches files to custom Docker containers in GCP Cloud Run, which run headlessly with unlimited execution windows."
    },
    {
      keywords: ["streams", "buffers", "backpressure", "terabytes", "network timeout", "file streams", "chunked", "media pipeline"],
      answer: "To migrate terabytes of historical Zoom cloud recordings to Google Drive securely in Node.js, Andrew engineered a streams-based migration engine:\n1. **Zero-Buffer Streaming:** Rather than buffering massive video files in memory (which causes heap out-of-memory errors), the engine piped the incoming Zoom media HTTP stream directly into a write stream via Node's `stream.pipeline` API.\n2. **Backpressure Management:** Utilized stream events to respect backpressure limits, pausing the reader stream if the writer's buffer became saturated.\n3. **Resilient OAuth Actions:** Implements chunked upload protocols (Google Drive Resumable Uploads) that automatically save progress, catch timeouts, and refresh expired OAuth tokens on active upload pipelines, allowing hours-long transfers to recover seamlessly."
    },
    {
      keywords: ["api rate limits", "caching architecture", "backoff", "latency", "redis", "ttl", "memoization", "rate limiting"],
      answer: "When integrating third-party APIs (like Google Workspace or Salesforce) at scale, rate limiting (HTTP 429) is a primary constraint. Andrew designs caching systems utilizing a multi-tiered approach:\n1. **Cache Store:** Implements in-memory key-value caching (such as Redis or structured GCP Firestore caches) with customized Time-To-Live (TTL) strategies depending on data mutability.\n2. **State Memoization:** Memoizes heavy read calls to eliminate redundant outgoing requests, cutting API footprint and reducing client latency by up to 60%.\n3. **Token Bucket & Retries:** Implements client-side rate limiting (Token Bucket algorithm) and wraps downstream fetch requests in custom middleware featuring Exponential Backoff with Jitter to handle temporary network/rate closures gracefully without dropping payloads."
    },
    {
      keywords: ["data privacy", "model armor", "prevent training", "guardrails", "api security", "gcp security", "vpc"],
      answer: "To ensure strict data privacy and security for corporate Gemini Enterprise deployments, Andrew implements robust GCP infrastructure configurations:\n1. **Zero Data Retention:** Configures GCP IAM protocols to utilize enterprise Gemini APIs that guarantee zero customer data logging and strictly prevent model training on proprietary corporate datasets.\n2. **Model Armor Policies:** Sets up GCP Model Armor filters to establish rigorous content filters, preventing prompt injections, toxic outputs, and accidental exposure of sensitive corporate identifiers.\n3. **Data Connectors & IAM:** Configures Cloud Data Connectors utilizing VPC Service Controls (VPC-SC) and least-privilege IAM service accounts, restricting data access strictly to authorized local data warehouses and preventing external data leakage."
    },
    {
      keywords: ["gemini enterprise", "model armor", "deployments", "gcp"],
      answer: "Andrew leads corporate Gemini Enterprise enablements and GCP deployments. He configures robust GCP infrastructure, setting up Model Armor security filters, connecting enterprise data connectors, enabling developer APIs, and training clients on building custom no-code LLM agents."
    },
    {
      keywords: ["insurance", "importer", "csv", "xml", "ingestion"],
      answer: "Andrew built an automated claim ingestion system for an insurance inspection agency. It monitors designated mailboxes, extracts attached requests formatted in highly heterogeneous formats (messy CSVs, unstructured text, XMLs), parses them via adapters and a Generative AI fallback parser, and imports them directly into case management software."
    },
    {
      keywords: ["ev", "electric vehicle", "migration", "power apps"],
      answer: "At Wursta, Andrew served as Lead Developer for a major electric vehicle (EV) manufacturer's massive migration from Microsoft to Google Workspace. He audited their legacy Power Apps and Power Automate workflows, and successfully re-platformed them into highly secure Google AppSheet applications and custom Apps Script systems."
    },
    {
      keywords: ["zoom", "recordings", "migrator", "meet", "migration engine"],
      answer: "For a leading technology firm migrating to Google Meet, Andrew engineered a custom cloud migration engine in Node.js. It interacted with Zoom APIs and Google Drive APIs to safely download, structure, and permissions-map terabytes of cloud video recordings into organized Shared Drive directories."
    },
    {
      keywords: ["add-on", "calendar add-on", "marketplace", "public app"],
      answer: "Andrew built and launched a public Google Calendar productivity add-on in the Google Workspace Marketplace. It currently has a couple hundred active downloads and premium users. Andrew coordinated its verification through Google's security review, OAuth scopes, and minimal permission configurations."
    },
    {
      keywords: ["aerospace", "space", "document pipeline", "watermark", "satellite"],
      answer: "Andrew designed a secure, automated document approval pipeline for an aerospace satellite launch company. Built in Apps Script, it monitors secure drives for approved draft documents, intercepts approvals, automatically constructs and watermarks PDF distributions, updates databases, and sends notifications."
    },
    {
      keywords: ["mcp", "model context protocol", "connectors", "gws-mcp"],
      answer: "Andrew built 'Google Workspace MCP Servers' (gws-mcp), an open-source suite of Python-based MCP servers using FastMCP. It enables local AI agents (like Antigravity, Claude, or Cursor) to securely and headlessly interact with Google Workspace. It features: 1) Modular servers for Calendar, Drive, and Gmail; 2) Shared OAuth 2.0 CLI (test_auth.py) with local token caching; 3) Google Docs-to-text and Sheets-to-CSV converters for native LLM consumption; and 4) Gmail decoders with In-Reply-To/References header stitching for perfect threading."
    },
    {
      keywords: ["antigravity", "agents", "cron", "qa", "deployment"],
      answer: "Andrew has built automated agentic pipelines. He has AI agents running on background cron jobs to manage personal projects—performing autonomous end-to-end QA, executing regression tests, generating reports, and automating deployments to eliminate developer friction."
    },
    {
      keywords: ["contract", "statement of work", "sow", "automation"],
      answer: "Andrew engineered an internal generative AI initiative at Wursta that automates Statement of Work (SOW) generation. The system leverages the Gemini Enterprise API and Google Docs API to construct, draft, and format compliant, custom client service agreements in minutes."
    },
    {
      keywords: ["apps script", "gas", "appsheet", "low code"],
      answer: "Andrew is an expert in Google Workspace extensibility. He has built everything imaginable in Apps Script (Workspace Add-ons, standalone web applications, custom API proxies, webhooks) and designed enterprise AppSheet apps linked to GCP cloud resources and relational SQL databases."
    },
    {
      keywords: ["transition", "career change", "why software", "fedex to software", "c++", "how did you start", "first code", "interest"],
      answer: "Andrew's passion for software development dates back to high school, when he taught himself C++ to write scripts that automated his math homework and built small text-based games. Though he initially avoided a formal computer science major in college—viewing it as overly dry and theoretical—he realized over time that he thrives as a hands-on builder and tinkerer who learns best by building tangible products rather than sitting in classroom lectures. After leading massive operational teams of over 400+ employees at FedEx Ground, he decided to return to his technical roots, completed the accelerated Butler University Web Development program, and pivoted full-time into software engineering."
    },
    {
      keywords: ["location", "relocate", "remote", "hybrid", "onsite", "indianapolis", "work preference"],
      answer: "Andrew is based in Indianapolis, IN. He is fully set up and highly experienced in remote work environments, but is also open to hybrid or on-site opportunities in the greater Indianapolis metropolitan area. He is not looking to relocate to other cities at this time."
    },
    {
      keywords: ["andrew", "about andrew", "who is", "profile", "bio", "summary"],
      answer: "Andrew Baxter is an AI Specialist & Software Developer based in Indianapolis, IN. Currently, he is a Software Developer at Wursta, specializing in Agentic AI solutions, custom Model Context Protocol (MCP) integrations, and enterprise Google Workspace automation. Previously, he led high-volume logistics operations as a Sort Manager at FedEx Ground, and studied Criminal Justice and Digital Forensics at Ball State University."
    },
    {
      keywords: ["wursta", "current job", "caching", "software developer", "workspace integrations"],
      answer: "Andrew works at Wursta. He started as a Jr. Workspace Integrations Developer in April 2023, and was promoted to Software Developer in April 2024. Key achievements include:\n- Serving as Lead Developer on a massive Microsoft-to-Google re-platforming project for an EV manufacturer;\n- Sole developer of Wursta's first public Google Workspace marketplace add-on;\n- Engineering an API caching protocol that reduced client integration load times by 60%;\n- Building an internal generative AI Statement of Work (SOW) generation workflow using the Gemini Enterprise API."
    },
    {
      keywords: ["fedex ground", "operations", "handlers", "leadership scale", "management style", "400", "managers", "leadership", "teams"],
      answer: "Managing over 400 package handlers and a team of 20+ operations managers at FedEx Ground under strict daily sorting deadlines provided Andrew with massive leadership and operations scaling skills:\n1. **Handling Complexity & Bottlenecks:** Directing the sorting of 80k+ packages daily is fundamentally a real-time queuing theory problem. Andrew translates this directly to software system bottlenecks, event-driven message brokers, and pipeline optimization.\n2. **Agile Team Leadership:** Managing large operational teams translates directly to scaling Agile developer groups. He excels at breaking down vague executive milestones into distinct sprints, resolving blockers, setting clear throughput KPIs, and fostering technical alignment."
    },
    {
      keywords: ["fedex", "logistics", "sort manager", "data analyst", "analyst", "manager", "operations manager", "area manager"],
      answer: "Before coding full-time, Andrew spent 4+ years in massive logistics leadership at FedEx Ground. He progressed from Operations Manager up to Sort Manager, supervising teams of 20+ operations managers and over 400+ package handlers, and directing daily sorting of 80,000+ packages. He also analyzed sorting throughput using PowerBI dashboard metrics."
    },
    {
      keywords: ["skills", "tech stack", "languages", "technologies", "tech", "work with", "frameworks", "tools", "databases", "python", "javascript", "react", "programming"],
      answer: "Andrew is a technical 'Swiss Army Knife' and Software Developer who excels at rapidly mastering new technologies and deploying secure, production-grade applications. His capabilities are organized into four core disciplines:\n1. **AI Engineering & Agentic Systems**: Model Context Protocol (MCP) microservices (FastMCP), Retrieval-Augmented Generation (RAG) systems, advanced Prompt Engineering, and autonomous cron-job agent loops.\n2. **Languages & Core Development**: Python, TypeScript & JavaScript (React/Next.js, Node.js), SQL, and HTML5/CSS3.\n3. **Cloud Infrastructure & DevOps**: Node.js APIs, Google Cloud Platform (Cloud Run, Cloud Functions), enterprise databases (PostgreSQL, MongoDB), and CI/CD pipelines (GitHub Actions).\n4. **Enterprise Integration & Automation**: Google Apps Script (GAS), Google AppSheet, OAuth 2.0, Google Workspace APIs, and cross-platform re-platforming (e.g. Microsoft to Workspace, Zoom to Google Meet).\nAndrew is highly adaptable, combining a digital forensics analytical mindset with deep software engineering expertise to construct enterprise-grade solutions."
    },
    {
      keywords: ["projects", "keyboard hero", "weather flow", "zoom", "calendar add-on", "aerospace", "gws-mcp"],
      answer: "Key projects Andrew has developed include:\n- Zoom Cloud Media Migrator (Node.js Zoom to Drive migration script)\n- Public Calendar Productivity Add-on (Wursta First Marketplace App)\n- Secured Document Approval Pipeline (Aerospace PDF automation)\n- Gemini Enterprise Enablement (Model Armor, GCP data integrations)\n- Insurance Claim Heterogeneous Ingestor (Automated claim mailbox parsing)\n- EV Manufacturer Workspace Re-platforming (Microsoft to Google migration)\n- Google Workspace MCP Servers (open-source Python FastMCP integration suite)\n- Keyboard Hero (browser rhythm game with Web Audio API)"
    },
    {
      keywords: ["education", "study", "butler", "ball state", "university", "digital forensics", "criminology", "degree"],
      answer: "Andrew's educational foundation contains:\n- Butler University: Completed an accelerated, highly intensive program in Software Engineering, mastering React, Node, and modern architectures.\n- Ball State University: Studied Criminal Justice and Digital Forensics, giving him a robust analytical and security-oriented framework ideal for cloud operations."
    },
    {
      keywords: ["contact", "email", "linkedin", "github", "phone", "call"],
      answer: "You can call Andrew at (317)-446-1938, email him at asbaxter1@gmail.com, find his code on GitHub (github.com/asbaxter), or connect with him on LinkedIn (linkedin.com/in/andrew-baxter-78575a235). You can also dispatch a message directly through the Contact form on this site!"
    }
  ],
};
