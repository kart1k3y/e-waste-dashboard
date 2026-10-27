import React from 'react';
import { studentConfig } from '../config/student';
import { RefreshCw, ShieldCheck, FlaskConical, Recycle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-text">
          <div className="hero-tag" style={{ marginBottom: '12px' }}>
            <span className="hero-tag-dot"></span>
            <span>Academic Purpose</span>
          </div>

          <h2>About This Portfolio</h2>

          <p>
            This portfolio was curated by <strong>{studentConfig.name}</strong> as part of the <strong>{studentConfig.subject}</strong> curriculum in the <strong>{studentConfig.department}</strong> at <strong>{studentConfig.college}</strong>.
          </p>

          <p>
            Electronic waste represents the fastest growing domestic municipal solid waste stream globally. Unlike conventional municipal waste, obsolete electronic equipment contains a toxic combination of hazardous materials (lead, mercury, cadmium, halogenated flame retardants) paired with recoverable scarce resources (gold, copper, silver, rare earth elements).
          </p>

          <p>
            Through these fourteen course modules, laboratory tasks, and research studies, this portfolio investigates the end-to-end electronic lifecycle: from consumer generation accounting and state-level benchmarking in Maharashtra, to formal EPR regulatory enforcement, clean hydrometallurgical chemical recovery, and circular economic product redesigns.
          </p>
        </div>

        <div className="about-pillars">
          <div className="about-pillar-card">
            <h4>
              <RefreshCw size={18} style={{ color: 'var(--color-primary)' }} />
              Reduce & Redesign
            </h4>
            <p>
              Emphasizing upstream design decisions, durable electronics architectures, and phasing out short-lifecycle disposable thermal coatings.
            </p>
          </div>

          <div className="about-pillar-card">
            <h4>
              <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
              EPR & Regulations
            </h4>
            <p>
              Studying statutory manufacturer responsibility under CPCB E-Waste Rules 2022, compliance audits, and formalizing informal labor hubs.
            </p>
          </div>

          <div className="about-pillar-card">
            <h4>
              <FlaskConical size={18} style={{ color: 'var(--color-primary)' }} />
              Hydrometallurgy
            </h4>
            <p>
              Advocating for mild organic leaching systems to substitute dangerous acid-burning, eliminating toxic atmospheric vapors.
            </p>
          </div>

          <div className="about-pillar-card">
            <h4>
              <Recycle size={18} style={{ color: 'var(--color-primary)' }} />
              Circular Economy
            </h4>
            <p>
              Transitioning from linear "take-make-dispose" models toward closed-loop material cascades and institutional e-waste collection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
