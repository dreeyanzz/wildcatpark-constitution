// ============================================================
// WildcatPark BIP Constitution — Content Data
// ============================================================
// 
// HOW TO UPDATE:
// Simply edit the text in this file and save. The website will
// reflect your changes on the next dev server reload or build.
//
// SECTION STATUS OPTIONS:
// "finalized"   → Green badge — content is locked and approved
// "in-progress" → Yellow badge — still being worked on
// "draft"       → Gray badge — rough content, not reviewed yet
// ============================================================

export const meta = {
  projectName: "WildcatPark",
  documentType: "Business Impact Project (BIP)",
  documentTitle: "Research Constitution",
  course: "SSP031 Creative Thinking Tools, Trends, & Techniques",
  institution: "Cebu Institute of Technology – University",
  preparedBy: "Adrian Seth M. Tabotabo",
  lastUpdated: "March 7, 2025",
  changelog: [
    {
      date: "March 7, 2025",
      changes: [
        "Added Computer Vision: Model Comparison subsection (YOLO26n/s/m benchmarking)",
        "Added User Dashboard and Admin Analytics View subsections",
        "Added Campus Parking Layout with all 3 areas",
        "Updated Test Deployment Scope with selection rationale",
        "Updated Evaluation Plan — added Model Benchmarking row to Pillar 1",
        "Updated Section Alignment Guide with full detail per BIP section",
      ],
    },
  ],
};

