import React, { useState } from 'react';
import kanban from './../../assets/kanban image.jpg';
import Agrostack from './../../assets/agritech image.jpg';
import './board.css';

function Board() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const contactInfo = {
    email:    'rafiuolajumoke7@gmail.com',
    phone:    '+234 808 379 0474',
    linkedin: 'https://www.linkedin.com/in/rafiu-olajumoke-084374318',
    github:   'https://github.com/Rafiu-Olajumoke01',
  };

  const stats = [
    { label: 'Projects Shipped', value: '7+',  sub: '// real-world impact'  },
    { label: 'Years Building',   value: '3+',  sub: '// since 2021'          },
    { label: 'Client Rating',    value: '5.0', sub: '// avg across clients'  },
    { label: 'Problems Solved',  value: '24+', sub: '// and counting'        },
  ];

  const projects = [
    {
      id: 1, initials: 'MV',
      name: 'MyVisa App',
      tagline: 'End-to-end visa processing platform',
      problem: 'Navigating international visa applications is slow, confusing, and disconnected from real human support.',
      solution: 'Built a full-stack platform — frontend, backend, database, APIs, and deployment — entirely solo. Users tap a button and connect instantly to a live visa agent, Uber-style.',
      impact: 'Covers student, tourist, and business visas. Mobile app launching imminently. Solo full-stack build from zero to production.',
      image: null, status: 'Launching Soon',
      tech: ['Next.js', 'Django', 'MySQL', 'REST APIs', 'WebRTC'],
      level: 'Expert', progress: 95, type: 'Full-Stack Solo Build',
      liveUrl: '', githubUrl: 'https://github.com/Rafiu-Olajumoke01',
      features: ['Live agent calling (Uber-style)', 'End-to-end visa processing', 'Student · Tourist · Business', 'Full backend — Django & APIs', 'Deployment & DevOps solo', 'Mobile app in final dev'],
      highlight: true,
    },
    {
      id: 2, initials: 'LP',
      name: 'LASOP Platform',
      tagline: 'School management & attendance system',
      problem: 'Manual attendance across scattered systems wastes time for 500+ students and instructors.',
      solution: 'Led entire frontend of a platform where students mark attendance online, access course materials, and track progress.',
      impact: 'Digitized attendance for 500+ students. 15 minutes saved per class. 95% accuracy.',
      image: null, status: 'Completed',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      level: 'Advanced', progress: 100, type: 'Client Project',
      liveUrl: 'https://www.lasop.net/', githubUrl: 'https://github.com/Rafiu-Olajumoke01/lasop-client',
      features: ['Online Attendance', 'Course Management', 'Progress Tracking', 'Instructor Dashboard', 'Student Portal'],
    },
    {
      id: 3, initials: 'AS',
      name: 'AgroStack',
      tagline: 'Solving agriculture through USSD technology',
      problem: 'Farmers without smartphones have zero access to market prices, weather, or buyer networks.',
      solution: 'Personal initiative using USSD to reach farmers on any phone — real-time market data, weather alerts, crop advisory, buyer connections.',
      impact: 'Targeting 30% yield improvement and direct market access for farmers across Nigeria.',
      image: Agrostack, status: 'In Progress',
      tech: ['React', 'Django', 'MySQL', 'USSD', 'APIs'],
      level: 'Advanced', progress: 65, type: 'Personal Initiative',
      liveUrl: 'https://agritech-woad.vercel.app/', githubUrl: 'https://github.com/Rafiu-Olajumoke01/agritech',
      features: ['USSD Implementation', 'Market Prices', 'Weather Alerts', 'Crop Advisory', 'Farmer Network'],
    },
    {
      id: 4, initials: 'CR',
      name: 'Chicken & Rice',
      tagline: 'Food ordering with live delivery tracking',
      problem: 'Customers face uncertainty — no live tracking, unclear delivery times.',
      solution: 'Complete food ordering platform with real-time order tracking and seamless communication.',
      impact: '50+ daily orders. 4.8-star average rating. 25-minute avg delivery time.',
      image: null, status: 'Completed',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
      level: 'Advanced', progress: 100, type: 'Client Project',
      liveUrl: 'https://www.chickenandrice.net/', githubUrl: 'https://github.com/Rafiu-Olajumoke01/fastfolderfrontend',
      features: ['Live Order Tracking', 'Real-time Updates', 'Payment Integration', 'Menu Management', 'Delivery Routing'],
    },
    {
      id: 5, initials: 'KT',
      name: 'Kanban Task Management',
      tagline: 'Senior-level drag & drop task system',
      problem: 'Teams struggle to track project progress and task dependencies.',
      solution: 'Intuitive drag-and-drop Kanban board with dark/light mode and full data persistence.',
      impact: '60% reduction in task management time. Certified senior-level Frontend Mentor challenge.',
      image: kanban, status: 'Completed',
      tech: ['React', 'CSS', 'Local Storage'],
      level: 'Senior', progress: 100, type: 'Frontend Mentor',
      liveUrl: 'https://kanban-task-management-dusky.vercel.app/', githubUrl: 'https://github.com/Rafiu-Olajumoke01/kanban_task_management',
      features: ['Drag & Drop', 'Dark/Light Mode', 'Task Filtering', 'Data Persistence'],
    },
    {
      id: 6, initials: 'ZC',
      name: 'Zenith Culinary Academy',
      tagline: 'Online culinary education platform',
      problem: "Aspiring chefs can't access quality culinary training due to cost and location.",
      solution: 'EdTech platform with video courses, recipe library, and certification system.',
      impact: '200+ students trained at 70% lower cost than traditional culinary schools.',
      image: null, status: 'Completed',
      tech: ['React', 'Node.js', 'MongoDB', 'Video Streaming'],
      level: 'Advanced', progress: 100, type: 'EdTech Platform',
      liveUrl: 'https://zenithculinary.com', githubUrl: 'https://github.com/Rafiu-Olajumoke01/culinaryFinal',
      features: ['Video Courses', 'Recipe Library', 'Student Progress', 'Certification System', 'Instructor Tools'],
    },
    {
      id: 7, initials: 'RN',
      name: 'RemoteNg',
      tagline: 'Remote jobs platform for Nigerian talent',
      problem: 'Nigerian professionals struggle to find legitimate remote opportunities on global platforms.',
      solution: 'Dedicated job platform with smart matching, application tracking, and resume builder.',
      impact: 'Aiming to connect thousands of Nigerian engineers with quality remote work.',
      image: null, status: 'In Progress',
      tech: ['React', 'Node.js', 'MongoDB', 'Job APIs'],
      level: 'Advanced', progress: 80, type: 'Job Platform',
      liveUrl: '', githubUrl: 'https://github.com/Rafiu-Olajumoke01/RemoteJobNG',
      features: ['Job Search & Filtering', 'Application Tracking', 'Company Profiles', 'Resume Builder', 'Email Notifications'],
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : activeTab === 'completed'
    ? projects.filter(p => p.status === 'Completed')
    : projects.filter(p => p.status !== 'Completed');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied!');
  };

  const getStatusClass = (status) => {
    if (status === 'Completed')      return 'status-done';
    if (status === 'Launching Soon') return 'status-launch';
    return 'status-wip';
  };

  return (
    <div className="board-container">

      {/* ── HEADER ── */}
      <div className="board-header">
        <div className="board-header-left">
          <p className="board-eyebrow">// portfolio.projects</p>
          <h1 className="board-title">
            Projects <span className="board-title-accent">&amp; Work</span>
          </h1>
          <p className="board-subtitle">Problems solved · Products shipped · Impact delivered</p>
        </div>
        <button className="btn-contact" onClick={() => setShowContactModal(true)}>
          [ hire me → ]
        </button>
      </div>

      {/* ── STATS ── */}
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
            <span className="stat-sub">{s.sub}</span>
          </div>
        ))}
      </div>

      {/* ── TABS ── */}
      <div className="board-tabs">
        {[
          ['all',       `all_projects (${projects.length})`],
          ['completed', `completed (${projects.filter(p => p.status === 'Completed').length})`],
          ['active',    `in_progress (${projects.filter(p => p.status !== 'Completed').length})`],
        ].map(([key, label]) => (
          <button
            key={key}
            className={`board-tab ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── PROJECT GRID ── */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${project.highlight ? 'project-card--highlight' : ''}`}
            onClick={() => setSelectedProject(project)}
          >
            <div className="pc-top">
              <span className="pc-id">#{String(project.id).padStart(2, '0')}</span>
              <span className={`pc-status ${getStatusClass(project.status)}`}>
                {project.status}
              </span>
            </div>

            <div className="pc-initials">{project.initials}</div>
            <h3 className="pc-name">{project.name}</h3>
            <p className="pc-tagline">{project.tagline}</p>
            <p className="pc-impact">→ {project.impact.split('.')[0]}.</p>

            <div className="pc-tech">
              {project.tech.slice(0, 4).map((t, i) => (
                <span key={i} className="pc-tech-tag">{t}</span>
              ))}
              {project.tech.length > 4 && (
                <span className="pc-tech-tag pc-tech-more">+{project.tech.length - 4}</span>
              )}
            </div>

            <div className="pc-progress">
              <div className="pc-progress-track">
                <div className="pc-progress-fill" style={{ width: `${project.progress}%` }} />
              </div>
              <span className="pc-progress-pct">{project.progress}%</span>
            </div>

            <div className="pc-footer">
              <span className="pc-type">{project.type}</span>
              <span className="pc-cta">view_details →</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── PROJECT MODAL ── */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>

            <div className="modal-head">
              <div className="modal-initials">{selectedProject.initials}</div>
              <div className="modal-head-text">
                <p className="modal-mono">// {selectedProject.type}</p>
                <h2 className="modal-title">{selectedProject.name}</h2>
                <p className="modal-tagline">{selectedProject.tagline}</p>
              </div>
              <span className={`pc-status ${getStatusClass(selectedProject.status)}`} style={{ marginLeft: 'auto', flexShrink: 0 }}>
                {selectedProject.status}
              </span>
            </div>

            <div className="modal-body">
              <div className="modal-block problem-block">
                <h4>// problem</h4>
                <p>{selectedProject.problem}</p>
              </div>
              <div className="modal-block solution-block">
                <h4>// solution</h4>
                <p>{selectedProject.solution}</p>
              </div>
              <div className="modal-block impact-block">
                <h4>// impact</h4>
                <p>{selectedProject.impact}</p>
              </div>

              <div className="modal-block">
                <h4>// key_features</h4>
                <div className="modal-features">
                  {selectedProject.features.map((f, i) => (
                    <span key={i} className="modal-feature">✓ {f}</span>
                  ))}
                </div>
              </div>

              <div className="modal-block">
                <h4>// tech_stack</h4>
                <div className="modal-tech">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="modal-tech-pill">{t}</span>
                  ))}
                </div>
              </div>

              <div className="modal-meta">
                <span className="modal-badge">{selectedProject.level}</span>
                <span className="modal-badge modal-badge--muted">{selectedProject.type}</span>
              </div>

              <div className="modal-actions">
                {selectedProject.liveUrl ? (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn--primary">
                    live_demo() →
                  </a>
                ) : (
                  <span className="modal-btn modal-btn--disabled">[ coming_soon ]</span>
                )}
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-btn modal-btn--secondary">
                  view_code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CONTACT MODAL ── */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-box modal-box--contact" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)}>✕</button>
            <p className="modal-mono" style={{ marginBottom: '0.35rem' }}>// let's collaborate</p>
            <h2 className="modal-title">Let's build together.</h2>
            <p className="contact-sub">Open to remote roles · contracts · collaborations</p>

            <div className="contact-grid">
              {[
                { label: 'email',    value: contactInfo.email,  href: `mailto:${contactInfo.email}`,  copy: true },
                { label: 'phone',    value: contactInfo.phone,  href: `tel:${contactInfo.phone}`,     copy: true },
                { label: 'linkedin', value: 'view_profile →',   href: contactInfo.linkedin                       },
                { label: 'github',   value: 'view_projects →',  href: contactInfo.github                         },
              ].map((item, i) => (
                <div key={i} className="contact-item">
                  <span className="contact-label">{item.label}</span>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-value">
                    {item.value}
                  </a>
                  {item.copy && (
                    <button className="copy-btn" onClick={() => copyToClipboard(item.value)}>copy</button>
                  )}
                </div>
              ))}
            </div>

            <a
              href={`mailto:${contactInfo.email}?subject=Let's Work Together`}
              className="modal-btn modal-btn--primary"
              style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}
            >
              send_email() →
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

export default Board;