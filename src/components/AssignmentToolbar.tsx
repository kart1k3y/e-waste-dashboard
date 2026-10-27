import React from 'react';
import { Search, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { AssignmentCategory, FileType } from '../types';
import { CATEGORIES } from '../data/assignments';

interface AssignmentToolbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: AssignmentCategory;
  setSelectedCategory: (c: AssignmentCategory) => void;
  selectedFileType: FileType | 'all';
  setSelectedFileType: (t: FileType | 'all') => void;
  sortBy: 'order' | 'title-asc' | 'title-desc';
  setSortBy: (s: 'order' | 'title-asc' | 'title-desc') => void;
  totalFiltered: number;
}

export const AssignmentToolbar: React.FC<AssignmentToolbarProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedFileType,
  setSelectedFileType,
  sortBy,
  setSortBy,
  totalFiltered
}) => {
  const fileTypesList: { label: string; value: FileType | 'all' }[] = [
    { label: 'All Formats', value: 'all' },
    { label: 'PDF Docs', value: 'pdf' },
    { label: 'Excel (XLSX)', value: 'xlsx' },
    { label: 'Word (DOCX)', value: 'docx' },
    { label: 'PowerPoint (PPTX)', value: 'pptx' },
    { label: 'Images / Scans', value: 'image' },
    { label: 'Interactive Web App', value: 'html' }
  ];

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedFileType !== 'all';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedFileType('all');
    setSortBy('order');
  };

  return (
    <div className="toolbar-container" id="assignments">
      <div className="toolbar-top-row">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search assignments, topics, regulations, case studies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search assignments"
          />
          {searchQuery && (
            <button 
              className="clear-search-btn" 
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        <div className="sort-select-wrap">
          <ArrowUpDown size={14} style={{ color: 'var(--color-muted)' }} />
          <label htmlFor="sort-select" className="sort-label">Sort:</label>
          <select 
            id="sort-select"
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="order">Course Sequence</option>
            <option value="title-asc">Title (A – Z)</option>
            <option value="title-desc">Title (Z – A)</option>
          </select>
        </div>

        {hasActiveFilters && (
          <button 
            className="btn-secondary" 
            style={{ padding: '8px 12px', fontSize: '0.8rem' }}
            onClick={resetFilters}
          >
            <SlidersHorizontal size={13} />
            <span>Reset Filters ({totalFiltered} shown)</span>
          </button>
        )}
      </div>

      {/* Category Filter Pills */}
      <div className="category-pills-wrap" role="tablist" aria-label="Assignment Categories">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            role="tab"
            aria-selected={selectedCategory === category}
            className={`category-pill ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* File Type Filter Row */}
      <div className="filetype-filter-row">
        <span className="filetype-label">Format:</span>
        {fileTypesList.map((ft) => (
          <button
            key={ft.value}
            className={`filetype-pill ${selectedFileType === ft.value ? 'active' : ''}`}
            onClick={() => setSelectedFileType(ft.value)}
          >
            {ft.label}
          </button>
        ))}
      </div>
    </div>
  );
};
