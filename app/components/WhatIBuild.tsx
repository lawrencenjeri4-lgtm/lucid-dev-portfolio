const services = [
  {
    number: "01",
    title: "Software",
    description:
      "Building useful applications, tools and digital products designed to solve real problems.",
  },
  {
    number: "02",
    title: "Automation",
    description:
      "Creating bots and automation systems that simplify repetitive tasks and workflows.",
  },
  {
    number: "03",
    title: "Communities",
    description:
      "Building and managing digital communities around technology and software.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="what-i-build">
      <div className="section-heading">
        <p className="eyebrow">WHAT I BUILD</p>

        <h2>
          Ideas turned into
          <br />
          <span>real products.</span>
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <span className="service-number">{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
    }
