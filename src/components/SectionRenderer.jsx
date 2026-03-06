import { useState } from 'react';
import { AlertTriangle, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';

// ── Copy Button ──
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={handle} title="Copy to clipboard">
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

// ── Status Badge ──
function StatusBadge({ status }) {
  if (!status) return null;
  const labels = { finalized: 'Finalized', 'in-progress': 'In Progress', draft: 'Draft' };
  return <span className={`status-badge status-badge--${status}`}>{labels[status] || status}</span>;
}

// ── Renders inline **bold** markdown ──
function RichText({ text }) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={i}>{part.slice(2, -2)}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

// ── Section Header ──
function SectionHeader({ number, title, id, status, copyText }) {
  return (
    <div className="section-header" id={id}>
      {number && <div className="section-number">Section {number}</div>}
      <div className="section-header-row">
        <h2 className="section-title">{title}</h2>
        <div className="section-header-actions">
          <StatusBadge status={status} />
          {copyText && <CopyButton text={copyText} />}
        </div>
      </div>
      <hr className="section-divider" />
    </div>
  );
}

// ── Collapsible Subsection ──
function Subsection({ sub, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="subsection" id={sub.id}>
      <button className="subsection-toggle" onClick={() => setOpen(o => !o)}>
        <h3 className="subsection-title">{sub.title}</h3>
        {open ? <ChevronUp size={16} className="subsection-chevron" /> : <ChevronDown size={16} className="subsection-chevron" />}
      </button>
      {open && (
        <div className="subsection-body">
          {sub.body && <p className="body-text">{sub.body}</p>}
          {sub.type === 'ordered-list' && (
            <ol className="ordered-list">
              {sub.items.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          )}
          {sub.type === 'unordered-list' && (
            <ul className="unordered-list">
              {sub.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          )}
          {sub.footer && <p className="body-text" style={{ marginTop: '0.75rem' }}>{sub.footer}</p>}
        </div>
      )}
    </div>
  );
}

// ── Prose Section ──
function ProseSection({ section }) {
  return (
    <div className="constitution-section">
      <SectionHeader {...section} copyText={section.content.body} />
      <p className="body-text"><RichText text={section.content.body} /></p>
    </div>
  );
}

// ── Research Title Callout ──
function CalloutTitleSection({ section }) {
  return (
    <div className="constitution-section">
      <SectionHeader {...section} copyText={section.content.body} />
      <div className="callout-title">
        <p>{section.content.body}</p>
      </div>
    </div>
  );
}

// ── Project Description (complex) ──
function ProjectDescriptionSection({ section }) {
  return (
    <div className="constitution-section">
      <SectionHeader {...section} />
      <p className="body-text"><RichText text={section.intro} /></p>
      {section.subsections.map(sub => (
        <Subsection key={sub.id} sub={sub} />
      ))}
      {section.toBeConfirmed && (
        <div className="callout-warning" id="to-be-confirmed">
          <div className="callout-warning-header">
            <AlertTriangle size={18} />
            To Be Confirmed
          </div>
          <div className="callout-warning-subtitle">{section.toBeConfirmed.subtitle}</div>
          <div className="callout-warning-body">
            <ul>
              {section.toBeConfirmed.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Specific Objectives ──
function ObjectivesSection({ section }) {
  const copyText = section.content.items.map((item, i) => `${i + 1}. ${item.emphasis}${item.rest}`).join('\n');
  return (
    <div className="constitution-section">
      <SectionHeader {...section} copyText={copyText} />
      <ol className="ordered-list">
        {section.content.items.map((item, i) => (
          <li key={i}><strong>{item.emphasis}</strong>{item.rest}</li>
        ))}
      </ol>
    </div>
  );
}

// ── Research Questions ──
function ResearchQuestionsSection({ section }) {
  const copyText = section.content.questions.map((q, i) => `RQ${i + 1}: ${q}`).join('\n\n');
  return (
    <div className="constitution-section">
      <SectionHeader {...section} copyText={copyText} />
      <p className="body-text">{section.content.intro}</p>
      <ol className="ordered-list rq-list">
        {section.content.questions.map((q, i) => (
          <li key={i}>
            <span className="rq-text">{q}</span>
            <CopyButton text={q} />
          </li>
        ))}
      </ol>
    </div>
  );
}

// ── Evaluation Pillars ──
function EvaluationPlanSection({ section }) {
  return (
    <div className="constitution-section">
      <SectionHeader {...section} />
      {section.content.pillars.map(pillar => (
        <div className="subsection" key={pillar.id} id={pillar.id}>
          <h3 className="subsection-title">{pillar.title}</h3>
          <p className="objective-text"><strong>Objective:</strong> {pillar.objective}</p>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr><th>Metric</th><th>Description</th></tr>
              </thead>
              <tbody>
                {pillar.rows.map((row, i) => (
                  <tr key={i}>
                    <td className="label-cell">{row.label}</td>
                    <td>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Section Alignment Guide ──
function AlignmentGuideSection({ section }) {
  const { content } = section;
  return (
    <div className="constitution-section">
      <SectionHeader {...section} />
      <p className="body-text">{content.intro}</p>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr><th>BIP Section</th><th>Must Connect To</th></tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => (
              <tr key={i}>
                <td className="label-cell">{row.section}</td>
                <td>{row.connection}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="callout-note">
        <p><strong>Note:</strong> {content.note.line1}</p>
        {content.note.line2 && <p style={{ marginTop: '0.5rem' }}><strong>{content.note.line2}</strong></p>}
      </div>
    </div>
  );
}

// ── Main Renderer ──
export default function SectionRenderer({ section }) {
  const type = section.content?.type;
  switch (type) {
    case 'prose':           return <ProseSection section={section} />;
    case 'callout-title':   return <CalloutTitleSection section={section} />;
    case 'complex':         return <ProjectDescriptionSection section={section} />;
    case 'objectives-list': return <ObjectivesSection section={section} />;
    case 'research-questions': return <ResearchQuestionsSection section={section} />;
    case 'evaluation-pillars': return <EvaluationPlanSection section={section} />;
    case 'alignment-table': return <AlignmentGuideSection section={section} />;
    default: return null;
  }
}
