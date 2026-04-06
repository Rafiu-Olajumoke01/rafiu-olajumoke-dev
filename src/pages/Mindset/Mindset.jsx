import React, { useEffect, useRef, useState } from 'react';
import './mindset.css';

const timeline = [
  {
    year: '2021',
    title: 'Started Programming',
    org: 'Lagos School of Programming',
    desc: 'Completed an intensive programming programme, learning computer science fundamentals, web development, and software engineering best practices from the ground up.',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Internship — Frontend Engineer',
    org: 'Vault',
    desc: 'Gained hands-on industry experience working on real production systems, sharpening frontend skills in a professional team environment.',
    type: 'work',
  },
  {
    year: '2022',
    title: 'Founded Ospro Programming School',
    org: 'Ayetoro-Ayobo, Ipaja Road, Lagos',
    desc: 'Established Ospro — the first programming school of its kind in Ayetoro-Ayobo — to make software education accessible to young people in the community.',
    type: 'milestone',
  },
  {
    year: '2023',
    title: 'Built LASOP Platform',
    org: 'lasop.net',
    desc: 'Led the entire frontend development of LASOP, a full school management platform handling attendance, course materials, and student progress for 500+ students.',
    type: 'work',
  },
  {
    year: '2023',
    title: 'B.Sc Computer Science (In Progress)',
    org: 'National Open University of Nigeria (NOUN)',
    desc: 'Currently pursuing a Bachelor\'s degree in Computer Science, building on a prior academic background from Adeniran Ogunsanya College of Education.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Built MyVisa App',
    org: 'International Travel Platform',
    desc: 'Sole frontend engineer on MyVisa — an end-to-end visa processing platform for student, tourist, and business visas. Features live agent calls (Uber-style connection), built entirely from scratch. Mobile app launching imminently.',
    type: 'work',
  },
  {
    year: '2025',
    title: 'AgroStack & More',
    org: 'Personal Projects',
    desc: 'Launched multiple production projects including AgroStack (agricultural USSD platform), Chicken & Rice food ordering app, Zenith Culinary Academy, and Kanban Task Management — proving consistent ability to ship.',
    type: 'milestone',
  },
];

