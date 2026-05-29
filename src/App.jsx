import React, { useState } from 'react';
import { Terminal as TerminalIcon, LayoutGrid, Cpu, Code, User, FileText, Mail, Sparkles, Workflow, Menu, X } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Terminal from './components/Terminal';
import './App.css';

export default function App() {
  const [uiMode, setUiMode] = useState('dashboard'); // 'dashboard' or 'terminal'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleUiMode = () => {
    setUiMode(prev => prev === 'dashboard' ? 'terminal' : 'dashboard');
  };

  const handleNavClick = (e, sectionId) => {
    setIsMobileMenuOpen(false);
    if (uiMode === 'dashboard') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // In terminal mode, we let them click links, but it gives a notification or they can toggle back.
      // We can also just switch back to dashboard and scroll there!
      e.preventDefault();
      setUiMode('dashboard');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="app-container">

      {/* Background Cyber grids */}
      <div className="cyber-grid"></div>
      <div className="cyber-aurora"></div>

      {/* SLEEK NAVIGATION HEADER */}
      <header className="cyber-header glass-panel">
        <div className="header-brand" onClick={(e) => handleNavClick(e, 'about')}>
          <Code className="brand-icon neon-text-cyan" size={18} />
          <span className="brand-text font-display">
            ANDREW BAXTER
          </span>
        </div>

        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul>
            <li>
              <a href="#about" id="nav-link-about" onClick={(e) => handleNavClick(e, 'about')}>
                <User size={14} /> ABOUT
              </a>
            </li>
            <li>
              <a href="#skills" id="nav-link-skills" onClick={(e) => handleNavClick(e, 'skills')}>
                <Workflow size={14} /> SKILLS
              </a>
            </li>
            <li>
              <a href="#projects" id="nav-link-projects" onClick={(e) => handleNavClick(e, 'projects')}>
                <Code size={14} /> PROJECTS
              </a>
            </li>
            <li>
              <a href="#experience" id="nav-link-experience" onClick={(e) => handleNavClick(e, 'experience')}>
                <FileText size={14} /> EXPERIENCE
              </a>
            </li>
            <li>
              <a href="#contact" id="nav-link-contact" onClick={(e) => handleNavClick(e, 'contact')}>
                <Mail size={14} /> CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* HIGH-TECH TOGGLE SWITCH */}
          <div className="mode-toggle-wrapper">
            <span className={`toggle-label ${uiMode === 'dashboard' ? 'active-mode' : ''}`}>GUI</span>
            <button 
              onClick={toggleUiMode} 
              id="ui-mode-toggle"
              className={`cyber-toggle ${uiMode === 'terminal' ? 'toggle-cli' : 'toggle-gui'}`}
              title="Toggle Interface Mode (CLI vs. GUI)"
              aria-label="Toggle interface mode (GUI vs CLI)"
            >
              <span className="toggle-slider">
                {uiMode === 'dashboard' ? <LayoutGrid size={12} /> : <TerminalIcon size={12} />}
              </span>
            </button>
            <span className={`toggle-label ${uiMode === 'terminal' ? 'active-mode-cli' : ''}`}>CLI</span>
          </div>

          {/* HAMBURGER MENU TOGGLE FOR MOBILE */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            id="mobile-menu-toggle-btn"
            className="mobile-menu-toggle"
            title="Toggle Navigation Menu"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* CORE PAGES RENDERER */}
      <main className="main-content">
        <div className="content-wrapper">
          {uiMode === 'dashboard' ? (
            <Dashboard onActivateCli={() => setUiMode('terminal')} />
          ) : (
            <div className="terminal-wrapper animate-fade-in">
              <Terminal onExit={() => setUiMode('dashboard')} />
            </div>
          )}
        </div>
      </main>

      {/* CYBER FOOTER */}
      <footer className="cyber-footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Andrew Baxter. Loaded under license. Systems running autonomous agent routines.
        </p>
      </footer>
    </div>
  );
}
