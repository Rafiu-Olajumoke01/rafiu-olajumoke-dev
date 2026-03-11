import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  const lines = [
    '$ cat developer.txt',
    '> Name: Rafiu Olajumoke',
    '> Role: Fullstack Developer (Heavy on Frontend)',
    '',
    '$ cat mindset.txt',
    '> I solve critical problems in code',
    '> Every challenge is an opportunity to build something better',
    '',
    '$ ls recent-projects/',
    '> MyVisa App [In Progress]',
    '> ├─ Real-life visa application platform',
    '> ├─ Streamlines end-to-end visa applications',
    '> └─ Built with Next.js & Django',
    '> Kanban Task Management System',
    '> ├─ Certified Frontend Mentor Challenge',
    '> ├─ Senior-level difficulty',
    '> └─ Built with React.js & modern best practices',
    '',
    '$ echo $MESSAGE',
    '> Ready to turn complex problems into elegant solutions',
    '',
    '$ npm start',
    '> Loading portfolio...',
  ];

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setAnimationComplete(true);
      const timer = setTimeout(() => {
        navigate('/home');
      }, 2000);
      return () => clearTimeout(timer);
    }

    const currentLine = lines[currentLineIndex];
    const isCommand = currentLine.startsWith('$');
    const typingSpeed = isCommand ? 50 : 30;

    if (displayedText.length < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLineIndex(currentLineIndex + 1);
        setDisplayedText('');
      }, currentLine === '' ? 100 : 400);
      return () => clearTimeout(timer);
    }
  }, [displayedText, currentLineIndex, navigate]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <div className="landing-container">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn-close"></span>
            <span className="btn-minimize"></span>
            <span className="btn-maximize"></span>
          </div>
          <div className="terminal-title">olajumoke@portfolio:~</div>
        </div>

        <div className="terminal-body">
          {lines.slice(0, currentLineIndex).map((line, index) => (
            <div key={index} className={`terminal-line ${line.startsWith('$') ? 'command' : line.startsWith('>') ? 'output' : 'empty'}`}>
              {line}
            </div>
          ))}

          {currentLineIndex < lines.length && (
            <div className={`terminal-line ${lines[currentLineIndex].startsWith('$') ? 'command' : lines[currentLineIndex].startsWith('>') ? 'output' : 'empty'}`}>
              {displayedText}
              {showCursor && <span className="cursor">_</span>}
            </div>
          )}

          {animationComplete && (
            <div className="loading-animation">
              <div className="spinner"></div>
              <p>Loading portfolio...</p>
            </div>
          )}
        </div>
      </div>

      {!animationComplete && (
        <button className="skip-button" onClick={handleSkip}>
          Skip Intro →
        </button>
      )}
    </div>
  );
}

export default Landing;