export const sections = [
  // ──────────────────────────────────────────────────
  // PURPOSE
  // ──────────────────────────────────────────────────
  {
    id: "purpose",
    number: null,
    title: "Purpose",
    status: "finalized",
    content: {
      type: "prose",
      body: `This document serves as the foundational reference for the WildcatPark BIP. Every section of the research paper—Introduction, Methodology, Results, Discussion, and Conclusion—must trace back to and align with the elements defined here. Items flagged as "To Be Confirmed" must be resolved before the corresponding paper sections are finalized.`,
    },
  },

  // ──────────────────────────────────────────────────
  // 1. RESEARCH TITLE
  // ──────────────────────────────────────────────────
  {
    id: "research-title",
    number: "01",
    title: "Research Title",
    status: "finalized",
    content: {
      type: "callout-title",
      body: "WildcatPark: Development and Evaluation of a Real-Time IoT Parking Monitoring System for CIT-U",
    },
  },

  // ──────────────────────────────────────────────────
  // 2. PROJECT DESCRIPTION
  // ──────────────────────────────────────────────────
  {
    id: "project-description",
    number: "02",
    title: "Project Description",
    status: "finalized",
    content: { type: "complex" },
    intro: `WildcatPark is a real-time IoT parking occupancy monitoring system designed for Cebu Institute of Technology – University (CIT-U). It uses computer vision powered by YOLO26 (Ultralytics) via a webcam connected to a processing computer to monitor a campus parking area and estimate its current occupancy level. Occupancy data is synchronized to Firebase / Google Cloud at near real-time intervals (every few minutes) and displayed through a web-based dashboard.`,
    subsections: [
      {
        id: "the-problem",
        title: "The Problem",
        body: `CIT-U has multiple parking areas across campus. Drivers pay for parking stickers that serve as their parking pass. Despite paying, many drivers struggle to find available parking—particularly during peak hours—resulting in wasted time, stress, congestion, and safety risks. There is currently no system that provides real-time information about parking availability.`,
      },
      {
        id: "campus-parking-layout",
        title: "Campus Parking Layout",
        body: "CIT-U has three distinct parking areas:",
        type: "ordered-list",
        items: [
          "Faculty Parking — Dedicated area reserved for faculty members.",
          "General Parking (Sticker Holders) — Open to students and other parking sticker holders. Contains some organized sections for cars, but motorcycle parking within this area is less structured. This is the busiest and most complained-about parking area on campus.",
          "Motorcycle-Only Parking — A dedicated area exclusively for motorcycles.",
        ],
      },
      {
        id: "how-it-works",
        title: "How It Works",
        type: "ordered-list",
        items: [
          "A webcam captures the parking area and feeds video to a local computer.",
          "The computer runs YOLO26 object detection to identify vehicles (cars and motorcycles) and estimate the area's occupancy level.",
          "Occupancy data is synced to Firebase / Google Cloud at near real-time intervals (every few minutes).",
          "Users and administrators access the web dashboard to view occupancy information.",
        ],
      },
      {
        id: "computer-vision-model-comparison",
        title: "Computer Vision: Model Comparison",
        body: "Three YOLO26 variants will be benchmarked on detection accuracy and inference speed to determine the optimal model for real-time campus parking occupancy monitoring:",
        type: "unordered-list",
        items: [
          "YOLO26n (Nano) — 5 MB, fastest and lightest",
          "YOLO26s (Small) — 19 MB, balanced speed and accuracy",
          "YOLO26m (Medium) — 42 MB, higher accuracy",
        ],
        footer: "The comparison will evaluate detection accuracy (correct vehicle identification vs. actual count) and inference speed (processing time per frame). The best-performing model for this specific use case will be selected for deployment.",
      },
      {
        id: "user-dashboard",
        title: "User Dashboard",
        body: "The user-facing web dashboard displays a combination of three occupancy indicators:",
        type: "unordered-list",
        items: [
          `Vehicle Count — e.g., "23 vehicles detected"`,
          `Occupancy Percentage — e.g., "78% full"`,
          `Status Level — e.g., "Available / Filling Up / Almost Full / Full"`,
        ],
      },
      {
        id: "admin-analytics-view",
        title: "Admin Analytics View",
        body: "A separate admin dashboard provides facility managers with data-driven insights for decision-making:",
        type: "unordered-list",
        items: [
          "Peak hour trends (which times are busiest)",
          "Daily/weekly occupancy history",
          "Total vehicle count over time",
          "Average occupancy duration",
          "Downloadable reports",
        ],
      },
      {
        id: "test-deployment-scope",
        title: "Test Deployment Scope",
        body: `The prototype will be deployed at the General Parking area (sticker holders) — the busiest and most complained-about parking area on campus. This area was selected because it:`,
        type: "unordered-list",
        items: [
          "Serves the largest number of users (students and sticker holders)",
          "Experiences the highest congestion and most complaints",
          "Is accessible for camera installation",
        ],
        footer: "The deployment will use 1–2 webcams over a few weeks of real testing.",
      },
      {
        id: "designed-to-scale",
        title: "Designed to Scale",
        body: "While the prototype covers one area, the system architecture supports future expansion to additional parking areas across campus, including the Faculty Parking and Motorcycle-Only Parking areas.",
      },
    ],
  },

  // ──────────────────────────────────────────────────
  // 3. MAIN OBJECTIVE
  // ──────────────────────────────────────────────────
  {
    id: "main-objective",
    number: "03",
    title: "Main Objective",
    status: "finalized",
    content: {
      type: "prose",
      body: "This study aimed to develop and evaluate WildcatPark, a real-time IoT parking occupancy monitoring system for Cebu Institute of Technology – University (CIT-U).",
    },
  },

  // ──────────────────────────────────────────────────
  // 4. SPECIFIC OBJECTIVES
  // ──────────────────────────────────────────────────
  {
    id: "specific-objectives",
    number: "04",
    title: "Specific Objectives",
    status: "finalized",
    content: {
      type: "objectives-list",
      items: [
        { emphasis: "To design and develop", rest: " a real-time IoT-based parking occupancy monitoring system with cloud-synchronized data analytics for CIT-U." },
        { emphasis: "To evaluate", rest: " the technical accuracy and reliability of WildcatPark in detecting real-time parking slot occupancy." },
        { emphasis: "To determine", rest: " the impact of WildcatPark on users' parking experience by comparing pre-deployment and post-deployment survey data on search time, stress levels, and overall satisfaction." },
      ],
    },
  },

  // ──────────────────────────────────────────────────
  // 5. STATEMENT OF THE PROBLEM
  // ──────────────────────────────────────────────────
  {
    id: "statement-of-the-problem",
    number: "05",
    title: "Statement of the Problem",
    status: "finalized",
    content: {
      type: "research-questions",
      intro: "This study aimed to develop and evaluate WildcatPark, a real-time IoT parking occupancy monitoring system for CIT-U. Specifically, it sought to answer the following questions:",
      questions: [
        "How can a real-time IoT-based parking occupancy monitoring system with cloud-synchronized data analytics be designed and developed for CIT-U?",
        "How accurate and reliable is WildcatPark in detecting real-time parking slot occupancy?",
        "Is there a significant difference in users' parking experience — in terms of search time, stress levels, and overall satisfaction — before and after the deployment of WildcatPark?",
      ],
    },
  },

  // ──────────────────────────────────────────────────
  // 6. EVALUATION PLAN
  // ──────────────────────────────────────────────────
  {
    id: "evaluation-plan",
    number: "06",
    title: "Evaluation Plan",
    status: "finalized",
    content: {
      type: "evaluation-pillars",
      pillars: [
        {
          id: "pillar-1",
          title: "Pillar 1: Technical Evaluation",
          objective: "Prove that WildcatPark is technically accurate and reliable. This pillar addresses Research Question 2.",
          rows: [
            { label: "Model Benchmarking", desc: "Compare YOLO26n, YOLO26s, and YOLO26m on detection accuracy and inference speed using parking area footage. Select the optimal model for deployment." },
            { label: "Detection Accuracy", desc: "Compare system-reported vehicle count vs. actual vehicle count across multiple checks per day. Express as a detection accuracy percentage." },
            { label: "System Uptime & Reliability", desc: "Track cloud sync stability, downtime incidents, and latency between a parking event and dashboard update." },
            { label: "Usage Analytics", desc: "Monitor dashboard access frequency, peak usage times, and feature utilization during testing period." },
          ],
        },
        {
          id: "pillar-2",
          title: "Pillar 2: User Evaluation",
          objective: "Prove that WildcatPark made a real difference for users. This pillar addresses Research Question 3.",
          rows: [
            { label: "Post-Deployment Survey (15 users)", desc: "Similar Likert-scale questions to the pre-survey, reframed for the post-deployment context. Enables before-and-after narrative comparison on search time, stress levels, and overall satisfaction." },
            { label: "Usage-Experience Questions", desc: "New items covering ease of use, willingness to recommend, perceived time savings, and information accuracy." },
            { label: "Short Interviews / Focus Group (3–5 users)", desc: "Qualitative insights on actual usage behavior, suggestions for improvement, and overall impressions. Provides rich quotes for the Discussion section." },
          ],
        },
      ],
    },
  },

  // ──────────────────────────────────────────────────
  // 7. SECTION ALIGNMENT GUIDE
  // ──────────────────────────────────────────────────
  {
    id: "section-alignment-guide",
    number: "07",
    title: "Section Alignment Guide",
    status: "finalized",
    content: {
      type: "alignment-table",
      intro: "Every section of the BIP paper must connect back to this constitution:",
      rows: [
        { section: "Introduction", connection: "Set up the problems addressed by the Statement of the Problem (stress, no real-time visibility, congestion, safety). Reference the pre-survey findings as evidence. Describe the CIT-U parking context (3 areas, sticker system, peak-hour issues)." },
        { section: "Methodology", connection: "Explain how each of the 3 research questions will be answered: system design process and tech stack for Q1 (YOLO26, Firebase, webcam setup), model benchmarking and accuracy testing protocol for Q2, pre-post survey comparison design for Q3." },
        { section: "Results", connection: "Present findings organized by the 3 research questions: (Q1) system architecture and features delivered, (Q2) model comparison data + detection accuracy + uptime stats, (Q3) pre vs. post survey comparison + interview themes." },
        { section: "Discussion", connection: "Interpret results in relation to the 3 specific objectives. Compare with existing literature on smart parking and IoT systems. Acknowledge limitations (sample size, single area, etc.)." },
        { section: "Conclusion", connection: "Summarize whether each objective was achieved. Provide recommendations for CIT-U and future research directions (expansion to other areas, additional features, larger sample)." },
      ],
      note: {
        line1: "If any content being written does not connect back to these objectives and questions, it is either off-scope or this constitution needs to be amended first.",
      },
    },
  },
];
