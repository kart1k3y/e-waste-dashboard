export type FileType = 'pdf' | 'xlsx' | 'docx' | 'pptx' | 'html' | 'image' | 'link';

export interface AssignmentFile {
  id: string;
  name: string;
  filePath: string;
  fileType: FileType;
  fileSize: string;
  description: string;
  isPrimary?: boolean;
  externalUrl?: string;
}

export type AssignmentCategory = 
  | 'All'
  | 'Core Coursework'
  | 'State Trackers & Data'
  | 'Case Studies'
  | 'Regulatory Analysis'
  | 'Recovery & Technology'
  | 'Campaigns & Classwork'
  | 'Research Papers & Pitches';

export interface Assignment {
  id: string;
  assignmentNumber?: string;
  title: string;
  shortSummary: string;
  detailedOverview: string;
  category: Exclude<AssignmentCategory, 'All'>;
  submissionDate?: string;
  previewImage?: string;
  primaryFileType: FileType;
  files: AssignmentFile[];
  topicsCovered: string[];
  keyTakeaway?: string;
  collaborators?: string[];
}
