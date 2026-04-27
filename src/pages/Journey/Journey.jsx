import React, { useState } from 'react';
import './Journey.css';

function Problems() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const principles = [
    {
      symbol: '01',
      title: 'Understand before building',
      desc: 'I never write code for a problem I haven\'t fully understood. The best solution is often not the obvious one.'
    },
    {
      symbol: '02',
      title: 'Real users, real constraints',
      desc: 'Farmers without smartphones. Students without time. Clients without trust. I build for people, not personas.'
    },
    {
      symbol: '03',
      title: 'Ship, then improve',
      desc: 'A working solution in production beats a perfect solution on a laptop. I bias toward shipping and iterating.'
    },
    {
      symbol: '04',
      title: 'Measure the outcome',
      desc: 'Code that doesn\'t change something isn\'t worth writing. Every problem I touch has a measurable before and after.'
    },
  ];

  const problems = [
    {
      id: 1,
      index: '001',
      category: 'marketplace',
      status: 'solved',
      region: 'Global',
      scale: 'High',
      problem: 'Visa applicants had no reliable way to find and book qualified agents',
      context: 'Getting a visa required knowing the right people, trusting strangers, or navigating confusing embassy processes alone. There was no transparent marketplace connecting applicants to verified professionals.',
      solution: 'Built a 3-sided marketplace where agents list their services, admin verifies and approves them, and clients browse, compare, and book with confidence.',
      outcome: 'Live at ingress.travel. Covers student, tourist, and business visas. Solo full-stack build — frontend, backend, database, APIs, and deployment.',
      impact: 'Live · ingress.travel',
      tech: ['Next.js', 'Django', 'MySQL', 'REST APIs', 'WebRTC'],
      project: 'MyVisa App',
    },
    {
      id: 2,
      index: '002',
      category: 'education',
      status: 'solved',
      region: 'Nigeria',
      scale: 'High',
      problem: '500+ students signing paper attendance sheets every single class',
      context: 'Instructors at LASOP spent the first 10-15 minutes of every class passing paper sheets around. Records got lost. Disputes happened. There was no way to track trends or identify struggling students early.',
      solution: 'Led the full frontend of a digital platform where students mark attendance online, access course materials, track their own progress, and instructors get a real dashboard.',
      outcome: '15 minutes saved per class. 95% accuracy improvement. 500+ students onboarded.',
      impact: '500+ students · lasop.net',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      project: 'LASOP Platform',
    },
    {
      id: 3,
      index: '003',
      category: 'agriculture',
      status: 'in-progress',
      region: 'Nigeria',
      scale: 'High',
      problem: 'Farmers without smartphones had zero access to market prices or buyer networks',
      context: 'Millions of Nigerian farmers make critical decisions — when to sell, what to plant, who to sell to — based on rumour and guesswork. Without a smartphone, every modern agri-tech solution was invisible to them.',
      solution: 'Built AgroStack using USSD technology — works on any phone, no internet required. Farmers get real-time market prices, weather alerts, crop advisory, and direct buyer connections by pressing a few buttons.',
      outcome: 'Targeting 30% yield improvement and direct market access for smallholder farmers across Nigeria.',
      impact: 'In Progress · agritech-woad.vercel.app',
      tech: ['React', 'Django', 'MySQL', 'USSD', 'APIs'],
      project: 'AgroStack',
    },
    {
      id: 4,
      index: '004',
      category: 'logistics',
      status: 'solved',
      region: 'Nigeria',
      scale: 'Medium',
      problem: 'Food customers had no idea where their order was after placing it',
      context: 'Restaurants took orders and customers waited blindly — no confirmation, no tracking, no estimated time. When orders were late or wrong, there was no communication layer at all. Trust was constantly broken.',
      solution: 'Built a complete food ordering platform with real-time order tracking using Socket.io, live driver location on Google Maps, and seamless restaurant-to-customer communication.',
      outcome: '50+ daily orders. 4.8-star average rating. 25-minute average delivery time.',
      impact: '50+ daily orders · chickenandrice.net',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
      project: 'Chicken & Rice',
    },
    {
      id: 5,
      index: '005',
      category: 'education',
      status: 'solved',
      region: 'Global',
      scale: 'Medium',
      problem: 'Aspiring chefs priced out of quality culinary training by location and cost',
      context: 'Traditional culinary schools cost thousands of dollars and require physical attendance. For talented people in places like Lagos, Abuja, or rural areas, this meant the dream was simply out of reach.',
      solution: 'Built an EdTech platform with full video courses, a recipe library, student progress tracking, and a digital certification system that carries real weight.',
      outcome: '200+ students trained at 70% lower cost than traditional culinary schools.',
      impact: '200+ students trained',
      tech: ['React', 'Node.js', 'MongoDB', 'Video Streaming'],
      project: 'Zenith Culinary Academy',
    },
    {
      id: 6,
      index: '006',
      category: 'employment',
      status: 'in-progress',
      region: 'Nigeria',
      scale: 'High',
      problem: 'Nigerian engineers invisible to global remote job opportunities',
      context: 'Talented Nigerian developers apply on LinkedIn, Indeed, and global boards and get ignored — not because they lack skill, but because they lack context, positioning, and access to the right listings. Scam jobs are everywhere.',
      solution: 'Building RemoteNg — a dedicated platform with smart job matching, application tracking, company profiles, and a resume builder designed for the Nigerian remote work context.',
      outcome: 'Aiming to connect thousands of Nigerian engineers with quality, verified remote roles.',
      impact: 'In Progress · 80% complete',
      tech: ['React', 'Node.js', 'MongoDB', 'Job APIs'],
      project: 'RemoteNg',
    },
    {
      id: 7,
      index: '007',
      category: 'devtools',
      status: 'solved',
      region: 'Global',
      scale: 'Medium',
      problem: 'Teams losing track of tasks, priorities, and who\'s doing what',
      context: 'Small teams often juggle tasks across WhatsApp messages, sticky notes, and half-finished spreadsheets. Nothing is visible. Priorities change without anyone knowing. Deadlines get missed.',
      solution: 'Built a full Kanban task management system with drag-and-drop columns, dark/light mode, task filtering, and complete data persistence. Certified at Senior level on Frontend Mentor.',
      outcome: '60% reduction in task management overhead. Used as a reference implementation.',
      impact: 'Senior-level · Frontend Mentor certified',
      tech: ['React', 'CSS', 'Local Storage'],
      project: 'Kanban Task Manager',
    },
    {
      id: 8,
      index: '008',
      category: 'devtools',
      status: 'solved',
      region: 'Global',
      scale: 'Low',
      problem: 'WebRTC video calls dropping silently mid-session with no error, no log',
      context: 'On the MyVisa platform, agents and clients needed to consult via video call. Calls kept dying silently — no crash, no error message, nothing to debug. Users just got silence.',
      solution: 'After 72 hours of tracing across STUN servers and connection configs, found that when two users joined at nearly the same moment, the connection handshake would collide and fail silently. Fixed with a timed offer/answer lock.',
      outcome: 'Zero call drops since the fix. Stable WebRTC sessions across the platform.',
      impact: '72hrs · Zero drops since fix',
      tech: ['WebRTC', 'STUN', 'Signaling', 'Django'],
      project: 'MyVisa App',
    },
    {
      id: 9,
      index: '009',
      category: 'marketplace',
      status: 'solved',
      region: 'Global',
      scale: 'Medium',
      problem: 'No way to verify visa agent legitimacy before handing over money',
      context: 'Visa fraud is a massive problem. People pay agents upfront and never hear from them again. There was no system to vet agents, review their history, or hold anyone accountable.',
      solution: 'Built an admin approval layer into the MyVisa marketplace — every agent goes through a review process before going live. Clients can see verified badges, package history, and ratings.',
      outcome: 'Every active agent on ingress.travel is manually reviewed and approved.',
      impact: '100% verified agents · ingress.travel',
      tech: ['Django', 'REST APIs', 'MySQL', 'Next.js'],
      project: 'MyVisa App',
    },
    {
      id: 10,
      index: '010',
      category: 'education',
      status: 'solved',
      region: 'Nigeria',
      scale: 'Medium',
      problem: 'Students had no single place to track their course progress and materials',
      context: 'Course materials were scattered — some in WhatsApp groups, some in emails, some on Google Drive. Students couldn\'t see what they\'d completed, what was pending, or how they were performing overall.',
      solution: 'Built the student portal on LASOP where all materials live in one place, attendance is tracked automatically, and students see a real-time progress dashboard for every course.',
      outcome: 'Centralized learning for 500+ students. Material access time cut from minutes to seconds.',
      impact: '500+ students · single source of truth',
      tech: ['React', 'Node.js', 'MongoDB'],
      project: 'LASOP Platform',
    },
    {
      id: 11,
      index: '011',
      category: 'agriculture',
      status: 'in-progress',
      region: 'Nigeria',
      scale: 'High',
      problem: 'Farmers selling produce at wrong times due to no price visibility',
      context: 'A tomato farmer in Kaduna sells at farm gate price because he doesn\'t know the Lagos market price is 3x higher that week. No information, no negotiation power, no profit.',
      solution: 'AgroStack pulls real-time market price data across Nigerian markets and delivers it via USSD — so a farmer with a basic phone in a rural area can check prices before deciding when and where to sell.',
      outcome: 'Targeting direct 20-30% income improvement for smallholder farmers.',
      impact: 'In Progress · market price feature live',
      tech: ['Django', 'USSD', 'Market APIs', 'MySQL'],
      project: 'AgroStack',
    },
    {
      id: 12,
      index: '012',
      category: 'logistics',
      status: 'solved',
      region: 'Nigeria',
      scale: 'Medium',
      problem: 'Restaurant owners managing orders through WhatsApp with no system',
      context: 'Many small restaurants in Nigeria take orders via WhatsApp DMs, write them on paper, and shout across the kitchen. Orders get missed. Customers get the wrong thing. Revenue leaks everywhere.',
      solution: 'Built a menu management and order system on the Chicken & Rice platform — digital menu, order routing to kitchen, status updates, and payment integration all in one flow.',
      outcome: 'Streamlined operations for the restaurant. Errors dropped. Order volume doubled.',
      impact: 'Orders doubled · errors near zero',
      tech: ['React', 'Node.js', 'MongoDB', 'Payments'],
      project: 'Chicken & Rice',
    },
    {
      id: 13,
      index: '013',
      category: 'employment',
      status: 'in-progress',
      region: 'Nigeria',
      scale: 'High',
      problem: 'Nigerian developers applying to remote jobs with no feedback, no traction',
      context: 'The application goes into a black hole. No response. No rejection. Just silence. Developers don\'t know if the resume is wrong, the positioning is off, or if the role was already filled before they applied.',
      solution: 'RemoteNg includes a full application tracking system — developers see exactly where every application stands, get notified on status changes, and can identify patterns in what\'s working.',
      outcome: 'Application visibility from zero to full tracking. Currently in final development.',
      impact: 'In Progress · tracking system built',
      tech: ['React', 'Node.js', 'MongoDB', 'Email APIs'],
      project: 'RemoteNg',
    },
    {
      id: 14,
      index: '014',
      category: 'devtools',
      status: 'solved',
      region: 'Global',
      scale: 'Low',
      problem: 'Authentication breaking silently when JWT tokens expired mid-session',
      context: 'Users on LASOP would be mid-task — submitting attendance, uploading materials — and suddenly get kicked out with a confusing error. The token had expired but nothing caught it gracefully.',
      solution: 'Implemented silent token refresh with an interceptor pattern — tokens refresh automatically in the background before expiry. Users never get interrupted. If refresh fails, a clean re-login is triggered.',
      outcome: 'Zero unexpected logouts reported since implementation.',
      impact: 'Zero interruptions · LASOP platform',
      tech: ['JWT', 'React', 'Axios Interceptors', 'Node.js'],
      project: 'LASOP Platform',
    },
    {
      id: 15,
      index: '015',
      category: 'education',
      status: 'solved',
      region: 'Global',
      scale: 'Medium',
      problem: 'Online culinary students had no way to prove their skills to employers',
      context: 'Completing an online course means nothing if there\'s no credential behind it. Employers couldn\'t verify who had actually finished the programme versus who just signed up.',
      solution: 'Built a digital certification system on Zenith Culinary Academy — certificates are generated on completion, verifiable via unique ID, and shareable as a link or PDF.',
      outcome: 'Students can now prove their qualification. Employer trust in the programme increased.',
      impact: '200+ certificates issued',
      tech: ['React', 'Node.js', 'PDF Generation', 'MongoDB'],
      project: 'Zenith Culinary Academy',
    },
  ];

  const categories = [
    { key: 'all', label: 'all problems' },
    { key: 'marketplace', label: 'marketplace' },
    { key: 'education', label: 'education' },
    { key: 'agriculture', label: 'agriculture' },
    { key: 'logistics', label: 'logistics' },
    { key: 'employment', label: 'employment' },
    { key: 'devtools', label: 'dev & infra' },
  ];

  const filtered = activeFilter === 'all'
    ? problems
    : problems.filter(p => p.category === activeFilter);

  const solvedCount = problems.filter(p => p.status === 'solved').length;
  const inProgressCount = problems.filter(p => p.status === 'in-progress').length;

  return (
    <div className="problems-container">

      {/* ── HERO ── */}
      <div className="problems-hero">
        <p className="problems-eyebrow">// Rafiu Olajumoke · Problem Solver</p>
        <h1 className="problems-title">
          I don't build features.<br />
          <span className="problems-title-accent">I solve problems.</span>
        </h1>
        <p className="problems-subtitle">
          Every line of code here exists because a real person had a real problem.
          Farmers. Students. Visa applicants. Restaurant owners. Engineers looking for work.
          This is what I've built for them.
        </p>

        <div className="problems-hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-val">{problems.length}</span>
            <span className="hero-stat-label">problems documented</span>
          </div>
          <div className="hero-stat-sep">·</div>
          <div className="hero-stat">
            <span className="hero-stat-val">{solvedCount}</span>
            <span className="hero-stat-label">solved & shipped</span>
          </div>
          <div className="hero-stat-sep">·</div>
          <div className="hero-stat">
            <span className="hero-stat-val">{inProgressCount}</span>
            <span className="hero-stat-label">actively solving</span>
          </div>
        </div>
      </div>

      {/* ── HOW I THINK ── */}
      <div className="principles-section">
        <p className="section-mono">// how_i_think()</p>
        <div className="principles-grid">
          {principles.map((p) => (
            <div key={p.symbol} className="principle-card">
              <span className="principle-symbol">{p.symbol}</span>
              <h3 className="principle-title">{p.title}</h3>
              <p className="principle-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FILTER TABS ── */}
      <div className="problems-filter-row">
        <p className="section-mono">// problems_i_solved({filtered.length})</p>
        <div className="problems-tabs">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              className={`problems-tab ${activeFilter === key ? 'active' : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── PROBLEM CARDS ── */}
      <div className="problems-grid">
        {filtered.map((item) => (
          <div
            key={item.id}
            className={`problem-card ${expandedCard === item.id ? 'expanded' : ''}`}
            onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
          >
            {/* card top row */}
            <div className="pc2-top">
              <span className="pc2-index">{item.index}</span>
              <div className="pc2-meta">
                <span className="pc2-region">{item.region}</span>
                <span className={`pc2-status ${item.status === 'solved' ? 'status-solved' : 'status-active'}`}>
                  {item.status === 'solved' ? 'Solved' : 'Solving'}
                </span>
              </div>
            </div>

            {/* problem statement */}
            <div className="pc2-problem">
              <span className="pc2-problem-label">// problem</span>
              <p className="pc2-problem-text">{item.problem}</p>
            </div>

            {/* context — shown when expanded */}
            {expandedCard === item.id && (
              <div className="pc2-expanded-body">
                <div className="pc2-block pc2-context">
                  <span className="pc2-block-label">// context</span>
                  <p>{item.context}</p>
                </div>
                <div className="pc2-block pc2-solution">
                  <span className="pc2-block-label">// solution</span>
                  <p>{item.solution}</p>
                </div>
                <div className="pc2-block pc2-outcome">
                  <span className="pc2-block-label">// outcome</span>
                  <p>{item.outcome}</p>
                </div>
              </div>
            )}

            {/* footer */}
            <div className="pc2-footer">
              <div className="pc2-tech">
                {item.tech.slice(0, 3).map((t, i) => (
                  <span key={i} className="pc2-tech-tag">{t}</span>
                ))}
                {item.tech.length > 3 && (
                  <span className="pc2-tech-tag pc2-tech-more">+{item.tech.length - 3}</span>
                )}
              </div>
              <div className="pc2-footer-right">
                <span className="pc2-project">{item.project}</span>
                <span className="pc2-expand-hint">
                  {expandedCard === item.id ? 'collapse ↑' : 'read more →'}
                </span>
              </div>
            </div>

            {/* impact strip */}
            <div className="pc2-impact">
              → {item.impact}
            </div>
          </div>
        ))}
      </div>

      {/* ── CURRENTLY SOLVING ── */}
      <div className="currently-section">
        <p className="section-mono">// currently_solving()</p>
        <div className="currently-grid">
          {problems.filter(p => p.status === 'in-progress').map((item) => (
            <div key={item.id} className="currently-card">
              <div className="currently-dot" />
              <div className="currently-body">
                <p className="currently-problem">{item.problem}</p>
                <span className="currently-project">{item.project} · {item.region}</span>
              </div>
              <div className="currently-tech">
                {item.tech.slice(0, 2).map((t, i) => (
                  <span key={i} className="pc2-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CLOSING LINE ── */}
      <div className="problems-closing">
        <p className="closing-mono">// next_problem()</p>
        <h2 className="closing-title">
          Got a problem that needs solving?
        </h2>
        <p className="closing-sub">
          If you have a real problem — messy process, broken workflow, missing tool —
          I want to hear about it. That's where good software starts.
        </p>
        <a
          href="mailto:rafiuolajumoke7@gmail.com?subject=I have a problem to solve"
          className="closing-btn"
        >
          describe your problem →
        </a>
      </div>

    </div>
  );
}

export default Problems;