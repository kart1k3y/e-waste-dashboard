import React from 'react';
import { assignmentsData } from '../data/assignments';
import { Layers, Eye, Download, CalendarCheck } from 'lucide-react';

export const OverviewStats: React.FC = () => {
  const totalAssignments = assignmentsData.length;
  const availableToView = assignmentsData.filter(a => a.files.length > 0).length;
  const totalDownloadable = assignmentsData.reduce((acc, a) => acc + a.files.filter(f => f.fileType !== 'link').length, 0);

  // Latest submission date known from records
  const latestDate = "Sept 2024";

  return (
    <section className="stats-section" aria-label="Academic Portfolio Summary">
      <div className="container stats-grid">
        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Layers size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-number">{totalAssignments}</span>
            <span className="stat-label">Total Assignments</span>
            <span className="stat-meta">Coursework & research units</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Eye size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-number">{availableToView}</span>
            <span className="stat-label">Available to View</span>
            <span className="stat-meta">Interactive previews enabled</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <Download size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-number">{totalDownloadable}</span>
            <span className="stat-label">Downloadable Files</span>
            <span className="stat-meta">PDF, XLSX, PPTX, DOCX, IMG</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon-wrapper">
            <CalendarCheck size={22} />
          </div>
          <div className="stat-info">
            <span className="stat-number">{latestDate}</span>
            <span className="stat-label">Latest Assignment</span>
            <span className="stat-meta">Sem V Termwork Series</span>
          </div>
        </div>
      </div>
    </section>
  );
};
