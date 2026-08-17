import React from "react";
import { featured, moreWork } from "../data";

function ProjectCard({ project, featured: isFeatured }) {
  return (
    <a
      className={isFeatured ? "shot is-featured" : "shot"}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ "--shot": project.accent }}
      data-reveal
    >
      <div className="shot-frame">
        <img src={project.image} alt={`${project.title} live interface`} />
      </div>
      <div className="shot-copy">
        <p className="shot-meta">
          <span>{project.number || project.kind}</span>
          <span>{project.year || "Live"}</span>
        </p>
        <h3>{project.title}</h3>
        <p>{project.blurb}</p>
        {project.stack && Array.isArray(project.stack) ? (
          <ul className="stack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <span className="shot-stack">{project.stack}</span>
        )}
        <span className="shot-go">
          Open live site <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="section-head" data-reveal>
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Pictures first. Then the live site.</h2>
        </div>
        <p className="section-lede">
          Each card is a real screenshot of the product. The button opens the
          Vercel deploy, not the repo.
        </p>
      </div>

      <div className="shot-grid">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      <div className="more-work" data-reveal>
        <div className="more-head">
          <h3>More live work</h3>
        </div>
        <div className="shot-grid is-compact">
          {moreWork.map((item, index) => (
            <ProjectCard
              key={item.title}
              project={{ ...item, number: `0${index + 5}` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
