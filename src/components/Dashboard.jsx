import React, { useState, useRef, useEffect } from 'react';
import { 
  Mail, 
  Sparkles, 
  Cpu, 
  Database, 
  Workflow, 
  FileText, 
  Activity, 
  ChevronRight, 
  ArrowRight,
  Send,
  ExternalLink,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Dashboard.css';

// Custom inline SVGs for social icons to ensure 100% build reliability
const Github = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Dashboard({ onActivateCli }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(false);
  const [showCopiedTooltip, setShowCopiedTooltip] = useState(false);

  const handleEmailClick = (e) => {
    // Attempt to open mail client, but also copy email to clipboard
    navigator.clipboard.writeText(portfolioData.personalInfo.email).then(() => {
      setShowCopiedTooltip(true);
      setTimeout(() => setShowCopiedTooltip(false), 2000);
    }).catch(() => {});
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const skillCategories = [
    { id: 'all', label: 'All Tech Stack', color: 'cyan' },
    { id: 'aiEngineering', label: 'AI & Agents', color: 'blue' },
    { id: 'languagesCore', label: 'Languages', color: 'gold' },
    { id: 'cloudDevOps', label: 'Cloud & DevOps', color: 'purple' },
    { id: 'enterpriseAutomation', label: 'Enterprise Automation', color: 'green' }
  ];

  const getFilteredSkills = () => {
    if (activeSkillCategory === 'all') {
      return [
        ...portfolioData.skills.aiEngineering.map(s => ({ ...s, color: 'blue' })),
        ...portfolioData.skills.languagesCore.map(s => ({ ...s, color: 'gold' })),
        ...portfolioData.skills.cloudDevOps.map(s => ({ ...s, color: 'purple' })),
        ...portfolioData.skills.enterpriseAutomation.map(s => ({ ...s, color: 'green' }))
      ];
    } else if (activeSkillCategory === 'aiEngineering') {
      return portfolioData.skills.aiEngineering.map(s => ({ ...s, color: 'blue' }));
    } else if (activeSkillCategory === 'languagesCore') {
      return portfolioData.skills.languagesCore.map(s => ({ ...s, color: 'gold' }));
    } else if (activeSkillCategory === 'cloudDevOps') {
      return portfolioData.skills.cloudDevOps.map(s => ({ ...s, color: 'purple' }));
    } else if (activeSkillCategory === 'enterpriseAutomation') {
      return portfolioData.skills.enterpriseAutomation.map(s => ({ ...s, color: 'green' }));
    }
    return [];
  };

  // Categories list
  const categories = ['All', 'AI Agents & MCP Servers', 'Google Workspace', 'Software'];

  // Filter projects
  const filteredProjects = activeCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === activeCategory);

  // VisualViewport handled globally via CSS vars



  return (
    <>
      <div className="dashboard-container">
        
        {/* 1. HERO SECTION */}
        <section id="about" className="hero-section glass-panel">
          <div className="hero-content">
            <h1 className="hero-name">{portfolioData.personalInfo.name}</h1>
            <h2 className="hero-title neon-text-cyan">{portfolioData.personalInfo.title}</h2>
            <p className="hero-bio">{portfolioData.personalInfo.bio}</p>
            
            <div className="hero-socials">
              <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" className="social-btn">
                <Github size={20} />
              </a>
              <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                <Linkedin size={20} />
              </a>
              <div style={{ position: 'relative', display: 'inline-flex' }}>
                {showCopiedTooltip && (
                  <div className="copied-tooltip glass-panel animate-fade-in" style={{
                    position: 'absolute',
                    bottom: '125%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(10, 25, 30, 0.95)',
                    border: '1px solid var(--primary-cyan)',
                    color: 'var(--primary-cyan)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                    boxShadow: '0 0 10px rgba(0, 242, 254, 0.3)'
                  }}>
                    Email Copied!
                  </div>
                )}
                <a 
                  href={`mailto:${portfolioData.personalInfo.email}`} 
                  onClick={handleEmailClick}
                  className="social-btn"
                  title="Send email / copy to clipboard"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" id="cta-view-projects" className="btn-cyber">
                View Projects <ArrowRight size={16} />
              </a>
              <a href={portfolioData.personalInfo.resumeUrl} id="cta-download-resume" className="btn-cyber-outline" download>
                <FileText size={16} /> Download Resume
              </a>
            </div>
          </div>
          
          {/* Interactive mini-CLI terminal preview */}
          <div className="hero-graphic" onClick={onActivateCli} style={{ cursor: 'pointer' }}>
            <div className="console-display interactive-console-preview" id="hero-terminal-preview" title="Click to go Fullscreen CLI Console">
              <div className="console-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span className="console-dot console-dot-red"></span>
                  <span className="console-dot console-dot-yellow"></span>
                  <span className="console-dot console-dot-green"></span>
                </div>
                <span className="console-file" style={{ marginLeft: '12px' }}>interactive_zsh.sh</span>
                <span className="neon-text-cyan" style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '3px', padding: '1px 4px' }}>CLICK TO FOCUS</span>
              </div>
              <div className="console-log scanlines" style={{ fontSize: '0.8rem', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p className="neon-text-green">&gt; initializing interactive_zsh_broker...</p>
                <p className="neon-text-cyan">&gt; auth status: OK (OAuth 2.0 validated)</p>
                <p className="log-text">&gt; systems online. type 'help' for diagnostics.</p>
                <p className="log-text" style={{ marginTop: '10px' }}>&gt; Click console to enter Fullscreen CLI Console mode...</p>
                <div className="terminal-prompt-row-preview" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '10px' }}>
                  <span className="terminal-prompt" style={{ color: 'var(--color-cyan)', fontFamily: 'var(--font-mono)' }}>guest@andrewbaxter.dev:~$</span>
                  <span className="blinking-cursor" style={{ width: '8px', height: '14px', background: 'var(--color-cyan)', display: 'inline-block', animation: 'blink 1s infinite' }}></span>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* 3. SKILLS INVENTORY (REBUILT AS INTERACTIVE FILTERABLE PANEL) */}
        <section id="skills" className="skills-section">
          <div className="section-header">
            <Workflow className="neon-text-cyan" />
            <h2>Core Technical Capabilities</h2>
            <p>An interactive directory of key programming languages, frameworks, AI agent architectures, and cloud services.</p>
          </div>

          <div className="skills-container-panel glass-panel animate-fade-in">
            {/* TAB BAR SELECTOR */}
            <div className="skills-tabs">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  id={`skill-tab-${cat.id}`}
                  onClick={() => setActiveSkillCategory(cat.id)}
                  className={`skill-tab-button ${activeSkillCategory === cat.id ? `active-tab-${cat.color}` : ''}`}
                >
                  <span className="tab-glitch-text">{cat.label}</span>
                </button>
              ))}
            </div>

            {/* ACTIVE CONTENT GRID */}
            <div className="skills-content-area">
              <div className="skills-list-tags central-skills-layout">
                {getFilteredSkills().map((s, idx) => (
                  <span key={idx} className={`skill-tag-chip skill-${s.color} animate-fade-in`}>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* 5. PROJECT GRID SHOWCASE */}
        <section id="projects" className="projects-section">
          <div className="section-header">
            <Code className="neon-text-cyan" />
            <h2>Featured Projects</h2>
            <p>Explore built applications, developer ecosystems, and enterprise-grade automation tools.</p>
          </div>

          <div className="category-tabs">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                id={`project-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`category-tab ${activeCategory === cat ? 'active-tab' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((p, idx) => {
              const isExpanded = expandedProject === idx;
              return (
                <div 
                  key={idx} 
                  id={`project-card-${p.title.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`project-card glass-panel ${isExpanded ? 'card-expanded' : ''} ${p.isMcp ? 'mcp-project-card' : ''}`}
                  onClick={() => setExpandedProject(isExpanded ? null : idx)}
                >
                  <div className="project-card-top">
                    <div className="project-card-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="project-cat neon-text-cyan">{p.category}</span>
                    </div>
                    <div className="project-title-row" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      {p.isMcp && <Cpu className="mcp-icon-inline neon-text-cyan" size={16} />}
                      <h3 style={{ margin: 0 }}>{p.title}</h3>
                    </div>
                    <p className="project-summary">{p.description}</p>
                  </div>

                  {p.isMcp && isExpanded && p.methods && p.methods.length > 0 && (
                    <div className="mcp-methods" style={{ marginTop: '12px', marginBottom: '12px' }} onClick={(e) => e.stopPropagation()}>
                      <h4 style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>Registered Node Methods:</h4>
                      <div className="method-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {p.methods.map((method, mIdx) => (
                          <span key={mIdx} className="method-tag" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', padding: '2px 6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '4px', color: 'var(--text-secondary)' }}>{method}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="project-tech-list" style={{ marginTop: 'auto' }}>
                    {p.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-badge">{t}</span>
                    ))}
                  </div>

                  {isExpanded && (p.github || p.live || p.isMcp) && (
                    <div className="project-card-actions" style={{ display: 'flex', gap: '10px', marginTop: '16px', alignItems: 'center' }} onClick={(e) => e.stopPropagation()}>
                      {p.github && (
                        <a href={p.github} id={`project-link-github-${p.title.replace(/\s+/g, '-').toLowerCase()}`} target="_blank" rel="noreferrer" className="btn-cyber-sm">
                          <Github size={12} /> GitHub
                        </a>
                      )}
                      {p.live && (
                        <a href={p.live} id={`project-link-live-${p.title.replace(/\s+/g, '-').toLowerCase()}`} target="_blank" rel="noreferrer" className="btn-cyber-sm">
                          <ExternalLink size={12} /> Live Site
                        </a>
                      )}
                      {p.isMcp && (
                        <span className="mcp-meta-inline" style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          v<code>{p.version}</code> | {p.lastActive}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="card-expand-indicator">
                    <ChevronRight size={16} className={`expand-icon ${isExpanded ? 'icon-rotate' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. TIMELINE RESUME */}
        <section id="experience" className="experience-section">
          <div className="section-header">
            <FileText className="neon-text-cyan" />
            <h2>Professional Journey</h2>
            <p>Chronological career progression, enterprise achievements, and digital transformation milestones.</p>
          </div>

          <div className="experience-timeline">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="timeline-node glass-panel">
                <div className="timeline-marker neon-border-cyan"></div>
                
                <div className="timeline-node-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <h4 className="neon-text-cyan">{exp.company}</h4>
                  </div>
                  <span className="timeline-date">{exp.period}</span>
                </div>
                
                <p className="timeline-node-desc">{exp.description}</p>
                
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <ChevronRight size={12} className="bullet-arrow neon-text-cyan" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 6.1 EDUCATION SUBSECTION */}
          <div className="section-header education-header" style={{ marginTop: '80px', marginBottom: '40px' }}>
            <Sparkles className="neon-text-cyan" />
            <h2>Academic & Technical Credentials</h2>
            <p>Full-stack web engineering certifications alongside academic criminology and digital forensics coursework.</p>
          </div>

          <div className="education-grid">
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="education-card glass-panel">
                <div className="education-card-header">
                  <div>
                    <h3>{edu.school}</h3>
                    <h4 className="neon-text-cyan">{edu.program}</h4>
                  </div>
                  <span className="education-date">{edu.period}</span>
                </div>
                <p className="education-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. CONTACT DISPATCH FORM */}
        <section id="contact" className="contact-section">
          <div className="section-header">
            <Mail className="neon-text-cyan" />
            <h2>Contact Me</h2>
            <p>Send me a message directly.</p>
          </div>

          <div className="contact-panel-wrapper glass-panel">
            <form action={`https://formsubmit.co/${portfolioData.personalInfo.email}`} method="POST" className="contact-form">
              <div className="form-input-row">
                <div className="input-group">
                  <label htmlFor="name">NAME:</label>
                  <input type="text" name="name" id="name" autoComplete="name" required placeholder="Your Name" className="cyber-input" />
                </div>
                <div className="input-group">
                  <label htmlFor="email">EMAIL:</label>
                  <input type="email" name="email" id="email" autoComplete="email" required placeholder="your@email.com" className="cyber-input" />
                </div>
              </div>
              
              <div className="input-group">
                <label htmlFor="message">MESSAGE:</label>
                <textarea name="message" id="message" autoComplete="off" rows="5" required placeholder="Enter your message here..." className="cyber-input"></textarea>
              </div>
              
              {/* Formsubmit parameters */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />

              <button type="submit" id="contact-form-submit" className="btn-cyber btn-submit">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </div>


    </>
  );
}
