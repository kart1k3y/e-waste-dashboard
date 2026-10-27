export interface StudentProfileData {
  name: string;
  initials: string;
  rollNumber: string;
  classDivision: string;
  department: string;
  subject: string;
  academicYear: string;
  college: string;
  introduction: string;
  bio: string;
  avatarUrl?: string; // Optional path if a photograph is added
}

/**
 * EDITABLE STUDENT CONFIGURATION
 * Update your personal or academic details below without touching any dashboard components.
 */
export const studentConfig: StudentProfileData = {
  name: "Kartikey Patil",
  initials: "KP",
  rollNumber: "25102B2009",
  classDivision: "TE-CMPN-B",
  department: "Computer Engineering",
  subject: "E-Waste Management",
  academicYear: "2024–2025",
  college: "Vidyalankar Institute of Technology, Mumbai",
  introduction: "Welcome to my E-Waste Management portfolio.",
  bio: "This academic portfolio documents coursework, case studies, state-level tracking research, regulatory comparisons, and practical computational tools developed for the E-Waste Management subject. It demonstrates technical research into electronics lifecycle analysis, circular economy models, EPR compliance, and sustainable recycling systems."
};
