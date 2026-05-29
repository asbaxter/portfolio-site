import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Terminal.css';

export default function Terminal({ activeSectionCallback, onExit }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [history, setHistory] = useState(() => {
    const isMobileViewport = typeof window !== 'undefined' && window.innerWidth <= 768;
    if (isMobileViewport) {
      return [
        { type: 'system', text: "Andrew Baxter's Console (v2.5.0). Type 'help' for diagnostics." }
      ];
    }
    return [
      { type: 'system', text: "Initializing Antigravity Core 2.0..." },
      { type: 'system', text: "Connecting to Local Agent Workspace... SUCCESS" },
      { type: 'system', text: "Loading custom MCP Server Nodes (google-drive-mcp, gmail-dispatch-mcp, calendar-mcp)... ONLINE" },
      { type: 'system', text: "Welcome to Andrew Baxter's Console (v2.5.0-agentic)." },
      { type: 'system', text: "Type 'help' to list available commands or 'chat <question>' to talk to my AI Career Assistant." },
    ];
  });
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  // Auto-scroll terminal body container only, without shifting the whole page
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [history]);

  // Focus terminal input on click anywhere inside terminal
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleInputFocus = () => {
    if (terminalBodyRef.current) {
      setTimeout(() => {
        terminalBodyRef.current.scrollTo({
          top: terminalBodyRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }, 150);
    }
  };

  useEffect(() => {
    focusInput();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = inputValue.trim();
      if (!command) return;

      // Add to command history
      const newCmdHistory = [command, ...commandHistory];
      setCommandHistory(newCmdHistory);
      setHistoryIndex(-1);

      // Print command in terminal
      setHistory(prev => [...prev, { type: 'input', text: `${isMobile ? 'guest:~$' : 'guest@andrewbaxter.dev:~$' } ${command}` }]);
      
      // Parse command
      executeCommand(command);
      setInputValue('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputValue(commandHistory[nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  const executeCommand = (cmdText) => {
    const parts = cmdText.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    switch (command) {
      case 'help':
        setHistory(prev => [
          ...prev,
          { 
            type: 'output', 
            text: `Available commands:
  about     - Core developer profile summary
  skills    - Categorized inventory of tech stack & capabilities
  projects  - Showcases primary development initiatives and tools
  mcp       - Inspect active Model Context Protocol (MCP) servers
  resume    - Structured professional timeline (Wursta / migrations)
  chat <q>  - Dispatch questions to the local AI Career Assistant
  clear     - Wipes the console history
  exit      - Exits CLI mode and returns to GUI Dashboard
  help      - Displays this diagnostic log`
          }
        ]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'about':
        setHistory(prev => [
          ...prev,
          { 
            type: 'output', 
            text: `[PROFILE INITIALIZED]
Name: ${portfolioData.personalInfo.name}
Title: ${portfolioData.personalInfo.title}
Location: ${portfolioData.personalInfo.location}
Email: ${portfolioData.personalInfo.email}
GitHub: github.com/asbaxter
LinkedIn: linkedin.com/in/andrew-baxter-78575a235

Summary:
${portfolioData.personalInfo.bio}
Currently focusing on bridging Agentic AI workflows with high-value enterprise integrations.`
          }
        ]);
        break;

      case 'skills':
        const aiList = portfolioData.skills.aiEngineering.map(s => `  [+] ${s.name}`).join('\n');
        const langList = portfolioData.skills.languagesCore.map(s => `  [+] ${s.name}`).join('\n');
        const devopsList = portfolioData.skills.cloudDevOps.map(s => `  [+] ${s.name}`).join('\n');
        const autoList = portfolioData.skills.enterpriseAutomation.map(s => `  [+] ${s.name}`).join('\n');
        
        setHistory(prev => [
          ...prev,
          { 
            type: 'output', 
            text: `========================================
TECHNICAL INVENTORY MATRIX
========================================
AI ENGINEERING & AGENTIC SYSTEMS:
${aiList}

LANGUAGES & CORE DEVELOPMENT:
${langList}

CLOUD INFRASTRUCTURE, BACKEND & DEVOPS:
${devopsList}

ENTERPRISE INTEGRATION & AUTOMATION:
${autoList}`
          }
        ]);
        break;

      case 'projects':
        const projList = portfolioData.projects.map(p => {
          return `----------------------------------------
Title: ${p.title} [Category: ${p.category}]
Tech: ${p.tech.join(', ')}
${p.github ? `GitHub: ${p.github}\n` : ''}${p.live ? `Live: ${p.live}\n` : ''}Description: ${p.description}`;
        }).join('\n');

        setHistory(prev => [
          ...prev,
          { type: 'output', text: `========================================\nFEATURED INITIATIVES\n========================================\n${projList}` }
        ]);
        break;

      case 'mcp':
        const mcpList = portfolioData.mcpServers.map(m => {
          return `● Name: ${m.name} [Version ${m.version}] [Status: ${m.status}]
  Description: ${m.description}
  Active Methods: ${m.methods.join(', ')}
  Last Transaction: ${m.lastActive}`;
        }).join('\n\n');

        setHistory(prev => [
          ...prev,
          { type: 'output', text: `========================================\nACTIVE MCP SERVER NODES\n========================================\n${mcpList}` }
        ]);
        break;

      case 'resume':
        const expList = portfolioData.experience.map(e => {
          const bulletPoints = e.bullets.map(b => `  - ${b}`).join('\n');
          return `[${e.period}] ${e.role} at ${e.company}
${e.description}
Key Accomplishments:
${bulletPoints}`;
        }).join('\n\n');

        setHistory(prev => [
          ...prev,
          { type: 'output', text: `========================================\nPROFESSIONAL TIMELINE\n========================================\n${expList}` }
        ]);
        break;

      case 'chat':
        if (!args) {
          setHistory(prev => [
            ...prev,
            { type: 'output', text: `Agent Assistant: Please specify a query! Example: 'chat mcp' or 'chat tell me about the EV project'.` }
          ]);
          break;
        }

        // Run chatbot query search
        const queryLower = args.toLowerCase();
        let match = null;

        for (const kb of portfolioData.chatKnowledgeBase) {
          if (kb.keywords.some(k => {
            const cleanK = k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp(`\\b${cleanK}\\b`, 'i');
            return regex.test(queryLower);
          })) {
            match = kb;
            break;
          }
        }

        const responseText = match 
          ? match.answer 
          : `Agent Assistant: I scanned my local memory databases for '${args}' but couldn't find a direct match. You can ask about my 'mcp' projects, 'EV migration' experience, 'Wursta' responsibilities, or 'skills'.`;

        setHistory(prev => [
          ...prev,
          { type: 'system', text: "Querying Agentic Memory Core..." },
          { type: 'agent', text: responseText }
        ]);
        break;

      case 'exit':
        setHistory(prev => [
          ...prev,
          { type: 'system', text: "Terminating zsh console session... Returning to GUI." }
        ]);
        if (typeof onExit === 'function') {
          setTimeout(() => {
            onExit();
          }, 500);
        }
        break;

      default:
        setHistory(prev => [
          ...prev,
          { type: 'error', text: `bash: command not found: ${command}. Type 'help' for diagnostic log.` }
        ]);
    }
  };

  return (
    <div className="terminal-container scanlines" onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot dot-red" onClick={onExit} style={{ cursor: 'pointer' }} title="Exit CLI"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="terminal-title">guest@andrewbaxter.dev: ~ (zsh)</div>
        <button 
          onClick={onExit}
          className="terminal-exit-btn"
          aria-label="Exit CLI Mode"
        >
          Exit
        </button>
      </div>
      
      <div className="terminal-body" ref={terminalBodyRef}>
        {history.map((line, idx) => {
          let lineClass = "terminal-line";
          if (line.type === 'system') lineClass += " line-system";
          if (line.type === 'input') lineClass += " line-input";
          if (line.type === 'error') lineClass += " line-error";
          if (line.type === 'agent') lineClass += " line-agent";
          
          return (
            <pre key={idx} className={lineClass}>
              {line.text}
            </pre>
          );
        })}
        <div ref={terminalEndRef} />
      </div>

      <div className="terminal-prompt-row">
        <span className="terminal-prompt">{isMobile ? 'guest:~$' : 'guest@andrewbaxter.dev:~$'}</span>
        <input
          ref={inputRef}
          type="text"
          id="terminal-input-field"
          name="terminal-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          className="terminal-input"
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
