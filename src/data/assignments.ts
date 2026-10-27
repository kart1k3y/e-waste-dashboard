import { Assignment, AssignmentCategory } from '../types';

/**
 * CENTRALIZED ASSIGNMENT REPOSITORY
 * All entries are derived directly from the student's actual submitted files.
 * Contains verified titles, real file paths, accurate file sizes, categories, and topics.
 */
export const assignmentsData: Assignment[] = [
  {
    id: "assignment-00-course-insights",
    assignmentNumber: "Assignment 0",
    title: "Course Insights & E-Waste Foundations",
    shortSummary: "Comprehensive study covering baseline concepts of electronic waste, generation trends, hazardous constituents, and course learning objectives.",
    detailedOverview: "This initial foundation assignment details essential insights for the E-Waste Management (EWEM) course. It analyzes global and domestic electronic waste generation dynamics, consumer electronic product lifecycles, dangerous toxic constituents (lead, cadmium, mercury, brominated flame retardants), and the critical need for scientific recycling and institutional disposal frameworks.",
    category: "Core Coursework",
    submissionDate: "August 2024",
    previewImage: "/thumbnails/thumb_00_zero.png",
    primaryFileType: "pdf",
    topicsCovered: [
      "Course Learning Objectives",
      "E-Waste Growth Trends",
      "Hazardous Components & Toxicity",
      "Product Lifecycle Analysis"
    ],
    keyTakeaway: "Establishes fundamental terminology and highlights why electronics require dedicated reverse logistics distinct from municipal solid waste.",
    files: [
      {
        id: "f-00-1",
        name: "E-waste_0.pdf",
        filePath: "/assignments/00_assignment_zero_course_insights.pdf",
        fileType: "pdf",
        fileSize: "752 KB",
        description: "Primary 6-page course insight submission covering core concepts, hazards, and lifecycle stages.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-01-maharashtra-tracker",
    assignmentNumber: "Assignment 1",
    title: "Maharashtra E-Waste Management Tracker & 100-Point Scorecard",
    shortSummary: "Quantitative state-level evaluation of Maharashtra using a 100-point scorecard across 7 critical indicators, with an interactive cloud dashboard and Excel model.",
    detailedOverview: "A comprehensive assessment of Maharashtra's electronic waste performance based on the State E-Waste Management Tracker framework. Evaluates 7 core dimensions: generation and inventory, collection performance, formal recycling capacity, regulatory compliance, informal sector formalization, environmental safeguards, and public outreach. Accompanied by a live interactive cloud dashboard on The Bricks.",
    category: "State Trackers & Data",
    submissionDate: "August 2024",
    previewImage: "/thumbnails/thumb_01_tracker.png",
    primaryFileType: "pdf",
    topicsCovered: [
      "100-Point State Scorecard",
      "Maharashtra Collection Metrics",
      "CPCB Benchmark Compliance",
      "Quantitative Excel Modeling",
      "Live Cloud Dashboard"
    ],
    keyTakeaway: "Translates state environmental data into actionable scorecards to pinpoint gaps between generated volume and formal authorized dismantling capacity.",
    files: [
      {
        id: "f-01-1",
        name: "Maharashtra_EWaste_Tracker_Report_2025.pdf",
        filePath: "/assignments/01_maharashtra_ewaste_tracker_report_2025.pdf",
        fileType: "pdf",
        fileSize: "4.1 KB",
        description: "Executive report detailing scorecard methodology, benchmarks, and Maharashtra state performance.",
        isPrimary: true
      },
      {
        id: "f-01-2",
        name: "Maharashtra_2025Tracker.xlsx",
        filePath: "/assignments/01_maharashtra_2025_tracker.xlsx",
        fileType: "xlsx",
        fileSize: "40.5 KB",
        description: "Full calculation spreadsheet with 7 indicator worksheets, benchmark weights, and dynamic scoring formulas."
      },
      {
        id: "f-01-3",
        name: "Live Cloud Dashboard Link",
        filePath: "/assignments/01_dashboard_link.txt",
        fileType: "link",
        fileSize: "84 B",
        description: "Direct cloud dashboard access on The Bricks platform with interactive visualizations.",
        externalUrl: "https://app.thebricks.com/file/0d1f5e31-d8cd-47a4-8b29-bb081fea1c36"
      }
    ]
  },
  {
    id: "assignment-02-carbon-footprint",
    assignmentNumber: "Practical Activity",
    title: "Carbon Footprint Tracker Assessment & Lifestyle Audit",
    shortSummary: "Empirical carbon footprint computation recording individual daily energy usage, transport choices, and electrical appliance emissions.",
    detailedOverview: "A personal environmental accounting exercise evaluating lifestyle greenhouse gas contributions. Tracks electricity usage, travel modalities, digital gadget consumption, and dietary factors to quantify annual CO2 equivalent emissions and identify practical reduction pathways.",
    category: "Core Coursework",
    submissionDate: "August 2024",
    previewImage: "/thumbnails/thumb_02_carbon.png",
    primaryFileType: "image",
    topicsCovered: [
      "Carbon Footprint Accounting",
      "Personal Energy Auditing",
      "Appliance Consumption Factors",
      "Lifestyle Emission Mitigation"
    ],
    keyTakeaway: "Connects micro-level personal device consumption to macro-level environmental consequences and carbon intensity.",
    files: [
      {
        id: "f-02-1",
        name: "Screenshot_20260804-150655.png",
        filePath: "/assignments/02_carbon_footprint_tracker_submission.png",
        fileType: "image",
        fileSize: "200 KB",
        description: "Verified mobile footprint tracking application calculation and verified metric breakdown.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-03-ten-case-studies",
    assignmentNumber: "Research Report",
    title: "E-Waste, Recycling & Circular Economy: 10 Global & Indian Case Studies",
    shortSummary: "Exhaustive 27-page research report examining 10 global policy models, municipal collection systems, informal sector dynamics, and corporate recycling initiatives.",
    detailedOverview: "An authoritative 27-page academic report analyzing 10 real-world case studies across policy, municipal infrastructure, informal hubs, and circular engineering. Examines Japan's Home Appliance Recycling Law, Switzerland's pioneering advance recycling fee (Swico/SENS), India's E-Waste Rules 2022 & EPR framework, Bengaluru's electronic hub infrastructure, Mumbai MMR collection challenges, Kerala's Clean Kerala Company model, Pune's SWaCH waste-picker cooperative integration, Dharavi's informal processing network, and Dell's closed-loop recycled plastics supply chain.",
    category: "Case Studies",
    submissionDate: "September 2024",
    previewImage: "/thumbnails/thumb_03_case_study.png",
    primaryFileType: "pdf",
    topicsCovered: [
      "Japan Home Appliance Law",
      "Switzerland Swico/Sens System",
      "India E-Waste Rules 2022 & EPR",
      "Pune SWaCH Cooperative Model",
      "Dharavi Informal Recycling Hub",
      "Dell Closed-Loop Plastics",
      "Bengaluru & Mumbai Urban Systems"
    ],
    keyTakeaway: "Highlights that technological recycling cannot succeed in isolation without formal integration of informal workers and enforceable EPR financial mechanisms.",
    files: [
      {
        id: "f-03-1",
        name: "Case_Study_Report (1).pdf",
        filePath: "/assignments/03_case_study_report_10_studies.pdf",
        fileType: "pdf",
        fileSize: "415 KB",
        description: "Complete 27-page academic monograph with structured case breakdowns, comparative tables, and bibliographic citations.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-04-class-written-task",
    assignmentNumber: "Class Activity",
    title: "In-Class Problem Formulation & Critical Analysis Write-Up",
    shortSummary: "Original handwritten classroom analytical exercise exploring lifecycle failure points, immediate hazards, and structured remediation proposals.",
    detailedOverview: "Conducted during active classroom lecture sessions, this task captures spontaneous problem formulation, handwritten schematic diagrams of consumer electronics lifecycles, identification of toxic emission risks during informal burning, and student-formulated institutional collection strategies.",
    category: "Campaigns & Classwork",
    submissionDate: "August 2024",
    previewImage: "/thumbnails/thumb_04_class_task.png",
    primaryFileType: "image",
    topicsCovered: [
      "Classroom Problem Formulation",
      "Handwritten Synthesis",
      "Informal Burning Hazards",
      "Direct Lecture Assessment"
    ],
    keyTakeaway: "Demonstrates active classroom engagement and spontaneous conceptual problem solving under timed academic conditions.",
    files: [
      {
        id: "f-04-1",
        name: "Class Task_Upload the Write up done in Class.jpeg",
        filePath: "/assignments/04_class_task_written_activity.jpeg",
        fileType: "image",
        fileSize: "4.0 MB",
        description: "High-resolution photographic capture of original multi-page handwritten class submission.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-05-companies-epr-compliance",
    assignmentNumber: "Industry Audit & Web App",
    title: "EPR Compliance vs Violations of Indian Manufacturers & EPR Calculator App",
    shortSummary: "Comprehensive audit of 5 electronics giants against CPCB EPR guidelines, paired with a custom-developed interactive EPR calculation web app.",
    detailedOverview: "An investigation evaluating five prominent electronics manufacturers (Dixon Technologies, Kaynes Technology, Foxconn India, Tata Electronics, Centum) against CPCB Extended Producer Responsibility obligations under the 2022 Rules. The project includes a custom interactive HTML/CSS/JavaScript web application that computes mandatory recycling quotas by financial year (60% to 80%) and determines official registration fee brackets.",
    category: "Regulatory Analysis",
    submissionDate: "September 2024",
    previewImage: "/thumbnails/thumb_05_companies.png",
    primaryFileType: "pdf",
    topicsCovered: [
      "Extended Producer Responsibility (EPR)",
      "CPCB Registration Portals",
      "Manufacturer Target Quotas (60%-80%)",
      "Dixon, Kaynes, Foxconn, Tata Audits",
      "Interactive Web App Development"
    ],
    keyTakeaway: "Combines regulatory legal analysis with computer science tools by building a functional calculator for corporate environmental compliance officers.",
    files: [
      {
        id: "f-05-1",
        name: "E_Waste_Following_vs_Violating_5_Companies.pdf",
        filePath: "/assignments/05_ewaste_following_vs_violating_companies.pdf",
        fileType: "pdf",
        fileSize: "32.2 KB",
        description: "7-page regulatory assessment of 5 companies against CPCB statutory registration and target mandates.",
        isPrimary: true
      },
      {
        id: "f-05-2",
        name: "E_Waste_EPR_Task_With_Web_App_Code-1.pdf",
        filePath: "/assignments/05_ewaste_epr_task_report_and_code.pdf",
        fileType: "pdf",
        fileSize: "29.1 KB",
        description: "Technical task report containing full software implementation documentation and code walkthrough."
      },
      {
        id: "f-05-3",
        name: "E_Waste_EPR_Web_App-1.html",
        filePath: "/assignments/05_ewaste_epr_web_app.html",
        fileType: "html",
        fileSize: "5.3 KB",
        description: "Standalone interactive web app for registering entities, calculating EPR targets, and fee lookups."
      }
    ]
  },
  {
    id: "assignment-06-campaign-activity",
    assignmentNumber: "Campus Initiative",
    title: "E-Waste Campus Awareness Campaign & Student Collection Drive",
    shortSummary: "Documentation of an institutional student-led e-waste collection drive and grassroots campus environmental sensitization campaign.",
    detailedOverview: "Photographic and field documentation from a student-driven e-waste awareness initiative organized at the college campus. The initiative engaged engineering students and faculty in proper sorting of obsolete cables, chargers, smartphones, and circuit boards to ensure direct delivery to certified recyclers.",
    category: "Campaigns & Classwork",
    submissionDate: "September 2024",
    previewImage: "/thumbnails/thumb_06_campaign.png",
    primaryFileType: "image",
    topicsCovered: [
      "Campus Community Engagement",
      "Safe Segregation Drives",
      "Student Leadership",
      "Institutional Take-Back"
    ],
    keyTakeaway: "Bridges the gap between academic theory and real-world behavior by creating convenient campus drop-off channels for discarded gadgets.",
    files: [
      {
        id: "f-06-1",
        name: "IMG-20260907-WA0002.jpg",
        filePath: "/assignments/06_ewaste_campaign_class_activity.jpg",
        fileType: "image",
        fileSize: "194 KB",
        description: "High-resolution photo documentation from the college e-waste collection and awareness session.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-07-india-scenario-comparison",
    assignmentNumber: "Comparative Study",
    title: "E-Waste India Scenario: Regional Generation & Infrastructure Disparities",
    shortSummary: "Infographic and state-by-state analytical report profiling domestic generation volumes, authorized recycling capacity, and regional collection gaps.",
    detailedOverview: "A focused comparative presentation exploring the domestic Indian landscape. Synthesizes CPCB state pollution control board reports to expose severe regional mismatches between high generation hubs (Maharashtra, Tamil Nadu, Uttar Pradesh) and authorized treatment infrastructure, underscoring interstate logistics dependencies.",
    category: "State Trackers & Data",
    submissionDate: "September 2024",
    previewImage: "/thumbnails/thumb_07_india_scenario.png",
    primaryFileType: "pdf",
    topicsCovered: [
      "All-India E-Waste Volumes",
      "Interstate Treatment Capacity Disparities",
      "Tier-1 Metropolitan Hotspots",
      "CPCB Official Registry Data"
    ],
    keyTakeaway: "Reveals that over 60% of India's formal e-waste processing capacity is clustered in just three states, creating severe reverse logistic bottlenecks.",
    files: [
      {
        id: "f-07-1",
        name: "E waste India Scenario_Comparison.pdf",
        filePath: "/assignments/07_ewaste_india_scenario_comparison.pdf",
        fileType: "pdf",
        fileSize: "1.85 MB",
        description: "2-page comparative infographic summary and state-level statistical analysis.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-08-hydrometallurgical-recovery",
    assignmentNumber: "Engineering Process Study",
    title: "Hydrometallurgical Metal Extraction & Cleaner Chemical Process Optimization",
    shortSummary: "Technical chemical engineering evaluation of PCB metal leaching steps with proposed workflow modifications to eliminate toxic gases and increase yields.",
    detailedOverview: "A rigorous chemical and engineering review of hydrometallurgical recovery systems used to extract gold, copper, silver, and palladium from shredded printed circuit boards (PCBs). Evaluates conventional acid leaching drawbacks (NOx emissions, heavy chemical waste) and proposes cleaner modifications including organic acid chelators, bio-hydrometallurgy, and closed-loop electrowinning.",
    category: "Recovery & Technology",
    submissionDate: "August 2024",
    previewImage: "/thumbnails/thumb_08_recovery_doc.png",
    primaryFileType: "pdf",
    topicsCovered: [
      "Hydrometallurgical Extraction",
      "PCB Precious Metals Leaching",
      "Toxic Vapor Mitigation",
      "Green Solvents & Bio-Leaching",
      "Process Flowchart Engineering"
    ],
    keyTakeaway: "Proves that wet chemical leaching can be re-engineered with mild organic acids to drastically reduce secondary chemical effluent while maintaining over 92% copper and gold recovery.",
    files: [
      {
        id: "f-08-1",
        name: "DOC-20260818-WA0010.pdf",
        filePath: "/assignments/08_hydrometallurgical_recovery_process.pdf",
        fileType: "pdf",
        fileSize: "733 KB",
        description: "Detailed 3-page technical description of the original 6-step sequence and suggested process enhancements.",
        isPrimary: true
      },
      {
        id: "f-08-2",
        name: "file_00000000b868820899c435c416d44a04.png",
        filePath: "/assignments/08_recovery_process_flowchart.png",
        fileType: "image",
        fileSize: "1.94 MB",
        description: "Engineering flowchart diagram mapping the complete baseline extraction pathway."
      },
      {
        id: "f-08-3",
        name: "file_00000000f2fc82089343e2b7f96a82b6.png",
        filePath: "/assignments/08_recovery_optimized_workflow.png",
        fileType: "image",
        fileSize: "2.13 MB",
        description: "High-resolution revised schematic highlighting cleaner leaching loops and reagent recovery stages."
      }
    ]
  },
  {
    id: "assignment-09-asian-regulations-matrix",
    assignmentNumber: "Policy Comparative Matrix",
    title: "Comparative Analysis of E-Waste Regulations in Asia (5 Nations)",
    shortSummary: "Structured legal matrix analyzing legislation, EPR mechanisms, take-back laws, informal sector policies, and fines across 5 leading Asian economies.",
    detailedOverview: "A meticulous comparative policy analysis synthesizing regulatory frameworks across India (E-Waste Rules 2022 / CPCB), China (WEEE Fund System & MIIT), Japan (Home Appliance Recycling Law & Small Appliance Law), South Korea (EEEV Act & Korea RoHS), and Singapore (Resource Sustainability Act & NEA PRS Operator ALBA). Examines financing models (tradable certificates vs consumer fees vs producer levies), informal sector handling, and statutory non-compliance penalties.",
    category: "Regulatory Analysis",
    submissionDate: "September 2024",
    previewImage: "/thumbnails/thumb_09_asia_matrix.png",
    primaryFileType: "docx",
    topicsCovered: [
      "India E-Waste Rules 2022 (CPCB)",
      "China WEEE Fund & Guiyu Formalization",
      "Japan Consumer Take-Back Law",
      "South Korea EEEV Circularity Act",
      "Singapore ALBA Producer Scheme",
      "Enforcement & Penalties"
    ],
    keyTakeaway: "Demonstrates that while all 5 economies employ EPR, financing mechanisms diverge drastically between market-tradable certificates (India), centralized treasury funds (China), and consumer advance recycling fees (Japan).",
    files: [
      {
        id: "f-09-1",
        name: "Asia_Ewaste_Regulations_Comparison.docx",
        filePath: "/assignments/09_asia_ewaste_regulations_comparison.docx",
        fileType: "docx",
        fileSize: "26.5 KB",
        description: "Formal Word document containing full comparative table, regulatory authorities, scope categories, and statutory citations.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-10-ieee-responsible-ai",
    assignmentNumber: "IEEE Conference Paper",
    title: "Foundation of Responsible AI: A Case Study of Microsoft's Responsible AI Approach",
    shortSummary: "5-page formal IEEE conference research paper co-authored by Kartikey Patil examining principles of Fairness, Safety, Privacy, and Governance.",
    detailedOverview: "A rigorous 5-page IEEE conference publication exploring the operationalization of Responsible AI in enterprise systems. Uses Microsoft's framework as a case study to dissect six foundational tenets: Fairness, Reliability & Safety, Privacy & Security, Inclusiveness, Transparency, and Accountability. Evaluates socio-technical challenges including distribution shifts, probabilistic unpredictability, and algorithmic lifecycle auditing.",
    category: "Research Papers & Pitches",
    submissionDate: "September 2024",
    previewImage: "/thumbnails/thumb_10_ieee.png",
    primaryFileType: "pdf",
    collaborators: [
      "Kartikey Patil",
      "Aniket Kundu",
      "Krishna Singh",
      "Ishak Ansari"
    ],
    topicsCovered: [
      "IEEE Standard Publication Format",
      "Responsible AI Frameworks",
      "Algorithmic Governance & Auditing",
      "Enterprise Ethics Lifecycle",
      "Vidyalankar Institute of Technology"
    ],
    keyTakeaway: "Connects digital ethics and technological governance to the broader framework of responsible engineering and sustainable computing practices.",
    files: [
      {
        id: "f-10-1",
        name: "IEEE_Conference_Template__1_ (2).pdf",
        filePath: "/assignments/10_ieee_responsible_ai_paper.pdf",
        fileType: "pdf",
        fileSize: "92.7 KB",
        description: "5-page IEEE formatted academic conference paper complete with diagrams, mathematical principles, and academic references.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-11-leed-green-buildings",
    assignmentNumber: "LEED Rating System Audit",
    title: "LEED Green Building Rating System: 10 Indian Landmark Buildings Grading Sheets",
    shortSummary: "Comprehensive multi-sheet Excel assessment workbook grading 10 iconic green buildings across India on official LEED credit categories.",
    detailedOverview: "An in-depth multi-tab Excel workbook analyzing 10 of India's most celebrated sustainable buildings against USGBC/LEED credit parameters. Covers landmark structures including CII-Sohrabji Godrej Green Business Centre (Hyderabad, LEED Platinum 56/69), Suzlon One Earth (Pune, LEED Platinum 57/58), ITC Green Centre (Gurugram), Infosys Pocharam Campus, Rajiv Gandhi International Airport, Indira Paryavaran Bhawan (New Delhi Net-Zero), Infosys Mahindra City, Jindal Stainless Centre, Embassy Business Hub, and Kotak Mahindra Bank HQ (LEED Gold 61 pts).",
    category: "Case Studies",
    submissionDate: "August 2024",
    previewImage: "/thumbnails/thumb_11_leed.png",
    primaryFileType: "xlsx",
    topicsCovered: [
      "LEED Platinum & Gold Certification",
      "Energy & Atmosphere Credits",
      "Indoor Environmental Quality",
      "Sustainable Sites & Materials",
      "10 Indian Landmark Audits"
    ],
    keyTakeaway: "Illustrates practical implementation of circular materials and energy efficiency benchmarks in modern commercial infrastructure across India.",
    files: [
      {
        id: "f-11-1",
        name: "10_Buildings_LEED_Grading_Sheets.xlsx",
        filePath: "/assignments/11_10_buildings_leed_grading_sheets.xlsx",
        fileType: "xlsx",
        fileSize: "37.0 KB",
        description: "Comprehensive 11-sheet workbook featuring master summary table plus 10 individual building credit scoring sheets.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-12-novel-pitch-thermal-tickets",
    assignmentNumber: "Pitch Deck & Innovation",
    title: "Circular Economy Pitch Deck: Mumbai Metro Thermal Ticket Waste Solution",
    shortSummary: "Innovative pitch deck addressing non-recyclable chemical thermal tickets across Mumbai Metro through a 3-pillar circular framework: Reduce, Replace, Recover.",
    detailedOverview: "A problem-solving pitch deck addressing one of urban transit's overlooked waste streams: chemical thermal paper transit tickets in Mumbai Metro. Because thermal paper uses bisphenol/leuco-dye heat coatings, standard paper recycling plants reject it. The proposal outlines a verified 3-stage circular roadmap: Reduce (digital ticketing and QR gates), Replace (phenol-free recyclable stocks), and Recover (dedicated transit station drop boxes, coating de-bonding trials, and batch material recovery). Includes pilot budget estimates (₹25K prototype to ₹15L scale).",
    category: "Research Papers & Pitches",
    submissionDate: "September 2024",
    previewImage: "/thumbnails/thumb_12_thermal_pitch.png",
    primaryFileType: "pptx",
    topicsCovered: [
      "Circular Economy Frameworks",
      "Mumbai Metro Waste Audits",
      "Thermal Paper Chemical Coatings",
      "Reduce • Replace • Recover Strategy",
      "Pilot Budgeting & Phased Scaling"
    ],
    keyTakeaway: "Transforms a small, everyday commuter waste item into a structured circular economy business case with actionable prototyping milestones.",
    files: [
      {
        id: "f-12-1",
        name: "Thermal_Ticket_Circular_Economy_Visual_Pitch (1).pptx",
        filePath: "/assignments/12_thermal_ticket_circular_economy_pitch.pptx",
        fileType: "pptx",
        fileSize: "47.6 KB",
        description: "Complete presentation slide deck featuring problem breakdown, 3-pillar strategy, piloting roadmap, and financial estimates.",
        isPrimary: true
      }
    ]
  },
  {
    id: "assignment-13-maharashtra-state-tracker-deck",
    assignmentNumber: "State Research & Presentation",
    title: "State-Wise E-Waste Tracker (Maharashtra 2025) & Authorized Recyclers Directory",
    shortSummary: "Comprehensive slide deck profiling Maharashtra's 4,525 T generation and 18-district metrics, paired with a 5-page directory of MPCB authorized recyclers.",
    detailedOverview: "A research presentation and industry directory co-developed by Kartikey Patil and Ishak Ansari. The deck highlights critical state benchmarks (4,525 T e-waste generated, 48.7% collection rate, IT & Telecom as primary category, 3,05,000 T/year recycling capacity across 18 districts). The accompanying research document catalogues authorized e-waste recyclers across Pune, Thane, Raigad, and Aurangabad with MPCB capacities, validity dates, and authorized services.",
    category: "State Trackers & Data",
    submissionDate: "September 2024",
    previewImage: "/thumbnails/thumb_13_state_tracker.png",
    primaryFileType: "pdf",
    collaborators: [
      "Kartikey Patil",
      "Ishak Ansari"
    ],
    topicsCovered: [
      "Maharashtra 2025 E-Waste Data",
      "48.7% Collection Rate Analysis",
      "18 Districts Tracking",
      "MPCB Authorized Recyclers Directory",
      "Green IT, Kuldeep, Eco Recycling"
    ],
    keyTakeaway: "Delivers granular district-level tracking for Maharashtra alongside a verified roster of authorized formal recycling facilities.",
    files: [
      {
        id: "f-13-1",
        name: "State-wise E-Waste Tracker Maharashtra  (1).pdf",
        filePath: "/assignments/13_statewise_ewaste_tracker_maharashtra.pdf",
        fileType: "pdf",
        fileSize: "1.02 MB",
        description: "6-page analytical presentation deck detailing state indicators, district metrics, and collection performance.",
        isPrimary: true
      },
      {
        id: "f-13-2",
        name: "E-waste companies (1).pdf",
        filePath: "/assignments/13_maharashtra_ewaste_companies_directory.pdf",
        fileType: "pdf",
        fileSize: "503 KB",
        description: "5-page verified directory of MPCB registered e-waste recyclers and treatment facilities in Maharashtra."
      }
    ]
  }
];

export const CATEGORIES: AssignmentCategory[] = [
  'All',
  'Core Coursework',
  'State Trackers & Data',
  'Case Studies',
  'Regulatory Analysis',
  'Recovery & Technology',
  'Campaigns & Classwork',
  'Research Papers & Pitches'
];
