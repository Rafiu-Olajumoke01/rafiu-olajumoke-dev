import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaBrain, FaUserAlt, FaTools,
  FaGithub, FaLinkedin, FaEnvelope, FaChevronRight,
  FaCode
} from 'react-icons/fa';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiDjango, SiPython,
  SiMongodb, SiMysql, SiHtml5, SiCss3,
  SiJquery, SiPostman
} from 'react-icons/si';
import './sidebar.css';

const frontendSkills = [
  { name: 'React.js',      icon: SiReact,      color: '#61DAFB', level: 95 },
  { name: 'Next.js',       icon: SiNextdotjs,  color: '#ffffff', level: 88 },
  { name: 'JavaScript',    icon: SiJavascript, color: '#F7DF1E', level: 92 },
  { name: 'TypeScript',    icon: SiTypescript, color: '#3178C6', level: 80 },
  { name: 'HTML5',         icon: SiHtml5,      color: '#E34F26', level: 97 },
  { name: 'CSS3',          icon: SiCss3,       color: '#1572B6', level: 93 },
  { name: 'jQuery',        icon: SiJquery,     color: '#0769AD', level: 78 },
];

const backendSkills = [
  { name: 'Node.js',       icon: SiNodedotjs,  color: '#3C873A', level: 82 },
  { name: 'Express.js',    icon: SiExpress,    color: '#ffffff', level: 80 },
  { name: 'Django',        icon: SiDjango,     color: '#44B78B', level: 75 },
  { name: 'Python',        icon: SiPython,     color: '#3776AB', level: 76 },
  { name: 'REST APIs',     icon: SiPostman,    color: '#FF6C37', level: 85 },
  { name: 'MySQL',         icon: SiMysql,      color: '#4479A1', level: 78 },
  { name: 'MongoDB',       icon: SiMongodb,    color: '#47A248', level: 80 },
];

