import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SectionRenderer from './components/SectionRenderer';
import { meta, sections } from './data/content';

function Hero() {
  const [changelogOpen, setChangelogOpen] = useState(false);
  return (
    <header className="hero">
      <h1 className="hero-title">{meta.projectName}</h1>
      <p className="hero-doc-type">{meta.documentType}</p>
      <p className="hero-doc-name">{meta.documentTitle}</p>
      <div className="hero-meta">
        <em>{meta.course}</em>
        <br />
        <strong>{meta.institution}</strong>
        <br />
        <span style={{ marginTop: '0.5rem', display: 'inline-block' }}>
          Prepared by <strong>{meta.preparedBy}</strong>
        </span>
        <br />
        <button
          className={`hero-last-updated-btn ${changelogOpen ? 'open' : ''}`}
          onClick={() => setChangelogOpen(o => !o)}
        >
          Last updated: <strong>{meta.lastUpdated}</strong>
          <span className="changelog-caret">{changelogOpen ? '▲' : '▼'}</span>
        </button>
        {changelogOpen && (
          <div className="changelog-dropdown">
            <div className="changelog-header">What changed</div>
            {meta.changelog.map((entry, i) => (
              <div key={i} className="changelog-entry">
                <div className="changelog-date">{entry.date}</div>
                <ul className="changelog-list">
                  {entry.changes.map((c, j) => <li key={j}>{c}</li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
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
