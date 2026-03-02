import { AlertTriangle } from 'lucide-react';

// Renders inline markdown-like bold (**text**) 
function RichText({ text }) {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

// ── Section Header ──
function SectionHeader({ number, title, id }) {
  return (
    <div className="section-header" id={id}>
      {number && <div className="section-number">Section {number}</div>}
      <h2 className="section-title">{title}</h2>
      <hr className="section-divider" />
    </div>
  );
}

// ── Prose Section ──
function ProseSection({ section }) {
  return (
    <div className="constitution-section">
      <SectionHeader {...section} />
      <p className="body-text"><RichText text={section.content.body} /></p>
    </div>
  );
}

// ── Research Title Callout ──
function CalloutTitleSection({ section }) {
  return (
    <div className="constitution-section">
      <SectionHeader {...section} />
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
        <div className="subsection" key={sub.id} id={sub.id}>
          <h3 className="subsection-title">{sub.title}</h3>
          {sub.type === 'ordered-list' ? (
            <ol className="ordered-list">
              {sub.items.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
          ) : (
            <p className="body-text">{sub.body}</p>
          )}
        </div>
      ))}

      {section.toBeConfirmed && (
        <div className="callout-warning" id="to-be-confirmed">
          <div className="callout-warning-header">
            <AlertTriangle size={18} />
            To Be Confirmed
          </div>
          <div className="callout-warning-subtitle">
            {section.toBeConfirmed.subtitle}
          </div>
          <div className="callout-warning-body">
            <ul>
              {section.toBeConfirmed.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Objectives List ──
function ObjectivesSection({ section }) {
  return (
    <div className="constitution-section">
      <SectionHeader {...section} />
      <ol className="ordered-list">
        {section.content.items.map((item, i) => (
          <li key={i}>
            <strong>{item.emphasis}</strong>{item.rest}
          </li>
        ))}
      </ol>
    </div>
  );
}

// ── Research Questions ──
function ResearchQuestionsSection({ section }) {
  return (
    <div className="constitution-section">
      <SectionHeader {...section} />
      <p className="body-text">{section.content.intro}</p>
      <ol className="ordered-list">
        {section.content.questions.map((q, i) => (
          <li key={i}>{q}</li>
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
          <p className="objective-text">
            <strong>Objective:</strong> {pillar.objective}
          </p>
          <div className="table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Description</th>
                </tr>
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
            <tr>
              <th>BIP Section</th>
              <th>Must Connect To</th>
            </tr>
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
        <p style={{ marginTop: '0.5rem' }}><strong>{content.note.line2}</strong></p>
      </div>
    </div>
  );
}

// ── Main Renderer ──
export default function SectionRenderer({ section }) {
  const type = section.content?.type;

  switch (type) {
    case 'prose':
      return <ProseSection section={section} />;
    case 'callout-title':
      return <CalloutTitleSection section={section} />;
    case 'complex':
      return <ProjectDescriptionSection section={section} />;
    case 'objectives-list':
      return <ObjectivesSection section={section} />;
    case 'research-questions':
      return <ResearchQuestionsSection section={section} />;
    case 'evaluation-pillars':
      return <EvaluationPlanSection section={section} />;
    case 'alignment-table':
      return <AlignmentGuideSection section={section} />;
    default:
      return null;
  }
}