function SpecializationCard() {
  const [animated, setAnimated] = useState(false);
  const [feCount, setFeCount] = useState(0);
  const [beCount, setBeCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !animated) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  useEffect(() => {
    if (!animated) return;
    const target80 = 80, target60 = 60, duration = 1000;
    const steps = duration / 16;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setFeCount(Math.min(Math.round((target80 / steps) * step), target80));
      setBeCount(Math.min(Math.round((target60 / steps) * step), target60));
      if (step >= steps) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [animated]);

  return (
    <div className="spec-card" ref={ref}>
      <p className="section-label" style={{ padding: '0 0 0.6rem' }}>Specialization</p>

      <div className="spec-split">
        <div className="spec-side spec-fe">
          <span className="spec-side-label">Frontend</span>
          <span className="spec-side-role">Primary</span>
          <div className="spec-percent">{animated ? feCount : 0}%</div>
          <div className="spec-bar-track">
            <div
              className="spec-bar-fill spec-bar-fe"
              style={{ width: animated ? '80%' : '0%' }}
            />
          </div>
          <div className="spec-tags">
            <span className="spec-tag">React</span>
            <span className="spec-tag">Next.js</span>
            <span className="spec-tag">JS/TS</span>
            <span className="spec-tag">CSS</span>
          </div>
        </div>

        <div className="spec-divider" />

        <div className="spec-side spec-be">
          <span className="spec-side-label">Backend</span>
          <span className="spec-side-role">Supporting</span>
          <div className="spec-percent">{animated ? beCount : 0}%</div>
          <div className="spec-bar-track">
            <div
              className="spec-bar-fill spec-bar-be"
              style={{ width: animated ? '60%' : '0%' }}
            />
          </div>
          <div className="spec-tags">
            <span className="spec-tag">Node.js</span>
            <span className="spec-tag">Django</span>
            <span className="spec-tag">APIs</span>
          </div>
        </div>
      </div>

      <p className="spec-tagline">
        <FaCode style={{ fontSize: '0.7rem', marginRight: 5 }} />
        Frontend-first engineer who owns the full stack
      </p>
    </div>
  );
}

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [activeSkill, setActiveSkill] = useState(null);
  const [skillTab, setSkillTab] = useState('fe');

  const navItems = [
    { path: '/home',    icon: FaHome,    label: 'Home',       desc: 'Overview & projects' },
    { path: '/mindset', icon: FaBrain,   label: 'About',      desc: 'Who I am' },
    { path: '/arsenal', icon: FaTools,   label: 'Skills',     desc: 'My tech arsenal' },
    { path: '/kanban',  icon: FaCode,    label: 'Projects',   desc: 'What I\'ve built' },
    { path: '/journey', icon: FaUserAlt, label: 'Experience', desc: 'My journey' },
  ];

  const socials = [
    { icon: FaGithub,   href: 'https://github.com/Rafiu-Olajumoke01',                    label: 'GitHub'   },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rafiu-olajumoke-084374318',   label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:rafiuolajumoke7@gmail.com',                        label: 'Email'    },
  ];

  const activeSkills = skillTab === 'fe' ? frontendSkills : backendSkills;

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={onClose} />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>

        {/* ── PROFILE ── */}
        <div className="sidebar-profile">
          <div className="avatar-ring">
            <div className="avatar">RO</div>
            <span className="avatar-status" title="Available for work" />
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Rafiu Olajumoke</h3>
            <p className="profile-role">Frontend Engineer</p>
          </div>
          <div className="profile-tagline">
            <span className="tagline-icon">⚡</span>
            <span>I turn problems into products</span>
          </div>
          <div className="profile-stats">
            <div className="pstat">
              <span className="pstat-num">7+</span>
              <span className="pstat-label">Projects</span>
            </div>
            <div className="pstat-divider" />
            <div className="pstat">
              <span className="pstat-num">3+</span>
              <span className="pstat-label">Years</span>
            </div>
            <div className="pstat-divider" />
            <div className="pstat">
              <span className="pstat-num">Remote</span>
              <span className="pstat-label">Ready</span>
            </div>
          </div>
        </div>

        {/* ── NAVIGATION ── */}
        <nav className="sidebar-nav">
          <p className="section-label">Menu</p>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                <div className="nav-icon-wrap">
                  <Icon className="nav-icon" />
                </div>
                <div className="nav-text">
                  <span className="nav-label">{item.label}</span>
                  <span className="nav-desc">{item.desc}</span>
                </div>
                <FaChevronRight className="nav-arrow" />
              </Link>
            );
          })}
        </nav>

        {/* ── SPECIALIZATION CARD ── */}
        <SpecializationCard />

        {/* ── TECH STACK ── */}
        <div className="sidebar-skills">
          <div className="skills-tab-header">
            <p className="section-label" style={{ padding: 0, marginBottom: 0 }}>Tech Stack</p>
            <div className="skills-tabs">
              <button
                className={`skills-tab ${skillTab === 'fe' ? 'active' : ''}`}
                onClick={() => setSkillTab('fe')}
              >
                Frontend
              </button>
              <button
                className={`skills-tab ${skillTab === 'be' ? 'active' : ''}`}
                onClick={() => setSkillTab('be')}
              >
                Backend
              </button>
            </div>
          </div>
          <div className="skills-grid">
            {activeSkills.map((skill, i) => {
              const Icon = skill.icon;
              const isActive = activeSkill === i;
              return (
                <div
                  key={skill.name}
                  className={`skill-chip ${isActive ? 'active' : ''}`}
                  onMouseEnter={() => setActiveSkill(i)}
                  onMouseLeave={() => setActiveSkill(null)}
                  style={{ '--skill-color': skill.color }}
                >
                  <Icon className="skill-icon" style={{ color: skill.color }} />
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level-text">{skill.level}%</span>
                  {isActive && (
                    <div className="skill-bar-wrap">
                      <div
                        className="skill-bar"
                        style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── AVAILABILITY ── */}
        <div className="availability-card">
          <div className="avail-dot" />
          <div className="avail-text">
            <span className="avail-title">Open to opportunities</span>
            <span className="avail-sub">Remote · Full-time · Contract</span>
          </div>
        </div>

        {/* ── SOCIALS ── */}
        <div className="sidebar-socials">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="social-btn" title={s.label}>
                <Icon />
              </a>
            );
          })}
        </div>

      </aside>
    </>
  );
}

export default Sidebar;