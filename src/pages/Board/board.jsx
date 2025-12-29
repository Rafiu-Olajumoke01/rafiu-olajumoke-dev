import React, { useState } from 'react';
import kanban from './../../assets/kanban image.jpg'
import Agrostack from './../../assets/agritech image.jpg'
import './board.css';

function Board() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  // Contact Information
  const contactInfo = {
    email: 'rafiuolajumoke7@gmail.com',
    phone: '+234 808 379 0474',
    linkedin: 'https://www.linkedin.com/in/rafiu-olajumoke-084374318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    github: 'https://github.com/Rafiu-Olajumoke01',
    portfolio: 'https://github.com/Rafiu-Olajumoke01/MightyPortfolio'
  };

  const stats = [
    { label: 'Projects Completed', value: '10', change: '+6 this year', trend: 'up' },
    { label: 'Problems Solved', value: '24', change: 'Real impact', trend: 'up' },
    { label: 'Code Quality', value: '98%', change: 'Maintainable', trend: 'up' },
    { label: 'Client Satisfaction', value: '100%', change: '5-star rated', trend: 'up' }
  ];

  const projects = [
    {
      id: 1,
      name: 'Kanban Task Management',
      tagline: 'Organize tasks like a pro',
      problem: 'Teams struggle to track project progress and task dependencies, leading to missed deadlines and poor collaboration. Most tools are either too complex or too simple.',
      solution: 'Built an intuitive drag-and-drop system that makes task management visual and effortless. Users can see progress at a glance and reorganize priorities instantly.',
      impact: 'Reduced task management time by 60% and improved team visibility on project status.',
      image: kanban,
      status: 'Completed',
      tech: ['React', 'CSS', 'Local Storage'],
      level: 'Senior',
      progress: 100,
      type: 'Frontend Mentor',
      liveUrl: 'https://kanban-task-management-dusky.vercel.app/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/kanban_task_management',
      features: ['Drag & Drop', 'Dark/Light Mode', 'Task Filtering', 'Data Persistence']
    },
    {
      id: 2,
      name: 'AgroStack',
      tagline: 'Bridging agriculture and technology',
      problem: 'Farmers lack access to modern tools for crop management, market prices, and best practices. The agricultural sector is disconnected from technology, causing inefficiencies and lost income.',
      solution: 'Created a comprehensive platform that gives farmers real-time market data, weather updates, crop advisory, and direct buyer connections - all in one simple interface.',
      impact: 'Helping farmers make data-driven decisions and increase yields by up to 30% while connecting them directly to markets.',
      image: Agrostack,
      status: 'In Progress',
      tech: ['React', 'Django', 'MySQL', 'APIs'],
      level: 'Advanced',
      progress: 65,
      type: 'Real-World Impact',
      liveUrl: 'https://agritech-woad.vercel.app/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/agritech',
      features: ['USSD Implementation', 'Market Prices', 'Weather Alerts', 'Crop Advisory', 'Farmer Network']
    },
    {
      id: 3,
      name: 'LASOP - Lagos School of Programming',
      tagline: 'Smart attendance and learning management',
      problem: 'Students and instructors waste valuable time on manual attendance tracking. Course management is scattered across multiple platforms, making it hard to track progress and engagement.',
      solution: 'Built a comprehensive platform where students and instructors can mark attendance online, access course materials, track learning progress, and manage classes seamlessly in one place.',
      impact: 'Digitized attendance for 500+ students, saving 15 minutes per class and improving attendance accuracy by 95%.',
      image: '📚',
      status: 'Completed',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT Auth'],
      level: 'Advanced',
      progress: 100,
      type: 'Educational Platform',
      liveUrl: 'https://www.lasop.net/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/lasop-client',
      features: ['Online Attendance', 'Course Management', 'Progress Tracking', 'Instructor Dashboard', 'Student Portal']
    },
    {
      id: 4,
      name: 'Weather Map App',
      tagline: 'Precise weather for your exact location',
      problem: 'Most weather apps show generic city forecasts that don\'t reflect your actual location. Users need accurate, hyperlocal weather data based on their exact coordinates.',
      solution: 'Created a location-aware weather app that uses longitude and latitude to fetch precise weather data for your exact position, not just the nearest city.',
      impact: 'Over 500 users rely on it for accurate, location-specific weather information with 98% accuracy rating.',
      image: '🌍',
      status: 'Completed',
      tech: ['React', 'Geolocation API', 'Weather API', 'Maps'],
      level: 'Intermediate',
      progress: 100,
      type: 'Personal Project',
      liveUrl: 'https://city-weather-map.vercel.app/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/city-weather-map',
      features: ['GPS Location', 'Real-time Weather', '7-Day Forecast', 'Interactive Maps', 'Weather Alerts']
    },
    {
      id: 5,
      name: 'Zenith Culinary Academy',
      tagline: 'Learn cooking online, master it in practice',
      problem: 'Aspiring chefs struggle to access quality culinary education due to high costs and location barriers. Traditional cooking schools are expensive and geographically limited.',
      solution: 'Built an online learning platform that makes professional culinary education accessible. Students can take courses, watch video tutorials, submit assignments, and track their culinary journey.',
      impact: 'Enabled 200+ students to access professional culinary training at 70% lower cost than traditional schools.',
      image: '👨‍🍳',
      status: 'Completed',
      tech: ['React', 'Node.js', 'MongoDB', 'Video Streaming'],
      level: 'Advanced',
      progress: 100,
      type: 'EdTech Platform',
      liveUrl: 'https://zenithculinary.com',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/culinaryFinal',
      features: ['Video Courses', 'Recipe Library', 'Student Progress', 'Certification System', 'Instructor Tools']
    },
    {
      id: 6,
      name: 'Chicken & Rice',
      tagline: 'Order food, track it live, enjoy it hot',
      problem: 'Customers face uncertainty when ordering food online - unclear delivery times, no live tracking, and poor communication. Small restaurants struggle with online ordering systems that are too expensive or complicated.',
      solution: 'Created a complete food ordering platform with real-time tracking, live delivery updates, and seamless communication between customers, restaurants, and delivery partners.',
      impact: 'Serving 50+ daily orders with 4.8-star average rating and 25-minute average delivery time.',
      image: '🍗',
      status: 'Completed',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
      level: 'Advanced',
      progress: 100,
      type: 'Client Project',
      liveUrl: 'https://www.chickenandrice.net/',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/fastfolderfrontend',
      features: ['Live Order Tracking', 'Real-time Updates', 'Payment Integration', 'Menu Management', 'Delivery Routing']
    },
    {
      id: 7,
      name: 'RemoteNg',
      tagline: 'Your gateway to remote jobs in Nigeria',
      problem: 'Nigerian job seekers struggle to find legitimate remote opportunities. Most global job boards don\'t cater to the Nigerian market, and local platforms lack quality remote listings.',
      solution: 'Building a dedicated platform that connects Nigerian talent with remote job opportunities, featuring smart job matching, application tracking, and company profiles - tailored for the Nigerian market.',
      impact: 'Aiming to connect thousands of Nigerian professionals with quality remote work opportunities and help companies discover local talent.',
      image: '💼',
      status: 'In Progress',
      tech: ['React', 'Node.js', 'MongoDB', 'Job APIs'],
      level: 'Advanced',
      progress: 80,
      type: 'Job Platform',
      liveUrl: '',
      githubUrl: 'https://github.com/Rafiu-Olajumoke01/RemoteJobNG',
      features: ['Job Search & Filtering', 'Application Tracking', 'Company Profiles', 'Resume Builder', 'Email Notifications']
    }
  ];

  const activities = [
    { action: 'Deployed', project: 'Kanban System', time: '2 hours ago', icon: '🚀', color: '#22c55e' },
    { action: 'Updated', project: 'AgroStack Platform', time: '5 hours ago', icon: '🔨', color: '#3b82f6' },
    { action: 'Completed', project: 'LASOP Platform', time: '1 day ago', icon: '✅', color: '#22c55e' },
    { action: 'Launched', project: 'Chicken & Rice', time: '2 days ago', icon: '🎉', color: '#8b5cf6' }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : activeTab === 'completed'
    ? projects.filter(p => p.status === 'Completed')
    : projects.filter(p => p.status === 'In Progress');

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <div className="header-left">
          <h1>Development Dashboard</h1>
          <p>Building solutions that solve real problems and create impact</p>
        </div>
        <div className="header-right">
          <button className="btn-primary" onClick={() => setShowContactModal(true)}>
            💬 Contact Me
          </button>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className={`stat-trend ${stat.trend}`}>
                {stat.trend === 'up' ? '↗' : '↘'}
              </span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-subtitle">{stat.change}</div>
          </div>
        ))}
      </div>

      <div className="main-content">
        <div className="content-left">
          <div className="section-card">
            <div className="section-header">
              <h2>Projects Portfolio</h2>
              <div className="tabs">
                <button 
                  className={activeTab === 'all' ? 'active' : ''} 
                  onClick={() => setActiveTab('all')}
                >
                  All ({projects.length})
                </button>
                <button 
                  className={activeTab === 'completed' ? 'active' : ''} 
                  onClick={() => setActiveTab('completed')}
                >
                  Completed
                </button>
                <button 
                  className={activeTab === 'active' ? 'active' : ''} 
                  onClick={() => setActiveTab('active')}
                >
                  Active
                </button>
              </div>
            </div>

            <div className="projects-list">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card clickable"
                  onClick={() => openProject(project)}
                >
                  <div className="project-header">
                    <div className="project-title-area">
                      <div className="project-icon-small">
                        {typeof project.image === 'string' && project.image.startsWith('http') === false && project.image.length <= 2 ? (
                          project.image
                        ) : (
                          <img src={project.image} alt={project.name} className="project-thumbnail" />
                        )}
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
                    <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="progress-section">
                    <div className="progress-header">
                      <span>Progress</span>
                      <span className="progress-value">{project.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="project-actions">
                    <span className="action-hint">Click to see problem solved & impact →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="content-right">
          <div className="section-card">
            <div className="section-header">
              <h2>Recent Activity</h2>
            </div>
            <div className="activity-list">
              {activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  <div className="activity-icon" style={{ backgroundColor: activity.color + '20', color: activity.color }}>
                    {activity.icon}
                  </div>
                  <div className="activity-details">
                    <div className="activity-text">
                      <strong>{activity.action}</strong> {activity.project}
                    </div>
                    <div className="activity-time">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card quick-stats">
            <div className="section-header">
              <h2>Quick Stats</h2>
            </div>
            <div className="quick-stat-item">
              <span className="quick-label">Total Lines of Code</span>
              <span className="quick-value">127,430</span>
            </div>
            <div className="quick-stat-item">
              <span className="quick-label">GitHub Commits</span>
              <span className="quick-value">1,284</span>
            </div>
            <div className="quick-stat-item">
              <span className="quick-label">Problem Solving Rate</span>
              <span className="quick-value">96%</span>
            </div>
            <div className="quick-stat-item">
              <span className="quick-label">Active Projects</span>
              <span className="quick-value">{projects.filter(p => p.status === 'In Progress').length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="modal-overlay" onClick={closeContactModal}>
          <div className="modal-content contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeContactModal}>✕</button>
            
            <div className="modal-header">
              <div className="modal-icon">📧</div>
              <div>
                <h2>Let's Connect!</h2>
                <p className="modal-tagline">I'm always open to discussing new projects and opportunities</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="contact-value">
                      {contactInfo.email}
                    </a>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard(contactInfo.email)}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <span className="contact-label">Phone</span>
                    <a href={`tel:${contactInfo.phone}`} className="contact-value">
                      {contactInfo.phone}
                    </a>
                    <button 
                      className="copy-btn" 
                      onClick={() => copyToClipboard(contactInfo.phone)}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <span className="contact-label">LinkedIn</span>
                    <a 
                      href={contactInfo.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-value"
                    >
                      View Profile
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">💻</div>
                  <div className="contact-details">
                    <span className="contact-label">GitHub</span>
                    <a 
                      href={contactInfo.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-value"
                    >
                      View Projects
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-details">
                    <span className="contact-label">Portfolio</span>
                    <a 
                      href={contactInfo.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-value"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-cta">
                <p>Prefer email? Send me a message directly:</p>
                <a 
                  href={`mailto:${contactInfo.email}?subject=Portfolio Inquiry`}
                  className="btn-modal primary"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            
            <div className="modal-header">
              <div className="modal-icon-large">
                {typeof selectedProject.image === 'string' && selectedProject.image.startsWith('http') === false && selectedProject.image.length <= 2 ? (
                  selectedProject.image
                ) : (
                  <img src={selectedProject.image} alt={selectedProject.name} className="modal-project-image" />
                )}
              </div>
              <div>
                <h2>{selectedProject.name}</h2>
                <p className="modal-tagline">{selectedProject.tagline}</p>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section problem-section">
                <h4>🔍 Problem I Solved</h4>
                <p className="problem-text">{selectedProject.problem}</p>
              </div>

              <div className="modal-section solution-section">
                <h4>💡 My Solution</h4>
                <p className="solution-text">{selectedProject.solution}</p>
              </div>

              <div className="modal-section impact-section">
                <h4>📈 Impact</h4>
                <p className="impact-text">{selectedProject.impact}</p>
              </div>

              <div className="modal-section">
                <h4>Key Features</h4>
                <div className="features-grid">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="feature-tag">✓ {feature}</div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Tech Stack</h4>
                <div className="tech-pills">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-badges">
                <span className="badge-difficulty">{selectedProject.level}</span>
                <span className="badge-challenge">{selectedProject.type}</span>
              </div>

              <div className="modal-actions">
                {selectedProject.status === 'Completed' ? (
                  <>
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-modal primary"
                    >
                      🚀 View Live Demo
                    </a>
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-modal secondary"
                    >
                      💻 View Code
                    </a>
                  </>
                ) : (
                  <div className="coming-soon-notice">
                    <p>🚧 This project is currently in development</p>
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-modal secondary"
                    >
                      Track Progress on GitHub
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