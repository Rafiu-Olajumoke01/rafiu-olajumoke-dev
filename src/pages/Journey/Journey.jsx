import React, { useState } from 'react';
import Top from '../../components/Topbar/Top';
import './Journey.css';

function Journey() {
  const [activePhase, setActivePhase] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const journeyPhases = [
    {
      id: 1,
      phase: 'The Beginning',
      period: '2022 - Early Days',
      emoji: '🌱',
      status: 'Foundation',
      description: 'Started as a curious mind with zero coding knowledge. HTML looked like alien language, CSS was magic, and JavaScript? Forget about it.',
      mindset: 'Everything felt impossible, but curiosity kept me going',
      challenges: [
        'Couldn\'t center a div (yes, that struggle)',
        'Console errors terrified me',
        'Spent hours debugging semicolons',
        'Imposter syndrome hit HARD'
      ],
      breakthroughs: [
        'Built first "Hello World" webpage',
        'Understood how CSS actually works',
        'Made a button change color on click',
        'Realized coding is learnable, not magic'
      ],
      skills: ['HTML', 'CSS Basics', 'JavaScript Fundamentals', 'Git (barely)'],
      growth: 20
    },
    {
      id: 2,
      phase: 'LASOP Era Begins',
      period: '2023 - The Transformation',
      emoji: '🚀',
      status: 'Growth',
      description: 'Joined LASOP and everything changed. Surrounded by mentors who believed in me and peers who pushed me. This is where I went from "I can\'t" to "Watch me."',
      mindset: 'If they can do it, I can do it better',
      challenges: [
        'Keeping up with fast-paced curriculum',
        'Learning React while barely knowing JS',
        'Building projects under tight deadlines',
        'Contributing to team projects confidently'
      ],
      breakthroughs: [
        'Built first React app that actually worked',
        'Understood component lifecycle',
        'Started thinking in components, not pages',
        'Contributed to LASOP attendance platform',
        'Debugged others\' code (felt like a superhero)'
      ],
      skills: ['React.js', 'Component Architecture', 'State Management', 'Team Collaboration', 'Git Flow'],
      growth: 50
    },
    {
      id: 3,
      phase: 'Frontend Mastery',
      period: '2023-2024 - Leveling Up',
      emoji: '⚡',
      status: 'Mastery',
      description: 'React became my playground. Built project after project. Dark mode? Easy. API calls? Child\'s play. Complex state management? Bring it on!',
      mindset: 'I don\'t just code, I craft experiences',
      challenges: [
        'Making apps look professional, not just functional',
        'Understanding TypeScript strictness',
        'Building truly reusable components',
        'Optimizing performance for real users'
      ],
      breakthroughs: [
        'Completed Frontend Mentor challenges at Senior level',
        'Built Kanban board with drag-and-drop',
        'Mastered CSS Grid and Flexbox completely',
        'Started building with accessibility in mind',
        'Created my own component library'
      ],
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Advanced CSS', 'Performance Optimization'],
      growth: 75
    },
    {
      id: 4,
      phase: 'Full-Stack Evolution',
      period: '2024 - Backend Conquest',
      emoji: '🔥',
      status: 'Expansion',
      description: 'Realized frontend is just half the story. Dove into backend development. Built APIs, managed databases, handled authentication. Became dangerous on both sides.',
      mindset: 'Why depend on backend devs when I can be one?',
      challenges: [
        'Understanding database relationships',
        'Securing APIs properly',
        'Managing server deployments',
        'Integrating frontend and backend seamlessly'
      ],
      breakthroughs: [
        'Built complete REST APIs with Django',
        'Implemented JWT authentication from scratch',
        'Designed database schemas for real projects',
        'Deployed full-stack apps to production',
        'Built AgroStack - a real-world impact project'
      ],
      skills: ['Django', 'REST APIs', 'PostgreSQL', 'MySQL', 'Authentication', 'Server Management', 'API Design'],
      growth: 90
    },
    {
      id: 5,
      phase: 'The Professional',
      period: '2024-Present - Impact Mode',
      emoji: '🎯',
      status: 'Mastery',
      description: 'Not just building for myself anymore. Building solutions that solve real problems for real people. Every project has purpose, every line of code has meaning.',
      mindset: 'Code is my superpower, impact is my mission',
      challenges: [
        'Balancing multiple client projects',
        'Meeting enterprise-level standards',
        'Scaling applications for growth',
        'Teaching others what I\'ve learned'
      ],
      breakthroughs: [
        'Built 10+ production-ready applications',
        'Clients paying for my solutions',
        'Mentoring other developers',
        'Contributing to open-source',
        'Building LASOP platform used by 500+ students',
        'Launched Chicken & Rice - 50+ daily orders'
      ],
      skills: [
        'React', 'Next.js', 'TypeScript', 'Django', 'Node.js',
        'MongoDB', 'PostgreSQL', 'Tailwind', 'Socket.io',
        'System Design', 'API Architecture', 'DevOps Basics'
      ],
      growth: 100
    }
  ];

  const keyMetrics = [
    { label: 'Journey Duration', value: '2+ Years', icon: '⏱️', color: '#3b82f6' },
    { label: 'Skills Mastered', value: '15+', icon: '🎯', color: '#22c55e' },
    { label: 'Projects Built', value: '24+', icon: '🚀', color: '#8b5cf6' },
    { label: 'Growth Rate', value: '400%', icon: '📈', color: '#f59e0b' }
  ];

  const milestones = [
    {
      title: 'First "Hello World"',
      date: '2022',
      description: 'The moment that started it all. Saw text appear on a webpage I created.',
      emotion: 'Mind = Blown 🤯'
    },
    {
      title: 'Joined LASOP',
      date: 'Early 2023',
      description: 'Game changer. Found my tribe, my mentors, my path.',
      emotion: 'This is where I belong! 🏠'
    },
    {
      title: 'First React App',
      date: 'Mid 2023',
      description: 'Built a working React app. Components made sense. State management clicked.',
      emotion: 'I\'m actually a developer! 💪'
    },
    {
      title: 'First Freelance Client',
      date: 'Late 2023',
      description: 'Someone paid me to code. My skills had real market value.',
      emotion: 'This is a real career! 💰'
    },
    {
      title: 'LASOP Platform Launch',
      date: 'Early 2024',
      description: 'Built platform now used by 500+ students daily. My code serving hundreds.',
      emotion: 'Real impact achieved! 🌟'
    },
    {
      title: 'Full-Stack Developer',
      date: 'Mid 2024',
      description: 'Comfortable on both frontend and backend. Building complete solutions independently.',
      emotion: 'Unstoppable! 🔥'
    }
  ];

  const openMilestone = (milestone) => {
    setSelectedMilestone(milestone);
  };

  const closeMilestone = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="journey-container">
      <div className="journey-hero">
        <div className="hero-badge">My Development Journey</div>
        <h1 className="hero-title">
          From <span className="highlight">Naive Beginner</span> to{' '}
          <span className="highlight">Full-Stack Developer</span>
        </h1>
        <p className="hero-subtitle">
          The story of how LASOP, determination, and countless hours of coding transformed me
          from someone who couldn't center a div to building production apps serving hundreds of users
        </p>
      </div>

      <div className="metrics-grid">
        {keyMetrics.map((metric, index) => (
          <div key={index} className="metric-card" style={{ '--accent-color': metric.color }}>
            <div className="metric-icon">{metric.icon}</div>
            <div className="metric-value">{metric.value}</div>
            <div className="metric-label">{metric.label}</div>
          </div>
        ))}
      </div>

      <div className="journey-timeline">
        <div className="timeline-header">
          <h2>The Evolution</h2>
          <p>Click any phase to see the full story</p>
        </div>

        <div className="timeline-track">
          {journeyPhases.map((phase, index) => (
            <div
              key={phase.id}
              className={`phase-node ${activePhase === phase.id ? 'active' : ''}`}
              onMouseEnter={() => setActivePhase(phase.id)}
              onMouseLeave={() => setActivePhase(null)}
            >
              <div className="phase-connector">
                {index < journeyPhases.length - 1 && <div className="connector-line"></div>}
              </div>

              <div className="phase-card">
                <div className="phase-header">
                  <div className="phase-emoji">{phase.emoji}</div>
                  <div className="phase-status">{phase.status}</div>
                </div>

                <h3 className="phase-title">{phase.phase}</h3>
                <p className="phase-period">{phase.period}</p>

                <p className="phase-description">{phase.description}</p>

                <div className="phase-mindset">
                  <span className="mindset-label">Mindset:</span>
                  <span className="mindset-text">"{phase.mindset}"</span>
                </div>

                <div className="phase-details">
                  <div className="detail-section challenges-section">
                    <h4>💪 Challenges Faced</h4>
                    <ul>
                      {phase.challenges.map((challenge, i) => (
                        <li key={i}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section breakthroughs-section">
                    <h4>🏆 Breakthroughs</h4>
                    <ul>
                      {phase.breakthroughs.map((breakthrough, i) => (
                        <li key={i}>{breakthrough}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="skills-mastered">
                  <h4>Skills Mastered</h4>
                  <div className="skills-list">
                    {phase.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="growth-indicator">
                  <div className="growth-header">
                    <span>Growth Level</span>
                    <span className="growth-percentage">{phase.growth}%</span>
                  </div>
                  <div className="growth-bar">
                    <div
                      className="growth-fill"
                      style={{ width: `${phase.growth}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="milestones-section">
        <div className="section-header">
          <h2>Key Milestones</h2>
          <p>The moments that defined my journey</p>
        </div>

        <div className="milestones-grid">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="milestone-card clickable"
              onClick={() => openMilestone(milestone)}
            >
              <div className="milestone-number">{index + 1}</div>
              <div className="milestone-date">{milestone.date}</div>
              <h3 className="milestone-title">{milestone.title}</h3>
              <p className="milestone-description">{milestone.description}</p>
              <div className="milestone-emotion">{milestone.emotion}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="journey-conclusion">
        <div className="conclusion-card">
          <h2>The Journey Continues... 🚀</h2>
          <p>
            From struggling with "Hello World" to building platforms that serve hundreds of users daily.
            From being intimidated by React to architecting full-stack applications with confidence.
          </p>
          <p>
            <strong>LASOP didn't just teach me to code - it taught me to think like a developer,
              solve like an engineer, and build like a professional.</strong>
          </p>
          <p className="conclusion-cta">
            This is just the beginning. The next chapter? Building solutions that impact thousands,
            contributing to open source, and helping others on their journey just like LASOP helped me.
          </p>
          <div className="conclusion-stats">
            <div className="stat">
              <div className="stat-value">2+</div>
              <div className="stat-label">Years of Growth</div>
            </div>
            <div className="stat">
              <div className="stat-value">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat">
              <div className="stat-value">∞</div>
              <div className="stat-label">More to Learn</div>
            </div>
          </div>
        </div>
      </div>

      {selectedMilestone && (
        <div className="modal-overlay" onClick={closeMilestone}>
          <div className="milestone-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeMilestone}>✕</button>
            <h2>{selectedMilestone.title}</h2>
            <div className="modal-date">{selectedMilestone.date}</div>
            <p className="modal-description">{selectedMilestone.description}</p>
            <div className="modal-emotion">{selectedMilestone.emotion}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Journey;
