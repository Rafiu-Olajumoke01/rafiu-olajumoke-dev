import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const lines = [
  { id: 1,  type: 'cmd',     text: 'cat developer.txt' },
  { id: 2,  type: 'out',     text: 'Rafiu Olajumoke' },
  { id: 3,  type: 'out',     text: 'Fullstack Developer — Heavy on Frontend' },
  { id: 4,  type: 'gap' },
  { id: 5,  type: 'cmd',     text: 'cat mindset.txt' },
  { id: 6,  type: 'out',     text: 'I solve critical problems in code' },
  { id: 7,  type: 'out',     text: 'Every challenge is an opportunity to build something better' },
  { id: 8,  type: 'gap' },
  { id: 9,  type: 'cmd',     text: 'ls recent-projects/' },
  { id: 10, type: 'project', title: 'MyVisa App',           status: 'IN PROGRESS', desc: 'Real-life visa application platform',    stack: 'Next.js · Django' },
  { id: 11, type: 'project', title: 'Kanban Task Manager',  status: 'SHIPPED',     desc: 'Frontend Mentor · Senior difficulty',     stack: 'React.js' },
  { id: 12, type: 'gap' },
  { id: 13, type: 'cmd',     text: 'echo $MESSAGE' },
  { id: 14, type: 'out',     text: 'Ready to turn complex problems into elegant solutions' },
  { id: 15, type: 'gap' },
  { id: 16, type: 'cmd',     text: 'npm start' },
  { id: 17, type: 'boot' },
];

function getDelay(item) {
  if (item.type === 'gap')     return 200;
  if (item.type === 'project') return 550;
  if (item.type === 'boot')    return 0;
  return 420;
}

const TYPING_SPEED = 48;

export default function Landing() {
  const navigate = useNavigate();
  const [rendered,    setRendered]    = useState([]);
  const [typing,      setTyping]      = useState('');
  const [lineIdx,     setLineIdx]     = useState(0);
  const [charIdx,     setCharIdx]     = useState(0);
  const [booting,     setBooting]     = useState(false);
  const [showCursor,  setShowCursor]  = useState(true);

  useEffect(() => {
    const t = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const item = lines[lineIdx];

    if (item.type === 'cmd') {
      if (charIdx < item.text.length) {
        const t = setTimeout(() => {
          setTyping(item.text.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRendered(r => [...r, item]);
          setTyping('');
          setCharIdx(0);
          setLineIdx(i => i + 1);
        }, 300);
        return () => clearTimeout(t);
      }
    }

    if (item.type === 'boot') {
      setRendered(r => [...r, item]);
      setBooting(true);
      const t = setTimeout(() => navigate('/home'), 2500);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setRendered(r => [...r, item]);
      setLineIdx(i => i + 1);
    }, getDelay(item));
    return () => clearTimeout(t);
  }, [lineIdx, charIdx, navigate]);

  return (
    <div className="lp-root">
      <div className="lp-grid" aria-hidden="true" />
      <div className="lp-corner lp-corner--tl" aria-hidden="true" />
      <div className="lp-corner lp-corner--tr" aria-hidden="true" />
      <div className="lp-corner lp-corner--bl" aria-hidden="true" />
      <div className="lp-corner lp-corner--br" aria-hidden="true" />

      <div className="lp-window">

        <div className="lp-titlebar">
          <div className="lp-dots">
            <span className="lp-dot lp-dot--red" />
            <span className="lp-dot lp-dot--yellow" />
            <span className="lp-dot lp-dot--green" />
          </div>
          <span className="lp-titlebar__text">olajumoke@portfolio: ~</span>
          <span className="lp-titlebar__badge">bash</span>
        </div>

        <div className="lp-body">
          {rendered.map(item => {
            if (item.type === 'gap') {
              return <div key={item.id} className="lp-gap" />;
            }
            if (item.type === 'cmd') {
              return (
                <div key={item.id} className="lp-line lp-line--cmd">
                  <span className="lp-ps1">$&nbsp;</span>
                  <span className="lp-cmd-text">{item.text}</span>
                </div>
              );
            }
            if (item.type === 'out') {
              return (
                <div key={item.id} className="lp-line lp-line--out">
                  <span className="lp-arrow">›&nbsp;</span>
                  <span>{item.text}</span>
                </div>
              );
            }
            if (item.type === 'project') {
              return (
                <div key={item.id} className="lp-project">
                  <div className="lp-project__top">
                    <span className="lp-project__title">{item.title}</span>
                    <span className={`lp-project__tag lp-project__tag--${item.status === 'SHIPPED' ? 'green' : 'pink'}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="lp-project__desc">{item.desc}</div>
                  <div className="lp-project__stack">{item.stack}</div>
                </div>
              );
            }
            if (item.type === 'boot') {
              return (
                <div key={item.id} className="lp-boot">
                  <div className="lp-boot__top">
                    <span className="lp-ps1">$&nbsp;</span>
                    <span className="lp-boot__cmd">Loading portfolio</span>
                    <span className="lp-boot__dots">...</span>
                  </div>
                  <div className="lp-boot__track">
                    <div className={`lp-boot__fill${booting ? ' lp-boot__fill--run' : ''}`} />
                  </div>
                </div>
              );
            }
            return null;
          })}

          {lineIdx < lines.length && lines[lineIdx].type === 'cmd' && (
            <div className="lp-line lp-line--cmd">
              <span className="lp-ps1">$&nbsp;</span>
              <span className="lp-cmd-text">{typing}</span>
              <span className={`lp-cursor${showCursor ? '' : ' lp-cursor--off'}`}>_</span>
            </div>
          )}
        </div>

        <div className="lp-statusbar">
          <span className="lp-statusbar__mode">NORMAL</span>
          <span className="lp-statusbar__path">~/portfolio/olajumoke</span>
          <span className="lp-statusbar__right">UTF-8</span>
        </div>

      </div>

      {!booting && (
        <button className="lp-skip" onClick={() => navigate('/home')}>
          skip intro <span className="lp-skip__arrow">→</span>
        </button>
      )}
    </div>
  );
}