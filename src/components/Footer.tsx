import React from 'react';
import { studentConfig } from '../config/student';
import { Leaf, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="brand-icon" style={{ width: '28px', height: '28px' }}>
            <Leaf size={16} />
          </div>
          <div>
            <strong>{studentConfig.name}</strong> • {studentConfig.subject}
            <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>
              {studentConfig.department} • {studentConfig.college}
            </div>
          </div>
        </div>

        <div className="footer-sustainability-detail">
          <Award size={14} />
          <span>Academic Termwork & Subject Portfolio • © {currentYear}</span>
        </div>
      </div>
    </footer>
  );
};
