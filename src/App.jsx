import React, { useState } from 'react';
import { Terminal as TerminalIcon, LayoutGrid, Cpu, Code, User, FileText, Mail, Sparkles, Workflow, Menu, X } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Terminal from './components/Terminal';
import './App.css';

export default function App() {
  const [uiMode, setUiMode] = useState('dashboard'); // 'dashboard' or 'terminal'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100vh');
  const [isChatActive, setIsChatActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const shouldLock = uiMode === 'terminal' || isMobileMenuOpen || (isChatActive && isMobile);
    
    if (shouldLock) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
      document.documentElement.style.overscrollBehavior = 'none';

      return () => {
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        document.body.style.overscrollBehavior = '';
        document.documentElement.style.overscrollBehavior = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [uiMode, isMobileMenuOpen, isChatActive, isMobile]);

  React.useEffect(() => {
    const handleViewportChange = () => {
      if (window.visualViewport) {
        setViewportHeight(`${window.visualViewport.height}px`);
        if (window.scrollY !== 0 || window.visualViewport.offsetTop !== 0) {
          window.scrollTo(0, 0);
        }
      }
    };
    handleViewportChange();
    window.visualViewport?.addEventListener('resize', handleViewportChange);
    window.visualViewport?.addEventListener('scroll', handleViewportChange);

    const resetScroll = () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 50);
    };
    window.addEventListener('focusin', resetScroll);

    return () => {
      window.visualViewport?.removeEventListener('resize', handleViewportChange);
      window.visualViewport?.removeEventListener('scroll', handleViewportChange);
      window.removeEventListener('focusin', resetScroll);
    };
  }, []);

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
      {(!isMobile || (uiMode === 'dashboard' && !isChatActive)) && (
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
      )}

      {/* CORE PAGES RENDERER */}
      <main className="main-content">
        <div className="content-wrapper">
          {uiMode === 'dashboard' ? (
            <Dashboard 
              onActivateCli={() => setUiMode('terminal')} 
              isChatOpen={isChatActive}
              setIsChatOpen={setIsChatActive}
            />
          ) : (
            <div 
              className="terminal-wrapper animate-fade-in"
              style={window.innerWidth <= 768 ? { height: viewportHeight, maxHeight: viewportHeight } : undefined}
            >
              <Terminal onExit={() => setUiMode('dashboard')} viewportHeight={viewportHeight} />
            </div>
          )}
        </div>
      </main>

      {/* CYBER FOOTER */}
      {(!isMobile || (uiMode === 'dashboard' && !isChatActive)) && (
        <footer className="cyber-footer">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Andrew Baxter. Loaded under license. Systems running autonomous agent routines.
          </p>
        </footer>
      )}
    </div>
  );
}
