import React from "react";
import { profile, stats } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-kicker" data-reveal>
        <span>Portfolio</span>
        <span>01 — 2026</span>
      </p>

      <div className="hero-stage">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">
            {profile.role} · {profile.location}
          </p>
          <h1>
            <span>{profile.firstName}</span>
            <em>{profile.lastName}</em>
          </h1>
          <p className="hero-lead">{profile.headline}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="text-cta" href="#work">
              Selected work
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-cta is-quiet" href={`mailto:${profile.email}`}>
              Write to me
            </a>
          </div>
        </div>

        <figure className="hero-portrait" data-reveal>
          <span className="portrait-index" aria-hidden="true">
            00
          </span>
          <div className="portrait-clip">
            <img
              src={profile.photo}
              alt={`${profile.fullName}, ${profile.role}`}
              width="480"
              height="600"
            />
          </div>
          <figcaption>
            <span>{profile.legalName}</span>
            <span>Available for internships &amp; jobs</span>
          </figcaption>
        </figure>
      </div>

      <ul className="hero-stats" data-reveal>
        {stats.map((item) => (
          <li key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
