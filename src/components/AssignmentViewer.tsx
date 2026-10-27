import React, { useState, useEffect } from 'react';
import { Assignment, AssignmentFile } from '../types';
import { 
  X, Download, ExternalLink, FileText, Table, 
  Presentation, Image as ImageIcon, Code, Calendar, 
  Users, CheckCircle2, AlertCircle, FileCheck
} from 'lucide-react';

interface AssignmentViewerProps {
  assignment: Assignment | null;
  onClose: () => void;
}

export const AssignmentViewer: React.FC<AssignmentViewerProps> = ({ assignment, onClose }) => {
  const [activeFileId, setActiveFileId] = useState<string>('');

  useEffect(() => {
    if (assignment && assignment.files.length > 0) {
      const primary = assignment.files.find(f => f.isPrimary) || assignment.files[0];
      setActiveFileId(primary.id);
    }
  }, [assignment]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!assignment) return null;

  const activeFile = assignment.files.find(f => f.id === activeFileId) || assignment.files[0];

  const handleDownload = (file: AssignmentFile) => {
    if (file.externalUrl) {
      window.open(file.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      const link = document.createElement('a');
      link.href = file.filePath;
      link.download = file.name;
      link.click();
    }
  };

  const getFileIcon = (fileType: string) => {
    switch (fileType) {
      case 'pdf': return <FileText size={16} style={{ color: 'var(--badge-pdf-text)' }} />;
      case 'xlsx': return <Table size={16} style={{ color: 'var(--badge-xlsx-text)' }} />;
      case 'docx': return <FileText size={16} style={{ color: 'var(--badge-docx-text)' }} />;
      case 'pptx': return <Presentation size={16} style={{ color: 'var(--badge-pptx-text)' }} />;
      case 'image': return <ImageIcon size={16} style={{ color: 'var(--badge-img-text)' }} />;
      case 'html': return <Code size={16} style={{ color: 'var(--badge-html-text)' }} />;
      default: return <FileCheck size={16} />;
    }
  };

  const renderFilePreview = () => {
    if (!activeFile) {
      return (
        <div style={{ padding: '60px', textAlign: 'center', color: '#FFFFFF' }}>
          <AlertCircle size={36} style={{ margin: '0 auto 12px auto' }} />
          <p>No preview file selected.</p>
        </div>
      );
    }

    if (activeFile.externalUrl) {
      return (
        <div style={{ padding: '60px 30px', textAlign: 'center', color: '#FFFFFF' }}>
          <ExternalLink size={48} style={{ margin: '0 auto 16px auto', color: 'var(--color-sage)' }} />
          <h3 style={{ color: '#FFFFFF', marginBottom: '8px' }}>Interactive External Dashboard</h3>
          <p style={{ maxWidth: '500px', margin: '0 auto 20px auto', color: '#DCE8D9' }}>
            This resource is hosted on the interactive Bricks platform. Click below to open the live dashboard.
          </p>
          <a
            href={activeFile.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', padding: '12px 24px', margin: '0 auto' }}
          >
            <ExternalLink size={16} />
            <span>Open Live Bricks Dashboard</span>
          </a>
        </div>
      );
    }

    if (activeFile.fileType === 'pdf') {
      return (
        <div style={{ position: 'relative', width: '100%', height: '560px' }}>
          <iframe
            src={`${activeFile.filePath}#toolbar=1&navpanes=0`}
            title={activeFile.name}
            style={{ width: '100%', height: '100%', border: 'none', background: '#FFFFFF' }}
          />
        </div>
      );
    }

    if (activeFile.fileType === 'image') {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', background: '#1B201D' }}>
          <img
            src={activeFile.filePath}
            alt={activeFile.name}
            className="viewer-image-display"
          />
        </div>
      );
    }

    if (activeFile.fileType === 'html') {
      return (
        <div style={{ position: 'relative', width: '100%', height: '560px', background: '#FFFFFF' }}>
          <iframe
            src={activeFile.filePath}
            title={activeFile.name}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      );
    }

    // Fallback for DOCX, PPTX, XLSX (Rich Document Card)
    return (
      <div style={{ padding: '60px 30px', textAlign: 'center', color: '#FFFFFF' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '12px', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#FFFFFF' }}>
          {getFileIcon(activeFile.fileType)}
        </div>
        <h3 style={{ color: '#FFFFFF', marginBottom: '8px', fontSize: '1.4rem' }}>{activeFile.name}</h3>
        <p style={{ maxWidth: '520px', margin: '0 auto 12px auto', color: '#DCE8D9', fontSize: '0.95rem' }}>
          {activeFile.description}
        </p>
        <span style={{ display: 'inline-block', padding: '4px 10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#DCE8D9', marginBottom: '24px' }}>
          File Size: {activeFile.fileSize} • Format: {activeFile.fileType.toUpperCase()}
        </span>
        <div>
          <button 
            className="btn-primary" 
            style={{ display: 'inline-flex', padding: '12px 24px', margin: '0 auto' }}
            onClick={() => handleDownload(activeFile)}
          >
            <Download size={18} />
            <span>Download {activeFile.name}</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            {assignment.assignmentNumber && (
              <span className="card-number-badge">
                {assignment.assignmentNumber}
              </span>
            )}
            <h2 className="modal-title" id="modal-title">{assignment.title}</h2>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          {/* Multiple Files Tab Switcher if assignment has > 1 file */}
          {assignment.files.length > 1 && (
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-muted)', textTransform: 'uppercase' }}>
                Files in this unit:
              </span>
              {assignment.files.map((file) => (
                <button
                  key={file.id}
                  onClick={() => setActiveFileId(file.id)}
                  className={`filetype-pill ${activeFileId === file.id ? 'active' : ''}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 12px' }}
                >
                  {getFileIcon(file.fileType)}
                  <span>{file.name}</span>
                  <span style={{ opacity: 0.8, fontSize: '0.7rem' }}>({file.fileSize})</span>
                </button>
              ))}
            </div>
          )}

          {/* Interactive Viewer / Document Display */}
          <div className="viewer-preview-container">
            {renderFilePreview()}
          </div>

          {/* Meta Details Grid */}
          <div className="modal-meta-grid">
            <div>
              <div className="modal-details-card" style={{ marginBottom: '18px' }}>
                <h4 className="modal-section-title">Detailed Academic Overview</h4>
                <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: '#3A423D' }}>
                  {assignment.detailedOverview}
                </p>
              </div>

              {assignment.keyTakeaway && (
                <div className="modal-details-card" style={{ background: 'var(--color-sage-light)', borderColor: 'var(--color-sage)' }}>
                  <h4 className="modal-section-title" style={{ color: 'var(--color-forest)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={16} />
                    <span>Key Finding & Outcome</span>
                  </h4>
                  <p style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--color-forest)', fontStyle: 'italic' }}>
                    "{assignment.keyTakeaway}"
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar Details in Modal */}
            <div>
              <div className="modal-details-card" style={{ marginBottom: '18px' }}>
                <h4 className="modal-section-title">Submission Details</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
                  <div>
                    <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700 }}>
                      Category
                    </span>
                    <strong style={{ color: 'var(--color-forest)' }}>{assignment.category}</strong>
                  </div>

                  {assignment.submissionDate && (
                    <div>
                      <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Submission Period
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-charcoal)' }}>
                        <Calendar size={13} style={{ color: 'var(--color-primary)' }} />
                        {assignment.submissionDate}
                      </span>
                    </div>
                  )}

                  {assignment.collaborators && (
                    <div>
                      <span style={{ color: 'var(--color-muted)', display: 'block', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700 }}>
                        Collaborators
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-charcoal)' }}>
                        <Users size={13} style={{ color: 'var(--color-primary)' }} />
                        {assignment.collaborators.join(', ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Topics Covered */}
              <div className="modal-details-card" style={{ marginBottom: '18px' }}>
                <h4 className="modal-section-title">Topics Covered</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {assignment.topicsCovered.map((topic, i) => (
                    <span key={i} className="card-tag">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Download All Files Section */}
              <div className="modal-details-card">
                <h4 className="modal-section-title">Download Files</h4>
                {assignment.files.map((file) => (
                  <div key={file.id} className="file-item-row">
                    <div className="file-item-left">
                      {getFileIcon(file.fileType)}
                      <div style={{ overflow: 'hidden' }}>
                        <div className="file-item-name" title={file.name}>{file.name}</div>
                        <div className="file-item-size">{file.fileSize}</div>
                      </div>
                    </div>

                    <button 
                      className="btn-download-sm" 
                      onClick={() => handleDownload(file)}
                      title={`Download ${file.name}`}
                    >
                      {file.externalUrl ? <ExternalLink size={14} /> : <Download size={14} />}
                      <span>{file.externalUrl ? 'Visit' : 'Get'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
