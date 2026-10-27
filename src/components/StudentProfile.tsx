import React from 'react';
import { BookOpen, Award, Building2, User, Hash, School, Calendar } from 'lucide-react';
import { studentConfig } from '../config/student';

export const StudentProfile: React.FC = () => {
  return (
    <div className="student-card" id="profile">
      <div className="student-card-header">
        <div className="student-avatar" aria-label="Student Initials">
          {studentConfig.initials}
        </div>
        <div>
          <h2 className="student-card-title">{studentConfig.name}</h2>
          <div className="student-card-subtitle">
            <BookOpen size={14} style={{ color: 'var(--color-primary)' }} />
            <span>{studentConfig.subject} Coursework</span>
          </div>
        </div>
      </div>

      <div className="student-details-grid">
        <div className="student-detail-item">
          <span className="student-detail-label">
            <Hash size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
            Roll Number
          </span>
          <span className="student-detail-value">{studentConfig.rollNumber}</span>
        </div>

        <div className="student-detail-item">
          <span className="student-detail-label">
            <User size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
            Class / Division
          </span>
          <span className="student-detail-value">{studentConfig.classDivision}</span>
        </div>

        <div className="student-detail-item">
          <span className="student-detail-label">
            <Building2 size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
            Department
          </span>
          <span className="student-detail-value">{studentConfig.department}</span>
        </div>

        <div className="student-detail-item">
          <span className="student-detail-label">
            <Calendar size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
            Academic Year
          </span>
          <span className="student-detail-value">{studentConfig.academicYear}</span>
        </div>

        <div className="student-detail-item full-width">
          <span className="student-detail-label">
            <School size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
            College / Institution
          </span>
          <span className="student-detail-value" title={studentConfig.college}>
            {studentConfig.college}
          </span>
        </div>
      </div>

      <div className="student-badge-pill">
        <Award size={14} style={{ color: 'var(--color-primary)' }} />
        <span>Continuous Assessment & Term Work Submissions</span>
      </div>
    </div>
  );
};
