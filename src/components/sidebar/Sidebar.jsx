import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaTasks, FaBrain, FaUserAlt, FaTools,
  FaGithub, FaLinkedin, FaEnvelope, FaChevronRight
} from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript, SiPython, SiDjango } from 'react-icons/si';
import './sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [activeSkill, setActiveSkill] = useState(null);

  const navItems = [
    { path: '/home',    icon: FaHome,    label: 'Dashboard',  desc: 'Overview & stats' },
    { path: '/mindset', icon: FaBrain,   label: 'Mindset',    desc: 'How I think' },
    { path: '/kanban',  icon: FaTasks,   label: 'Kanban',     desc: 'Task management' },
    { path: '/arsenal', icon: FaTools,   label: 'Arsenal',    desc: 'Tools I use' },
    { path: '/journey', icon: FaUserAlt, label: 'Journey',    desc: 'My story' },
  ];

  const skills = [
    { name: 'React',      icon: SiReact,      color: '#61DAFB', level: 95 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 92 },
    { name: 'Node.js',    icon: SiNodedotjs,  color: '#3C873A', level: 85 },
    { name: 'Python',     icon: SiPython,     color: '#3776AB', level: 78 },
    { name: 'Django',     icon: SiDjango,     color: '#092E20', level: 75 },
    { name: 'MongoDB',    icon: SiMongodb,    color: '#47A248', level: 82 },
  ];

  const socials = [
    { icon: FaGithub,   href: 'https://github.com/Rafiu-Olajumoke01',  label: 'GitHub'   },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/rafiu-olajumoke-084374318', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:rafiuolajumoke7@gmail.com',       label: 'Email'    },
  ];

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
            <p className="profile-role">Fullstack Developer</p>
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
              <span className="pstat-num">100%</span>
              <span className="pstat-label">Satisfaction</span>
            </div>
          </div>
        </div>

        {/* ── NAVIGATION ── */}
        <nav className="sidebar-nav">
          <p className="section-label">Navigation</p>
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

        {/* ── SKILLS ── */}
        <div className="sidebar-skills">
          <p className="section-label">Tech Stack</p>
          <div className="skills-grid">
            {skills.map((skill, i) => {
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
                  {isActive && (
                    <div className="skill-bar-wrap">
                      <div className="skill-bar" style={{ width: `${skill.level}%`, backgroundColor: skill.color }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── AVAILABILITY CARD ── */}
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
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" title={s.label}>
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