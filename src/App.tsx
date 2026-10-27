import { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OverviewStats } from './components/OverviewStats';
import { AssignmentToolbar } from './components/AssignmentToolbar';
import { AssignmentCard } from './components/AssignmentCard';
import { AssignmentViewer } from './components/AssignmentViewer';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { assignmentsData } from './data/assignments';
import { Assignment, AssignmentCategory, FileType } from './types';
import { FileQuestion, RotateCcw } from 'lucide-react';

export function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<AssignmentCategory>('All');
  const [selectedFileType, setSelectedFileType] = useState<FileType | 'all'>('all');
  const [sortBy, setSortBy] = useState<'order' | 'title-asc' | 'title-desc'>('order');
  const [viewingAssignment, setViewingAssignment] = useState<Assignment | null>(null);

  // Filtered & Sorted Assignments
  const filteredAssignments = useMemo(() => {
    return assignmentsData
      .filter((assignment) => {
        // Category filter
        if (selectedCategory !== 'All' && assignment.category !== selectedCategory) {
          return false;
        }

        // File format filter
        if (selectedFileType !== 'all') {
          const hasMatchingFileType = 
            assignment.primaryFileType === selectedFileType ||
            assignment.files.some(f => f.fileType === selectedFileType);
          if (!hasMatchingFileType) return false;
        }

        // Search Query filter
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase().trim();
          const matchTitle = assignment.title.toLowerCase().includes(query);
          const matchNumber = assignment.assignmentNumber?.toLowerCase().includes(query);
          const matchSummary = assignment.shortSummary.toLowerCase().includes(query);
          const matchOverview = assignment.detailedOverview.toLowerCase().includes(query);
          const matchTopics = assignment.topicsCovered.some(t => t.toLowerCase().includes(query));
          const matchFiles = assignment.files.some(f => f.name.toLowerCase().includes(query));

          if (!matchTitle && !matchNumber && !matchSummary && !matchOverview && !matchTopics && !matchFiles) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'title-asc') {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'title-desc') {
          return b.title.localeCompare(a.title);
        }
        // Default: original sequence
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedFileType, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedFileType('all');
    setSortBy('order');
  };

  return (
    <div className="portfolio-app">
      <Navbar />

      <main>
        <HeroSection />
        
        <OverviewStats />

        <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <div className="section-title-wrap">
                <h2>Assignment Submissions Gallery</h2>
                <p>Browse, inspect, and download completed assignments, research decks, and reports.</p>
              </div>
            </div>

            <AssignmentToolbar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedFileType={selectedFileType}
              setSelectedFileType={setSelectedFileType}
              sortBy={sortBy}
              setSortBy={setSortBy}
              totalFiltered={filteredAssignments.length}
            />

            {filteredAssignments.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">
                  <FileQuestion size={28} />
                </div>
                <h3>No assignments found</h3>
                <p>
                  No course submissions matched your search query or active filter criteria.
                </p>
                <button className="btn-primary" onClick={handleResetFilters} style={{ margin: '0 auto' }}>
                  <RotateCcw size={15} />
                  <span>Clear All Filters</span>
                </button>
              </div>
            ) : (
              <div className="assignments-grid">
                {filteredAssignments.map((assignment) => (
                  <AssignmentCard
                    key={assignment.id}
                    assignment={assignment}
                    onView={(item) => setViewingAssignment(item)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />

      {/* Assignment Viewer Modal */}
      <AssignmentViewer
        assignment={viewingAssignment}
        onClose={() => setViewingAssignment(null)}
      />
    </div>
  );
}

export default App;
