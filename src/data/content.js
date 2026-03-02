// ============================================================
// WildcatPark BIP Constitution — Content Data
// ============================================================
// 
// HOW TO UPDATE:
// Simply edit the text in this file and save. The website will
// reflect your changes on the next dev server reload or build.
//
// STRUCTURE:
// - meta: Cover page info
// - sections: Array of all 7+ sections with their content
// - Each section can have: title, number, id, content (JSX-friendly)
// ============================================================

export const meta = {
  projectName: "WildcatPark",
  documentType: "Business Impact Project (BIP)",
  documentTitle: "Research Constitution",
  course: "SSP031 Creative Thinking Tools, Trends, & Techniques",
  institution: "Cebu Institute of Technology – University",
  preparedBy: "Adrian Seth M. Tabotabo",
};

export const sections = [
  // ──────────────────────────────────────────────────
  // PURPOSE
  // ──────────────────────────────────────────────────
  {
    id: "purpose",
    number: null,
    title: "Purpose",
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
    content: {
      type: "complex",
    },
    // Sub-sections rendered via custom component
    intro: `WildcatPark is a real-time IoT parking occupancy monitoring system designed for Cebu Institute of Technology – University (CIT-U). It uses **computer vision** (via webcam connected to a processing computer) to monitor a campus parking area and estimate its current occupancy level.`,
    subsections: [
      {
        id: "the-problem",
        title: "The Problem",
        body: `CIT-U has multiple parking areas across campus. Drivers pay for parking stickers that serve as their parking pass. Despite paying, many drivers struggle to find available parking—particularly during peak hours—resulting in wasted time, stress, congestion, and safety risks. There is currently no system that provides real-time information about parking availability.`,
      },
      {
        id: "how-it-works",
        title: "How It Works",
        type: "ordered-list",
        items: [
          "A webcam captures the parking area and feeds video to a local computer.",
          "The computer runs computer vision processing to detect vehicles (cars and motorcycles) and estimate the area's occupancy level.",
          "Occupancy data is synced to Firebase / Google Cloud at near real-time intervals (every few minutes).",
          "Users access a web dashboard that shows the general occupancy status of the monitored area.",
        ],
      },
      {
        id: "what-users-see",
        title: "What Users See",
        body: "A general occupancy indicator (not individual slot tracking), giving drivers enough information to decide whether to head to that parking area or look elsewhere.",
      },
      {
        id: "test-deployment-scope",
        title: "Test Deployment Scope",
        body: "One parking area monitored by 1–2 webcams over a few weeks of real testing.",
      },
      {
        id: "designed-to-scale",
        title: "Designed to Scale",
        body: "While the prototype covers one area, the system architecture supports future expansion to additional parking areas across campus.",
      },
    ],
    toBeConfirmed: {
      subtitle: "The following details must be verified and resolved before the Methodology and related sections are finalized:",
      items: [
        "Exact parking layout (how many areas, how they're separated — faculty, motorcycle, general, etc.)",
        "Which specific parking area will be monitored during testing",
        "Specific computer vision model/library to be used",
        "Whether the dashboard will include a separate admin analytics view",
        "Exact occupancy indicator format on the dashboard",
      ],
    },
  },

  // ──────────────────────────────────────────────────
  // 3. MAIN OBJECTIVE
  // ──────────────────────────────────────────────────
  {
    id: "main-objective",
    number: "03",
    title: "Main Objective",
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
    content: {
      type: "evaluation-pillars",
      pillars: [
        {
          id: "pillar-1",
          title: "Pillar 1: Technical Evaluation",
          objective: "Prove that WildcatPark is technically accurate and reliable.",
          rows: [
            { label: "Sensor Accuracy", desc: "Compare system-reported occupancy vs. actual occupancy across multiple checks per day. Express as a detection accuracy percentage." },
            { label: "System Uptime & Reliability", desc: "Track cloud sync stability, downtime incidents, and latency between a parking event and dashboard update." },
            { label: "Usage Analytics", desc: "Monitor dashboard access frequency, peak usage times, and feature utilization during testing period." },
          ],
        },
        {
          id: "pillar-2",
          title: "Pillar 2: User Evaluation",
          objective: "Prove that WildcatPark made a real difference for users.",
          rows: [
            { label: "Post-Deployment Survey (15 users)", desc: "Similar Likert-scale questions to the pre-survey, reframed for the post-deployment context. Enables before-and-after narrative comparison." },
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
    content: {
      type: "alignment-table",
      intro: "Every section of the BIP paper must connect back to this constitution:",
      rows: [
        { section: "Introduction", connection: "Set up the problems addressed by the Statement of the Problem (stress, no real-time visibility, congestion, safety). Reference the pre-survey findings as evidence." },
        { section: "Methodology", connection: "Explain how each of the 3 research questions will be answered: system design process for Q1, accuracy testing protocol for Q2, pre-post survey comparison for Q3." },
        { section: "Results", connection: "Present findings organized by the 3 research questions. Include technical accuracy data, usage analytics, and survey comparison results." },
        { section: "Discussion", connection: "Interpret results in relation to the 3 specific objectives. Compare with existing literature. Acknowledge limitations." },
        { section: "Conclusion", connection: "Summarize whether each objective was achieved. Provide recommendations and future research directions." },
      ],
      note: {
        line1: "If any content being written does not connect back to these objectives and questions, it is either off-scope or this constitution needs to be amended first.",
        line2: `All "To Be Confirmed" items must be resolved before their corresponding paper sections are finalized.`,
      },
    },
  },
];
