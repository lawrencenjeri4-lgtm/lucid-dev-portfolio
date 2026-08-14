import WhatIBuild from "./components/WhatIBuild";

export default function Home() {
  return (
    <>
      <main className="hero">
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
            <span>that make an impact.</span>
          </h1>

          <p className="hero-description">
            Developer and builder creating software, automation tools,
            communities and digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="button primary">
              Explore My Work →
            </a>

            <a href="/about" className="button secondary">
              About Me
            </a>
          </div>
        </div>
      </main>

      <WhatIBuild />
    </>
  );
}
