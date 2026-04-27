import React, { useState, useEffect, useRef } from 'react';
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiDjango, SiPython,
  SiMongodb, SiMysql, SiHtml5, SiCss3,
  SiJquery, SiPostman, SiGit, SiGithub,
  SiVercel, SiSocketdotio, SiTailwindcss, SiRedux
} from 'react-icons/si';
import { FaCode, FaServer, FaTools, FaLayerGroup } from 'react-icons/fa';
import './skill.css';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: FaCode,
    mono: '// ui & experience',
    skills: [
      { name: 'React.js',     icon: SiReact,        color: '#61DAFB', level: 95, desc: 'Hooks, Context, custom libs' },
      { name: 'Next.js',      icon: SiNextdotjs,    color: '#ffffff', level: 88, desc: 'SSR, SSG, App Router' },
      { name: 'JavaScript',   icon: SiJavascript,   color: '#F7DF1E', level: 92, desc: 'ES6+, async, DOM mastery' },
      { name: 'TypeScript',   icon: SiTypescript,   color: '#3178C6', level: 80, desc: 'Types, interfaces, generics' },
      { name: 'HTML5',        icon: SiHtml5,        color: '#E34F26', level: 97, desc: 'Semantic, accessible markup' },
      { name: 'CSS3',         icon: SiCss3,         color: '#1572B6', level: 93, desc: 'Animations, Grid, Flexbox' },
      { name: 'Tailwind CSS', icon: SiTailwindcss,  color: '#38BDF8', level: 85, desc: 'Utility-first styling' },
      { name: 'jQuery',       icon: SiJquery,       color: '#0769AD', level: 78, desc: 'DOM manipulation, AJAX' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: FaServer,
    mono: '// logic & data',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs,  color: '#3C873A', level: 82, desc: 'REST APIs, middleware' },
      { name: 'Express.js', icon: SiExpress,    color: '#ffffff', level: 80, desc: 'Routing, auth, MVC' },
      { name: 'Django',     icon: SiDjango,     color: '#44B78B', level: 75, desc: 'ORM, DRF, Admin' },
      { name: 'Python',     icon: SiPython,     color: '#3776AB', level: 76, desc: 'Scripting, automation' },
      { name: 'REST APIs',  icon: SiPostman,    color: '#FF6C37', level: 85, desc: 'Design, testing, docs' },
      { name: 'Socket.io',  icon: SiSocketdotio,color: '#010101', level: 72, desc: 'Real-time communication' },
    ],
  },
  {
    id: 'database',
    label: 'Databases',
    icon: FaLayerGroup,
    mono: '// storage & queries',
    skills: [
      { name: 'MongoDB',  icon: SiMongodb, color: '#47A248', level: 80, desc: 'NoSQL, aggregation, Atlas' },
      { name: 'MySQL',    icon: SiMysql,   color: '#4479A1', level: 78, desc: 'Relations, joins, indexing' },
      { name: 'Redux',    icon: SiRedux,   color: '#764ABC', level: 75, desc: 'State management' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: FaTools,
    mono: '// workflow & devops',
    skills: [
      { name: 'Git',     icon: SiGit,    color: '#F05032', level: 88, desc: 'Branching, PRs, history' },
      { name: 'GitHub',  icon: SiGithub, color: '#ffffff', level: 90, desc: 'Collaboration, CI/CD' },
      { name: 'Vercel',  icon: SiVercel, color: '#ffffff', level: 85, desc: 'Deploy, preview, domains' },
      { name: 'Postman', icon: SiPostman,color: '#FF6C37', level: 82, desc: 'API testing & debugging' },
    ],
  },
];

const stats = [
  { value: '14+', label: 'Technologies',  sub: '// in active use'       },
  { value: '3+',  label: 'Years Coding',  sub: '// since 2021'          },
  { value: '95%', label: 'React Mastery', sub: '// primary weapon'      },
  { value: '7+',  label: 'Projects Live', sub: '// real-world shipped'  },
];

function AnimatedBar({ level, color, animated }) {
  return (
    <div className="ar-bar-track">
      <div
        className="ar-bar-fill"
        style={{
          width: animated ? `${level}%` : '0%',
          backgroundColor: color,
          transition: 'width 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}

function SkillCard({ skill, animated, index }) {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`ar-skill-card ${animated ? 'ar-skill-card--visible' : ''}`}
      style={{ animationDelay: `${index * 0.06}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="ar-skill-top">
        <div className="ar-skill-icon-wrap" style={{ '--skill-color': skill.color }}>
          <Icon className="ar-skill-icon" style={{ color: skill.color }} />
        </div>
        <span className="ar-skill-pct" style={{ color: skill.color }}>{skill.level}%</span>
      </div>
      <div className="ar-skill-name">{skill.name}</div>
      <div className="ar-skill-desc">{skill.desc}</div>
      <AnimatedBar level={skill.level} color={skill.color} animated={animated} />
    </div>
  );
}

function CategorySection({ category, animated }) {
  const Icon = category.icon;
  return (
    <div className="ar-category">
      <div className="ar-category-header">
        <div className="ar-category-icon-wrap">
          <Icon className="ar-category-icon" />
        </div>
        <div>
          <p className="ar-category-mono">{category.mono}</p>
          <h2 className="ar-category-title">{category.label}</h2>
        </div>
        <span className="ar-category-count">{category.skills.length} skills</span>
      </div>
      <div className="ar-skills-grid">
        {category.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} animated={animated} index={i} />
        ))}
      </div>
    </div>
  );
}

function Arsenal() {
  const [animated, setAnimated] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filters = [
    { key: 'all',      label: `all_skills (${skillCategories.reduce((a, c) => a + c.skills.length, 0)})` },
    ...skillCategories.map(c => ({ key: c.id, label: `${c.id} (${c.skills.length})` })),
  ];

  const visibleCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(c => c.id === activeFilter);

  return (
    <div className="ar-container" ref={ref}>

      {/* ── HEADER ── */}
      <div className="ar-header">
        <div className="ar-header-left">
          <p className="ar-eyebrow">// portfolio.skill</p>
          <h1 className="ar-title">
            Tech <span className="ar-title-accent">Skill</span>
          </h1>
          <p className="ar-subtitle">Languages · Frameworks · Tools · Databases</p>
        </div>
        <div className="ar-header-badge">
          <span className="ar-badge-dot" />
          <span className="ar-badge-text">Frontend-first · Full-stack capable</span>
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="ar-stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="ar-stat-card">
            <span className="ar-stat-value">{s.value}</span>
            <span className="ar-stat-label">{s.label}</span>
            <span className="ar-stat-sub">{s.sub}</span>
          </div>
        ))}
      </div>

      {/* ── FILTER TABS ── */}
      <div className="ar-tabs">
        {filters.map(f => (
          <button
            key={f.key}
            className={`ar-tab ${activeFilter === f.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── SKILL CATEGORIES ── */}
      <div className="ar-categories">
        {visibleCategories.map(cat => (
          <CategorySection key={cat.id} category={cat} animated={animated} />
        ))}
      </div>

      {/* ── BOTTOM NOTE ── */}
      <div className="ar-footer-note">
        <span className="ar-footer-mono">// always_learning</span>
        <p>Constantly expanding the stack. Currently exploring Machine Learning and AI.</p>
      </div>

    </div>
  );
}

export default Arsenal;