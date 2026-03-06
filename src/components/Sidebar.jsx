import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { meta, sections } from '../data/content';

export default function Sidebar() {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  // Scrollspy: track which section is currently in view
  useEffect(() => {
    const allIds = [];
    sections.forEach(s => {
      allIds.push(s.id);
      if (s.subsections) {
        s.subsections.forEach(sub => allIds.push(sub.id));
      }
      if (s.content?.pillars) {
        s.content.pillars.forEach(p => allIds.push(p.id));
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-10% 0px -70% 0px', threshold: 0 }
    );

    allIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close sidebar on scroll (mobile UX)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  // Build nav items
  const navItems = [];
  sections.forEach(s => {
    navItems.push({ id: s.id, label: s.number ? `${s.number}. ${s.title}` : s.title, level: 0, status: s.status });
    if (s.subsections) {
      s.subsections.forEach(sub => {
        navItems.push({ id: sub.id, label: sub.title, level: 1 });
      });
    }
    if (s.toBeConfirmed) {
      navItems.push({ id: 'to-be-confirmed', label: 'To Be Confirmed', level: 1 });
    }
    if (s.content?.pillars) {
      s.content.pillars.forEach(p => {
        navItems.push({ id: p.id, label: p.title, level: 1 });
      });
    }
  });

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? 'visible' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">{meta.projectName}</div>
          <div className="sidebar-subtitle">Research Constitution</div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${item.level === 1 ? 'nav-item--sub' : ''} ${activeId === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              <span>{item.label}</span>
              {item.status && (
                <span className={`nav-status-dot nav-status-dot--${item.status}`} title={item.status} />
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          Prepared by <strong style={{ color: 'var(--maroon)' }}>{meta.preparedBy}</strong>
          <br />
          {meta.institution}
        </div>
      </aside>
    </>
  );
}
