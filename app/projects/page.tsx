export default function Projects() {
  return (
    <main className="page">
      <p className="eyebrow">MY WORK</p>

      <h1>Projects</h1>

      <p className="page-description">
        A collection of software, automation tools and digital projects I've
        built.
      </p>

      <section className="projects-grid">
        <article className="project-card">
          <p className="project-label">FEATURED PROJECT</p>

          <h2>Kenya-Ultra</h2>

          <p>
            A powerful WhatsApp automation bot built with Node.js and Baileys,
            featuring commands, automation and deployment tools.
          </p>

          <div className="project-links">
            <a href="/projects/kenya-ultra">View Project →</a>
            <a
              href="https://github.com/lawrencenjeri4-lgtm/Kenya-ultra"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