const highlights = [
  {
    icon: '🏫',
    title: 'School Founder',
    desc: 'Founded Ospro, a programming school in Ayetoro-Ayobo, Ipaja — making tech education accessible in underserved communities.',
  },
  {
    icon: '✈️',
    title: 'Full-Stack Solo — MyVisa',
    desc: 'Built the entire MyVisa platform alone — frontend, backend, APIs, database, and deployment. A production-grade travel visa app with live agent calling, launching internationally.',
  },
  {
    icon: '🌾',
    title: 'AgriTech Builder',
    desc: 'Created AgroStack, a personal initiative using USSD technology to solve real agricultural problems for farmers without smartphones.',
  },
  {
    icon: '🎓',
    title: 'Lifelong Learner',
    desc: 'Lagos School of Programming graduate, currently completing a B.Sc in Computer Science at NOUN — always investing in growth.',
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`timeline-item ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="timeline-marker">
        <div className={`timeline-dot dot-${item.type}`} />
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-org">{item.org}</p>
          </div>
          <span className={`timeline-badge badge-${item.type}`}>{item.year}</span>
        </div>
        <p className="timeline-desc">{item.desc}</p>
      </div>
    </div>
  );
}

function About() {
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="about-container">

      {/* ── HERO ── */}
      <div className={`about-hero ${heroVisible ? 'visible' : ''}`} ref={heroRef}>
        <div className="hero-left">
          <div className="hero-avatar-wrap">
            <div className="hero-avatar">RO</div>
            <div className="hero-avatar-status" />
          </div>
          <div className="hero-badge">
            <span className="badge-dot" />
            Open to opportunities · Remote
          </div>
        </div>

        <div className="hero-right">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Rafiu Olajumoke</h1>
          <p className="hero-title">Frontend Engineer <span className="hero-title-sep">·</span> Fullstack Capable</p>
          <p className="hero-bio">
            I'm a frontend-first software engineer based in Lagos, Nigeria, with 3+ years of experience
            turning complex problems into clean, functional products. I specialise in React and Next.js,
            and I back it with solid Node.js, Django, and database knowledge when the project demands it.
          </p>
          <p className="hero-bio">
            Beyond writing code, I founded <strong>Ospro</strong> — a programming school in Ayetoro-Ayobo,
            Ipaja — because I believe access to tech education changes lives. I build things that matter,
            and I do it with intention.
          </p>

          <div className="hero-stats">
            {[
              { num: '7+',   label: 'Projects shipped' },
              { num: '3+',   label: 'Years building'   },
              { num: '500+', label: 'Students impacted' },
              { num: '1',    label: 'School founded'   },
            ].map((s, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-num">{s.num}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a
              href="mailto:rafiuolajumoke7@gmail.com?subject=Let's Work Together"
              className="btn-primary-about"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/Rafiu-Olajumoke01"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-about"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>

      {/* ── HIGHLIGHTS ── */}
      <div className="about-section">
        <div className="section-title-row">
          <h2 className="section-heading">What defines me</h2>
          <div className="section-line" />
        </div>
        <div className="highlights-grid">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-card">
              <div className="highlight-icon">{h.icon}</div>
              <h3 className="highlight-title">{h.title}</h3>
              <p className="highlight-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── MYVISA SPOTLIGHT ── */}
      <div className="about-section">
        <div className="section-title-row">
          <h2 className="section-heading">Flagship project</h2>
          <div className="section-line" />
        </div>
        <div className="spotlight-card">
          <div className="spotlight-header">
            <div className="spotlight-icon">✈️</div>
            <div>
              <h3 className="spotlight-title">MyVisa App</h3>
              <p className="spotlight-sub">International Visa Processing Platform · Launching Soon</p>
            </div>
            <span className="spotlight-badge">Full-Stack Solo Build</span>
          </div>
          <p className="spotlight-desc">
            MyVisa is an end-to-end travel visa platform for student, tourist, and business visa applications.
            Think of it like Uber — but for visa agents. A user taps a button, gets instantly connected to a
            live agent via an in-app call, and is guided through the entire application process in real time.
            I built <strong>everything</strong> — frontend, backend, database, APIs, and deployment — completely
            alone, from the first line of code to production. The mobile development team is completing their
            side of the app, and the platform goes live imminently.
          </p>
          <div className="spotlight-features">
            {['Full frontend — React / Next.js', 'Full backend — Django & REST APIs', 'Database design & management',
              'Live agent calling (Uber-style)', 'Deployment & DevOps — solo', 'Student · Tourist · Business visas'].map((f, i) => (
              <span key={i} className="spotlight-feature">✓ {f}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── OSPRO SPOTLIGHT ── */}
      <div className="about-section">
        <div className="section-title-row">
          <h2 className="section-heading">Beyond code</h2>
          <div className="section-line" />
        </div>
        <div className="ospro-card">
          <div className="ospro-left">
            <div className="ospro-logo">OS</div>
          </div>
          <div className="ospro-right">
            <h3 className="ospro-title">Ospro Programming School</h3>
            <p className="ospro-location">📍 Ayetoro-Ayobo, Ipaja Road, Lagos</p>
            <p className="ospro-desc">
              I founded Ospro — the first programming school of its kind in Ayetoro-Ayobo — to bring
              quality software education directly into the community. I believe the next generation of
              Nigerian engineers shouldn't have to leave their neighbourhood to find world-class training.
              Ospro is my commitment to that belief.
            </p>
            <div className="ospro-tags">
              <span className="ospro-tag">Founder</span>
              <span className="ospro-tag">Instructor</span>
              <span className="ospro-tag">Community Impact</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div className="about-section">
        <div className="section-title-row">
          <h2 className="section-heading">My journey</h2>
          <div className="section-line" />
        </div>
        <div className="timeline-legend">
          {[['dot-education','Education'], ['dot-work','Work / Projects'], ['dot-milestone','Milestone']].map(([cls, label]) => (
            <div key={cls} className="legend-item">
              <div className={`timeline-dot ${cls}`} style={{ width: 10, height: 10 }} />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="timeline">
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default About;