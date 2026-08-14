export default function Projects() {
  return (
    <main className="page">
      <p className="section-label">MY WORK</p>

      <h1>Projects</h1>

      <p className="page-description">
        A collection of software, automation tools and digital projects built
        under Lucid Dev.
      </p>

      <section className="projects-grid">
        <article className="project-card featured-project">
          <div>
            <p className="project-number">01 · FEATURED</p>

            <h2>Kenya-Ultra</h2>

            <p>
              A powerful WhatsApp automation project built with Node.js and
              Baileys, featuring automation, entertainment, group management
              and deployment tools.
            </p>
          </div>

          <div className="project-links">
            <a
              href="https://github.com/lawrencenjeri4-lgtm/Kenya-ultra"
              target="_blank"
              rel="noopener noreferrer"
              className="button secondary"
            >
              GitHub ↗
            </a>

            <a
              href="https://kenya-ultra-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="button primary"
            >
              Visit Website →
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
