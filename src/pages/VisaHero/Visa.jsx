import React, { useEffect, useRef, useState } from 'react';
import './visa.css';

const CATEGORIES = [
  { icon: '🎓', name: 'Student',  sub: 'Admission processing',    free: true  },
  { icon: '🏖️', name: 'Tourist',  sub: 'Travel & stay visas',     free: false },
  { icon: '💼', name: 'Business', sub: 'Work & investment visas',  free: false },
  { icon: '🏥', name: 'Medical',  sub: 'Treatment abroad',         free: false },
];

const STACK = ['Next.js', 'Django', 'MySQL', 'WebRTC', 'REST APIs', 'Mobile'];

const BLOGS = [
  { num: '01', tag: 'Architecture', title: 'How I designed a 3-sided marketplace from scratch',  excerpt: 'Admin, agents, clients — keeping them in sync without losing my mind.'    },
  { num: '02', tag: 'WebRTC',       title: "3 days debugging a bug that wasn't in my code",      excerpt: "The browser was the culprit all along. Here's exactly what happened."    },
  { num: '03', tag: 'Product',      title: 'Why student visa services should always be free',    excerpt: "The decision that shaped ingress.travel's positioning from day one."      },
];

function CountUp({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const steps = 40;
      const inc = target / steps;
      let i = 0;
      const t = setInterval(() => {
        i++;
        setVal(Math.min(Math.round(inc * i), target));
        if (i >= steps) clearInterval(t);
      }, 1200 / steps);
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function VisaHero() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="vh-root">

      {/* ambient glow orbs */}
      <div className="vh-orb vh-orb--1" aria-hidden="true" />
      <div className="vh-orb vh-orb--2" aria-hidden="true" />

      {/* ─── HERO BANNER ─── */}
      <div className="vh-banner">
        <div className="vh-stripe" aria-hidden="true" />

        <div className="vh-banner-inner">

          {/* LEFT: copy */}
          <div className="vh-copy">
            <div className="vh-eyebrow">
              <span className="vh-live-dot" />
              <span>Flagship Project</span>
              <span className="vh-sep">·</span>
              <span className="vh-accent-text">ingress.travel</span>
            </div>

            <h2 className="vh-headline">
              I built the{' '}
              <span className="vh-hl-accent">Uber for<br />visa services.</span>
              <br />
              <span className="vh-hl-muted">From scratch. Alone.</span>
            </h2>

            <p className="vh-desc">
              A <strong>3-sided marketplace</strong> connecting anyone needing a visa with
              brilliant agents worldwide — student, tourist, business & medical.
              Designed, built, and deployed solo. Zero to production.
            </p>

            <div className="vh-actions">
              <a href="https://ingress.travel" target="_blank" rel="noopener noreferrer" className="vh-btn-primary">
                <span className="vh-btn-pulse" />
                Visit ingress.travel →
              </a>
              <span className="vh-btn-ghost">▷ &nbsp;Demo video · coming soon</span>
            </div>

            <div className="vh-stack">
              {STACK.map(t => <span key={t} className="vh-pill">{t}</span>)}
            </div>
          </div>

          {/* RIGHT: marketplace diagram */}
          <div className="vh-diagram">
            <p className="vh-diagram-label">// how it works</p>
            {[
              { role: 'Admin',  icon: '🧑‍💼', desc: 'Manages & onboards agents',           badge: 'Platform owner',     accent: false },
              { role: 'Agent',  icon: '🌐',  desc: 'Calls, chats & live visa sessions',   badge: 'Like an Uber driver', accent: true  },
              { role: 'Client', icon: '🧳',  desc: 'Books, calls & gets visa help',       badge: 'Gets the visa ✓',     accent: false },
            ].map((node, i) => (
              <React.Fragment key={node.role}>
                <div className={`vh-node ${node.accent ? 'vh-node--accent' : ''}`}>
                  <span className="vh-node-icon">{node.icon}</span>
                  <div className="vh-node-text">
                    <strong>{node.role}</strong>
                    <span>{node.desc}</span>
                  </div>
                  <span className={`vh-node-badge ${node.accent ? 'vh-node-badge--accent' : ''}`}>
                    {node.badge}
                  </span>
                </div>
                {i < 2 && <div className="vh-connector">↓</div>}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

      {/* ─── STATS ─── */}
      <div className="vh-stats">
        {[
          { val: 4,   suffix: '',  label: 'Visa categories',   sub: 'Student · Tourist · Business · Medical' },
          { val: 100, suffix: '+', label: 'Countries covered', sub: 'Any country worldwide'                  },
          { val: 3,   suffix: '',  label: 'Platform sides',    sub: 'Admin · Agent · Client'                 },
          { val: 95,  suffix: '%', label: 'Build complete',    sub: 'Mobile app launching soon'              },
        ].map((s, i) => (
          <div key={i} className="vh-stat">
            <span className="vh-stat-val"><CountUp target={s.val} suffix={s.suffix} /></span>
            <span className="vh-stat-label">{s.label}</span>
            <span className="vh-stat-sub">{s.sub}</span>
          </div>
        ))}
      </div>

      {/* ─── CATEGORIES ─── */}
      <div className="vh-cats">
        <p className="vh-section-mono">// visa_categories</p>
        <div className="vh-cats-grid">
          {CATEGORIES.map((c, i) => (
            <div
              key={c.name}
              className={`vh-cat ${hovered === i ? 'vh-cat--on' : ''}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="vh-cat-icon">{c.icon}</span>
              <strong className="vh-cat-name">{c.name}</strong>
              <span className="vh-cat-sub">{c.sub}</span>
              <span className={`vh-cat-badge ${c.free ? 'vh-cat-badge--free' : ''}`}>
                {c.free ? 'FREE' : 'Available'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── BUG STORY ─── */}
      <div className="vh-story">
        <div className="vh-story-label">// the hardest bug i solved</div>
        <div className="vh-story-body">
          <div className="vh-story-hours">
            72<small>hrs</small>
          </div>
          <div className="vh-story-text">
            <p>
              I spent <strong>3 days</strong> convinced my WebRTC code was broken.
              The live calling between clients and agents just wouldn't connect. I rewrote it.
              Checked every line. Nothing.
            </p>
            <p>
              Turns out — <strong>you cannot open both agent and client on the same browser simultaneously.</strong>{' '}
              The moment I opened clients on Microsoft Edge and agents on Chrome — connected instantly.
            </p>
            <p className="vh-story-punch">
              That's the kind of bug that only exists when you're building something <em>real</em>.
            </p>
          </div>
        </div>
      </div>

      {/* ─── BLOG TEASER ─── */}
      <div className="vh-blog">
        <div className="vh-blog-head">
          <div>
            <p className="vh-section-mono">// build_journal</p>
            <h3 className="vh-blog-title">The real story behind ingress.travel</h3>
          </div>
          <button className="vh-blog-all">All posts →</button>
        </div>
        <div className="vh-blog-list">
          {BLOGS.map(post => (
            <div key={post.num} className="vh-blog-post">
              <span className="vh-blog-num">{post.num}</span>
              <div className="vh-blog-body">
                <span className="vh-blog-tag">{post.tag}</span>
                <p className="vh-blog-post-title">{post.title}</p>
                <p className="vh-blog-excerpt">{post.excerpt}</p>
              </div>
              <span className="vh-blog-arrow">→</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}