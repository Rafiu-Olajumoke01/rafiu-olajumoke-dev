import React, { useState } from 'react';
import './kanban.css';


function Kanban() {
  const [tasks] = useState({
    backlog: [
      {
        id: 1,
        title: 'Portfolio V2 Redesign',
        description: 'Refresh portfolio with new animations and better UX',
        priority: 'medium',
        tags: ['Design', 'React'],
        dueDate: 'Jan 2026'
      },
      {
        id: 2,
        title: 'E-commerce Platform for SMEs',
        description: 'Build affordable online store solution for small businesses',
        priority: 'high',
        tags: ['React', 'Node.js', 'MongoDB'],
        dueDate: 'Feb 2026'
      },
      {
        id: 3,
        title: 'Learning Management System',
        description: 'LMS for online courses with video streaming',
        priority: 'low',
        tags: ['React', 'Video', 'API'],
        dueDate: 'Mar 2026'
      }
    ],
    inProgress: [
      {
        id: 4,
        title: 'RemoteNg Job Platform',
        description: 'Finishing job search, application tracking, and notifications',
        priority: 'high',
        tags: ['React', 'Node.js', 'APIs'],
        dueDate: 'Dec 2025',
        progress: 80
      },
      {
        id: 5,
        title: 'AgroStack USSD Integration',
        description: 'Adding USSD functionality for farmers without smartphones',
        priority: 'high',
        tags: ['Django', 'USSD', 'API'],
        dueDate: 'Jan 2026',
        progress: 65
      }
    ],
    review: [
      {
        id: 6,
        title: 'Portfolio Mindset Page',
        description: 'New problem-solving mindset section - reviewing content',
        priority: 'medium',
        tags: ['React', 'Content'],
        dueDate: 'Dec 2025',
        progress: 95
      }
    ],
    done: [
      {
        id: 7,
        title: 'Chicken & Rice Food Ordering',
        description: 'Complete food delivery platform with live tracking',
        priority: 'high',
        tags: ['React', 'Node.js', 'Socket.io'],
        completedDate: 'Nov 2025'
      },
      {
        id: 8,
        title: 'LASOP Attendance System',
        description: 'Digital attendance and course management for 500+ students',
        priority: 'high',
        tags: ['React', 'MongoDB', 'Auth'],
        completedDate: 'Oct 2025'
      },
      {
        id: 9,
        title: 'Zenith Culinary Academy',
        description: 'Online culinary school with video courses',
        priority: 'medium',
        tags: ['React', 'Video', 'Payments'],
        completedDate: 'Sep 2025'
      }
    ]
  });

  const columns = [
    { id: 'backlog', title: 'Backlog', color: '#64748b', icon: '📋' },
    { id: 'inProgress', title: 'In Progress', color: '#3b82f6', icon: '⚡' },
    { id: 'review', title: 'Review', color: '#f59e0b', icon: '👀' },
    { id: 'done', title: 'Done', color: '#10b981', icon: '✅' }
  ];

  const getPriorityColor = (priority) => {
    const colors = {
      high: '#ef4444',
      medium: '#f59e0b',
      low: '#10b981'
    };
    return colors[priority] || '#64748b';
  };

  return (
    <div className="kanban-page">

      <div className="kanban-hero">
        <h1>My Development Pipeline</h1>
        <p>
          This is how I organize my work - from ideas in the backlog to shipped products.
          Real-time view of what I'm building, what's next, and what I've completed.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="kanban-stats">
        <div className="stat-card">
          <div className="stat-number">{tasks.backlog.length}</div>
          <div className="stat-label">Ideas Backlog</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{tasks.inProgress.length}</div>
          <div className="stat-label">Active Now</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{tasks.review.length}</div>
          <div className="stat-label">In Review</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{tasks.done.length}</div>
          <div className="stat-label">Shipped</div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="kanban-board">
        {columns.map(column => (
          <div key={column.id} className="kanban-column">
            <div className="column-header" style={{ borderColor: column.color }}>
              <div className="column-title">
                <span className="column-icon">{column.icon}</span>
                <h3>{column.title}</h3>
              </div>
              <span className="task-count">{tasks[column.id].length}</span>
            </div>

            <div className="column-content">
              {tasks[column.id].map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-header">
                    <span
                      className="priority-indicator"
                      style={{ background: getPriorityColor(task.priority) }}
                      title={`${task.priority} priority`}
                    />
                    <h4 className="task-title">{task.title}</h4>
                  </div>

                  <p className="task-description">{task.description}</p>

                  {task.progress && (
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${task.progress}%` }}
                      />
                      <span className="progress-text">{task.progress}%</span>
                    </div>
                  )}

                  <div className="task-tags">
                    {task.tags.map((tag, idx) => (
                      <span key={idx} className="task-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="task-footer">
                    {task.dueDate && (
                      <span className="task-date">📅 {task.dueDate}</span>
                    )}
                    {task.completedDate && (
                      <span className="task-date completed">✓ {task.completedDate}</span>
                    )}
                  </div>
                </div>
              ))}

              {tasks[column.id].length === 0 && (
                <div className="empty-column">
                  <p>No tasks here yet</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="kanban-info">
        <div className="info-card">
          <h3>📌 How I Work</h3>
          <ul>
            <li><strong>Backlog:</strong> Ideas and projects I want to build next</li>
            <li><strong>In Progress:</strong> Actively coding and building</li>
            <li><strong>Review:</strong> Testing, fixing bugs, getting feedback</li>
            <li><strong>Done:</strong> Shipped and live for users</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>🎯 Current Focus</h3>
          <p>
            Right now I'm finishing RemoteNg and adding USSD features to AgroStack.
            Once these ship, I'll move to the e-commerce platform for small businesses.
          </p>
          <p className="focus-note">
            I typically work on 2-3 projects simultaneously, shipping one every 2-3 weeks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Kanban;