import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SectionRenderer from './components/SectionRenderer';
import { meta, sections } from './data/content';

function Hero() {
  const [changelogOpen, setChangelogOpen] = useState(false);
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{meta.projectName}</h1>
        <div className="hero-divider"></div>
        <p className="hero-doc-type">{meta.documentType}</p>
        <p className="hero-doc-name">{meta.documentTitle}</p>
        <div className="hero-meta">
          <p className="hero-meta-course"><em>{meta.course}</em></p>
          <p className="hero-meta-institution"><strong>{meta.institution}</strong></p>
          <p className="hero-meta-prepared">Prepared by <strong>{meta.preparedBy}</strong></p>
          
          <button
            className={`hero-last-updated-btn ${changelogOpen ? 'open' : ''}`}
            onClick={() => setChangelogOpen(o => !o)}
          >
            Last updated: <strong>{meta.lastUpdated}</strong>
            <span className="changelog-caret">{changelogOpen ? '▲' : '▼'}</span>
          </button>
          
          <div className={`changelog-wrapper ${changelogOpen ? 'is-open' : ''}`}>
            <div className="changelog-dropdown">
              <div className="changelog-header">Recent Amendments</div>
              {meta.changelog.map((entry, i) => (
                <div key={i} className="changelog-entry">
                  <div className="changelog-date">{entry.date}</div>
                  <ul className="changelog-list">
                    {entry.changes.map((c, j) => <li key={j}>{c}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <Hero />
          {sections.map(section => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>
      </main>
    </div>
  );
}
