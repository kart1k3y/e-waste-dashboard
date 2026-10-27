import React from 'react';
import { studentConfig } from '../config/student';
import { StudentProfile } from './StudentProfile';
import { assignmentsData } from '../data/assignments';
import { FileCheck, Sparkles, FolderDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const totalAssignments = assignmentsData.length;
  const totalFiles = assignmentsData.reduce((acc, curr) => acc + curr.files.length, 0);

  return (
    <section className="hero-section" id="overview">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            <span>{studentConfig.subject}</span>
          </div>

          <h1 className="hero-title">
            E-Waste Management
          </h1>

          <h2 className="hero-subtitle">
            My Academic Work & Assignments
          </h2>

          <p className="hero-desc">
            {studentConfig.introduction} This central repository documents my academic coursework, state-level recycling trackers, regulatory audits, chemical recovery analyses, and circular economy pitch decks completed during my engineering studies.
          </p>

          <div className="hero-stats-bar">
            <div className="hero-stat-pill">
              <FileCheck size={18} style={{ color: 'var(--color-primary)' }} />
              <div>
                <strong>{totalAssignments}</strong> <span>Assignments Completed</span>
              </div>
            </div>

            <div className="hero-stat-pill">
              <FolderDown size={18} style={{ color: 'var(--color-primary)' }} />
              <div>
                <strong>{totalFiles}</strong> <span>Original Documents & Assets</span>
              </div>
            </div>

            <div className="hero-stat-pill">
              <Sparkles size={18} style={{ color: 'var(--color-primary)' }} />
              <div>
                <strong>100%</strong> <span>Authentic Coursework</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-card-col">
          <StudentProfile />
        </div>
      </div>
    </section>
  );
};
