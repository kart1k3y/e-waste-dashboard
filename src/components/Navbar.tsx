import React from 'react';
import { Leaf, GraduationCap } from 'lucide-react';
import { studentConfig } from '../config/student';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#overview" className="brand" aria-label="E-Waste Portfolio Home">
          <div className="brand-icon">
            <Leaf size={20} />
          </div>
          <div>
            <span>E-Waste Portfolio</span>
            <span className="brand-badge" style={{ marginLeft: '8px' }}>Academic</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#overview" className="nav-link">Overview</a>
          <a href="#assignments" className="nav-link">Assignments</a>
          <a href="#about" className="nav-link">About</a>
        </nav>

        <div className="nav-student-tag" title={`${studentConfig.name} (${studentConfig.rollNumber})`}>
          <div className="nav-student-avatar">
            {studentConfig.initials}
          </div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <GraduationCap size={14} style={{ color: 'var(--color-primary)' }} />
            {studentConfig.name}
          </span>
        </div>
      </div>
    </header>
  );
};
