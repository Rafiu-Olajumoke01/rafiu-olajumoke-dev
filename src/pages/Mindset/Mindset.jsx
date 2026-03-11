import React, { useState } from 'react';
import './mindset.css';

export default function Mindset() {
  const [selectedThought, setSelectedThought] = useState(null);

  const thinkingProcess = [
    {
      phase: "1. Understand the Pain",
      icon: "🎯",
      question: "What's actually broken?",
      approach: "Before writing a single line of code, I dig deep. I talk to users. I watch them struggle. I ask 'why' five times until I hit the real problem—not just symptoms.",
      example: "AgroStack didn't start with 'let's build an agriculture app.' It started with farmers telling me they miss market opportunities because they don't know current prices. That's the real problem.",
      antipattern: "Building what sounds cool vs. what actually hurts"
    },
    {
      phase: "2. Question Everything",
      icon: "🧠",
      question: "Does this even need to be built?",
      approach: "Not every problem needs code. Sometimes the solution is a spreadsheet, a phone call, or changing a process. I only build when software is genuinely the best answer.",
      example: "Before building RemoteNg, I asked: 'Can existing job boards solve this?' The answer was no—they don't understand the Nigerian remote work context. Now it's worth building.",
      antipattern: "Building for the sake of building"
    },
    {
      phase: "3. Define Success in Numbers",
      icon: "📊",
      question: "What metric tells me this worked?",
      approach: "If I can't measure the impact, I can't know if I solved the problem. Every project has a clear success metric before I start coding.",
      example: "Chicken & Rice: Success = Average delivery time under 30 minutes and 4.5+ star rating. Not 'nice UI' or 'clean code'—actual business outcomes.",
      antipattern: "Measuring outputs (features shipped) instead of outcomes (problems solved)"
    },
    {
      phase: "4. Build the Minimum That Works",
      icon: "⚡",
      question: "What's the smallest version that proves this works?",
      approach: "I ship fast and ugly. Version 1 is never pretty—it's just functional enough to test if I'm solving the right problem. Polish comes after validation.",
      example: "Weather Map App started with just location + current temp. No fancy UI, no 10-day forecast. Users loved it. Then I added features based on what they actually asked for.",
      antipattern: "Spending months building features nobody asked for"
    },
    {
      phase: "5. Learn From Reality",
      icon: "👥",
      question: "What are real users telling me?",
      approach: "Users don't lie. Usage data doesn't lie. I watch what people actually do, not what they say they'll do. Then I adapt ruthlessly based on that feedback.",
      example: "LASOP students weren't using the discussion forum I built. Instead of pushing it, I removed it and focused on what they did use: attendance and grades. Better product, less code.",
      antipattern: "Defending features instead of listening to users"
    },
    {
      phase: "6. Iterate or Kill",
      icon: "📈",
      question: "Is this worth continuing?",
      approach: "Not every project deserves to live. If something isn't gaining traction or solving the problem, I either pivot hard or shut it down. No emotional attachment to code.",
      example: "I've killed 3 projects that weren't working. It hurt, but it freed me to build things that actually matter. The 18 completed projects? Those are the survivors.",
      antipattern: "Continuing failed projects out of stubbornness"
    }
  ];

  const coreBeliefs = [
    {
      belief: "Problems > Technology",
      reality: "Nobody cares what framework you used. They care if their problem got solved."
    },
    {
      belief: "Impact > Features",
      reality: "A simple solution that saves 10 hours a week beats a complex one that saves 10 minutes."
    },
    {
      belief: "Speed > Perfection",
      reality: "Shipping an 80% solution today beats a 100% solution in 6 months."
    },
    {
      belief: "Users > Assumptions",
      reality: "What I think users need is usually wrong. What they actually need reveals itself through usage."
    }
  ];

  return (
    <div className="mindset-container-new">
     
      <div className="mindset-hero-new">
        <div className="hero-badge-new">
          <span className="badge-icon">🧠</span>
          How I Actually Think
        </div>

        <h1 className="hero-title-new">
          I Don't Build Apps.<br />
          <span className="highlight-text">I Solve Problems.</span>
        </h1>

        <p className="hero-subtitle-new">
          10 completed projects. 100% client satisfaction. These didn't happen by accident.
          They happened because I follow a specific problem-solving process for every single project.
        </p>

        <div className="core-beliefs-grid">
          {coreBeliefs.map((item, idx) => (
            <div key={idx} className="belief-card">
              <div className="belief-title">{item.belief}</div>
              <div className="belief-reality">{item.reality}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Thinking Process Section */}
      <div className="thinking-process-section">
        <div className="section-header">
          <h2>My Problem-Solving Process</h2>
          <p>This is exactly how I approach every project—from understanding the problem to shipping the solution.</p>
        </div>

        <div className="process-steps">
          {thinkingProcess.map((step, idx) => (
            <div key={idx} className={`process-card ${selectedThought === idx ? 'expanded' : ''}`}>
              <button
                onClick={() => setSelectedThought(selectedThought === idx ? null : idx)}
                className="process-card-header"
              >
                <div className="process-icon">{step.icon}</div>

                <div className="process-content">
                  <div className="process-title-row">
                    <h3>{step.phase}</h3>
                    <span className="expand-indicator">{selectedThought === idx ? '−' : '+'}</span>
                  </div>
                  <p className="process-question">{step.question}</p>
                  <p className="process-approach">{step.approach}</p>
                </div>
              </button>

              {selectedThought === idx && (
                <div className="process-expanded">
                  <div className="example-box">
                    <div className="example-header">
                      <span className="check-icon">✓</span>
                      Real Example
                    </div>
                    <p>{step.example}</p>
                  </div>

                  <div className="antipattern-box">
                    <div className="antipattern-header">
                      <span className="alert-icon">⚠</span>
                      What I Avoid
                    </div>
                    <p>{step.antipattern}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Reality Check Section */}
      <div className="reality-check-section">
        <div className="reality-card">
          <h2>The Reality Check</h2>

          <div className="reality-content">
            <p>
              <strong>Here's the truth:</strong> Most developers fall in love with their code.
              I fall in love with the problem being solved.
            </p>

            <p>
              When AgroStack helps a farmer get 30% better yields, that's not because I used React and Django.
              It's because I understood that farmers needed real-time market data to make better decisions.
            </p>

            <p>
              The difference between a developer and a problem solver? A developer asks "what can I build?"
              A problem solver asks "what needs fixing?"
            </p>

            <p className="reality-signature">
              I'm a problem solver who happens to code. That's why my projects work. That's why clients come back.
              That's why this portfolio exists.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="mindset-stats-banner">
        <div className="stat-box">
          <div className="stat-number">18</div>
          <div className="stat-label">Problems Solved</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">100%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">∞</div>
          <div className="stat-label">Commitment to Impact</div>
        </div>
      </div>
    </div>
  );
}