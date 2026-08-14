export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="status">
            <span />
            Building something new
          </div>

          <p className="eyebrow">LUCID DEV</p>

          <h1>
            I build things
            <br />
            <span>that make an</span>
            <br />
            <span>impact.</span>
          </h1>

          <p className="hero-description">
            Developer and builder creating software, automation
            tools, communities and digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Explore My Work →
            </a>

            <a href="#about" className="button secondary">
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section id="projects" className="page-section">
        <p className="section-label">WHAT I BUILD</p>

        <h2>
          Ideas turned into
          <br />
          <span>real products.</span>
        </h2>

        <div className="projects-grid">
          <div className="project-card">
            <small>01</small>
            <h3>Software</h3>
            <p>
              Building useful applications, tools and digital
              products designed to solve real problems.
            </p>
          </div>

          <div className="project-card">
            <small>02</small>
            <h3>Automation</h3>
            <p>
              Creating bots and automation systems that simplify
              repetitive tasks and workflows.
            </p>
          </div>

          <div className="project-card">
            <small>03</small>
            <h3>Communities</h3>
            <p>
              Building and managing digital communities around
              technology and software.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="page-section about">
        <p className="section-label">ABOUT LUCID DEV</p>

        <h2>
          Building with
          <br />
          <span>purpose.</span>
        </h2>

        <p className="section-description">
          Lucid Dev is my personal developer identity and home
          for the software, automation projects, communities and
          digital experiences I create.
        </p>
      </section>
    </main>
  );
}
