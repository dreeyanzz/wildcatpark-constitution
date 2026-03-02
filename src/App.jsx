import Sidebar from './components/Sidebar';
import SectionRenderer from './components/SectionRenderer';
import { meta, sections } from './data/content';

function Hero() {
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
