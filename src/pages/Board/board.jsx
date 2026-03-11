import React, { useState } from 'react';
import kanban from './../../assets/kanban image.jpg';
import Agrostack from './../../assets/agritech image.jpg';
import './board.css';

function Board() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const contactInfo = {
    email: 'rafiuolajumoke7@gmail.com',
    phone: '+234 808 379 0474',
    linkedin: 'https://www.linkedin.com/in/rafiu-olajumoke-084374318',
    github: 'https://github.com/Rafiu-Olajumoke01',
    portfolio: 'https://github.com/Rafiu-Olajumoke01/MightyPortfolio'
  };

  const stats = [
    { label: 'Projects Shipped', value: '7+',   change: 'Real-world impact', trend: 'up' },
    { label: 'Years Building',   value: '3+',    change: 'Since 2021',        trend: 'up' },
    { label: 'Client Rating',    value: '5.0',   change: 'Avg across clients', trend: 'up' },
    { label: 'Problems Solved',  value: '24+',   change: 'And counting',      trend: 'up' },
  ];

  // Helper: generate a gradient icon for projects without images
  const gradients = [
    ['#3b82f6','#8b5cf6'],
    ['#06b6d4','#3b82f6'],
    ['#22c55e','#06b6d4'],
    ['#f59e0b','#ef4444'],
    ['#8b5cf6','#ec4899'],
  ];

  const PlaceholderIcon = ({ initials, index }) => (
    <div style={{
      width:'100%', height:'100%', borderRadius:'10px',
      background: `linear-gradient(135deg, ${gradients[index % gradients.length][0]}, ${gradients[index % gradients.length][1]})`,
      display:'flex', alignItems:'center', justifyContent:'center',
      fontWeight:'800', fontSize:'1rem', color:'white', letterSpacing:'-0.5px'
    }}>
      {initials}
    </div>
  );

  const projects = [
    {
      id: 1, initials: 'KT',
      name: 'Kanban Task Management',
      tagline: 'Organize tasks like a pro',
      problem: 'Teams struggle to track project progress and task dependencies, leading to missed deadlines and poor collaboration.',
      solution: 'Built an intuitive drag-and-drop system that makes task management visual and effortless.',
      impact: 'Reduced task management time by 60% and improved team visibility on project status.',
      image: kanban,
      status: 'Completed', tech: ['React', 'CSS', 'Local Storage'],
      level: 'Senior', progress: 100, type: 'Frontend Mentor',
      liveUrl: 'https://kanban-task-management-dusky.vercel.app/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/kanban_task_management',
      features: ['Drag & Drop', 'Dark/Light Mode', 'Task Filtering', 'Data Persistence']
    },
    {
      id: 2, initials: 'AS',
      name: 'AgroStack',
      tagline: 'Bridging agriculture and technology',
      problem: 'Farmers lack access to modern tools for crop management, market prices, and best practices.',
      solution: 'Created a platform giving farmers real-time market data, weather updates, crop advisory, and direct buyer connections.',
      impact: 'Helping farmers increase yields by up to 30% and connect directly to markets.',
      image: Agrostack,
      status: 'In Progress', tech: ['React', 'Django', 'MySQL', 'APIs'],
      level: 'Advanced', progress: 65, type: 'Real-World Impact',
      liveUrl: 'https://agritech-woad.vercel.app/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/agritech',
      features: ['USSD Implementation', 'Market Prices', 'Weather Alerts', 'Crop Advisory', 'Farmer Network']
    },
    {
      id: 3, initials: 'LP',
      name: 'LASOP Platform',
      tagline: 'Smart attendance & learning management',
      problem: 'Students and instructors waste time on manual attendance tracking across scattered platforms.',
      solution: 'Built a platform where students mark attendance online, access course materials, and track learning progress.',
      impact: 'Digitized attendance for 500+ students, saving 15 minutes per class with 95% accuracy.',
      image: null,
      status: 'Completed', tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
      level: 'Advanced', progress: 100, type: 'Educational Platform',
      liveUrl: 'https://www.lasop.net/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/lasop-client',
      features: ['Online Attendance', 'Course Management', 'Progress Tracking', 'Instructor Dashboard', 'Student Portal']
    },
    {
      id: 4, initials: 'WM',
      name: 'Weather Map App',
      tagline: 'Precise weather for your exact location',
      problem: 'Most weather apps show generic city forecasts that don\'t reflect your actual location.',
      solution: 'Location-aware app using longitude/latitude to fetch precise weather for your exact position.',
      impact: 'Over 500 users rely on it for accurate location-specific weather with 98% accuracy.',
      image: null,
      status: 'Completed', tech: ['React', 'Geolocation API', 'Weather API', 'Maps'],
      level: 'Intermediate', progress: 100, type: 'Personal Project',
      liveUrl: 'https://city-weather-map.vercel.app/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/city-weather-map',
      features: ['GPS Location', 'Real-time Weather', '7-Day Forecast', 'Interactive Maps', 'Weather Alerts']
    },
    {
      id: 5, initials: 'ZC',
      name: 'Zenith Culinary Academy',
      tagline: 'Learn cooking online, master it in practice',
      problem: 'Aspiring chefs struggle to access quality culinary education due to high costs and location barriers.',
      solution: 'Online learning platform making professional culinary education accessible with video tutorials and assignments.',
      impact: 'Enabled 200+ students to access professional culinary training at 70% lower cost.',
      image: null,
      status: 'Completed', tech: ['React', 'Node.js', 'MongoDB', 'Video Streaming'],
      level: 'Advanced', progress: 100, type: 'EdTech Platform',
      liveUrl: 'https://zenithculinary.com',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/culinaryFinal',
      features: ['Video Courses', 'Recipe Library', 'Student Progress', 'Certification System', 'Instructor Tools']
    },
    {
      id: 6, initials: 'CR',
      name: 'Chicken & Rice',
      tagline: 'Order food, track it live, enjoy it hot',
      problem: 'Customers face uncertainty when ordering food online — unclear delivery times and no live tracking.',
      solution: 'Complete food ordering platform with real-time tracking and seamless communication.',
      impact: 'Serving 50+ daily orders with 4.8-star average rating and 25-minute avg delivery.',
      image: null,
      status: 'Completed', tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
      level: 'Advanced', progress: 100, type: 'Client Project',
      liveUrl: 'https://www.chickenandrice.net/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/fastfolderfrontend',
      features: ['Live Order Tracking', 'Real-time Updates', 'Payment Integration', 'Menu Management', 'Delivery Routing']
    },
    {
      id: 7, initials: 'RN',
      name: 'RemoteNg',
      tagline: 'Your gateway to remote jobs in Nigeria',
      problem: 'Nigerian job seekers struggle to find legitimate remote opportunities on global platforms.',
      solution: 'Dedicated platform connecting Nigerian talent with remote opportunities, featuring smart job matching.',
      impact: 'Aiming to connect thousands of Nigerian professionals with quality remote work.',
      image: null,
      status: 'In Progress', tech: ['React', 'Node.js', 'MongoDB', 'Job APIs'],
      level: 'Advanced', progress: 80, type: 'Job Platform',
      liveUrl: '',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/RemoteJobNG',
      features: ['Job Search & Filtering', 'Application Tracking', 'Company Profiles', 'Resume Builder', 'Email Notifications']
    }
  ];

  const activities = [
    { action: 'Deployed', project: 'Kanban System',    time: 'Recently', icon: '🚀', color: '#22c55e' },
    { action: 'Updated',  project: 'AgroStack',        time: 'Recently', icon: '🔨', color: '#3b82f6' },
    { action: 'Shipped',  project: 'LASOP Platform',   time: 'This month', icon: '✅', color: '#22c55e' },
    { action: 'Launched', project: 'Chicken & Rice',   time: 'This month', icon: '🎉', color: '#8b5cf6' },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : activeTab === 'completed'
    ? projects.filter(p => p.status === 'Completed')
    : projects.filter(p => p.status === 'In Progress');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied!');
  };

  return (
    <div className="board-container">

      {/* HEADER */}
      <div className="board-header">
        <div className="header-left">
          <h1>My <span>Portfolio</span></h1>
          <p>Problems solved. Products shipped. Impact delivered.</p>
        </div>
        <div className="header-right">
          <button className="btn-primary" onClick={() => setShowContactModal(true)}>
            💬 Let's Work Together
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-trend">↗</span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-subtitle">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* PROJECTS */}
        <div className="content-left">
          <div className="section-card">
            <div className="section-header">
              <h2>Projects Portfolio</h2>
              <div className="tabs">
                {[['all', `All (${projects.length})`], ['completed', 'Completed'], ['active', 'In Progress']].map(([key, label]) => (
                  <button key={key} className={activeTab === key ? 'active' : ''} onClick={() => setActiveTab(key)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-list">
              {filteredProjects.map((project, idx) => (
                <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                  <div className="project-header">
                    <div className="project-title-area">
                      <div className="project-icon-small">
                        {project.image
                          ? <img src={project.image} alt={project.name} className="project-thumbnail" />
                          : <PlaceholderIcon initials={project.initials} index={idx} />
                        }
                      </div>
                      <div>
                        <h3>{project.name}</h3>
                        <p className="project-tagline">{project.tagline}</p>
                        <div className="project-meta">
                          <span className="project-type">{project.type}</span>
                          <span className="project-level">{project.level}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`status-badge ${project.status === 'Completed' ? 'completed' : 'in-progress'}`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="tech-stack">
                    {project.tech.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                  </div>

                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Progress</span>
                      <span className="progress-value">{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>

                  <div className="project-actions">
                    <span className="action-hint">View problem & impact →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR WIDGETS */}
        <div className="content-right">
          <div className="section-card">
            <div className="section-header"><h2>Recent Activity</h2></div>
            <div className="activity-list">
              {activities.map((a, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-icon" style={{ background: a.color + '18', color: a.color }}>
                    {a.icon}
                  </div>
                  <div className="activity-details">
                    <div className="activity-text"><strong>{a.action}</strong> {a.project}</div>
                    <div className="activity-time">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card quick-stats">
            <div className="section-header"><h2>At a Glance</h2></div>
            {[
              ['Fullstack Capable',   'React + Node + DB'],
              ['Open Source',         'GitHub Active'],
              ['Problem Solver Rate', '96%'],
              ['Active Projects',     projects.filter(p => p.status === 'In Progress').length],
              ['Availability',        'Remote · Now'],
            ].map(([label, value], i) => (
              <div key={i} className="quick-stat-item">
                <span className="quick-label">{label}</span>
                <span className="quick-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT MODAL */}
      {showContactModal && (
        <div className="modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="modal-content contact-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowContactModal(false)}>✕</button>
            <div className="modal-header">
              <div className="modal-icon">📬</div>
              <div>
                <h2>Let's Build Together</h2>
                <p className="modal-tagline">Open to remote roles, contracts & collaborations</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="contact-grid">
                {[
                  { icon: '✉️', label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}`, copy: true },
                  { icon: '📱', label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}`, copy: true },
                  { icon: '💼', label: 'LinkedIn', value: 'View Profile', href: contactInfo.linkedin },
                  { icon: '💻', label: 'GitHub', value: 'View Projects', href: contactInfo.github },
                ].map((item, i) => (
                  <div key={i} className="contact-item">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-value">
                        {item.value}
                      </a>
                      {item.copy && (
                        <button className="copy-btn" onClick={() => copyToClipboard(item.value)}>Copy</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact-cta">
                <p>Ready to collaborate? Send me a message directly.</p>
                <a href={`mailto:${contactInfo.email}?subject=Let's Work Together`} className="btn-modal primary">
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            <div className="modal-header">
              <div className="modal-icon-large">
                {selectedProject.image
                  ? <img src={selectedProject.image} alt={selectedProject.name} className="modal-project-image" />
                  : <PlaceholderIcon initials={selectedProject.initials} index={selectedProject.id} />
                }
              </div>
              <div>
                <h2>{selectedProject.name}</h2>
                <p className="modal-tagline">{selectedProject.tagline}</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section problem-section">
                <h4>🔍 Problem Identified</h4>
                <p>{selectedProject.problem}</p>
              </div>
              <div className="modal-section solution-section">
                <h4>💡 My Solution</h4>
                <p>{selectedProject.solution}</p>
              </div>
              <div className="modal-section impact-section">
                <h4>📈 Impact Delivered</h4>
                <p>{selectedProject.impact}</p>
              </div>
              <div className="modal-section">
                <h4>Key Features</h4>
                <div className="features-grid">
                  {selectedProject.features.map((f, i) => (
                    <div key={i} className="feature-tag">✓ {f}</div>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h4>Tech Stack</h4>
                <div className="tech-pills">
                  {selectedProject.tech.map((t, i) => <span key={i} className="tech-pill">{t}</span>)}
                </div>
              </div>
              <div className="modal-badges">
                <span className="badge-difficulty">{selectedProject.level}</span>
                <span className="badge-challenge">{selectedProject.type}</span>
              </div>
              <div className="modal-actions">
                {selectedProject.status === 'Completed' ? (
                  <>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-modal primary">
                      🚀 Live Demo
                    </a>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-modal secondary">
                      💻 View Code
                    </a>
                  </>
                ) : (
                  <div className="coming-soon-notice">
                    <p>🚧 In active development</p>
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-modal secondary">
                      Track on GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Board;