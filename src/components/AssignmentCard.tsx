import React from 'react';
import { Assignment, FileType } from '../types';
import { Eye, Download, FileText, Table, Presentation, Image as ImageIcon, Code, ExternalLink, Calendar, Paperclip } from 'lucide-react';

interface AssignmentCardProps {
  assignment: Assignment;
  onView: (assignment: Assignment) => void;
}

export const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment, onView }) => {
  const primaryFile = assignment.files.find(f => f.isPrimary) || assignment.files[0];

  const getFileTypeBadge = (type: FileType) => {
    switch (type) {
      case 'pdf':
        return <span className="badge-filetype badge-pdf"><FileText size={12} /> PDF</span>;
      case 'xlsx':
        return <span className="badge-filetype badge-xlsx"><Table size={12} /> XLSX</span>;
      case 'docx':
        return <span className="badge-filetype badge-docx"><FileText size={12} /> DOCX</span>;
      case 'pptx':
        return <span className="badge-filetype badge-pptx"><Presentation size={12} /> PPTX</span>;
      case 'image':
        return <span className="badge-filetype badge-image"><ImageIcon size={12} /> Image</span>;
      case 'html':
        return <span className="badge-filetype badge-html"><Code size={12} /> Web App</span>;
      case 'link':
        return <span className="badge-filetype badge-docx"><ExternalLink size={12} /> Link</span>;
      default:
        return <span className="badge-filetype badge-pdf">Doc</span>;
    }
  };

  const handleDownloadPrimary = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (primaryFile?.externalUrl) {
      window.open(primaryFile.externalUrl, '_blank', 'noopener,noreferrer');
    } else if (primaryFile?.filePath) {
      const link = document.createElement('a');
      link.href = primaryFile.filePath;
      link.download = primaryFile.name;
      link.click();
    }
  };

  return (
    <article className="assignment-card" onClick={() => onView(assignment)}>
      {/* Thumbnail Area */}
      <div className="card-thumbnail-wrap">
        {assignment.previewImage ? (
          <img 
            src={assignment.previewImage} 
            alt={assignment.title}
            className="card-thumbnail-img"
            loading="lazy"
          />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--color-primary)' }}>
            <FileText size={42} />
          </div>
        )}

        <div className="card-badge-top-left">
          {assignment.assignmentNumber && (
            <span className="card-number-badge">
              {assignment.assignmentNumber}
            </span>
          )}
        </div>

        <div className="card-badge-top-right">
          {getFileTypeBadge(assignment.primaryFileType)}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="card-body">
        <div className="card-meta-row">
          <span className="card-category-tag">{assignment.category}</span>
          {assignment.submissionDate && (
            <span className="card-date">
              <Calendar size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: '-1px' }} />
              {assignment.submissionDate}
            </span>
          )}
        </div>

        <h3 className="card-title" title={assignment.title}>
          {assignment.title}
        </h3>

        <p className="card-summary">
          {assignment.shortSummary}
        </p>

        {/* Topics Tags */}
        <div className="card-tags">
          {assignment.topicsCovered.slice(0, 3).map((topic, i) => (
            <span key={i} className="card-tag">
              #{topic}
            </span>
          ))}
          {assignment.topicsCovered.length > 3 && (
            <span className="card-tag" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              +{assignment.topicsCovered.length - 3} more
            </span>
          )}
        </div>

        {/* Attached Files Count */}
        <div className="card-files-meta">
          <span className="card-files-count">
            <Paperclip size={13} />
            {assignment.files.length} {assignment.files.length === 1 ? 'file attached' : 'files attached'}
          </span>
          {primaryFile && (
            <span className="card-size-total">
              {primaryFile.fileSize}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="card-actions" onClick={e => e.stopPropagation()}>
          <button 
            className="btn-primary" 
            onClick={() => onView(assignment)}
            aria-label={`View details of ${assignment.title}`}
          >
            <Eye size={16} />
            <span>View Assignment</span>
          </button>

          {primaryFile && (
            <button 
              className="btn-secondary" 
              onClick={handleDownloadPrimary}
              title={primaryFile.externalUrl ? "Open External Link" : `Download ${primaryFile.name}`}
              aria-label={`Download ${primaryFile.name}`}
            >
              {primaryFile.externalUrl ? <ExternalLink size={16} /> : <Download size={16} />}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
